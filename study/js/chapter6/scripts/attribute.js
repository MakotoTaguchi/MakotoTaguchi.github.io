document.addEventListener('DOMContentLoaded', function () {
    var logo = document.getElementById('logo');
    var attrs = logo.attributes;
    for (var i = 0, len = attrs.length; i < len; i++) {
        var attr = attrs.item(i);
        console.log(attr.name + ':' + attr.value);
    }
}, false);