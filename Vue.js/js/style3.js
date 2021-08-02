var app = new Vue({
    el: '#app',
    data: {
        myStyle: {
            color: 'blue',
            textAlign: 'center',
            fontSize: '3em'
        }
    },
    methods: {
        setAlign: function (align) {
            this.myStyle.textAlign = align;
        }
    }
});