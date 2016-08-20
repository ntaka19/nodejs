
//為替APIのURL
var API = "http://api.aoikujira.com/kawase/get.php?code=USD&format=json";

var request = require('request');
var fs = require('fs');

request(API,function(err,response,body){
	//HTTP エラーチェック
	if(err || response.statusCode != 200){
		console.log("ERROR",err); return;
	}

	//JSONをJSのオブジェクトに変換
	var r = JSON.parse(body);
	var jpy = r["JPY"];

	//為替レートをファイルへ保存(ファイル名は日付を入れる);
	var t = new Date();
	var fname = "USD_JPY_" + 
		t.getFullYear()+ "-" + (t.getMonth()+1) + 
		"-" + t.getDay() + ".txt";

	var text = "1usd= " + jpy + "jpy";
	console.log(text);
	fs.writeFile(fname,text);
});

//このプログラムを実行すると、例えば、USD_JPY_2015-4-2.txt というテキストファイルに「1usd = 119.62..jpy」などと書かれる。
