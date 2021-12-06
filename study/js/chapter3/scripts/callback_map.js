var data = [2, 3, 4, 5];
var result = data.map(function (value, index, array) {
    return value * value;
});

console.log(result);