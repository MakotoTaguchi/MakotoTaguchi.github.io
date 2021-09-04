var vm = new Vue({
    el: '#app',
    data: {
        student: {}
    },
    created: function () {
        self = this;
        axios
            .get('./data/test.json')
            .then(res => (self.student = res.data))
            .catch(err => console.log(err))
    }
});