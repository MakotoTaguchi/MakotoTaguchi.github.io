var dat = new Date(2016, 11, 25, 11, 37, 15, 999);
console.log(dat);
console.log(dat.getFullYear());
console.log(dat.getMonth());
console.log(dat.getDate());
console.log(dat.getDay());
console.log(dat.getHours());
console.log(dat.getMinutes());
console.log(dat.getSeconds());
console.log(dat.getMilliseconds());
console.log(dat.getTime());
console.log(dat.getTimezoneOffset());

console.log(dat.getUTCFullYear());
console.log(dat.getUTCMonth());
console.log(dat.getUTCDate());
console.log(dat.getUTCDay());
console.log(dat.getUTCHours());
console.log(dat.getUTCMinutes());
console.log(dat.getUTCSeconds());
console.log(dat.getUTCMilliseconds());

var dat2 = new Date();
dat2.setFullYear(2017);
dat2.setMonth(7);
dat2.setDate(5);
dat2.setHours(11);
dat2.setMinutes(37);
dat2.setSeconds(15);
dat2.setMilliseconds(513);

console.log(dat2.toLocaleString());
console.log(dat2.toUTCString());
console.log(dat2.toDateString());
console.log(dat2.toTimeString());
console.log(dat2.toLocaleDateString());
console.log(dat2.toLocaleTimeString());
console.log(dat2.toJSON());

console.log(Date.parse('2016/11/05'));
console.log(Date.UTC(2016, 11, 5));
console.log(Date.now());