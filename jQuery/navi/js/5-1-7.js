// スクロールをするとハンバーガーメニューに変化するための設定を関数でまとめる
function FixedAnime() {
    // ヘッダーの高さを取得
    var headerH = $('#header').outerHeight(true);
    var scroll = $(window).scrollTop();
    if (scroll >= headerH) { // ヘッダーの高さ以上までスクロールしたら
        // .openbtnにfadeDownクラス名を付与して
        $('.openbtn').addClass('fadeDown');
        $('#header').addClass('dnone'); // #headerにdnoneというクラス名を付与
    } else { // それ以外は
        $('openbtn').removeClass('fadeDown'); // fadeDownというクラス名を除き
        $('#header').removeClass('dnone'); // dnoneというクラス名を除く
    }
}

// 画面をスクロールしたら動かしたい場合の記述
$(window).scroll(function () {
    FixedAnime(); // スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    FixedAnime(); // スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
});

// ボタンクリックした際のアニメーションの設定
$(".openbtn").click(function () { // ボタンがクリックされたら
    $(this).toggleClass('active'); // ボタン自身にactiveクラスを付与し
    $("#header").toggleClass('panelactive'); // ヘッダーにpanelactiveクラスを付与
});

$("#g-navi li a").click(function () { // ナビゲーションのリンクがクリックされたら
    $("#openbtn").removeClass('active'); // ボタンのactiveクラスを除去し
    $("#header").removeClass('panelactive'); // ヘッダーのpanelactiveクラスも除去
});

// リンク先のidまでスムーズスクロール
$('#g-navi li a').click(function () {
     var elmHash = $(this).attr('href');
     var pos = $(elmHash).offset().top - 0;
     $('body,html').animate({ scrollTop: pos }, 1000);
});