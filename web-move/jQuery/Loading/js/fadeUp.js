'use strict';

// 動きのきっかけの基点となるアニメーションの名前を定義
function fadeAnime() {

    // ふわっ
    $('.fadeUpTrigger').each(function () { // fadeUpTriggerというクラス名が
        var elemPos = $(this).offset().top - 50; // 上の 50px 要素より、
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp'); // 画面内に入ったらfadeUpというクラス名を追記
        } else {
            $(this).removeClass('fadeUp'); // 画面外に出たらfadeUpというクラス名を追記
        }
    });
    // ここまで 動きのきっかけ指定
}

// 画面が読み込まれた後に動く記述
$(window).on('load', function () {
    fadeAnime();  /* アニメーション用の関数を呼ぶ */
}); // ここまで画面が読み込まれた後に動く記述

// 画面がスクロールされたら動く記述
$(window).scroll(function () {
    fadeAnime(); /* アニメーション用の関数を呼ぶ */
});
    // ここまで画面がスクロールされたら動く記述