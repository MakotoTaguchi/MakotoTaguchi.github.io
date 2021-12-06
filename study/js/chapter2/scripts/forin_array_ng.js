var data = ['apple', 'orange', 'banana'];
Array.prototype.hoge=function(){}
for (var key in data) {
    console.log(data[key]);
}