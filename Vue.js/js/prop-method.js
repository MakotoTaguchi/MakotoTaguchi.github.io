var app = new Vue({
    el: '#app',
    data: {
        msg: 'Hello'
    },
    computed: {
        dateProp: function () {
            return new Date().toLocaleString();
        }
    },
    methods: {
        dateMethod: function () {
            return new Date().toLocaleString();
        }
    }
});