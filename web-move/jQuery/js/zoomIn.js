'use strict';

// �v�f��N���X�����N���b�N�����瓮�����ꍇ�̋L�q
$('.zoomInClickTrigger').on('click', function () {
    $(this).addClass('zoomIn'); // �v�f���N���b�N������zoomIn�Ƃ����N���X����ǋL
})
// �����܂ŗv�f��N���X�����N���b�N�����瓮�����ꍇ�̋L�q

// �v�f��N���X�����N���b�N�����牽�x���������ꍇ�̋L�q
$('.zoomInClickTriggerTimes').on('click', function () {
    $(this).addClass('zoomIn'); // �v�f���N���b�N������zoomIn�Ƃ����N���X����ǋL
    $(".zoomIn").on('animationend', function () {
        $(this).removeClass('zoomIn'); // �A�j���[�V�������I��������N���X������菜��
    });
});
// �����܂ŗv�f��N���X�����N���b�N�����瓮�����ꍇ�̋L�q
