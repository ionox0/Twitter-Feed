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

T.get('statuses/user_timeline', { user_ID: 'ionox0', count: 10 }, function(err, reply) {

    data = reply;
    console.log(reply);
})

app.get('/', function(req, res){
    res.send(data);
});

app.listen(3000);

exports.data = data;
