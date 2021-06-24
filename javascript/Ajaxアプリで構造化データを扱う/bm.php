<?php
// 出力文字コード、内部文字コードを宣言
mb_http_output('UTF-8');
mb_internal_encoding('UTF-8');
// 応答のコンテンツタイプを宣言
header('Content-Type: application/json;charset=UTF-8');

// はてブAPIへの問合せURLを組み立て
$url = 'http://b.hatena.ne.jp/entry/jsonlite/?url='.$_GET['url'];
// 問い合わせ結果をそのまま出力
print(file_get_contents($url, false, stream_context_create(['http' =>['header' => 'User-Agent: MySample']])));