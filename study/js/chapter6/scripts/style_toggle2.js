document.addEventListener('DOMContentLoaded', function () {
    var elem = document.getElementById('elem');

    elem.addEventListener('click', function () {
        var classes = this.className.split(' ');
        var index = classes.indexOf('highlight');
        if (index === -1) {
            classes.push('highlight');
        } else {
            classes.splice(index, 1);
        }
        this.className = classes.join(' ');
    }, false);
}, false);