var exec = require('child?process').exec;
var iconv = require('iconv-lite');
var fs = require ('fs');
var platform = require('os').platform(); //OS　判定

var srcText = "探し続けなさい";

var TMP_FILE = __dirname + '/__mecab_tmpfile';

//Mecabのコマンドライン
var MECAB = 'mecab';
var ENCODING = (platform.substr(0,3) == 'win') 
						? 'SHIFT_JIS' : 'UTF-8';

function parse(text,callback){
	if(ENCODING != 'UTF-8'){
		var buf = iconv.encode(text,ENCODING);
		fs.writeFileSync(TMP_FILE,buf,"binary");
	}else {
		fs.writeFileSync(TMP_FILE,text,"UTF-8");
	}
}

//コマンド組み立て

var cmd = [
MECAB, '""' + TMP_FILE + '""'
].join("  ");

//コマンドを実行
var opt ={encoding: 'UTF-8'};
if(ENCODING != 'UTF-8') opt.encoding = 'binary';
exec(cmd, opt,function(err,stdout,stderr){
	if(err) return callback(err);
	var inp;
})
