'use strict';

// ページロード時に実行されるイベントハンドラーを登録
window.onload = function(){
    // ボタン（btn）クリック時に実行されるイベントハンドラーを登録
    document.getElementById('btn').onclick = function () {
        window.alert('ボタンがクリックされました。');
    };
};
