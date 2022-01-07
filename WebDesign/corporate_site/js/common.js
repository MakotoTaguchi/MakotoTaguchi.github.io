$(function () {
    let topBtn = $("#scroll-top");
    topBtn.hide();

    $(window).scroll(function () {
        console.log($(this).scrollTop());
        console.log($(this).height());

        if ($(this).scrollTop() > 1000) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
})