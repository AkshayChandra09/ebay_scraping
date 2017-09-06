//var scrap_data = require('./scrape3.js');
//var save_data = require('./insert_results.js');
//var brand_count = require('./count.js');
//var waitOn = require('wait-on');

/*
//working module
scrap_data();

var opts = {
  resources: [
    'output.json'
  ],
  delay: 10000 //in ms  //change logic
};

waitOn(opts, function (err) {
  if (err) { return handleError(err); }
  // once here, all resources are available
	console.log('Ready to go..');
	console.log('Saving The Data Now..');
	save_data();
});
*/

var myModule = require('./count.js');
var name = myModule.name;
console.log(name);




