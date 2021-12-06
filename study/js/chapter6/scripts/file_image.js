window.addEventListener('DOMContentLoaded', function () {
    document.getElementById("file").addEventListener('change', function (e) {
        var input = document.getElementById("file").files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function (e) {
            document.getElementById("result").src = reader.result;
        }, false);
        reader.readAsDataURL(input);
    }, true);
})