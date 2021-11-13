$("#btn1").click(function () {
    $("#gallary1").toggleClass('panelactive');
});

$("#btn2").click(function () {
    $("#gallary2").toggleClass('panelactive');
});

$("#btn3").click(function () {
    $("#gallary3").toggleClass('panelactive');
});

$(".closebtn").click(function () {
    $("#gallary1").removeClass('panelactive');
    $("#gallary2").removeClass('panelactive');
    $("#gallary3").removeClass('panelactive');
});