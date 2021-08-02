var app = new Vue({
    el: '#app',
    data: {
        time: (new Date()).getHours()
    },
    methods: {
        getTime: function () {
            if (0 <= this.time & this.time < 12) {
                return 'morning';
            } else if (12 <= this.time & this.time < 18) {
                return 'afternoon';
            } else if (18 < this.time & this.time < 21) {
                return 'evening';
            } else {
                return 'night';
            }
        }
    }
});