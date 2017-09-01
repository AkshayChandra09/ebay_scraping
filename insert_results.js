var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ebay_db"; //ebay_db
var jsonfile = require('jsonfile');


var save_data = function(){
	
	MongoClient.connect(url, function(err,db){
		if(err) throw err;
		
		var content = fs.readFileSync("output.json");
		var json = JSON.parse(content);
		
		db.collection("phones").insertMany(json, function(err, doc) {
			   if (err) throw err;
			   console.log("Inserted");
				 console.log(json);
		});
		
	});
}

module.exports = save_data;