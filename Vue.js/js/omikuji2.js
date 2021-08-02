var app = new Vue({
    el: '#app',
    data: {
        // kuji: 'img/omikuji.png',
        kujis: ['daikichi.png', 'kichi.png', 'kyou.png'],
        imageAttrs: {
            src: "img/omikuji.png",
            width: "300",
            height: "200",
            alt: "おみくじ"
        }
    },
    methods: {
        uranau: function () {
            console.log(this.imageAttrs)
            this.imageAttrs.src =
                'img/' +
                this.kujis[
                Math.floor(Math.random() * this.kujis.length)
                ];
        }
    }
});