'use strict';

$('.rotateDownHoverTrigger').on('mouseenter', function () {
    $(this).addClass('rotateDown'); // 要素にマウスが乗ったらrotateDownというクラス名①をつける
    $(this).removeClass('fadeUp'); // 要素にマウスが乗ったらfadeUpというクラス名②を外す
})
$('.rotateDownHoverTrigger').on('mouseleave', function () {
    $(this).removeClass('rotateDown'); // 要素からマウスが外れたらrotateDownというクラス名①を外す
    $(this).addClass('fadeUp'); // 要素からマウスが外れたらfadeUpというクラス名②をつける
})
