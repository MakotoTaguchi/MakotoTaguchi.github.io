document.addEventListener('DOMContentLoaded', function () {
    var getSelectValue = function (name) {
        var result = [];
        var opts = document.getElementById(name).options;

        for (var i = 0, len = opts.length; i < len; i++) {
            var opt = opts.item(i);
            if (opt.selected) {
                result.push(opt.value);
            }
        }
        return result;
    };

    document.getElementById('btn').addEventListener('click', function () {
        window.alert(getSelectValue('food'));
    }, false);
}, false);