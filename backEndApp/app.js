var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users');

var User = require('./app/models/userModel');


var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(cors());

app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next) {
    next();
});

router.route('/user')
    .post(function(req, res) {
        var user = new User();
        if (req.body['name'] != null && req.body['name'] != 'undefined' && req.body['name'] != '') {
            console.log('body: ' + JSON.stringify(req.body));
            user.name = req.body.name;
            user.dob = req.body.dob;
            user.save(function(err) {
                if (err) {
                    res.send(err);
                } else {
                    res.json({ message: 'API created' });
                }

            });
        } else if (req.query['name'] != null && req.query['name'] != 'undefined' && req.query['name'] != '') {
            //console.log('body: '+req.query);
            user.name = req.query.name;
            user.save(function(err) {
                if (err) {
                    res.send(err);
                } else {
                    res.json({ message: 'API created' });
                }

            });
        } else {

            res.json({ message: 'API not created' });
        }
    }).get(function(req, res) {
        User.find(function(err, users) {
            if (err) {
                res.send(err);
            } else {
                res.json(users);
            }

        })
    });

app.use('/api', router);

app.use(express.static('public'));
app.listen(port);
console.log('Server started at' + port);