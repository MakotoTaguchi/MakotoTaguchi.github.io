var app = new Vue({
    el: '#app',
    data: {
        now: ""
    },
    methods: {
        showTime: function () {
            now = new Date();
            this.now = now.getHours() + "時" + now.getMinutes() + "分"
        }
    }
});