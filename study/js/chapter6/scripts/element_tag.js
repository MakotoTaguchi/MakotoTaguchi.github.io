var list = document.getElementsByTagName('a');
for (var i = 0, len = list.length; i < len; i++){
    console.log(list.item(i).href);
}