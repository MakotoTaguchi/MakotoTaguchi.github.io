var app = new Vue({
    el: '#app',
    data: {
        age: 'under13'
    },
    computed: {
        fare: function () {
            if (this.age == 'under3') {
                return 0;
            } else if (this.age == 'under13') {
                return 1000;
            } else if (this.age == 'under65') {
                return 2000;
            } else if (this.age == 'over65') {
                return 0;
            } else {
                return -1;
            }
        }
    }
});