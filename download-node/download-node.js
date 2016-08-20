var url = "http://kujirahand.com/";

/*保存先のパスを指定*/
var savepath = "test.html";

/*利用モジュールの取り込み*/
/*httpプロトコルとファイル関連の機能を持つfs*/
var http = require('http');
var fs = require('fs');

/*出力先を指定*/
var outfile = fs.createWriteStream(savepath);

/*非同期でurlからファイルをダウンロード*/
http.get(url,function(res){
		res.pipe(outfile);
		res.on('end',function(){
				outfile.close();
				console.log("ok");
		});
});

/*時間のかかる処理は非同期で行う。
 * 処理が完了した際にコールバック関数で通知
 * http.getはサーバーにリクエストを出しただけで処理を戻す
 * 16行ダウンロードしたファイルを保存するように指定。
 * ダウンロードが完了するとend 17行（コールバック）
 * */


