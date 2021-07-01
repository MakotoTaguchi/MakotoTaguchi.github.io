'use strict';

//SVGアニメーションの描画
var stroke;
stroke = new Vivus('mask', { //アニメーションするIDの指定
    start: 'manual', //自動生成せずスタートをマニュアルに
    type: 'scenario-sync', //アニメーションのタイプを設定
    duration: 10, //アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false, //パスが更新された場合に再レンダリングさせない
    animTimingFunction: Vivus.EASE, //動きの加速減速設定
},
    function () {
        $("#mask").attr("class", "done"); //描画が終わったらdoneというクラスを追加
    }
);

$(window).on('load', function () {
    //ローディング画面を3秒(3000ms)待機してからフェイドアウト
    $("#splash").delay(3000).fadeOut('slow');
    //ロゴを3秒(3000ms)待機してからフェイドアウト
    $("#splash_logo").delay(3000).fadeOut('slow');
    stroke.play(); //SVGアニメーションの実行
});


