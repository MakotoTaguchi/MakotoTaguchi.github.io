document.addEventListener('DOMContentLoaded', function () {
    var data = {
        title: 'Javaポケットリファレンス',
        price: 2680,
        show: function () {
            console.log(this.title + '/' + this.price + '円');
        }
    };

    // document.getElementById('btn').addEventListener('click', data.show, false);
    document.getElementById('btn').addEventListener('click', data.show.bind(data), false);
}, false);