var ary = [5, 25, 10];
console.log(ary.sort());
console.log(ary.sort(function (x, y) {
    return x - y;
}));