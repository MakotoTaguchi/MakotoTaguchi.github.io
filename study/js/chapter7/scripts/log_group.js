console.group('上位グループ');
for (var i = 0; i < 3; i++){
    console.group('下位グループ' + i);
    for (var j = 0; j < 3; j++){
        console.log(i, j);
    }
    console.groupEnd();
}