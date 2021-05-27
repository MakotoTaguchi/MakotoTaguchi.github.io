'use strict';

// <select id="food">を取得
var s = document.getElementById('food');
// <select>要素の最初の子ノードを取得
var child = s.firstChild;
// 子ノードが存在する間、ループを繰り返す
while (child) {
    if (child.nodeType === 1) {
        console.log(child.value);
    }
    //　次の子ノード（弟ノード）を取得
    child = child.nextSibling;
}
