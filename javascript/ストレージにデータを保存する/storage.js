'use strict';

var storage = localStorage;
storage.setItem('fruit1', '‚è‚ñ‚²');
storage.fruit2 = '‚Ý‚©‚ñ';
storage['fruit3'] = '‚Ô‚Ç‚¤';
console.log(storage.getItem('fruit1'));
console.log(storage.fruit2);
console.log(storage['fruit3']);
