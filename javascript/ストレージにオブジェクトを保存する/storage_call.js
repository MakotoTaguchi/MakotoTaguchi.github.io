'use strict';

var storage = new MyStorage('JSSample');
storage.setItem('hoge', '‚Ù‚°');
console.log(storage.getItem('hoge'));
storage.save();
