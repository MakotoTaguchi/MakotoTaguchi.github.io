var app = new Vue({
    el: '#app',
    components: {
        'my-comp': {
            template: '<h1>私の名前は<slot>名前</slot>です</h1>'
        }
    }
});