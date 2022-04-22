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