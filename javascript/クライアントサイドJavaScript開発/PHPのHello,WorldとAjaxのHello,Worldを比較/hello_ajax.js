'use strict';

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', function () {
        var result = document.getElementById('result');
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) { // �ʐM������������
                if (xhr.status === 200) { // �ʐM������������
                    result.textContent = xhr.responseText;
                } else { // �ʐM�����s������
                    result.textContent = '�T�[�o�[�G���[���������܂����B';
                }
            } else { // �ʐM���������鎞
                result.textContent = '�ʐM��...';
            }
        };
        
        // �T�[�o�[�Ƃ̔񓯊��ʐM���J�n
        xhr.open('GET', 'hello_ajax.php?name=' + encodeURIComponent(document.getElementById('name').value), true);
        xhr.send(null);
        
        xhr.addEventListener('loadstart', function () {
            result.textContent = '�ʐM��...';
        }, false);

        xhr.addEventListener('load', function () {
            result.textContent = xhr.responseText;
        }, false);

        xhr.addEventListener('error', function () {
            result.textContent = '�T�[�o�[�G���[���������܂���';
        }, false);
    }, false);
}, false);