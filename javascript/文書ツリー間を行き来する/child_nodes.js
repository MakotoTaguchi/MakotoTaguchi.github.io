'use strict';

// <select id="food">���擾
var s = document.getElementById('food');
// <select>�v�f�z���̎q�m�[�h���擾
var opts = s.childNodes;
// �q�m�[�h�����Ɏ擾
for (var i = 0, len = opts.length; i < len; i++) {
    var opt = opts.item(i);
    // �q�m�[�h���v�f�m�[�h�ł���ꍇ�ɂ̂݁A���̒l�����O�\��
    if (opt.nodeType == 1) {
        console.log(opt.value);
    }
}
