// require our dependencies
var express        = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser     = require('body-parser');
var app            = express();
var port           = process.env.PORT || 8080;

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/count1"; 

// use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

// use body parser
app.use(bodyParser.urlencoded({ extended: true }));

// route our app
var router = require('./app/routes');
app.use('/', router);


// set static files (css and images, etc) location
app.use(express.static(__dirname + '/public'));


app.post('/myaction', function(req, res){
	
	var brand = req.body.name;
	
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		db.collection("phones").find({Brand: brand}).toArray(function(err, result) {
			if (err) throw err;		
			//console.log(result);
			var result = JSON.stringify(result);
			//res.send(result);
			res.render('pages/myaction', {result: result});
		});  
	});
});

// start the server
app.listen(port, function() {
  console.log('app started');
});

