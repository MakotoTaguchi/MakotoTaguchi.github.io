// スクロール途中からヘッダーを出現させるための設定を関数でまとめる
function FixedAnime() {
    var headerH = $('#header').outerHeight(true);
    var scroll = $(window).scrollTop();
    if (scroll >= headerH) { // headerの高さ以上になったら
        $('#header').addClass('fixed'); // fixedというクラス名を付与
    } else { // それ以外は
        $('#header').removeClass('fixed'); // fixedというクラス名を除去
    }
}

// 画面をスクロールしたら動かしたい場合の記述
$(window).scroll(function () {
    FixedAnime(); /* スクロール途中からヘッダーを出現させる関数を呼ぶ */
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    FixedAnime(); /* スクロール途中からヘッダーを出現させる関数を呼ぶ */
});