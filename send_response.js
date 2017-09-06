var http = require('http');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/count1"; //ebay_db
var jsonfile = require('jsonfile');

http.createServer( function (request, response) {  
   
   MongoClient.connect(url, function(err,db){
		if(err) throw err;
		
		db.collection("phones").find({}).toArray(function(err,result){
			if(err){
				console.log(err);
				response.writeHead(404, {'Content-Type': 'text/html'});
			}else {				
				response.writeHead(200, {'Content-Type': 'text/html'});
				
				//console.log(result.Brand);
				for(var i=0;i<result.length;i++)
				{
					response.write("<br>");
					response.write("Product_Name: "+result[i].Product_Name + "<br>" + "Price: "+result[i].Price + "<br>" + "Brand: "+result[i].Brand + "<br>" + "Product Link: "+result[i].Link+ "<br>" + "Image Link: "+result[i].Image);
					response.write("<br><br>");	
				}
				 	
		    
			} 
			response.end();
		});
	});
  
}).listen(8081);


console.log('Server running at http://127.0.0.1:8081/');