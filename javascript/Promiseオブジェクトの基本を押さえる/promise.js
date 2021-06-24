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

asyncProcess('トクジロウ').then(
    // 成功した時に実行される処理
    response => {
        console.log(response);
    },
    // 失敗した時に実行される処理
    error => {
        console.log(`エラー：${error}`);
    }
);
