'use strict';

// �uclass="my"�v�ł���v�f�i�A���J�[�^�O�j���擾
var list = document.getElementsByClassName('my');
// ���X�g���珇�ɃA���J�[�^�O�����o���A����href���������O�ɏo��
for (var i = 0, len = list.length; i < len; i++) {
    console.log(list.item(i).href);
}