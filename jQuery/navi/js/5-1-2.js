function mediaQueriesWin() {
    var width = $(window).width();
    if (width <= 768) {
        $(".has-child>a").off('click');
        $(".has-child>a").on('click', function () {
            var parentElem = $(this).parent();
            $(parentElem).toggleClass('active');
            $(parentElem).children('ul').stop().slideToggle(500);
            return false;
        });
    } else {
        $(".has-child>a").off('click');
        $(".has-child>a").removeClass('active');
        $('has-child').children('ul').css("display", "");
    }
}

$(window).resize(function () {
    mediaQueriesWin();
});

$(window).on('load', function () {
    mediaQueriesWin();
});