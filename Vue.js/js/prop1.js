var bookComp = {
    props: ['bookName'],
    template:'<p>{{bookName}}</p>'
}

var app = new Vue({
    el: '#app',
    components: {
        'book-comp': bookComp
    }
});