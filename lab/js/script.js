/*===========================================================*/
/*讖溯�邱ｨ  5-1-9繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ騾比ｸｭ縺ｧ繝倥ャ繝繝ｼ縺梧ｶ医∴縲∽ｸ翫↓繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺吶ｋ縺ｨ蠕ｩ豢ｻ*/
/*===========================================================*/

var beforePos = 0; //繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｮ蛟､縺ｮ豈碑ｼ�畑縺ｮ險ｭ螳�

//繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ騾比ｸｭ縺ｧ繝倥ャ繝繝ｼ縺梧ｶ医∴縲∽ｸ翫↓繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺吶ｋ縺ｨ蠕ｩ豢ｻ縺吶ｋ險ｭ螳壹ｒ髢｢謨ｰ縺ｫ縺ｾ縺ｨ繧√ｋ
function ScrollAnime() {
    var elemTop = $('#service').offset().top; //#service縺ｮ菴咲ｽｮ縺ｾ縺ｧ縺阪◆繧�
    var scroll = $(window).scrollTop();
    //繝倥ャ繝繝ｼ縺ｮ蜃ｺ縺怜�繧後ｒ縺吶ｋ
    if (scroll == beforePos) {
        //IE11蟇ｾ遲悶〒蜃ｦ逅�ｒ蜈･繧後↑縺�
    } else if (elemTop > scroll || 0 > scroll - beforePos) {
        //繝倥ャ繝繝ｼ縺御ｸ翫°繧牙�迴ｾ縺吶ｋ
        $('#header').removeClass('UpMove'); //#header縺ｫUpMove縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ髯､縺�
        $('#header').addClass('DownMove'); //#header縺ｫDownMove縺ｮ繧ｯ繝ｩ繧ｹ蜷阪ｒ霑ｽ蜉�
    } else {
        //繝倥ャ繝繝ｼ縺御ｸ翫↓豸医∴繧�
        $('#header').removeClass('DownMove'); //#header縺ｫDownMove縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ髯､縺�
        $('#header').addClass('UpMove'); //#header縺ｫUpMove縺ｮ繧ｯ繝ｩ繧ｹ蜷阪ｒ霑ｽ蜉�
    }

    beforePos = scroll; //迴ｾ蝨ｨ縺ｮ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ蛟､繧呈ｯ碑ｼ�畑縺ｮbeforePos縺ｫ譬ｼ邏�
}
/*===========================================================*/
/*讖溯�邱ｨ  5-1-21 繧ｯ繝ｪ繝�け縺励◆繧牙�蠖｢閭梧勹縺梧僑螟ｧ�亥承荳九°繧会ｼ�*/
/*===========================================================*/

$(".openbtn").click(function () { //繝懊ち繝ｳ縺後け繝ｪ繝�け縺輔ｌ縺溘ｉ
    $(this).toggleClass('active'); //繝懊ち繝ｳ閾ｪ霄ｫ縺ｫ active繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ弱＠
    $("#g-nav").toggleClass('panelactive'); //繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ縺ｫpanelactive繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ�
    $(".circle-bg").toggleClass('circleactive'); //荳ｸ閭梧勹縺ｫcircleactive繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ�
});

$("#g-nav a").click(function () { //繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ繝ｪ繝ｳ繧ｯ縺後け繝ｪ繝�け縺輔ｌ縺溘ｉ
    $(".openbtn").removeClass('active'); //繝懊ち繝ｳ縺ｮ active繧ｯ繝ｩ繧ｹ繧帝勁蜴ｻ縺�
    $("#g-nav").removeClass('panelactive'); //繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮpanelactive繧ｯ繝ｩ繧ｹ繧帝勁蜴ｻ
    $(".circle-bg").removeClass('circleactive'); //荳ｸ閭梧勹縺ｮcircleactive繧ｯ繝ｩ繧ｹ繧帝勁蜴ｻ
});

/*===========================================================*/
/*讖溯�邱ｨ  9-1-5 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繧偵☆繧九→繧ｨ繝ｪ繧｢縺ｮ鬮倥＆縺ｫ蜷医ｏ縺帙※邱壹′莨ｸ縺ｳ繧�*/
/*===========================================================*/

//邱壹′莨ｸ縺ｳ繧九◆繧√�險ｭ螳壹ｒ髢｢謨ｰ縺ｧ縺ｾ縺ｨ繧√ｋ
function ScrollTimelineAnime() {
    $('.timeline li').each(function () { // 縺昴ｌ縺槭ｌ縺ｮli隕∫ｴ�縺ｮ
        var elemPos = $(this).offset().top; // 荳翫°繧峨�鬮倥＆蜿門ｾ�
        var scroll = $(window).scrollTop(); // 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ蛟､蜿門ｾ�
        var windowHeight = $(window).height(); // window縺ｮ鬮倥＆蜿門ｾ�
        var startPoint = 500; //邱壹ｒ繧ｹ繧ｿ繝ｼ繝医＆縺帙ｋ菴咲ｽｮ繧呈欠螳壺ｻ繝ｬ繧､繧｢繧ｦ繝医↓繧医▲縺ｦ隱ｿ謨ｴ縺励※縺上□縺輔＞
        if (scroll >= elemPos - windowHeight - startPoint) {
            var H = $(this).outerHeight(true) //li縺ｮ菴咏區縺ｨ鬮倥＆繧貞性繧√◆謨ｰ蛟､繧貞叙蠕�
            //繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ蛟､縺九ｉ隕∫ｴ�縺ｾ縺ｧ縺ｮ鬮倥＆繧貞ｼ輔＞縺溷､繧偵〕i縺ｮ鬮倥＆縺ｮ蜊雁�縺ｮ繝代�繧ｻ繝ｳ繝医〒蜃ｺ縺�
            var percent = (scroll + startPoint - elemPos) / (H / 2) * 100; //li縺ｮ菴咏區縺ｨ鬮倥＆縺ｮ蜊雁�縺ｧ邱壹ｒ100��↓莨ｸ縺ｰ縺�

            // 100% 繧定ｶ�∴縺溘ｉ縺壹▲縺ｨ100%繧貞�繧檎ｶ壹￠繧�
            if (percent > 100) {
                percent = 100;
            }
            // 繝懊�繝繝ｼ縺ｮ髟ｷ縺輔ｒ繧ｻ繝�ヨ
            $(this).children('.border-line').css({
                height: percent + "%", //CSS縺ｧ繝代�繧ｻ繝ｳ繝域欠螳�
            });
        }
    });
}

/*===========================================================*/
/*讖溯�邱ｨ 8-1-9	繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｮ騾溘＆縺悟､牙喧*/
/*===========================================================*/

// #page-top繧偵け繝ｪ繝�け縺励◆髫帙�險ｭ螳�
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0 //繝壹�繧ｸ繝医ャ繝励∪縺ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
    }, 1500, "easeInOutQuint"); //繝壹�繧ｸ繝医ャ繝励せ繧ｯ繝ｭ繝ｼ繝ｫ縺ｮ騾溘＆窶ｻ謨ｰ蟄励′螟ｧ縺阪＞縺ｻ縺ｩ驕�￥縺ｪ繧�, easing繝励Λ繧ｰ繧､繝ｳ縺ｧ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ騾溷ｺｦ縺ｫ螟牙喧
    //linear縲《wing縲）swing縲‘aseInQuad縲‘aseOutQuad縲‘aseInOutQuad縲‘aseInCubic縲‘aseOutCubic縲‘aseInOutCubic縲‘aseInQuart縲‘aseOutQuart縲‘aseInOutQuart縲‘aseInQuint縲‘aseOutQuint縲‘aseInOutQuint縲‘aseInSine縲‘aseOutSine縲‘aseInOutSine縲‘aseInExpo縲‘aseOutExpo縲‘aseInOutExpo縲‘aseInCirc縲‘aseOutCirc縲‘aseInOutCirc縲‘aseInElastic縲‘aseOutElastic縲‘aseInOutElastic縲‘aseInBack縲‘aseOutBack縲‘aseInOutBack縲‘aseInBounce縲‘aseOutBounce縲‘aseInOutBounce縺ｪ縺ｩ縺九ｉ驕ｸ謚槫庄閭ｽ
    return false; //繝ｪ繝ｳ繧ｯ閾ｪ菴薙�辟｡蜉ｹ蛹�
});

/*===========================================================*/
/*讖溯�邱ｨ  6-1-3 繧�▲縺上ｊ繧ｺ繝ｼ繝�繧｢繧ｦ繝医＆縺帙↑縺後ｉ蜈ｨ逕ｻ髱｢縺ｧ隕九○繧�*/
/*===========================================================*/
//逕ｻ蜒上�險ｭ螳�

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth > 768) {
    var responsiveImage = [ //PC逕ｨ縺ｮ逕ｻ蜒�
        {
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
    var responsiveImage = [ //繧ｿ繝悶Ξ繝�ヨ繧ｵ繧､繧ｺ��768px�我ｻ･荳狗畑縺ｮ逕ｻ蜒�
        {
            src: './img/main_sp01.jpg'
        },
        {
            src: './img/main_sp02.jpg'
        },
        {
            src: './img/main_sp03.jpg'
        }
    ];
}

//Vegas蜈ｨ菴薙�險ｭ螳�

$('#slider').vegas({
    overlay: false, //逕ｻ蜒上�荳翫↓邯ｲ邱壹ｄ繝峨ャ繝医�繧ｪ繝ｼ繝舌�繝ｬ繧､繝代ち繝ｼ繝ｳ逕ｻ蜒上ｒ謖�ｮ壹＠縺ｪ縺��
    transition: 'blur', //蛻�ｊ譖ｿ繧上ｊ縺ｮ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縲Ｉttp://vegas.jaysalvat.com/documentation/transitions/蜿ら�縲Ｇade縲’ade2縲《lideLeft縲《lideLeft2縲《lideRight縲《lideRight2縲《lideUp縲《lideUp2縲《lideDown縲《lideDown2縲】oomIn縲】oomIn2縲】oomOut縲】oomOut2縲《wirlLeft縲《wirlLeft2縲《wirlRight縲《wirlRight2縲｜urnburn2縲｜lurblur2縲’lash縲’lash2縺瑚ｨｭ螳壼庄閭ｽ縲�
    transitionDuration: 2000, //蛻�ｊ譖ｿ繧上ｊ縺ｮ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ譎る俣繧偵Α繝ｪ遘貞腰菴阪〒險ｭ螳�
    delay: 10000, //繧ｹ繝ｩ繧､繝蛾俣縺ｮ驕�ｻｶ繧偵Α繝ｪ遘貞腰菴阪〒縲�
    animationDuration: 20000, //繧ｹ繝ｩ繧､繝峨い繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ譎る俣繧偵Α繝ｪ遘貞腰菴阪〒險ｭ螳�
    animation: 'kenburns', //繧ｹ繝ｩ繧､繝峨い繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ遞ｮ鬘槭Ｉttp://vegas.jaysalvat.com/documentation/transitions/蜿ら�縲Ｌenburns縲〔enburnsUp縲〔enburnsDown縲〔enburnsRight縲〔enburnsLeft縲〔enburnsUpLeft縲〔enburnsUpRight縲〔enburnsDownLeft縲〔enburnsDownRight縲〉andom縺瑚ｨｭ螳壼庄閭ｽ縲�
    slides: responsiveImage, //逕ｻ蜒剰ｨｭ螳壹ｒ隱ｭ繧
    timer: false, //繝励Ο繧ｰ繝ｬ繧ｹ繝舌�髱櫁｡ｨ遉ｺ
});

/*===========================================================*/
/*蜊ｰ雎｡邱ｨ 4-13 繝ｩ繝ｳ繝繝�縺ｫ迴ｾ繧後ｋ��CSS x jQuery��*/
/*===========================================================*/

// 蜍輔″縺ｮ縺阪▲縺九￠縺ｮ襍ｷ轤ｹ縺ｨ縺ｪ繧九い繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ蜷榊燕繧貞ｮ夂ｾｩ
function moveAnimation() {
    //繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励◆繧峨Λ繝ｳ繝繝�縺ｫ蜃ｺ迴ｾ	
    var randomElm2 = $(".randomScroll"); //隕ｪ隕∫ｴ�蜿門ｾ�
    var randomElm2Child = $(randomElm2).children(); //隕ｪ縺ｮ蟄占ｦ∫ｴ�繧貞叙蠕�
    randomScrollAnime();

    function randomScrollAnime() {
        var elemPos = $(".randomScroll").offset().top - 50; //隕∫ｴ�繧医ｊ縲�50px荳翫�
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            if (randomElm2Child.length > 0) { //驟榊�謨ｰ莉･荳翫〒縺ゅｌ縺ｰ蜃ｦ逅�ｒ縺翫％縺ｪ縺�
                var rnd = Math.floor(Math.random() * randomElm2Child.length); //驟榊�謨ｰ縺九ｉ陦ｨ遉ｺ縺吶ｋ謨ｰ蛟､繧偵Λ繝ｳ繝繝�縺ｧ蜿門ｾ�
                var moveData = "flipDown"; //繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ蜷搾ｼ戮SS縺ｮ繧ｯ繝ｩ繧ｹ蜷阪ｒ謖�ｮ�
                if (animeFlag) { //繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺吶ｋ蠎ｦ縺ｫ蜍穂ｽ懊☆繧九�縺ｧ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺檎ｵゅｏ繧九∪縺ｧ蜃ｦ逅�ｒ縺輔○縺ｪ縺�ｈ縺�↓縺吶ｋ
                    animeFlag = false; //繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ蜃ｦ逅�′邨ゅｏ繧九∪縺ｧ荳譎ら噪縺ｫfalse縺ｫ縺吶ｋ
                    $(randomElm2Child[rnd]).addClass(moveData); //繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ繧ｯ繝ｩ繧ｹ繧定ｿｽ蜉�
                    setTimeout(function () {
                        animeFlag = true; //谺｡縺ｮ蜃ｦ逅�ｒ縺翫％縺ｪ縺�◆繧√↓true縺ｫ螟画峩
                        randomScrollAnime(); //閾ｪ霄ｫ縺ｮ蜃ｦ逅�ｒ郢ｰ繧願ｿ斐☆
                    }, 200); //0.2遘帝俣髫斐〒縲やｻ繝ｩ繝ｳ繝繝�縺ｮ繧ｹ繝斐�繝芽ｪｿ謨ｴ縺ｯ縺薙�謨ｰ蟄励ｒ螟画峩縺輔○繧�
                    randomElm2Child.splice(rnd, 1); //繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ霑ｽ蜉�縺ｨ縺ｪ縺｣縺溯ｦ∫ｴ�繧帝�蛻励°繧牙炎髯､
                }
            }

        } else {
            animeFlag = true;
        }

    }
}

var animeFlag = true; //繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺吶ｋ蠎ｦ縺ｫ蜍穂ｽ懊☆繧九�縺ｧ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺檎ｵゅｏ繧九∪縺ｧ蜃ｦ逅�ｒ縺輔○縺ｪ縺�ｈ縺�↓縺吶ｋ縺溘ａ縺ｮ螳夂ｾｩ

/*===========================================================*/
/* 蜊ｰ雎｡邱ｨ 4 譛菴朱剞縺翫⊂縺医※縺翫″縺溘＞蜍輔″*/
/*===========================================================*/

// 蜍輔″縺ｮ縺阪▲縺九￠縺ｮ襍ｷ轤ｹ縺ｨ縺ｪ繧九い繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ蜷榊燕繧貞ｮ夂ｾｩ
function fadeAnime() {
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
    //4-1 縺ｵ繧上▲�亥ｷｦ縺九ｉ��
    $('.fadeLeftTrigger').each(function () { //fadeLeftTrigger縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪′
        var elemPos = $(this).offset().top - 50; //隕∫ｴ�繧医ｊ縲�50px荳翫�
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeLeft'); // 逕ｻ髱｢蜀�↓蜈･縺｣縺溘ｉfadeLeft縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ霑ｽ險�
        } else {
            $(this).removeClass('fadeLeft'); // 逕ｻ髱｢螟悶↓蜃ｺ縺溘ｉfadeLeft縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ螟悶☆
        }
    });
    //4-1 縺ｵ繧上▲�亥承縺九ｉ��
    $('.fadeRightTrigger').each(function () { //fadeRightTrigger縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪′
        var elemPos = $(this).offset().top - 50; //隕∫ｴ�繧医ｊ縲�50px荳翫�
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeRight'); // 逕ｻ髱｢蜀�↓蜈･縺｣縺溘ｉfadeRight縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ霑ｽ險�
        } else {
            $(this).removeClass('fadeRight'); // 逕ｻ髱｢螟悶↓蜃ｺ縺溘ｉfadeRight縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ螟悶☆
        }
    });
}

/*===========================================================*/
/* 髢｢謨ｰ繧偵∪縺ｨ繧√ｋ*/
/*===========================================================*/

// 逕ｻ髱｢繧偵せ繧ｯ繝ｭ繝ｼ繝ｫ繧偵＠縺溘ｉ蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ
$(window).scroll(function () {
    ScrollTimelineAnime(); //讖溯�邱ｨ 9-1-5 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繧偵☆繧九→繧ｨ繝ｪ繧｢縺ｮ鬮倥＆縺ｫ蜷医ｏ縺帙※邱壹′莨ｸ縺ｳ繧矩未謨ｰ繧貞他縺ｶ
    ScrollAnime(); //讖溯�邱ｨ 5-1-9繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ騾比ｸｭ縺ｧ繝倥ャ繝繝ｼ縺梧ｶ医∴縲∽ｸ翫↓繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺吶ｋ縺ｨ蠕ｩ豢ｻ縺ｮ髢｢謨ｰ繧貞他縺ｶ
    moveAnimation(); //蜊ｰ雎｡邱ｨ 4-13 繝ｩ繝ｳ繝繝�縺ｫ迴ｾ繧後ｋ��CSS x jQuery��
    fadeAnime(); //蜊ｰ雎｡邱ｨ 4 譛菴朱剞縺翫⊂縺医※縺翫″縺溘＞蜍輔″縺ｮ髢｢謨ｰ繧貞他縺ｶ
});

// 繝壹�繧ｸ縺瑚ｪｭ縺ｿ霎ｼ縺ｾ繧後◆繧峨☆縺舌↓蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ
$(window).on('load', function () {
    $("#splash-logo").delay(1200).fadeOut('slow'); //繝ｭ繧ｴ繧�1.2遘偵〒繝輔ぉ繝ｼ繝峨い繧ｦ繝医☆繧玖ｨ倩ｿｰ

    //=====縺薙％縺九ｉ繝ｭ繝ｼ繝�ぅ繝ｳ繧ｰ繧ｨ繝ｪ繧｢��splash繧ｨ繝ｪ繧｢�峨ｒ1.5遘偵〒繝輔ぉ繝ｼ繝峨い繧ｦ繝医＠縺溷ｾ後↓蜍輔°縺励◆縺ЙS繧偵∪縺ｨ繧√ｋ
    $("#splash").delay(1500).fadeOut('slow', function () { //繝ｭ繝ｼ繝�ぅ繝ｳ繧ｰ繧ｨ繝ｪ繧｢��splash繧ｨ繝ｪ繧｢�峨ｒ1.5遘偵〒繝輔ぉ繝ｼ繝峨い繧ｦ繝医☆繧玖ｨ倩ｿｰ    
        $('body').addClass('appear'); //繝輔ぉ繝ｼ繝峨い繧ｦ繝亥ｾ恵ody縺ｫappear繧ｯ繝ｩ繧ｹ莉倅ｸ�
        ScrollTimelineAnime(); //讖溯�邱ｨ 9-1-5 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繧偵☆繧九→繧ｨ繝ｪ繧｢縺ｮ鬮倥＆縺ｫ蜷医ｏ縺帙※邱壹′莨ｸ縺ｳ繧矩未謨ｰ繧貞他縺ｶ
        ScrollAnime(); //讖溯�邱ｨ 5-1-9繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ騾比ｸｭ縺ｧ繝倥ャ繝繝ｼ縺梧ｶ医∴縲∽ｸ翫↓繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺吶ｋ縺ｨ蠕ｩ豢ｻ縺ｮ髢｢謨ｰ繧貞他縺ｶ
        moveAnimation(); //蜊ｰ雎｡邱ｨ 4-13 繝ｩ繝ｳ繝繝�縺ｫ迴ｾ繧後ｋ��CSS x jQuery��	
    });
    //=====縺薙％縺ｾ縺ｧ繝ｭ繝ｼ繝�ぅ繝ｳ繧ｰ繧ｨ繝ｪ繧｢��splash繧ｨ繝ｪ繧｢�峨ｒ1.5遘偵〒繝輔ぉ繝ｼ繝峨い繧ｦ繝医＠縺溷ｾ後↓蜍輔°縺励◆縺ЙS繧偵∪縺ｨ繧√ｋ

    //=====縺薙％縺九ｉ閭梧勹縺御ｼｸ縺ｳ縺溷ｾ後↓蜍輔°縺励◆縺ЙS繧偵∪縺ｨ繧√◆縺��ｴ蜷医�
    $('.splashbg1').on('animationend', function () {
        fadeAnime(); //蜊ｰ雎｡邱ｨ 4 譛菴朱剞縺翫⊂縺医※縺翫″縺溘＞蜍輔″縺ｮ髢｢謨ｰ繧貞他縺ｶ
    });
    //=====縺薙％縺ｾ縺ｧ閭梧勹縺御ｼｸ縺ｳ縺溷ｾ後↓蜍輔°縺励◆縺ЙS繧偵∪縺ｨ繧√ｋ

});