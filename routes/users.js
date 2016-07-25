var express = require('express');
var router  = express.Router();
var app= express();
var User = require('../app/models/model');
var mongoose = require('mongoose');

//connecting database
//mongoose.connect('mongodb://dessHub:1ncorrect.@ds023475.mlab.com:23475/dess');
mongoose.connect('mongodb://localhost:27017/profile');


// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

//route inserting data into database.
var usersRoute = router.route('/users');
usersRoute.put(function(req, res) {
	var user = new User();
  var id='5795c8251afa19af58059cae';
	user.password = req.body.password;
  user.fname = req.body.fname;
  user.sname = req.body.sname;
  user.position = req.body.position;
  user.bio = req.body.bio;
  user.projects.title = req.body.title;
  user.projects.link = req.body.link;
  user.contacts.email = req.body.email;
  user.contacts.mobile = req.body.mobile;
  user.links.linkedin = req.body.linkedin;
  user.links.gitHub = req.body.gitHub;
  user.links.gitLab = req.body.gitLab;
	User.findById(id, function(err, users){
    users.update({
      bio:bio


    },function(err,id){
		if(err){
		    res.send(err);
}
else{
		res.json(users);
  }

});
	});
});

//route displaying on index page.
router.get('/', function(req, res) {
  var user = new User();
  var bio="";
  var id='5795c8251afa19af58059cae';
    User.findById(id,function(err, users){
          res.render('profile',{
            fname:users.fname,
            lname:users.lname,
            position:users.position,
            link:users.projects.link,
            title:users.projects.title,
            gitHub:users.links.gitHub,
            gitLab:users.links.gitLab,
            linkedin:users.links.linkedin,
            bio : users.bio,
            email:users.contacts.email,
            phonenumber:users.contacts.phonenumber
    })
    });
});

//route displaying on profile
router.get('/demo', function(req, res) {
  var user = new User();
  var bio="";
  var id='5795c8251afa19af58059cae';
    User.findById(id,function(err, users){
          res.render('demo',{
            fname:users.fname,
            lname:users.lname,
            position:users.position,
            link:users.projects.link,
            title:users.projects.title,
            gitHub:users.links.gitHub,
            gitLab:users.links.gitLab,
            linkedin:users.links.linkedin,
            bio : users.bio,
            email:users.contacts.email,
            phonenumber:users.contacts.phonenumber
    })
    });
});

//Updating documents


// Create endpoint for DELETE
usersRoute.delete(function(req, res) {
  // Use the User model to find a specific user and remove it
  User.findByIdAndRemove(req.params._id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'User removed from the collection!' });
  });
});

module.exports = router;
