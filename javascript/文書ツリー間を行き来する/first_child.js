'use strict';

// <select id="food">���擾
var s = document.getElementById('food');
// <select>�v�f�̍ŏ��̎q�m�[�h���擾
var child = s.firstChild;
// �q�m�[�h�����݂���ԁA���[�v���J��Ԃ�
while (child) {
    if (child.nodeType === 1) {
        console.log(child.value);
    }
    //�@���̎q�m�[�h�i��m�[�h�j���擾
    child = child.nextSibling;
}
