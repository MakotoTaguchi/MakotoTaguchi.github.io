var list = document.querySelectorAll('#list .external');
for (var i = 0, len = list.length; i < len; i++) {
    console.log(list.item(i).href);
}