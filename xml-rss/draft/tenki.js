//xml2jsモジュールを利用している。
var RSS = "http://rss.weather.yahoo.co.jp/rss/days/4410.xml";

//モジュールの取り組み
var parseString = require('xml2js').parseString;
var request = require('request');

//download RSS --1  
request(RSS,function(err, response,body){
	if(!err && response.statusCode==200){
	analyzeRSS(body);
	}
});

//analyze RSS --2 
function analyzeRSS(xml){
//xml をJSのオブジェクトへ変換
	parseString(xml, function(err,obj){
	if (err){console.log(err); return;}

	//天気を表示 --3
//	console.log(JSON.strinGIFy(obj)); 
	//どんな形のjavascriptのオブジェクトになっているか確認するには、strinGIFyでJSONに変換したものを用いる。
	//
	var items = obj.rss.channel[0].item;
	for ( var i in items ) {
		var item = items[i];
		console.log(item.title[0]);
		}
	})
}


//1-RSSをウェブから取得。引数として得られるresponseのstatuscodeを見て200であれば正しくデータが取得できたことになる。
//2-正しくデータが取得できれば、analyzeRSSを呼ぶ。ここでは、xml2jsモジュールのparseString()メソッドを使うことにより、xmlデータ(つまりyahoo天気予報のRSS)をjavascriptのオブジェクトに変換する
//
//3-変換した天気予報の情報をfor構文で順次コンソールに表示する
