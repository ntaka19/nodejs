var RSS = "http://rss.weather.yahoo.co.jp/rss/days/4410.xml";

//モジュールを読み込む
var client = require('cheerio-httpcli');

//download RSS
client.fetch(RSS,{}, function(err, $, res){
	if(err) {console.log("error"); return;}

//必要な項目を抽出して表示---1 
	$("item > title").each(function(idx){
		var title = $(this).text();
		console.log(title);
	});
});

//RSSの正確な場所を指定する必要がなく、[item>tite] だけを手軽に取り出すことができる。
