'use strict';

var count = 0;
var result = document.getElementById('result');
// [�J�E���g�A�b�v]�{�^�����N���b�N�������ɗ�����ǉ�
document.getElementById('btn').addEventListener('click', function () {
    result.textContent = ++count;
    history.pushState(count, null, '/MakotoTaguchi.github.io/javascript/JavaScript�ɂ�鑀����u���E�U�[�̗����Ɏc��/history_push.html');
});

// [�߂�]�{�^���Ńy�[�W�̏�Ԃ�O�ɖ߂�
window.addEventListener('popstate', function (e) {
    count = e.state;
    result.textContent = count;
})
