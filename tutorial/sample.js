var request = require('request');

var targetUrl = "http://blog.honjala.net/about";

request(targetUrl, function (err,rs,body){
				if(err){
								console.log(err);
				}
				console.log(body);
}
);


