'use strict';

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('message', function (e) {
        var origin = 'http://localhost:8080';
        if (e.origin !== origin) { return; }
        document.getElementById('result').textContent = e.data;

        //���݂̓��t��ԑ�
        var current = new Date();
        e.source.postMessage(current, origin);
    }, false);
}, false);
