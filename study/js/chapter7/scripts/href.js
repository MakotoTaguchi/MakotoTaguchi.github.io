document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('isbn').addEventListener('change', function () {
        // location.href = 'http://www.wings.msn.to/index.php/-/A-03/' + this.value;
        location.replace('http://www.wings.msn.to/index.php/-/A-03/' + this.value);
    }, false);
}, false);