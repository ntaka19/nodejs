mecab-mod.js はmecabをjavascriptで呼び出せるようにし、モジュール化したもの。
tasizan はモジュール化の例。

マルコフ連鎖の簡単な仕組み
1. 文章を単語に分解(形態素解析）
2. 単語の前後の結びつきを辞書に登録
3. 辞書を利用してランダムに作文

eg. 彼のネコは可愛い

1. 彼、の、ネコ、は、可愛い

 
2. 	彼｜の｜ネコ
		の｜ネコ｜は
		ネコ｜は｜可愛い
		
		単語の前後に注目して、３要素ごとに辞書に登録していく。
		このような辞書をもとにして、同じ組み合わせを持つ単語と単語をランダムに組み合わせる。

markov.jsでは辞書の生成にjavascriptのObjectを利用している。
つまり単語の組み合わせをメモリ上に配置している。大きな辞書だとメモリ不足。

@ は文頭を表す。		