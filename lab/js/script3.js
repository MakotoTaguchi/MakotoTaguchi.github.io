var elemTop = [];

//迴ｾ蝨ｨ蝨ｰ繧貞叙蠕励☆繧九◆繧√�險ｭ螳壹ｒ髢｢謨ｰ縺ｧ縺ｾ縺ｨ繧√ｋ
function PositionCheck() {
    //header縺ｮ鬮倥＆繧貞叙蠕�
    var headerH = $("#header").outerHeight(true);
    //.scroll-point縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪′縺､縺�◆繧ｨ繝ｪ繧｢縺ｮ菴咲ｽｮ繧貞叙蠕励☆繧玖ｨｭ螳�
    $(".scroll-point").each(function (i) { //.scroll-point繧ｯ繝ｩ繧ｹ縺後▽縺�◆繧ｨ繝ｪ繧｢縺九ｉ繝医ャ繝励∪縺ｧ縺ｮ霍晞屬繧定ｨ育ｮ励＠縺ｦ險ｭ螳�
        elemTop[i] = Math.round(parseInt($(this).offset().top - headerH - 10)); //霑ｽ蠕薙☆繧吃eader蛻��鬮倥＆縺九ｉ縺輔ｉ縺ｫ10px蛻�ｼ医さ繝ｳ繝�Φ繝��蟆代＠荳翫〒迴ｾ蝨ｨ蝨ｰ縺ｫ縺吶ｋ縺溘ａ�峨ｒ蠑輔￥
    });
}

function ScrollAnime() { //繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励◆髫帙�繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ髢｢謨ｰ縺ｫ縺ｾ縺ｨ繧√ｋ
    var scroll = Math.round($(window).scrollTop());
    var NavElem = $("#pc-nav li"); //繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮli縺ｮ菴慕分逶ｮ縺九ｒ螳夂ｾｩ縺吶ｋ縺溘ａ縺ｮ貅門ｙ
    $("#pc-nav li").removeClass('current'); //蜈ｨ縺ｦ縺ｮ繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ迴ｾ蝨ｨ蝨ｰ繧ｯ繝ｩ繧ｹ繧帝勁蜴ｻ
    if (scroll >= elemTop[0] && scroll < elemTop[1]) { //.scroll-point 1縺､繧∽ｻ･荳�.scroll-point 2縺､繧∵悴貅
        $(NavElem[0]).addClass('current'); //1縺､繧√�li縺ｫ迴ｾ蝨ｨ蝨ｰ繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ�
    } else if (scroll >= elemTop[1] && scroll < elemTop[2]) { //.scroll-point 2縺､繧∽ｻ･荳�.scroll-point 3縺､繧∵悴貅
        $(NavElem[1]).addClass('current'); //2縺､繧√�li縺ｫ迴ｾ蝨ｨ蝨ｰ繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ�
    } else if (scroll >= elemTop[2] && scroll < elemTop[3]) { //.scroll-point 3縺､繧∽ｻ･荳�.scroll-point 4縺､繧∵悴貅
        $(NavElem[2]).addClass('current'); //3縺､繧√�li縺ｫ迴ｾ蝨ｨ蝨ｰ繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ�
    } else if (scroll >= elemTop[3] && scroll < elemTop[4]) { //.scroll-point 4縺､繧∽ｻ･荳�.scroll-point 5縺､繧∵悴貅
        $(NavElem[3]).addClass('current'); //4縺､繧√�li縺ｫ迴ｾ蝨ｨ蝨ｰ繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ�
    } else if (scroll >= elemTop[4]) { // .scroll-point 5縺､繧�ｼ�area-5�我ｻ･荳�
        $(NavElem[4]).addClass('current'); //5縺､繧√�li縺ｫ迴ｾ蝨ｨ蝨ｰ繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ�
    }
}

var beforePos = 0;

function ScrollAnime() {
    var elemTop = $('#research').offset().top;
    var scroll = $(window).scrollTop();
    if (scroll == beforePos) {
        $('#header').removeClass('UpMove');
        $('#header').addClass('DownMove');
    } else {
        $('#header').removeClass('DownMove');
        $('#header').addClass('UpMove');
    }

    beforePos = scroll;
}

$(".openbtn").click(function () {
    $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
    $(".circle-bg").toggleClass('circleactive');
});

$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
    $(".circle-bg").removeClass('circleactive');
});

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth > 768) {
    var responsiveImage = [{
            src: './img/koudai.jpeg'
        },
        {
            src: './img/computer.jpg'
        },
        {
            src: './img/network.jpg'
        }
    ];
} else {
    var responsiveImage = [{
            src: './img/koudai.jpeg'
        },
        {
            src: './img/computer.jpg'
        },
        {
            src: './img/network.jpg'
        }
    ];
}

$('#slider').vegas({
    overlay: false,
    transitionDuration: 2000,
    delay: 10000,
    animationDuration: 20000,
    animation: 'kenburns',
    slides: responsiveImage,
    timer: false,
});

// 背景の幾何学模様
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 38,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#11a0ad"
        },
        "shape": {
            "type": "polygon",
            "stroke": {
                "width": 0,
            },
            "polygon": {
                "nb_sides": 3
            },
            "image": {
                "width": 190,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.664994832269074,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 2.2722661797524872,
                "opacity_min": 0.08115236356258881,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#11a0ad",
            "opacity": 0.6,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 961.4383117143238
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false
            },
            "resize": true
        }
    },
    "retina_detect": true
});

$('.bgLRextendTrigger').each(function () { //bgLRextendTrigger縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪′
    var elemPos = $(this).offset().top - 50; //隕∫ｴ�繧医ｊ縲�50px荳翫�
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
        $(this).addClass('bgLRextend'); // 逕ｻ髱｢蜀�↓蜈･縺｣縺溘ｉbgLRextend縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ霑ｽ險�
    } else {
        $(this).removeClass('bgLRextend'); // 逕ｻ髱｢螟悶↓蜃ｺ縺溘ｉbgLRextend縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ螟悶☆
    }
});
$('.bgappearTrigger').each(function () { //bgappearTrigger縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪′
    var elemPos = $(this).offset().top - 50; //隕∫ｴ�繧医ｊ縲�50px荳翫�
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
        $(this).addClass('bgappear'); // 逕ｻ髱｢蜀�↓蜈･縺｣縺溘ｉbgappear縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ霑ｽ險�
    } else {
        $(this).removeClass('bgappear'); // 逕ｻ髱｢螟悶↓蜃ｺ縺溘ｉbgappear縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ螟悶☆
    }
});
// 4-1 縺ｵ繧上▲�井ｸ九°繧会ｼ�
$('.fadeUpTrigger').each(function () { //fadeUpTrigger縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪′
    var elemPos = $(this).offset().top - 50; //隕∫ｴ�繧医ｊ縲�50px荳翫�
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
        $(this).addClass('fadeUp'); // 逕ｻ髱｢蜀�↓蜈･縺｣縺溘ｉfadeUp縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ霑ｽ險�
    } else {
        $(this).removeClass('fadeUp'); // 逕ｻ髱｢螟悶↓蜃ｺ縺溘ｉfadeUp縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ螟悶☆
    }
});

// 4-2 繝代ち繝�ｼ亥ｷｦ縺ｸ��
$('.flipLeftTrigger').each(function () { //flipLeftTrigger縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪′
    var elemPos = $(this).offset().top - 50; //隕∫ｴ�繧医ｊ縲�50px荳翫�
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
        $(this).addClass('flipLeft'); // 逕ｻ髱｢蜀�↓蜈･縺｣縺溘ｉflipLeft縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ霑ｽ險�
    } else {
        $(this).removeClass('flipLeft'); // 逕ｻ髱｢螟悶↓蜃ｺ縺溘ｉflipLeft縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ螟悶☆
    }
});

$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});


function fadeAnime() {
    // 4-9 繧ｷ繝｣繝�ｼ亥ｷｦ縺九ｉ��

    $('.bgLRextendTrigger').each(function () { //bgLRextendTrigger縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪′
        var elemPos = $(this).offset().top - 50; //隕∫ｴ�繧医ｊ縲�50px荳翫�
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('bgLRextend'); // 逕ｻ髱｢蜀�↓蜈･縺｣縺溘ｉbgLRextend縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ霑ｽ險�
        } else {
            $(this).removeClass('bgLRextend'); // 逕ｻ髱｢螟悶↓蜃ｺ縺溘ｉbgLRextend縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ螟悶☆
        }
    });
    $('.bgappearTrigger').each(function () { //bgappearTrigger縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪′
        var elemPos = $(this).offset().top - 50; //隕∫ｴ�繧医ｊ縲�50px荳翫�
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('bgappear'); // 逕ｻ髱｢蜀�↓蜈･縺｣縺溘ｉbgappear縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ霑ｽ險�
        } else {
            $(this).removeClass('bgappear'); // 逕ｻ髱｢螟悶↓蜃ｺ縺溘ｉbgappear縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ螟悶☆
        }
    });
    // 4-1 縺ｵ繧上▲�井ｸ九°繧会ｼ�
    $('.fadeUpTrigger').each(function () { //fadeUpTrigger縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪′
        var elemPos = $(this).offset().top - 50; //隕∫ｴ�繧医ｊ縲�50px荳翫�
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp'); // 逕ｻ髱｢蜀�↓蜈･縺｣縺溘ｉfadeUp縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ霑ｽ險�
        } else {
            $(this).removeClass('fadeUp'); // 逕ｻ髱｢螟悶↓蜃ｺ縺溘ｉfadeUp縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ螟悶☆
        }
    });

    // 4-2 繝代ち繝�ｼ亥ｷｦ縺ｸ��
    $('.flipLeftTrigger').each(function () { //flipLeftTrigger縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪′
        var elemPos = $(this).offset().top - 50; //隕∫ｴ�繧医ｊ縲�50px荳翫�
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('flipLeft'); // 逕ｻ髱｢蜀�↓蜈･縺｣縺溘ｉflipLeft縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ霑ｽ險�
        } else {
            $(this).removeClass('flipLeft'); // 逕ｻ髱｢螟悶↓蜃ｺ縺溘ｉflipLeft縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ螟悶☆
        }
    });

}

// 逕ｻ髱｢繧偵Μ繧ｵ繧､繧ｺ縺励◆繧牙虚縺九＠縺溘＞蝣ｴ蜷医�險倩ｿｰ
$(window).on('resize', function () {
    sliderSet(); //讖溯�邱ｨ 9-4-1 繝九Η繝ｼ繧ｹ繝�ぅ繝�き繝ｼ縺ｮ蜍輔″縺ｮ髢｢謨ｰ繧貞他縺ｶ
});

// 逕ｻ髱｢繧偵せ繧ｯ繝ｭ繝ｼ繝ｫ繧偵＠縺溘ｉ蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ
$(window).scroll(function () {
    PositionCheck();
    ScrollAnime(); 
    fadeAnime(); 
});