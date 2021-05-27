'use strict';

// ページロード時に実行されるイベントリスナーを登録
document.addEventListener('DOMContentLoaded', function () {
    // ボタン（btn）クリック時に実行されるイベントリスナーを登録
    document.getElementById('btn').addEventListener('click', function () {
        window.alert('ボタンがクリックされました。');
    }, false);
}, false);
