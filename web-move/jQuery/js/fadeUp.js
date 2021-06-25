'use strict';

function fadeAnime() {
    // 動きのきっかけの起点となるクラス名が画面内に入ったら動かしたいクラス名が追加される記述を追記

    $('.fadeUpTrigger').each(function () { // fadeTriggerというクラス名が
        var elemPos = $(this).offset().top - 50; // 上の50pxより、
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp'); // 画面内に入ったらfadeUpというクラス名を追記
        } else {
            $(this).removeClass('fadeUp'); // 画面外に出たらfadeUpというクラス名を追記
        }
    });
    // ここまで 動きのきっかけ指定

} //ここまで画面が読み込まれた後に動く記述

// 画面が読み込まれた後に動く記述
$(window).on('load', function () {
    fadeAnime();  /* アニメーション用の関数を呼ぶ */
}); // ここまで画面が読み込まれた後に動く記述

// 画面がスクロールされたら動く記述
$(window).scroll(function () {
    fadeAnime(); /* アニメーション用の関数を呼ぶ */
});
    // ここまで画面がスクロールされたら動く記述