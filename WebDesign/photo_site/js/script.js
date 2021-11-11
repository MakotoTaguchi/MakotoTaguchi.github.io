$(".btn").click(function () {
    $(this).toggleClass('active');
    $(".gallary").toggleClass('panelactive');
});

$(".closebtn").click(function () {
    $(".btn").removeClass('active');
    $(".gallary").removeClass('panelactive');
})