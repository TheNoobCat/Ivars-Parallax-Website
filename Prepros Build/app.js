var express = require('express');
var app = express();
var http = require('http').Server(app);
var crypto = require('crypto');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');
var cors = require('cors')
//the end of the variables

app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static(__dirname + "/public"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// MongoDB setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://ivar:sony2010@ds062178.mongolab.com:62178/db1');

/*var postSchema = mongoose.Schema({
	 content: String,
	 postCookie: String,
	 postID: String,
	 date: { type: Date, default: Date.now }
});

var posts = mongoose.model('post', postSchema);
*/

app.post('/request', function (req, res) {
  var fname = req.body.fname;
  console.log(fname);
  res.json({message: 'this is a response'});
});

http.listen(3000);
