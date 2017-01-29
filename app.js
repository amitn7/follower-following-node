
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
	next();
});

router.route('/bear')
.post(function(req,res){
	var bear = new Bear();
	if(req.body['name']!=null && req.body['name']!='undefined' && req.body['name']!=''){
		
		bear.name = req.body.name;
		bear.save(function(err){
			if(err){
				res.send(err);
			}else{
				res.json({message:'API created'});
			}
			
		});
	}else if(req.query['name']!=null && req.query['name']!='undefined' && req.query['name']!=''){
		console.log(err);
		bear.name = req.query.name;
		bear.save(function(err){
			if(err){
				res.send(err);
			}else{
				res.json({message:'API created'});
			}
			
		});
	}else {
		
		res.json({message:'API not created'});
	}	
}).get(function(req,res){
	Bear.find(function(err, bears){
		if(err){
			res.send(err);
		}else{
			res.json(bears);
		}
		
	})
});

app.use('/api', router);

app.listen(port);
console.log('Server started at'+port);