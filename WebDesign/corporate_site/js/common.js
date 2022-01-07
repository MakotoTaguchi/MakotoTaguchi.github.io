$(function () {
    let topBtn = $("#scroll-top");
    topBtn.hide();

    $(window).scroll(function () {
        // console.log($(this).scrollTop());
        // console.log($(this).height());

        if ($(this).scrollTop() > 1000) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });

    topBtn.on("click", function (event) {
        // console.log(event);
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
})