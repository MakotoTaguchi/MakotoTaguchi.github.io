'use strict';

function asyncProcess(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 引数valueが未定義であるかどうかによって成否を判定
            if (value) {
                resolve(`入力値：${value}`);
            } else {
                reject('入力は空です');
            }
        }, 500);
    });
}

Promise.race([asyncProcess('トクジロウ'), asyncProcess('ニンサブロウ'), asyncProcess('リンリン')]).then(
    response => {
        console.log(response);
    },
    error => {
        console.log(`エラー：${error}`);
    }
);
