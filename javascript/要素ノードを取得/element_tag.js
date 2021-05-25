'use strict';

// ページ内のすべてのアンカータグを取得
//var list = document.getElementsByTagName('a');
var list = document.getElementsByTagName('a');
// リスト(HTMLCollectionオブジェクト)から順にアンカータグを取り出し、そのhref属性をログに出力
/*for (var i = 0, len = list.length; i < len; i++) {
    console.log(list.item(i).href);
}*/
for (var i = 0, len = list.length; i < len; i++) {
    console.log(list.item(i).href);
}