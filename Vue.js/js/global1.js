Vue.filter('jaDay', function (date) {
    var days = ['日', '月', '火', '水', '木', '金', '土'];
    theDay = days[date.getDay()];
    return theDay + '曜日';
})

var app = new Vue({
    el: '#app',
    data: {
        date: new Date()
    },
    filters: {
        nextYear: function (date) {
            this.nextYearDay = new Date(
                date.getFullYear() + 1,
                date.getMonth(),
                date.getDay()
            );
            return this.nextYearDay;
        }
    }
});