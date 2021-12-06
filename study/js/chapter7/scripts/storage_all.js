var storage = localStorage;
for (var i = 0, len = storage.length; i < len; i++){
    var k = storage.key(i);
    var v = storage[k];
    console.log(k + ':' + v);
}