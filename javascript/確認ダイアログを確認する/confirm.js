'use strict';

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('fm').addEventListener('submit', function (e) {
        if (!window.confirm('�y�[�W�𑗐M���Ă��ǂ��ł����H')) {
            e.preventDefault();
        }
    }, false)
}, false);