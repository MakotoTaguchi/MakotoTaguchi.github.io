var counter = {
    template: '<div><h1>カウンタ</h1>' +
        '<button @click="cdown">カウントダウン</button>' +
        '<p>{{count}}</p>' +
        '</div>',
    data: function () {
        return {
            count: 10
        };
    },
    methods: {
        cdown: function () {
            --this.count;
        }
    }
};

var app = new Vue({
    el: '#app',
    components: {
        counter: counter
    }
});