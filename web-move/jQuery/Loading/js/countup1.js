'use strict';

// �e�L�X�g�̃J�E���g�A�b�v�ݒ�
var bar = new ProgressBar.Line(splash_text, { //id�����w��
    strokeWidth: 0, //�i���Q�[�W�̑���
    duration: 1000, //���Ԏw��i1000 �� 1�b�j
    trailWidth: 0, //���̑���
    text: { //�e�L�X�g�̌`��𒼐ڎw��
        style: { //�V�n�����ɔz�u
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: '0',
            margin: '0',
            transform: 'translate(-50%,-50%)',
            'font-size': '1.2rem',
            color: '#fff',
        },
        autoStyleContainer: false //�����t�^�̃X�^�C����؂�
    },
    step: function (state, bar) {
        bar.setText(Math.round(bar.value() * 100) + ' %'); //�e�L�X�g�̐��l
    }
});

// �A�j���[�V�����X�^�[�g
bar.animate(1.0, function () { //�o�[��`�悷�銄�����w�肵�܂� 1.0 �Ȃ�100%�܂ŕ`�悵�܂�
    // �A�j���[�V�������I�������#splash�G���A���t�F�[�h�A�E�g
    $("#splash").delay(500).fadeOut(800);
});
