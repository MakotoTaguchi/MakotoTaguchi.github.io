'use strict';

function fadeAnime() {
    // �����̂��������̋N�_�ƂȂ�N���X������ʓ��ɓ������瓮���������N���X�����ǉ������L�q��ǋL

    $('.fadeUpTrigger').each(function () { // fadeTrigger�Ƃ����N���X����
        var elemPos = $(this).offset().top - 50; // ���50px���A
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp'); // ��ʓ��ɓ�������fadeUp�Ƃ����N���X����ǋL
        } else {
            $(this).removeClass('fadeUp'); // ��ʊO�ɏo����fadeUp�Ƃ����N���X����ǋL
        }
    });
    // �����܂� �����̂��������w��

} //�����܂ŉ�ʂ��ǂݍ��܂ꂽ��ɓ����L�q

// ��ʂ��ǂݍ��܂ꂽ��ɓ����L�q
$(window).on('load', function () {
    fadeAnime();  /* �A�j���[�V�����p�̊֐����Ă� */
}); // �����܂ŉ�ʂ��ǂݍ��܂ꂽ��ɓ����L�q

// ��ʂ��X�N���[�����ꂽ�瓮���L�q
$(window).scroll(function () {
    fadeAnime(); /* �A�j���[�V�����p�̊֐����Ă� */
});
    // �����܂ŉ�ʂ��X�N���[�����ꂽ�瓮���L�q