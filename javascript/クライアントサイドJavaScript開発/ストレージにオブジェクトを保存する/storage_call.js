'use strict';

var storage = new MyStorage('JSSample');
storage.setItem('hoge', '�ق�');
console.log(storage.getItem('hoge'));
storage.save();
