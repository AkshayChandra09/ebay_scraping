var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/count1"; //ebay_db


var brand_count = function(){
	
	MongoClient.connect(url, function(err,db){
		if(err) throw err;
		
		var brands = ["Apple", "HTC", "LG", "Motorola ", "Samsung"];
		var count_array = [];

		var apple = db.collection("phones").find({Brand: "Apple"}).count().then(function(err, result) {
			if (err) throw err;
				console.log("Apple: "+result);
				return result;	
		});	
		
		
		
		db.collection("phones").find({Brand: "HTC"}).count(function(err, result) {
			if (err) throw err;
				console.log("HTC: "+result);
				count_array.push(3);	
		});	

		
		db.collection("phones").find({Brand: "LG"}).count(function(err, result) {
			if (err) throw err;
				console.log("LG: "+result);
				count_array.push(4);	
		});	

		
		db.collection("phones").find({Brand: "Motorola"}).count(function(err, result) {
			if (err) throw err;
				console.log("Motorola: "+result);
				count_array.push(5);	
		});	

		db.collection("phones").find({Brand: "Samsung"}).count(function(err, result) {
			if (err) throw err;
				console.log("Samsung: "+result);
				count_array.push(6);	
		});	
		
		console.log("Count Array is: ");
		console.log(count_array);
		
		
	});
}

module.exports = brand_count;