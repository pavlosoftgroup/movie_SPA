var config = require("nconf");
var passport = require('passport');
var AuthLocalStrategy = require('passport-local').Strategy;
// var AuthFacebookStrategy = require('passport-facebook').Strategy;
// var AuthVKStrategy = require('passport-vkontakte').Strategy;
passport.use('local', new AuthLocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallBack: true,
    },
    function (req, username, password, done) {
        db.users.findByUsername(username, function (err, user) {
            if (err) {
                return cb(err);
            }
            if (!user) {
                return cb(null, false);
            }
            if (user.password != password) {
                return cb(null, false);
            }
            return cb(null, user);
        });
    }));

passport.use('locale', new AuthLocalStrategy(

    {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallBack: true,
    },
    function (username, password, done) {
        console.log(login);

        if (login === "admin" && password === "admin") {
            return done(null, {
                name: "admin",
                // photoUrl: "url_to_avatar",
                status: "Active"
            });
        }

        return done(null, false, {
            message: 'Неверный логин или пароль'
        });
    }
));
passport.serializeUser(function (user, done) {
    done(null, JSON.stringify(user));
});


passport.deserializeUser(function (data, done) {
    try {
        done(null, JSON.parse(data));
    } catch (e) {
        done(err)
    }
});

module.exports = function (app) {
};