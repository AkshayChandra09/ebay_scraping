var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/count1"; //ebay_db



	MongoClient.connect(url, function(err,db){
		if(err) throw err;
		
		var brands = ["Apple", "HTC", "LG", "Motorola ", "Samsung"];
		
		var count_array = [];
		
		function counting(count_array,callback)
		{ 
			for(var i=0;i<5;i++)
			{
				db.collection("phones").find({Brand: brands[i]}).count(function(err, result) {
					if(err) throw err;
					//console.log(brand+" "+result);
					count_array.push(result);
					callback(count_array);
				});	
			}
		} 

		module.export = counting(count_array,function(data){
				//console.log(data);
				var name;
				name = "Akshay";	
				name.send(name);
			});
			
		

	});


