'use strict';

document.getElementById('btn').addEventListener('click', function () {
    // �T�[�r�X�ւ̖₢���킹URL���쐬
    var url = 'http://b.hatena.ne.jp/entry/jsonlite/?callback=show&url=' + encodeURIComponent(document.getElementById('url').value);
    // �T�[�r�X����JavaScript�̃R�[�h���󂯎�邽�߂�<script>�v�f�𐶐�
    var scr = document.createElement('script');
    scr.src = url;
    document.getElementsByTagName('body').item(0).appendChild(scr);
}, false);

function show(data) {
    if (data === null) {
        result.textContent = '�u�b�N�}�[�N�͑��݂��܂���ł���';
    } else {
        // �u�b�N�}�[�N���擾�ł����ꍇ�A���[�U�����X�g�\��
        var bms = data.bookmarks;
        var ul = document.createElement('ul');
        for (var i = 0; i < bms.length; i++) {
            // <li>�A<a>�v�f�A�e�L�X�g�𐶐��i<a>�v�f�ɂ�href������ݒ�j
            var li = document.createElement('li');
            var anchor = document.createElement('a');
            anchor.href = 'http://b.hatena.ne.jp/' + bms[i].user;
            var text = document.createTextNode(bms[i].user + ' ' + bms[i].comment);
            // �e�L�X�g��<a>��<li>��<ul>�̏��Ƀm�[�h��g�ݗ���
            anchor.appendChild(text);
            li.appendChild(anchor);
            ul.appendChild(li);
        }
        result.appendChild(ul);
    }
}
