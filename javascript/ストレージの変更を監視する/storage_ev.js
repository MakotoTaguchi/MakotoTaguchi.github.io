'use strict';

window.addEventListener('storage', function (e) {
    console.log('変更されたキー:' + e.key);
    console.log('変更前のキー：' + e.oldValue);
    console.log('変更後のキー：' + e.newValue);
    console.log('発生元ページ：' + e.url);
}, false);
