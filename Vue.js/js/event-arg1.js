var app = new Vue({
    el: '#app',
    data: {
        fare: null
    },
    methods: {
        calcFare: function (age) {
            if (age < 10) {
                // 子供料金
                this.fare = 1000;
            } else {
                // 大人料金
                this.fare = 2000;
            }
        }
    }
});