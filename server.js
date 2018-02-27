var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var passport = require('passport');
var authController = require('./auth');
var app = express();
var dotenv = require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());

var router = express.Router();
router.route('/post')
    .post(function (req, res) {
            var myHeaders = req.headers;
            var q = req.query.q;
            if (q === undefined){
                q = "no query params";
            }

            if (Object.keys(req.headers).length === 0){
                myHeaders = "no Headers";
            }
            console.log(req.body);
            res = res.status(200);
            if (req.get('Content-Type')) {
                console.log("Content-Type: " + req.get('Content-Type'));
                res = res.type(req.get('Content-Type'));
            }
            res.json({message:'using post', headers: myHeaders, key: process.env.UNIQUE_KEY, Query: q});
        }
    );
router.route('/put')
    .put(function (req, res) {
            var myHeaders = req.headers;
            var q = req.query.q;
            if (q === undefined){
                q = "no query params";
            }

            if (Object.keys(req.headers).length === 0){
                myHeaders = "no Headers";
            }
            console.log(req.body);
            res = res.status(200);
            if (req.get('Content-Type')) {
                console.log("Content-Type: " + req.get('Content-Type'));
                res = res.type(req.get('Content-Type'));
            }
            res.json({message:'using put', headers: myHeaders, key: process.env.UNIQUE_KEY, Query: q});
        }
    );
router.route('/delete')
    .delete(function (req, res) {
            var myHeaders = req.headers;
            var q = req.query.q;
            if (q === undefined){
                q = "no query params";
            }

            if (Object.keys(req.headers).length === 0){
                myHeaders = "no Headers";
            }
            console.log(req.body);
            res = res.status(200);
            if (req.get('Content-Type')) {
                console.log("Content-Type: " + req.get('Content-Type'));
                res = res.type(req.get('Content-Type'));
            }
            res.json({message:'using delete', headers: myHeaders, key: process.env.UNIQUE_KEY, Query: q});
        }
    );
router.route('/get')
    .get(function (req, res) {
            var myHeaders = req.headers;
            var q = req.query.q;
            if (q === undefined){
                q = "no query params";
            }

            if (Object.keys(req.headers).length === 0){
                myHeaders = "no Headers";
            }
            console.log(req.body);
            res = res.status(200);
            if (req.get('Content-Type')) {
                console.log("Content-Type: " + req.get('Content-Type'));
                res = res.type(req.get('Content-Type'));
            }
            res.json({message:'using gets', headers: myHeaders, key: process.env.UNIQUE_KEY, Query: q});
        }
    );
app.use('/', router);
app.listen(process.env.PORT ||8080);
module.exports = app;