var vm = new Vue({
    el: '#app',
    data: {
        items: []
    },
    created: function () {
        self = this;
        axios
            .get('./data/items.json')
            .then(res => (self.items = res.data.items))
            .catch(err => console.log(err))
    }
});