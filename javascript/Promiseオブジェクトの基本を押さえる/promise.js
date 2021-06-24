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

asyncProcess('�g�N�W���E').then(
    // �����������Ɏ��s����鏈��
    response => {
        console.log(response);
    },
    // ���s�������Ɏ��s����鏈��
    error => {
        console.log(`�G���[�F${error}`);
    }
);
