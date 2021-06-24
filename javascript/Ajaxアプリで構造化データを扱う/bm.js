'use strict';

document.addEventListener('DOMContentLoaded', function () {
    // [����]�{�^���N���b�N���Ɏ��s�����R�[�h
    document.getElementById('btn').addEventListener('click', function () {
        var result = document.getElementById('result');
        var xhr = new XMLHttpRequest();
        // �񓯊��ʐM���̏������`
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) { // �ʐM������������
                if (xhr.status === 200) { // �ʐM������������
                    var data = JSON.parse(xhr.responseText);
                    // ���ʂ���bookmarks�L�[�ɃA�N�Z�X
                    if (data === null) {
                        // �u�b�N�}�[�N���Ȃ������ꍇ�ɂ́A�G���[���b�Z�[�W��\��
                        result.textContent = '�u�b�N�}�[�N�͑��݂��܂���ł����B';
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
                        // <div id='result'>�̔z����<ul>�v�f�Œu������
                        result.replaceChild(ul, result.firstChild);
                    }
                } else { // �ʐM�����s������
                    result.textContent = '�T�[�o�[�G���[���������܂����B';
                }
            } else { // �ʐM���������鎞
                result.textContent = '�ʐM��...';
            }
        };

        // �T�[�o�[�Ƃ̔񓯊��ʐM���J�n
        xhr.open('GET', 'bm.php?url=' + encodeURIComponent(document.getElementById('url').value), true);
        xhr.send(null);
    }, false);
}, false);
