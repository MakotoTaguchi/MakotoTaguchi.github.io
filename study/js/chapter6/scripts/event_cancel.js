document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('inner').addEventListener('click', function (e) {
        window.alert('#innerリスナーが発生しました。');
        // e.stopPropagation();
        // e.stopImmediatePropagation();
        e.preventDefault();
    }, false);

    document.getElementById('inner').addEventListener('click', function (e) {
        window.alert('#innerリスナー2が発生しました。');
    }, false);

    document.getElementById('outer').addEventListener('click', function () {
        window.alert('#outerリスナーが発生しました。');
    }, false);
}, false);