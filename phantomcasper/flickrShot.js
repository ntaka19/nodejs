//Flickrで検索し、スクリーンショットをとるfor casperJs
//casperjsのオブジェクトを作成
var casper = require('casper').create();

casper.start();

casper.viewport(1024,800);

casper.open('https://www.flickr.com/');

//検索フォームに「ネコ」を設定
casper.then(function(){
	this.fill("form[role='search']",{q:"ネコ"},true);
});

casper.then(function(){
	this.capture('flickr-cat.png',{top:0,left:0,width:1024,height: 800
	});
});

casper.run();
