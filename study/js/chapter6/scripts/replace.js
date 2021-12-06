document.addEventListener('DOMContentLoaded', function () {
    var list = document.getElementById('list');
    var pic = document.getElementById('pic');
    var del = document.getElementById('del');

    list.addEventListener('click', function (e) {
        var isbn = e.target.getAttribute('data-isbn');

        if (isbn) {
            var img = document.createElement('img');
            img.src = 'http://www.wings.msn.to/books/' + isbn + '/' + isbn + '.jpg';
            img.alt = e.target.textContent;
            img.height = 150;
            img.width = 108;

            if (pic.getElementsByTagName('img').length > 0) {
                pic.replaceChild(img, pic.lastChild);
            } else {
                del.disabled = false;
                pic.appendChild(img);
            }
        }
    }, false);

    del.addEventListener('click', function () {
        pic.removeChild(pic.lastChild);
        del.disabled = true;
    }, false);
}, false);