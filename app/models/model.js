var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var devSchema = new Schema({
  username:{
    type:String,
    index:true
  },
  bio:{
  type:String
  },
  password:{
    type:String
  },
  fname:{
    type:String
  },
  lname:{
    type:String
  },
  position:{
    type:String
  },
  contacts:[{
    email:{
      type:String
    },
    phonenumber:{
      type:Number
    }
  }],
  links : {
      linkedin:String,
      gitHub  :String,
      gitLab  :String
  },
  projects  :{
       title : String,
       link  : String
  }

});

module.exports = mongoose.model('User', devSchema)
