'use strict';

var storage = localStorage;
var apple = { name: '���', price: 150, made: '�X' };
storage.setItem('apple', JSON.stringify(apple));
var data = JSON.parse(storage.getItem('apple'));
console.log(data.name);
