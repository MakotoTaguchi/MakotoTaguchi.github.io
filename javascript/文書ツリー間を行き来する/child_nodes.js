'use strict';

// <select id="food">を取得
var s = document.getElementById('food');
// <select>要素配下の子ノードを取得
var opts = s.childNodes;
// 子ノードを順に取得
for (var i = 0, len = opts.length; i < len; i++) {
    var opt = opts.item(i);
    // 子ノードが要素ノードである場合にのみ、その値をログ表示
    if (opt.nodeType == 1) {
        console.log(opt.value);
    }
}
