var dat = new Date(2017, 4, 15, 11, 40);
console.log(dat.toLocaleString());
dat.setMonth(dat.getMonth() + 3);
console.log(dat.toLocaleString());
dat.setDate(dat.getDate() - 20);
console.log(dat.toLocaleString());