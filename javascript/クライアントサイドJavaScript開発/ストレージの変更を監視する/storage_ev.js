'use strict';

window.addEventListener('storage', function (e) {
    console.log('�ύX���ꂽ�L�[:' + e.key);
    console.log('�ύX�O�̃L�[�F' + e.oldValue);
    console.log('�ύX��̃L�[�F' + e.newValue);
    console.log('�������y�[�W�F' + e.url);
}, false);
