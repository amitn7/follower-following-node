
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/apis');

var Bear = require('./app/models/modelApi');


var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next){
	console.log('inside  ');
	next();
});

router.get('/', function(req,res){
	res.json({message:'Hello World!!!'});
});


router.route('/bear')
	.post(function(req,res){
		var bear = new Bear();
		if(req.body['name']!=null && req.body['name']!='undefined' && req.body['name']!=''){
			console.log(req.body);
			bear.name = req.body.name;
			bear.save(function(err){
				if(err){
					res.send(err);
				}
				res.json({message:'API created'});
			});
		}else {
			console.log("here"+JSON.stringify(req));
			res.json({message:'API not created'});
		}
		
	}).get(function(req,res){
		Bear.find(function(err, bears){
			if(err){
				res.send(err);
			}
			res.json(bears);
		})
	});


app.use('/api', router);

app.listen(port);
console.log('Server started at'+port);