'use strict';

document.addEventListener('DOMContentLoaded', function () {
    // �^�C�}�[�ݒu
    var timer = window.setTimeout(
        // ���݂̎�����<div id='result'>�v�f�ɕ\���i5000�~���b���ƂɍX�V�j
        function () {
            var dat = new Date();
            document.getElementById('result').textContent = dat.toLocaleTimeString();
        }, 5000);

    // �{�^���N���b�N���Ƀ^�C�}�[�����𒆎~
    document.getElementById('btn').addEventListener('click', function () {
        window.clearInterval(timer);
    }, false);
}, false);
