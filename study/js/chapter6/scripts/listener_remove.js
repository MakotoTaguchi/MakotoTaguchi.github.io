document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('btn');
    var listener = function () {
        window.alert('こんにちは、世界！');
    };

    btn.addEventListener('click', listener, false);

    btn.removeEventListener('click', listener, false);
}, false);