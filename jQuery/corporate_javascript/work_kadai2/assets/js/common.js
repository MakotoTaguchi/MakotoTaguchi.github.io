// JavaScript Document
$(function () {
    
    /*** 上に戻るボタン ***/
    let topBtn = $('#scroll-top');
    topBtn.hide();

    // ある程度スクロールされたら、上に戻るボタンを表示する
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            topBtn.fadeIn(); // フェードインで表示
        } else {
            topBtn.fadeOut(); // フェードアウトで非表示
        }
    });

    topBtn.on("click", function (event) {
        event.preventDefault();  // ページ内リンクの挙動をキャンセル
        $('body,html').animate({ // スムーズにスクロールする設定
            scrollTop: 0
        }, 500);
    });

    /*** ナビゲーションメニュー ***/
    //1.
    $('.close-button, .open-button').on("click",function () {
        $('.header nav').slideToggle();
    });

    /*** スライダー（slick） ***/
    //https://kenwheeler.github.io/slick/
    $('#slick-slide').slick({
        autoplay: true,
        autoplaySpeed: 2000,
			 fade: true,
        dots: true,
        arrows: true
    });
	
	
	
	

});
