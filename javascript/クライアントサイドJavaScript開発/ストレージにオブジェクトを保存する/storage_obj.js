'use strict';

var storage = localStorage;
var apple = { name: '‚è‚ñ‚²', price: 150, made: 'ÂX' };
storage.setItem('apple', JSON.stringify(apple));
var data = JSON.parse(storage.getItem('apple'));
console.log(data.name);
