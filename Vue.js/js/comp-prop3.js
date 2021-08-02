var app = new Vue({
    el: '#app',
    data: {
        hankei: 1
    },
    methods: {
        menseki: function () {
            return (Math.PI * this.hankei * this.hankei).toFixed(1);
        }
    }
});