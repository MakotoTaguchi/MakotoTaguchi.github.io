'use strict';

$('.rotateDownHoverTrigger').on('mouseenter', function () {
    $(this).addClass('rotateDown'); // �v�f�Ƀ}�E�X���������rotateDown�Ƃ����N���X���@������
    $(this).removeClass('fadeUp'); // �v�f�Ƀ}�E�X���������fadeUp�Ƃ����N���X���A���O��
})
$('.rotateDownHoverTrigger').on('mouseleave', function () {
    $(this).removeClass('rotateDown'); // �v�f����}�E�X���O�ꂽ��rotateDown�Ƃ����N���X���@���O��
    $(this).addClass('fadeUp'); // �v�f����}�E�X���O�ꂽ��fadeUp�Ƃ����N���X���A������
})
