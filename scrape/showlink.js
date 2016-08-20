 var client = require('cheerio-httpcli');
  /*ここでmoduleの利用モジュールの機能を変数に入れる*/ 
 var url ="http://www.aozora.gr.jp/index_pages/person81.html";
 var param = {};


client.fetch(url,param,function(err,$,res){
				if(err) {	console.log("error") ; return;}
/*リンクを抽出して表示*/

				$("a").each(function(idx){
								var text = $(this).text();
								var href = $(this).attr('href');
								console.log(text+":"+href);
				});
});


