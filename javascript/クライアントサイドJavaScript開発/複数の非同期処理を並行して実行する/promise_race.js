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

Promise.race([asyncProcess('�g�N�W���E'), asyncProcess('�j���T�u���E'), asyncProcess('��������')]).then(
    response => {
        console.log(response);
    },
    error => {
        console.log(`�G���[�F${error}`);
    }
);
