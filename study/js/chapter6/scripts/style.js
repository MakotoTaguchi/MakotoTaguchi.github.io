document.addEventListener('DOMContentLoaded', function () {
    var elem = document.getElementById('elem');

    elem.addEventListener('mousemove', function () {
        this.style.backgroundColor = 'Yellow';
    }, false);

    elem.addEventListener('mouseout', function () {
        this.style.backgroundColor = '';
    }, false);
}, false);