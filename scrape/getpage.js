var client = require('cheerio-httpcli');
/*ここでmoduleの利用モジュールの機能を変数に入れる*/


var url ="http://www.aozora.gr.jp/index_pages/person81.html";
var param = {};
client.fetch(url, param,function(err, $, res){
				if(err){ console.log("Error",err); return;}
				
				/*ダウンロードした結果を画面に表示*/
				var body = $.html();
				console.log(body);
});

/*fetch method 一発でダウンロードからページ解析までしてる
 *コールバック関数function はエラー情報err, 本文$,サーバーからのレスポンス情報resという３つの情報が与えられる。
 * */
