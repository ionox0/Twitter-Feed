var Twit = require('twit');
var express = require('express');
var app = express();

var T = new Twit({
    consumer_key:         'Ka2RatRuezucABYikGuwpw'
  , consumer_secret:      'NBMchYhoblhEmob8QGQY1Mu7DcuCIMkDD8fnNwBfEU'
  , access_token:         '239633194-lFj38P7kooe1H7k1IErmKxdv6RjTm0bxJzyKGgJn'
  , access_token_secret:  'pOb1TPOAwzHIDgVz3eQnGOwJZTEvlg0cm1foikMqFBrwQ'
})

var data;

T.get('statuses/user_timeline', { user_ID: 'rssnest', count: 10 }, function(err, reply) {
    for (var i = 0; i < 10; i++){
      try {
        data += reply[i]['text'] + '/n';
        console.log(data);
      }
      catch (err){
        console.log("Not enough tweets in history");
      }
    }
})

app.get('/', function(req, res){
    res.send(data);
});

app.listen(3000);

exports.data = data;
