require('dotenv').config();
var Twit = require('twit');

var T = new Twit({
  consumer_key:  process.env.CONSUMER_KEY,  
  consumer_secret: process.env.CONSUMER_SECRET ,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

//
//  tweet 'hello world!'
//
T.post('statuses/update', { status: 'test1' }, function(err, data, response) {
  console.log(data);
})