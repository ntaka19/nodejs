//モジュールに取り込み
var client = require('cheerio-httpcli');
var request = require('request');
var fs = require('fs');
var URL = require('url');

//ダウンロード先のディレクトリを作る。
var savedir = __dirname + "/img";
if (!fs.existsSync(savedir)){
  fs.mkdirSync(savedir);
}
//HTMLファイルの指定
var url = "http://ja.wikipedia.org/wiki/イヌ";
var param = {};
//HTMLファイルの取得
client.fetch(url, param,functoin(err,$,res){
  if(err){ console.log("error"); return;}
//リンク抽出して表示
  $("img").each(function(idx){
    var src = $(this).attr('src');
//相対パスを絶対パスに変更
    src = URL.resolve(url, src);
//保存用のファイル名を作成
    var fname = URL.parse(src).pathname;
    fname = savedir + "/" + fname.replace(/[^a-zA-Z0-9]+/g, '_');
    //ダウンロード
    request(src).pipe(fs.createWriteStream(fname));
  })

})


