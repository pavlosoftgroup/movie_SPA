var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
// var votes = require('routes/vote');

var app = express();
var db;
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/vote/:id', function (req,res) {
    db.collection('vote').find({movieId : req.params.id}).toArray(
        function (err, result) {
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }
            console.log(result);
            res.send(result);
        }
    )
    
})



app.post('/vote', function (req,res) {
    console.log(req.body);

    vote = req.body;
    db.collection('vote').insert(vote, function (err, result) {
        if(err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.send(result);
    })
})

app.put('/vote/:id', function (req,res) {
    console.log(req.body);
    db.collection()
})

app.get('/', function (req, res) {
    res.send('hellow')
})

app.post('/comments', function (req, res) {

    comments = JSON.parse(req.body.comment);
    db.collection('comments').insert(comments, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
    // console.log(result);
        res.send(result);
    })

})

app.get('/comments', function (req, res) {

    db.collection('comments').find().toArray(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }

        res.send(docs);

    })
})
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
// })

app.get('/comments/:id', function (req, res) {

    db.collection('comments').find({movieId : req.params.id}).toArray(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        console.log(docs);

        res.send(docs);

    })

})


mongoClient.connect('mongodb://localhost:27017/comments', function (err, database) {
    if (err) {
        console.log('Unable to connect to Mongo.')
        process.exit(1)
    } else {
        db = database;
        app.listen(3000, function () {
            console.log('Listening on port 3000..')
        })
    }
})