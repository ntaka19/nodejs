//websiteからタイトルを表示する
var TARGET_URL = "http://kujirahand.com";

//CasperJsのオブジェクトを作成　--1
var casper = require('casper').create();

//指定のウェブサイトを開く --2 
casper.start(TARGET_URL,function(){
	//タイトルを表示する--3
	this.echo(casper.getTitle()); 

});

//処理を実行する--4
casper.run();

/*
 *objective 
 *get the title of the website and show it as a table. 
 *
 *1. create() メソッドで作成
 *2. 一番初めに表示するページをstart メソッドで指定している。 
 *3. ページを開いた時に実行する処理
 *
 *
 * コマンド実行時に--verbose や　--log-level=debug
 * */
