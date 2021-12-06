document.addEventListener('DOMContentLoaded', function () {
    var second = document.getElementById('second');
    var li = document.getElementsByTagName('li');

    for (var i = 0, len = li.length; i < len; i++) {
        var item = li.item(i);
        var new_li = document.createElement('li');
        var new_text = document.createTextNode(item.textContent);
        new_li.appendChild(new_text);
        second.appendChild(new_li);
    }
}, false);