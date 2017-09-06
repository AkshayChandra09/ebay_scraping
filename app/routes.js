// require express
var express = require('express');
var path    = require('path');


// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res) {
  res.render('pages/home');
});

// route for our about page
router.get('/about', function(req, res) {
  var users = [
    { name: 'Holly', email: 'holly@scotch.io', avatar: ''},
    { name: 'Chris', email: 'chris@scotch.io', avatar: ''},
    { name: 'Ado', email: 'Ado@scotch.io', avatar: ''},
    { name: 'Samantha', email: 'Samantha@scotch.io', avatar: ''}
  ];

  res.render('pages/about', { users: users });
});

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.post('/contact', function(req, res) {
  res.send('Thanks for contacting us, ' + req.body.name + '! We will respond shortly!');
});

router.get('/statistics', function(req, res) {
  res.render('pages/stats');
});


/*app.get('/test', function(req, res){

  placeFinder(function(err, data){
    if(err){
      return res.send(500);
    }    
    res.locals.place = data;
    console.log(data);
    res.render('test', {data: data});
  });
});
*/
