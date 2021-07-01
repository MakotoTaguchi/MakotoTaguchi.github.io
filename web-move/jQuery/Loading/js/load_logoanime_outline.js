'use strict';

//SVG�A�j���[�V�����̕`��
var stroke;
stroke = new Vivus('mask', { //�A�j���[�V��������ID�̎w��
    start: 'manual', //�������������X�^�[�g���}�j���A����
    type: 'scenario-sync', //�A�j���[�V�����̃^�C�v��ݒ�
    duration: 10, //�A�j���[�V�����̎��Ԑݒ�B�������������Ȃ�قǑ���
    forceRender: false, //�p�X���X�V���ꂽ�ꍇ�ɍă����_�����O�����Ȃ�
    animTimingFunction: Vivus.EASE, //�����̉��������ݒ�
},
    function () {
        $("#mask").attr("class", "done"); //�`�悪�I�������done�Ƃ����N���X��ǉ�
    }
);

$(window).on('load', function () {
    //���[�f�B���O��ʂ�3�b(3000ms)�ҋ@���Ă���t�F�C�h�A�E�g
    $("#splash").delay(3000).fadeOut('slow');
    //���S��3�b(3000ms)�ҋ@���Ă���t�F�C�h�A�E�g
    $("#splash_logo").delay(3000).fadeOut('slow');
    stroke.play(); //SVG�A�j���[�V�����̎��s
});


