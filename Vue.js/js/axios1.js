var vm = new Vue({
    el: '#app',
    created: function () {
        self = this;
        axios
            .get('./data/test.json')
            .then(function (res) {
                console.log(res);
            })
            .catch(function (err) {
                console.log(err);
            });
    }
});