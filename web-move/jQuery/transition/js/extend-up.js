'use strict';

$(window).on('load', function () {
    //���S��1.2�b�Ńt�F�[�h�A�E�g����L�q
    $("#splash-logo").delay(1200).fadeOut('slow')
    //���[�f�B���O�G���A(splash)�G���A��1.5�b�Ńt�F�[�h�A�E�g����L�q
    $("#splash").delay(1500).fadeOut('slow', function () {
        $('body').addClass('appear'); //�t�F�[�h�A�E�g��body��appear�N���X�t�^    
    });
    $('.splashbg').on('animationend', function () {
        //�w�i���L�т���ɓ���������JavaScript������ꍇ�͂��̒���JavaScript���L��
    });
});
