'use strict';

var count = 0;
var result = document.getElementById('result');
// [カウントアップ]ボタンをクリックした時に履歴を追加
document.getElementById('btn').addEventListener('click', function () {
    result.textContent = ++count;
    history.pushState(count, null, '/js/chap07/count/' + count);
});

// [戻る]ボタンでページの状態を前に戻す
window.addEventListener('popstate', function (e) {
    count = e.state;
    result.textContent = count;
})
