'use strict';

//SVG�A�j���[�V�����̕`��
var stroke;
stroke = new Vivus('mask', { //�A�j���[�V������ID�w��
    start: 'manual', //���������������X�^�[�g���}�j���A����
    type: 'scenario-sync', //�A�j���[�V�����̃^�C�v��ݒ�
    duration: 50, //�A�j���[�V�����̎��Ԑݒ�B�������������Ȃ�قǑ���
    forceRender: false, //�p�X���X�V���ꂽ�ꍇ�ɍă����_�����O�����Ȃ�
    animTimingFunction: Vivus.EASE, //�����̉��������ݒ�
});

$(window).on('load', function () {
    //���[�f�B���O��ʂ�1.5�b(1500ms)�ҋ@���ăt�F�C�h�A�E�g
    $("#splash").delay(1500).fadeOut('slow');
    //���S��1.5�b(1500ms)�ҋ@���Ă���t�F�C�h�A�E�g
    $("#splash_logo").delay(1500).fadeOut('slow');
    stroke.play(); //SVG�A�j���[�V�����̎��s
});