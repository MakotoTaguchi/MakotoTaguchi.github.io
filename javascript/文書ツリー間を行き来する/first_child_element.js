'use strict';

// <select id="food">���擾
var s = document.getElementById('food');
// <select>�v�f�̍ŏ��̎q�m�[�h���擾
var child = s.firstElementChild;
// �q�m�[�h�����݂���ԁA���[�v���J��Ԃ�
while (child) {
    console.log(child.value);
    child = child.nextElementSibling;
}
