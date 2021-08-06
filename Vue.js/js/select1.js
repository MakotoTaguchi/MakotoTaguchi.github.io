var app = new Vue({
    el: '#app',
    data: {
        age: ''
    },
    computed: {
        fare: function () {
            console.log(this.age);
            if (this.age == '3才未満') {
                return 0;
            } else if (this.age == '13才未満') {
                return 1000;
            } else if (this.age == '65才未満') {
                return 2000;
            } else if (this.age == '65才以上') {
                return 0;
            } else {
                return - 1;
            }
        }
    }
});