Vue.filter('addComma', function (num, end) {
    if (end) {
        return num.toLocaleString() + end;
    } else {
        return num.toLocaleString();
    }
});
var app = new Vue({
    el: '#app',
    data: {
        num: 10000,
    },
});