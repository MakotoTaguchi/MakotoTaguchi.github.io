document.addEventListener('DOMContentLoaded', function () {
    var Counter = function (elem) {
        this.count = 0;
        this.elem = elem;
        // elem.addEventListener('click', function () {
        //     this.count++;
        //     this.show();
        // }, false);
        elem.addEventListener('click', () => {
            this.count++;
            this.show();
        }, false);
    };

    Counter.prototype.show = function () {
        console.log(this.elem.id + 'は' + this.count + '回クリックされました。');
    }

    var c = new Counter(document.getElementById('btn'));
}, false);