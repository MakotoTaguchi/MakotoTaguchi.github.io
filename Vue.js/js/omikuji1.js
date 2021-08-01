var app = new Vue({
    el: '#app',
    data: {
        kuji: 'img/omikuji.png',
        kujis: ['daikichi.png', 'kichi.png', 'kyou.png']
    },
    methods: {
        uranau: function () {
            this.kuji =
                'img/' +
                this.kujis[
                    Math.floor(Math.random() * this.kujis.length)
                ];
        }
    }
});