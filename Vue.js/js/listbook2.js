var vm = new Vue({
    el: '#app',
    data: {
        items: [],
        reverse: false,
        orderIcon: '▲'
    },
    computed: {
        sortedItems: function () {
            if (this.reverse) {
                return this.items.slice().sort(function (a, b) {
                    return b.price - a.price;
                });
            } else {
                return this.items.slice().sort(function (a, b) {
                    return a.price - b.price;
                });
            }
        }
    },
    methods: {
        reverseOrder: function () {
            this.reverse = !this.reverse;
            if (this.reverse) {
                this.orderIcon = '▼';
            } else {
                this.orderIcon = '▲';
            }
        }
    },
    created: function () {
        self = this;
        axios
            .get('./data/items.json')
            .then(res => (self.items = res.data.items))
            .catch(err => console.log(err))
    }
});