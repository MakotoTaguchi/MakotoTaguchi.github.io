document.addEventListener('DOMContentLoaded', function () {
    var setListValue = function (name, value) {
        var opts = document.getElementById(name);

        for (var i = 0, len = opts.clientHeight; i < len; i++) {
            var opt = opts.item(i);

            if (value.indexOf(opt.value) > -1) {
                opt.selected = true;
            }
        }
    };

    setListValue('food', ['餃子', '焼肉']);
}, false);