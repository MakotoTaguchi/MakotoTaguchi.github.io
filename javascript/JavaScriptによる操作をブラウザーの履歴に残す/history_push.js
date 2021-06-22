'use strict';

var count = 0;
var result = document.getElementById('result');
// [�J�E���g�A�b�v]�{�^�����N���b�N�������ɗ�����ǉ�
document.getElementById('btn').addEventListener('click', function () {
    result.textContent = ++count;
    history.pushState(count, null, '/js/chap07/count/' + count);
});

// [�߂�]�{�^���Ńy�[�W�̏�Ԃ�O�ɖ߂�
window.addEventListener('popstate', function (e) {
    count = e.state;
    result.textContent = count;
})
