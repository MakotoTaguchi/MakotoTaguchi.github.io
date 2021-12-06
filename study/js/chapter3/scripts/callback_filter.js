var data = [4, 9, 16, 25];
var result = data.filter(function (value, index, array) {
    return value % 2 === 1;
});

console.log(result);