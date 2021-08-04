var app = new Vue({
    el: '#app',
    data: {
        dec: 0
    },
    computed: {
        hex: function () {
            // 16進数に変換して戻す
            return this.dec.toString(16);
        }
    }
});