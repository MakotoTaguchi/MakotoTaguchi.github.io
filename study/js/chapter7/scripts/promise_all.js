function asyncProcess(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value) {
                resolve(`入力値： ${value}`);
            } else {
                reject('入力値は空です');
            }
        }, 500);
    });
}

Promise.all([
    asyncProcess(),
    asyncProcess('ニンサブロウ'),
    asyncProcess('リンリン')
]).then(
    Response => {
        console.log(Response);
    },
    Error => {
        console.log(`エラー： ${Error}`);
    }
);