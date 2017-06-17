var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var connect = require('connect');
var flash = require("connect-flash");
var cookieParser = require('cookie-parser');
var db = require('./db');
require('./passport');


// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.



// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
// passport.serializeUser(function(user, cb) {
//     cb(null, user.id);
// });
//
// passport.deserializeUser(function(id, cb) {
//     db.users.findById(id, function (err, user) {
//         if (err) { return cb(err); }
//         cb(null, user);
//     });
// });


// Create a new Express application.
var app = express();
app.use(flash());

// Configure view engine to render EJS templates.
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({extended: true}));
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 60000}
}));
app.use(cookieParser());
// app.use(cookieSession({
//     name: 'session',
//     keys: ['keyboard cat'],
//
//     // Cookie Options
//     maxAge: 24 * 60 * 60 * 1000 // 24 hours
// }))
// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());
var votesController = require('./controllers/vote');
var userController = require('./controllers/user');
var commentsController = require('./controllers/comments');


// require('./passport')(app);
// config.argv()
//     .env()
//     .file({file: 'config.json'});
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// var sessionOptions = {
//     saveUninitialized: true, // saved new sessions
//     resave: false, // do not automatically write to the session store
//     // store: sessionStore,
//     secret: config.session.secret,
//     cookie : { httpOnly: true, maxAge: 2419200000 } // configure when sessions expires
// };
// if ('production' === app.get('env')) {
//     var MemcachedStore = require('connect-memcached')(express);
//     sessionOptions.store = new MemcachedStore(
//         config.get("memcached")
//     );

// // app.use(app.router);
// if ('development' === app.get('env')) {
//     app.use(errorHandler());
// }
// app.set('port', config.get("app:port") || 3000);


// passport.use('local', new AuthLocalStrategy(
//     function (login, password, done) {
//         console.log(login);
//
//         if (login === "admin" && password === "admin") {
//             return done(null, {
//
//                 name: "admin",
//                 // photoUrl: "url_to_avatar",
//                 status: "Active"
//             });
//         }
//
//         return done(null, false, {
//             message: 'Неверный логин или пароль'
//         });
//     }
// ));
// passport.serializeUser(function (user, done) {
//     done(null, JSON.stringify(user));
// });
//
//
// passport.deserializeUser(function (data, done) {
//     try {
//         done(null, JSON.parse(data));
//     } catch (e) {
//         done(err)
//     }
// });
//
//
passport.use('basic', new Strategy(
    function (userid, password, done) {
        User.findOne({username: userid}, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            if (!user.verifyPassword(password)) {
                return done(null, false);
            }
            return done(null, user);
        });
    }
));

////////////////
app.get('/auth', function (req, res) {
    console.log(req.session);

    if (req.isAuthenticated()) {
        res.redirect('/home');
        return;
    }
    res.status(400);
    res.send('/');

    // res.send();

    // res.render('auth', {
    //     error: req.flash('error')
    // });

});

// app.get('/users', function (req, res) {
//     db.collection('user').find().toArray(function (err, result) {
//             if (err) {
//                 console.log(err);
//                     res.sendStatus(500)
//             }
//             res.send(result)
//
//         }
//     )
// })

app.get('/private',
    passport.authenticate('local', {session: false}),
    function (req, res) {
        res.json(req.user);
    });

app.get('/sign-out', function (req, res) {
    req.logout();
    res.redirect('/');
});
app.post('/auth', function (req, res, next) {
    passport.authenticate('locale', function (err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect('/home')
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            arenderFunction(req, res);
        });
    })
    (req, res, next);
});
app.get('/logged', function (req, res) {
    if (req.cookies.cookie) {
        res.render('logged');
    } else {
        console.log()
        res.redirect('/home');

    }
});

// app.post('/auth', function (request, res) {
//     if ((request.body.login === 'Thor') && (request.body.password === '111')) {
//         // request.session.authorized = true;
//         // request.session.username = request.body.login;
//         passport.serializeUser(function (user, done) {
//             done(null, user.id);
//         });
//
//         console.log(request.session);
//         res.send('tor')
//     }
// res.send('sfdf')


// })
app.get('/logout', function (req, res) {
    console.log(req.session.username);
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            console.log(user);
            console.log(done);
            res.send('logout')


        });
    });

})

// app.post('/auth', passport.authenticate('local', {
//         successRedirect: '/',
//         failureRedirect: 'login',
//         failureFlash: true
//     })
// );


///////////////////


app.post('/user-registrator', userController.create);

// app.get('/user', userController);

app.get('/vote/:id', votesController.all);

app.post('/vote', votesController.post);

app.put('/vote/:id', function (req, res) {
    console.log(req.body);
    db.collection()
})

app.get('/', function (req, res) {
    res.send('hellow')
})

app.post('/comments', commentsController.create);
app.get('/comments/:id', commentsController.return);

// app.get('/comments', function (req, res) {
//
//     db.collection('comments').find().toArray(function (err, docs) {
//         if (err) {
//             console.log(err);
//             return res.sendStatus(500);
//         }
//
//         res.send(docs);
//
//     })
// })
// app.delete('/comments/:id', function (req, res) {
//     db.collection('comments').deleteOne(
//         { _id: ObjectID(req.params.id)},
//         function (err, result) {
//             if (err) {
//                 console.log(err);
//                 res.sendStatus(500)
//             }
//             res.sendStatus(200)
//         }
//     )
// })app.listen(3000);


db.connect('mongodb://localhost:27017/comments', function (err, database) {
    if (err) {
        return console.log(err);
    }
    app.listen(3000, function () {
        // app.listen(app.get('port'), function () {
        if ('development' === app.get('env')) {
            console.log('Express server listening on port 3000');
        }
        // });
        // console.log('API app started');
    });
})