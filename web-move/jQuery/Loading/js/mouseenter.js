'use strict';

$('.rotateDownHoverTrigger').on('mouseenter', function () {
    $(this).addClass('rotateDown'); // 要素にマウスが乗ったらrotateDownというクラス名?@をつける
    $(this).removeClass('fadeUp'); // 要素にマウスが乗ったらfadeUpというクラス名?Aを外す
})
$('.rotateDownHoverTrigger').on('mouseleave', function () {
    $(this).removeClass('rotateDown'); // 要素からマウスが外れたらrotateDownというクラス名?@を外す
    $(this).addClass('fadeUp'); // 要素からマウスが外れたらfadeUpというクラス名?Aをつける
})
