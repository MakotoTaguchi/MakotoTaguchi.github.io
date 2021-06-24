'use strict';

function asyncProcess(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // ����value������`�ł��邩�ǂ����ɂ���Đ��ۂ𔻒�
            if (value) {
                resolve(`���͒l�F${value}`);
            } else {
                reject('���͂͋�ł�');
            }
        }, 500);
    });
}

// �����asyncProcess�֐��Ăяo��
asyncProcess('�g�N�W���E')
    .then(
        response => {
            console.log(response);
            // ����̎��s�ɐ���������A2��ڂ�asyncProcess�֐������s
            return asyncProcess('�j���T�u���E');
        }
    )
    .then(
        response => {
            console.log(response);
        },
        error => {
            console.log(`�G���[�F${error}`);
        }
    );
