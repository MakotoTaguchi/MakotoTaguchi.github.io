'use strict';

// <select id="food">を取得
var s = document.getElementById('food');
// <select>要素の最初の子ノードを取得
var child = s.firstElementChild;
// 子ノードが存在する間、ループを繰り返す
while (child) {
    console.log(child.value);
    child = child.nextElementSibling;
}
