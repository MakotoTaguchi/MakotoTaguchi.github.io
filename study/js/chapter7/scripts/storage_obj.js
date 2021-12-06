var storage = localStorage;
var apple = {
    name: 'りんご',
    price: 150,
    made: '青森'
};
storage.setItem('apple', JSON.stringify(apple));
var data = JSON.parse(storage.getItem('apple'));
console.log(data.price);