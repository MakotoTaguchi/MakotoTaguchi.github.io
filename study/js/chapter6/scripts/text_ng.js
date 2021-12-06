document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', function () {
        var name = document.getElementById('name');
        var result = document.getElementById('result');
        result.innerHTML = 'こんにちは、' + name.value + 'さん！';
    }, false);
}, false);