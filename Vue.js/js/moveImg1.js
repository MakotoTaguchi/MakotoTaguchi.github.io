var app = new Vue({
    el: '#app',
    data: {
        imgWidth: 200,
        imgHeight: 230,
        myStyle: {
            position: 'absolute',
            left: '50px',
            top: '100px',
            transition: 'all ls'
        }
    },
    methods: {
        move: function (e) {
            this.myStyle.left = e.clientX - this.imgWidth / 2 + 'px';
            this.myStyle.top = e.clientY - this.imgHeight / 2 + 'px';
        }
    }
});