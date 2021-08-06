var app = new Vue({
    el: '#app',
    data: {
        newtodo: '',
        todolist: []
    },
    methods: {
        addTodo: function () {
            if (this.newtodo == '') return;
            this.todolist.push({ text: this.newtodo, done: false, hover: false });
            this.newtodo = '';
        },
        remove: function (index) {
            if (this.todolist[index].done == true) {
                this.todolist.splice(index, 1);
            }
        }
    },
});