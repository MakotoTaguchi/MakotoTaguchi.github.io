'use strict';

var storage = localStorage;
storage.setItem('fruit1', '���');
storage.fruit2 = '�݂���';
storage['fruit3'] = '�Ԃǂ�';
console.log(storage.getItem('fruit1'));
console.log(storage.fruit2);
console.log(storage['fruit3']);
