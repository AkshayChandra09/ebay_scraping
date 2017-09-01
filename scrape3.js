var request = require('request'), cheerio = require('cheerio');
var http = require('http');
var fs = require('fs');
const Window = require('window');
const whenDomReady = require('when-dom-ready');
const { document } = new Window();


var base_url = "https://www.ebay.com/b/Cell-Phones-Smartphones/9355/bn_320094?_ipg=25";

var names = [], urls=[], price = [], data = [], images = [], brands = [], json = [];


/* Note: Total 99 pages to scrape. */


//var scrap_data = function(){
	
	for(var page_number=1;page_number<100;page_number++)
	{
		if(page_number==1)
		{
			var url = base_url; 
		}
		
		else if(page_number==2)
		{
			url = base_url + "&_pgn=2";		
		}
		
		else if(page_number>2 && page_number<11)
		{
			url = url.slice(0,-1) + page_number;
		}
		
		else if(page_number>10)
		{
			url = url.slice(0,-2) + page_number;	
		}
		
		request(url, function(err, resp, body){   
			
				var $ = cheerio.load(body);
				
				if(whenDomReady(() => console.log(''), document))
				{
					//console.log("Ready To Scrape!");
					if(!err && resp.statusCode ==200){
						$('.srp-controls__count-heading', '#mainContent').each(function(){  
							var pg = $(this).text();
							console.log(pg+" \n");
						});
						
						
						var k=0;
						$('.s-item__title', '#mainContent').each(function(){  
							var name = $(this).text(); 
							name = name.trim();	
							names.push(name);
							k++;
						});
						
						$('.s-item__price','#mainContent').each(function(){   
							var price1 = $(this).text();
							var price2 = price1.trim();
							price.push(price2);		
						});
						
						$('.s-item__image-wrapper','#mainContent').each(function(){  
							$('.s-item__image-img').filter(function(){
								var img1 = $(this).attr("src"); 
								images.push(img1);
							});	
						});			
						
						$('.s-item__link', '#mainContent').each(function(){  
							var link = $(this).attr("href"); 
							urls.push(link);	
						});
						
						$('.s-item__dynamic', '#mainContent').each(function(){  
							var brand = $(this).text(); 
							brand = brand.substr(7);  //string.substr(0,5); choose from 0th to 5th word trim other chars
							                          //string.substr(7); choose from 7th to last word trim first chars
							brands.push(brand);	
						});
						
						for(var i=0; i<k; i++)    
						{
						   var jsonVar = JSON.stringify({Product_Name: new String(names[i]), Price: new String(price[i]),Image: new String(images[i]),Link: new String(urls[i]), Brand: new String(brands[i])});//Link: new String(urls[i])  
							json.push(jsonVar);		
						}
		
						//console.log("Total Names found in this page: "+ k + "\n");
					}
				}
				
				
				fs.writeFile('output.json',  "[" + json + "]" , function (err){
							console.log('File Updated..');
				});		
		});
		
	}
//}

//module.exports = scrap_data;