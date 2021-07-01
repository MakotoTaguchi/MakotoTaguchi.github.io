'use strict';

//logoの表示
$(window).on('load', function () {
    //ローディング画面を1.5秒(1500ms)待機してからフェイドアウト
    $("#splash").delay(1500).fadeOut('slow');
    //ロゴを1.2秒(1200ms)待機してからフェイドアウト
    $("#splash_logo").delay(1200).fadeOut('slow');
});