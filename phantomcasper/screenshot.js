//Casperjs でスクリーンショットをとる

//Casper オブジェクトを作成 --1 
var casper = require('casper').create();

casper.start();

//ページを開く
casper.open('http://google.co.jp');

//そのあとスクリーンショットを撮影　--4
casper.then(function(){
casper.capture("screenshot.png");
});

//実行
casper.run();

//実際にプログラムが実行されるのはrunの部分。
//startのメソッド以降の部分は「ここからcasperjsで自動処理を開始」という感じのもの
//
//casper の流れ
//casper.start();
//casper.open(URL);
//casper.then(function(){...})
//casper.then(function(){...}) 
//
//casper.run();
