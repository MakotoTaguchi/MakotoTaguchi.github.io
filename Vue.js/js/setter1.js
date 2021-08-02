var app = new Vue({
    el: '#app',
    data: {
        sYear: 2000
    },
    computed: {
        hYear: {
            get: function () {
                return this.sYear - 1988;
            },
            set: function (newValue) {
                this.sYear = newValue + 1988;
            }
        }
    }
});