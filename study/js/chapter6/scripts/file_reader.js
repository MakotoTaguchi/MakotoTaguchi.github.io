window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('file').addEventListener('change', function (e) {
        var input = document.getElementById("file").files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            document.getElementById("result").textContent = reader.result;
        }, true);
        reader.addEventListener('error', function () {
            console.log(reader.error.message);
        }, true);
        reader.readAsText(input, 'UTF-8');
        reader.abort();
    }, true);
});