/*===========================================================*/
/*讖溯�邱ｨ 8-1-1繝壹�繧ｸ縺ｮ蜈磯�ｭ縺ｫ繧ｹ繝�繝ｼ繧ｹ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺吶ｋ*/
/*===========================================================*/
// #page-top繧偵け繝ｪ繝�け縺励◆髫帙�險ｭ螳�
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0 //繝壹�繧ｸ繝医ャ繝励∪縺ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
    }, 500); //繝壹�繧ｸ繝医ャ繝励せ繧ｯ繝ｭ繝ｼ繝ｫ縺ｮ騾溘＆縲よ焚蟄励′螟ｧ縺阪＞縺ｻ縺ｩ驕�￥縺ｪ繧�
    return false; //繝ｪ繝ｳ繧ｯ閾ｪ菴薙�辟｡蜉ｹ蛹�
});

/*===========================================================*/
/*讖溯�邱ｨ 5-1-13 繧ｯ繝ｪ繝�け縺励◆繧峨リ繝薙′蟾ｦ縺九ｉ蜿ｳ縺ｫ蜃ｺ迴ｾ*/
/*===========================================================*/

$(".openbtn").click(function () { //繝懊ち繝ｳ縺後け繝ｪ繝�け縺輔ｌ縺溘ｉ
    $(this).toggleClass('active'); //繝懊ち繝ｳ閾ｪ霄ｫ縺ｫ active繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ弱＠
    $("#g-nav").toggleClass('panelactive'); //繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ縺ｫpanelactive繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ�
    $("#g-nav li").toggleClass('smooth'); //li 縺ｫ smooth繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ�
});

$("#g-nav a").click(function () { //繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ繝ｪ繝ｳ繧ｯ縺後け繝ｪ繝�け縺輔ｌ縺溘ｉ
    $(".openbtn").removeClass('active'); //繝懊ち繝ｳ縺ｮ active繧ｯ繝ｩ繧ｹ繧帝勁蜴ｻ縺�
    $("#g-nav").removeClass('panelactive'); //繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮpanelactive繧ｯ繝ｩ繧ｹ繧る勁蜴ｻ
    $("#g-nav li").removeClass('smooth'); //li 縺ｮsmooth繧ｯ繝ｩ繧ｹ繧帝勁蜴ｻ
});

/*===========================================================*/
/*讖溯�邱ｨ  9-5-1 謨ｰ蟄励�繧ｫ繧ｦ繝ｳ繝医い繝��繝ｻ繝繧ｦ繝ｳ*/
/*===========================================================*/

$('#count-up-area').on('inview', function (event, isInView) {
    if (isInView) {
        //隕∫ｴ�縺瑚ｦ九∴縺溘→縺阪↓螳溯｡後☆繧句�逅�
        $("#count-up-area .count-up").each(function () {
            $(this).prop('Counter', 0).animate({ //0縺九ｉ繧ｫ繧ｦ繝ｳ繝医い繝��
                Counter: $(this).text()
            }, {
                // 繧ｹ繝斐�繝峨ｄ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ險ｭ螳�
                duration: 3000, //謨ｰ蟄励′螟ｧ縺阪＞縺ｻ縺ｩ螟牙喧縺ｮ繧ｹ繝斐�繝峨′驕�￥縺ｪ繧九�2000=2遘�
                easing: 'swing', //蜍輔″縺ｮ遞ｮ鬘槭ゆｻ悶↓繧Ｍinear縺ｪ縺ｩ險ｭ螳壼庄閭ｽ
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
});


/*===========================================================*/
/*讖溯�邱ｨ  9-5-2 譽偵げ繝ｩ繝包ｼ育ｸｦ��9-5-6 蜀�げ繝ｩ繝�*/
/*===========================================================*/

//蛟､繧偵げ繝ｩ繝輔↓陦ｨ遉ｺ縺輔○繧�
Chart.plugins.register({
    afterDatasetsDraw: function (chart, easing) {
        var ctx = chart.ctx;

        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    // 蛟､縺ｮ陦ｨ遉ｺ
                    ctx.fillStyle = 'rgb(0, 0, 0,0.8)'; //譁�ｭ励�濶ｲ
                    var fontSize = 12; //繝輔か繝ｳ繝医し繧､繧ｺ
                    var fontStyle = 'normal'; //繝輔か繝ｳ繝医せ繧ｿ繧､繝ｫ
                    var fontFamily = 'Arial'; //繝輔か繝ｳ繝医ヵ繧｡繝溘Μ繝ｼ
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                    var dataString = dataset.data[index].toString();

                    // 蛟､縺ｮ菴咲ｽｮ
                    ctx.textAlign = 'center'; //繝�く繧ｹ繝医ｒ荳ｭ螟ｮ蟇�○
                    ctx.textBaseline = 'middle'; //繝�く繧ｹ繝医�繝ｼ繧ｹ繝ｩ繧､繝ｳ縺ｮ菴咲ｽｮ繧剃ｸｭ螟ｮ謠�∴

                    var padding = 5; //菴咏區
                    var position = element.tooltipPosition();
                    ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);

                });
            }
        });
    }
});

//蜀�げ繝ｩ繝�
$('#chart01').on('inview', function (event, isInView) { //逕ｻ髱｢荳翫↓蜈･縺｣縺溘ｉ繧ｰ繝ｩ繝輔ｒ謠冗判
    if (isInView) {

        var ctx = document.getElementById("chart01"); //繧ｰ繝ｩ繝輔ｒ謠冗判縺励◆縺��ｴ謇縺ｮid
        var chart = new Chart(ctx, {
            type: 'pie', //繧ｰ繝ｩ繝輔�繧ｿ繧､繝�
            data: { //繧ｰ繝ｩ繝輔�繝��繧ｿ
                labels: ["髮ｻ逎∵ｳ｢", "蜴溷ｭ舌せ繝壹け繝医Ν", "蜈峨�騾溷ｺｦ", "辭ｱ謾ｾ蟆�", ], //繝��繧ｿ縺ｮ蜷榊燕
                datasets: [{
                    label: "螳滄ｨ薙�遞ｮ鬘�", //繧ｰ繝ｩ繝輔�繧ｿ繧､繝医Ν
                    backgroundColor: ["#05c3c5", "#059ac5", "#0576c5", "#0556c5"], //繧ｰ繝ｩ繝輔�閭梧勹濶ｲ
                    data: ["20", "30", "10", "40", ] //繝��繧ｿ
                }]
            },

            options: { //繧ｰ繝ｩ繝輔�繧ｪ繝励す繝ｧ繝ｳ
                maintainAspectRatio: false, //CSS縺ｧ螟ｧ縺阪＆繧定ｪｿ謨ｴ縺吶ｋ縺溘ａ縲∬�蜍慕ｸｮ蟆上ｒ縺輔○縺ｪ縺�
                legend: {
                    display: true //繧ｰ繝ｩ繝輔�隱ｬ譏弱ｒ陦ｨ遉ｺ
                },
                tooltips: { //繧ｰ繝ｩ繝輔∈繧ｫ繝ｼ繧ｽ繝ｫ繧貞粋繧上○縺滄圀縺ｮ隧ｳ邏ｰ陦ｨ遉ｺ縺ｮ險ｭ螳�
                    callbacks: {
                        label: function (tooltipItem, data) {
                            return data.labels[tooltipItem.index] + ": " + data.datasets[0].data[tooltipItem.index] + "%"; //%繧呈怙蠕後↓縺､縺代ｋ
                        }
                    },
                },
                title: { //荳企Κ繧ｿ繧､繝医Ν陦ｨ遉ｺ縺ｮ險ｭ螳�
                    display: true,
                    fontSize: 14,
                    text: '螳滄ｨ薙�遞ｮ鬘� 蜊倅ｽ搾ｼ�%'
                },
            }
        });

    }
});

//譽偵げ繝ｩ繝�
$('#chart02').on('inview', function (event, isInView) { //逕ｻ髱｢荳翫↓蜈･縺｣縺溘ｉ繧ｰ繝ｩ繝輔ｒ謠冗判
    if (isInView) {

        var ctx02 = document.getElementById("chart02"); //繧ｰ繝ｩ繝輔ｒ謠冗判縺励◆縺��ｴ謇縺ｮid
        ctx02.height = 300; //繧ｰ繝ｩ繝輔�鬮倥＆
        var chart02 = new Chart(ctx02, {
            type: 'bar', //繧ｰ繝ｩ繝輔�繧ｿ繧､繝�
            data: { //繧ｰ繝ｩ繝輔�繝��繧ｿ
                labels: ["莉､蜥�3蟷ｴ蠎ｦ", "莉､蜥�4蟷ｴ蠎ｦ", "莉､蜥�5蟷ｴ蠎ｦ", ], //繝��繧ｿ縺ｮ蜷榊燕
                datasets: [{
                    label: "譁ｽ險ｭ隕句ｭｦ閠�焚", //繧ｰ繝ｩ繝輔�繧ｿ繧､繝医Ν
                    backgroundColor: "#00b7b8", //繧ｰ繝ｩ繝輔�濶ｲ
                    data: ["2808", "1476", "1713", ] //讓ｪ蛻励↓荳ｦ縺ｶ繝��繧ｿ
                }]
            },
            options: { //繧ｰ繝ｩ繝輔�繧ｪ繝励す繝ｧ繝ｳ
                maintainAspectRatio: false, //蜈��繧ｭ繝｣繝ｳ繝舌せ縺ｮ繧｢繧ｹ繝壹け繝域ｯ皮ｶｭ謖√ｒ辟｡蜉ｹ
                legend: {
                    display: false //繧ｰ繝ｩ繝輔�隱ｬ譏弱ｒ髱櫁｡ｨ遉ｺ
                },
                tooltips: { //繧ｰ繝ｩ繝輔∈繧ｫ繝ｼ繧ｽ繝ｫ繧貞粋繧上○縺滄圀縺ｮ隧ｳ邏ｰ陦ｨ遉ｺ縺ｮ險ｭ螳�
                    callbacks: {
                        label: function (tooltipItems, data) {
                            if (tooltipItems.yLabel == "0") {
                                return "";
                            }
                            return data.datasets[tooltipItems.datasetIndex].label + "��" + tooltipItems.yLabel + "莠ｺ"; //莠ｺ繧呈怙蠕後↓縺､縺代ｋ
                        }
                    }
                },
                title: { //荳企Κ繧ｿ繧､繝医Ν陦ｨ遉ｺ縺ｮ險ｭ螳�
                    display: true,
                    fontSize: 14,
                    text: '譁ｽ險ｭ隕句ｭｦ謨ｰ縲蜊倅ｽ搾ｼ壻ｺｺ'
                },
                scales: {
                    yAxes: [ //繧ｰ繝ｩ繝慕ｸｦ霆ｸ��Y霆ｸ�芽ｨｭ螳�
                        {
                            ticks: {
                                beginAtZero: true, //0縺九ｉ繧ｹ繧ｿ繝ｼ繝�
                                suggestedMax: 1000, //譛螟ｧ縺�1000
                                suggestedMin: 0, //譛蟆上′0
                                stepSize: 500, //100縺･縺､謨ｰ蛟､縺悟綾縺ｾ繧後ｋ
                                callback: function (value) {
                                    return value + '莠ｺ' //謨ｰ蟄暦ｼ倶ｺｺ縺ｧ陦ｨ遉ｺ					
                                }
                            }
                        }
                    ],
                    xAxes: [ //繧ｰ繝ｩ繝慕ｸｦ霆ｸ��X霆ｸ�芽ｨｭ螳�
                        {
                            barPercentage: 0.5, //繝舌�縺ｮ螟ｪ縺�
                        }
                    ]
                }
            }
        });

    }
});


/*===========================================================*/
/* 蜊ｰ雎｡邱ｨ 8-8 繝�く繧ｹ繝医′繝ｩ繝ｳ繝繝�縺ｫ蜃ｺ迴ｾ*/
/*===========================================================*/
var Obj = {
    loop: false,
    minDisplayTime: 2000, // 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ髢馴囈譎る俣
    initialDelay: 100, // 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ髢句ｧ九∪縺ｧ縺ｮ驕�ｻｶ譎る俣
    autoStart: true,
    in: {
        effect: 'fadeInUp', //animate.css 縺ｮ荳ｭ縺ｫ縺ゅｋ謗｡逕ｨ縺励◆縺�虚縺阪�繧ｯ繝ｩ繧ｹ蜷�
        delayScale: 1, // 驕�ｻｶ譎る俣縺ｮ謖�焚
        delay: 100, // 譁�ｭ励＃縺ｨ縺ｮ驕�ｻｶ譎る俣
        sync: false, // 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ繧偵☆縺ｹ縺ｦ縺ｮ譁�ｭ励↓蜷梧凾驕ｩ逕ｨ縺吶ｋ縺九←縺�°
        shuffle: true, // 譁�ｭ苓｡ｨ遉ｺ縺後Λ繝ｳ繝繝�縺ｪ鬆�↓陦ｨ遉ｺ縺輔ｌ繧九°縺ｩ縺�°
    },
    out: { // 邨ゆｺ�凾縺ｮ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ險ｭ螳壹ｒ縺励◆縺��ｴ蜷医�縺薙％縺ｫ霑ｽ險�
    }
}
var element
//蛻晄悄險ｭ螳�
function RandomInit() {
    element = $(".randomAnime");
    $(element[0]).textillate(Obj);
}

function RandomAnimeControl() {
    var elemPos = $(element[1]).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scroll >= elemPos - windowHeight) {
        $(element[1]).textillate(Obj);
    }
}

/*===========================================================*/
/* 蜊ｰ雎｡邱ｨ 5-4 蟷ｾ菴募ｭｦ讓｡讒�*/
/*===========================================================*/

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 38,
            /*縺薙�謨ｰ蛟､繧貞､画峩縺吶ｋ縺ｨ蟷ｾ菴募ｭｦ讓｡讒倥�謨ｰ縺悟｢玲ｸ帙〒縺阪ｋ*/
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#11a0ad" /*濶ｲ*/
        },
        "shape": {
            "type": "polygon",
            /*蠖｢迥ｶ縺ｯpolygon繧呈欠螳�*/
            "stroke": {
                "width": 0,
            },
            "polygon": {
                "nb_sides": 3 //螟夊ｧ貞ｽ｢縺ｮ隗偵�謨ｰ
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
            /*縺薙�謨ｰ蛟､繧貞ｰ上＆縺上☆繧九→繧�▲縺上ｊ縺ｪ蜍輔″縺ｫ縺ｪ繧�*/
            "direction": "none",
            /*譁ｹ蜷第欠螳壹↑縺�*/
            "random": false,
            /*蜍輔″縺ｯ繝ｩ繝ｳ繝繝�縺ｫ縺励↑縺�*/
            "straight": false,
            /*蜍輔″繧偵→縺ｩ繧√↑縺�*/
            "out_mode": "out",
            /*逕ｻ髱｢縺ｮ螟悶↓蜃ｺ繧九ｈ縺�↓謠丞�*/
            "bounce": false,
            /*霍ｳ縺ｭ霑斐ｊ縺ｪ縺�*/
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

/*===========================================================*/
/* 蜊ｰ雎｡邱ｨ 4 譛菴朱剞縺翫⊂縺医※縺翫″縺溘＞蜍輔″*/
/*===========================================================*/

// 蜍輔″縺ｮ縺阪▲縺九￠縺ｮ襍ｷ轤ｹ縺ｨ縺ｪ繧九い繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ蜷榊燕繧貞ｮ夂ｾｩ
function fadeAnime() {
    //4-1 縺ｵ繧上▲�井ｸ翫°繧会ｼ�
    $('.fadeDownTrigger').each(function () { //fadeDownTrigger縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪′
        var elemPos = $(this).offset().top - 50; //隕∫ｴ�繧医ｊ縲�50px荳翫�
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeDown'); // 逕ｻ髱｢蜀�↓蜈･縺｣縺溘ｉfadeDown縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ霑ｽ險�
        } else {
            $(this).removeClass('fadeDown'); // 逕ｻ髱｢螟悶↓蜃ｺ縺溘ｉfadeDown縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ螟悶☆
        }
    });

    // 4-7 縺ｫ繧��繧難ｼ域ｻ代ｉ縺九↓螟牙ｽ｢縺励※蜃ｺ迴ｾ��	
    $('.smoothTrigger').each(function () { //smoothTrigger縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪′
        var elemPos = $(this).offset().top - 50; //隕∫ｴ�繧医ｊ縲�50px荳翫�
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('smooth'); // 逕ｻ髱｢蜀�↓蜈･縺｣縺溘ｉsmooth縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ霑ｽ險�
        } else {
            $(this).removeClass('smooth'); // 逕ｻ髱｢螟悶↓蜃ｺ縺溘ｉsmooth縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ螟悶☆
        }
    });

}

/*===========================================================*/
/*  蜊ｰ雎｡邱ｨ縲5-11 豕｢謇薙▽��1縺､驥阪↑繧翫≠繧奇ｼ�*/
/*===========================================================*/

var unit = 100,
    canvasList, // 繧ｭ繝｣繝ｳ繝舌せ縺ｮ驟榊�
    info = {}, // 蜈ｨ繧ｭ繝｣繝ｳ繝舌せ蜈ｱ騾壹�謠冗判諠��ｱ
    colorList; // 蜷�く繝｣繝ｳ繝舌せ縺ｮ濶ｲ諠��ｱ

/**
 * Init function.
 * 
 * Initialize variables and begin the animation.
 */
function init() {
    info.seconds = 0;
    info.t = 0;
    canvasList = [];
    colorList = [];
    // canvas1蛟九ａ縺ｮ濶ｲ謖�ｮ�
    canvasList.push(document.getElementById("waveCanvas"));
    colorList.push(['#11a0ad', '#11a0ad']); //驥阪�繧区ｳ｢縺ｮ濶ｲ險ｭ螳�
    // 蜷�く繝｣繝ｳ繝舌せ縺ｮ蛻晄悄蛹�
    for (var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        canvas.width = document.documentElement.clientWidth; //Canvas縺ｮwidth繧偵え繧｣繝ｳ繝峨え縺ｮ蟷�↓蜷医ｏ縺帙ｋ
        canvas.height = 200; //豕｢縺ｮ鬮倥＆
        canvas.contextCache = canvas.getContext("2d");
    }
    // 蜈ｱ騾壹�譖ｴ譁ｰ蜃ｦ逅�他縺ｳ蜃ｺ縺�
    update();
}

function update() {
    for (var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        // 蜷�く繝｣繝ｳ繝舌せ縺ｮ謠冗判
        draw(canvas, colorList[canvasIndex]);
    }
    // 蜈ｱ騾壹�謠冗判諠��ｱ縺ｮ譖ｴ譁ｰ
    info.seconds = info.seconds + .014;
    info.t = info.seconds * Math.PI;
    // 閾ｪ霄ｫ縺ｮ蜀崎ｵｷ蜻ｼ縺ｳ蜃ｺ縺�
    setTimeout(update, 35);
}

/**
 * Draw animation function.
 * 
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw(canvas, color) {
    // 蟇ｾ雎｡縺ｮcanvas縺ｮ繧ｳ繝ｳ繝�く繧ｹ繝医ｒ蜿門ｾ�
    var context = canvas.contextCache;
    // 繧ｭ繝｣繝ｳ繝舌せ縺ｮ謠冗判繧偵け繝ｪ繧｢
    context.clearRect(0, 0, canvas.width, canvas.height);

    //豕｢縺ｮ驥阪↑繧翫ｒ謠冗判 drawWave(canvas, color[謨ｰ蟄余, 騾城℃, 豕｢縺ｮ蟷��zoom,豕｢縺ｮ髢句ｧ倶ｽ咲ｽｮ縺ｮ驕�ｌ )
    drawWave(canvas, color[0], 0.5, 3, 0); //0.5竍帝城℃蜈ｷ蜷�50%縲�3竍呈焚蟄励′螟ｧ縺阪＞縺ｻ縺ｩ豕｢縺後↑縺�繧峨°
    drawWave(canvas, color[1], 0.4, 2, 250);
    //    drawWave(canvas, color[2], 0.2, 1.6, 100);
}

/**
 * 豕｢繧呈緒逕ｻ
 * drawWave(濶ｲ, 荳埼乗�蠎ｦ, 豕｢縺ｮ蟷��zoom, 豕｢縺ｮ髢句ｧ倶ｽ咲ｽｮ縺ｮ驕�ｌ)
 */
function drawWave(canvas, color, alpha, zoom, delay) {
    var context = canvas.contextCache;
    context.fillStyle = color; //蝪励ｊ縺ｮ濶ｲ
    context.globalAlpha = alpha;
    context.beginPath(); //繝代せ縺ｮ髢句ｧ�
    drawSine(canvas, info.t / 0.5, zoom, delay);
    context.lineTo(canvas.width + 10, canvas.height); //繝代せ繧辰anvas縺ｮ蜿ｳ荳九∈
    context.lineTo(0, canvas.height); //繝代せ繧辰anvas縺ｮ蟾ｦ荳九∈
    context.closePath() //繝代せ繧帝哩縺倥ｋ
    context.fill(); //豕｢繧貞｡励ｊ縺､縺ｶ縺�
}

/**
 * Function to draw sine
 * 
 * The sine curve is drawn in 10px segments starting at the origin. 
 * drawSine(譎る俣, 豕｢縺ｮ蟷��zoom, 豕｢縺ｮ髢句ｧ倶ｽ咲ｽｮ縺ｮ驕�ｌ)
 */
function drawSine(canvas, t, zoom, delay) {
    var xAxis = Math.floor(canvas.height / 2);
    var yAxis = 0;
    var context = canvas.contextCache;
    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t; //譎る俣繧呈ｨｪ縺ｮ菴咲ｽｮ縺ｨ縺吶ｋ
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis); //繧ｹ繧ｿ繝ｼ繝井ｽ咲ｽｮ縺ｫ繝代せ繧堤ｽｮ縺�

    // Loop to draw segments (讓ｪ蟷��蛻�∵ｳ｢繧呈緒逕ｻ)
    for (i = yAxis; i <= canvas.width + 10; i += 10) {
        x = t + (-yAxis + i) / unit / zoom;
        y = Math.sin(x - delay) / 3;
        context.lineTo(i, unit * y + xAxis);
    }
}

init();

/*===========================================================*/
/* 髢｢謨ｰ繧偵∪縺ｨ繧√ｋ*/
/*===========================================================*/

// 逕ｻ髱｢繧偵せ繧ｯ繝ｭ繝ｼ繝ｫ繧偵＠縺溘ｉ蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ
$(window).scroll(function () {
    fadeAnime(); //蜊ｰ雎｡邱ｨ 4 譛菴朱剞縺翫⊂縺医※縺翫″縺溘＞蜍輔″縺ｮ髢｢謨ｰ繧貞他縺ｶ
    RandomAnimeControl(); //蜊ｰ雎｡邱ｨ 8-8 繝�く繧ｹ繝医′繝ｩ繝ｳ繝繝�縺ｫ蜃ｺ迴ｾ縲√い繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ逕ｨ縺ｮ髢｢謨ｰ繧貞他縺ｶ
});

// 繝壹�繧ｸ縺瑚ｪｭ縺ｿ霎ｼ縺ｾ繧後◆繧峨☆縺舌↓蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ
$(window).on('load', function () {

    /*===========================================================*/
    /*讖溯�邱ｨ  4-1-2 繝励Ο繧ｰ繝ｬ繧ｹ繝舌��区焚蟄励き繧ｦ繝ｳ繝医い繝��*/
    /*===========================================================*/

    //繝�く繧ｹ繝医�繧ｫ繧ｦ繝ｳ繝医い繝��+繝舌�縺ｮ險ｭ螳�
    var bar = new ProgressBar.Line(splash_text, { //id蜷阪ｒ謖�ｮ�
        easing: 'easeInOut', //繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ蜉ｹ譫徑inear縲‘aseIn縲‘aseOut縲‘aseInOut縺梧欠螳壼庄閭ｽ
        duration: 1000, //譎る俣謖�ｮ�(1000��1遘�)
        strokeWidth: 0.2, //騾ｲ謐励ご繝ｼ繧ｸ縺ｮ螟ｪ縺�
        color: '#00b7b8', //騾ｲ謐励ご繝ｼ繧ｸ縺ｮ繧ｫ繝ｩ繝ｼ
        trailWidth: 0.2, //繧ｲ繝ｼ繧ｸ繝吶�繧ｹ縺ｮ邱壹�螟ｪ縺�
        trailColor: '#ccc', //繧ｲ繝ｼ繧ｸ繝吶�繧ｹ縺ｮ邱壹�繧ｫ繝ｩ繝ｼ
        text: { //繝�く繧ｹ繝医�蠖｢迥ｶ繧堤峩謗･謖�ｮ�				
            style: { //螟ｩ蝨ｰ荳ｭ螟ｮ縺ｫ驟咲ｽｮ
                position: 'absolute',
                left: '50%',
                top: '50%',
                padding: '0',
                margin: '-30px 0 0 0', //繝舌�繧医ｊ荳翫↓驟咲ｽｮ
                transform: 'translate(-50%,-50%)',
                'font-size': '1rem',
                color: '#00b7b8',
            },
            autoStyleContainer: false //閾ｪ蜍穂ｻ倅ｸ弱�繧ｹ繧ｿ繧､繝ｫ繧貞�繧�
        },
        step: function (state, bar) {
            bar.setText(Math.round(bar.value() * 100) + ' %'); //繝�く繧ｹ繝医�謨ｰ蛟､
        }
    });

    //繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ繧ｹ繧ｿ繝ｼ繝�
    bar.animate(1.0, function () { //繝舌�繧呈緒逕ｻ縺吶ｋ蜑ｲ蜷医ｒ謖�ｮ壹＠縺ｾ縺� 1.0 縺ｪ繧�100%縺ｾ縺ｧ謠冗判縺励∪縺�

        //=====縺薙％縺九ｉ繝ｭ繝ｼ繝�ぅ繝ｳ繧ｰ繧ｨ繝ｪ繧｢��splash繧ｨ繝ｪ繧｢�峨ｒ0.8遘偵〒繝輔ぉ繝ｼ繝峨い繧ｦ繝医＠縺溷ｾ後↓蜍輔°縺励◆縺ЙS繧偵∪縺ｨ繧√ｋ
        $("#splash").delay(500).fadeOut(800, function () { //#splash繧ｨ繝ｪ繧｢繧偵ヵ繧ｧ繝ｼ繝峨い繧ｦ繝医＠縺溷ｾ後↓繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ繧貞ｮ溯｡�

            $('body').addClass('appear'); //繝輔ぉ繝ｼ繝峨い繧ｦ繝亥ｾ恵ody縺ｫappear繧ｯ繝ｩ繧ｹ莉倅ｸ�

            fadeAnime(); //蜊ｰ雎｡邱ｨ 4 譛菴朱剞縺翫⊂縺医※縺翫″縺溘＞蜍輔″縺ｮ髢｢謨ｰ繧貞他縺ｶ
            RandomInit(); //蜊ｰ雎｡邱ｨ 8-8 繝�く繧ｹ繝医′繝ｩ繝ｳ繝繝�縺ｫ蜃ｺ迴ｾ縲∝�譛溯ｨｭ螳壹ｒ隱ｭ縺ｿ霎ｼ縺ｿ
            RandomAnimeControl(); //蜊ｰ雎｡邱ｨ 8-8 繝�く繧ｹ繝医′繝ｩ繝ｳ繝繝�縺ｫ蜃ｺ迴ｾ縲√い繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ逕ｨ縺ｮ髢｢謨ｰ繧貞他縺ｶ
        });
        //=====縺薙％縺ｾ縺ｧ繝ｭ繝ｼ繝�ぅ繝ｳ繧ｰ繧ｨ繝ｪ繧｢��splash繧ｨ繝ｪ繧｢�峨ｒ0.8遘偵〒繝輔ぉ繝ｼ繝峨い繧ｦ繝医＠縺溷ｾ後↓蜍輔°縺励◆縺ЙS繧偵∪縺ｨ繧√ｋ

    });

}); // 縺薙％縺ｾ縺ｧ繝壹�繧ｸ縺瑚ｪｭ縺ｿ霎ｼ縺ｾ繧後◆繧峨☆縺舌↓蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ