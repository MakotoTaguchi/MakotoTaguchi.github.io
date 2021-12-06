var result = 0;
for (var i = 1; i < 100; i++){
    if (i % 2 === 0) { continue; }
    result += i;
}
console.log('合計：' + result);