var app = new Vue({
    el: '#app',
    data: {
        date: new Date()
    },
    filters: {
        jaDay: function (date) {
            var days = ['日', '月', '火', '水', '木', '金', '土'];
            theDay = days[date.getDay()];
            return theDay + '曜日';
        }
    }
});