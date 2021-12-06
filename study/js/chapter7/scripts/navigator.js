var agent = window.navigator.userAgent.toLowerCase();
var version = window.navigator.appVersion.toLowerCase();

var msie = (agent.indexOf('msie') > -1) && (agent.indexOf('opr') === -1);
var ie9 = msie && (version.indexOf('msie 9.') > -1);
console.log('Internet Explorer9：' + ie9);

var ie10 = msie && (version.indexOf('msie 10.') > -1);
console.log('Internet Explorer10：' + ie10);

var ie11 = (agent.indexOf('trident/7') > -1);
console.log('Internet Explorer11：' + ie11);

var edge = (agent.indexOf('edge') > -1);
console.log('Edge：' + edge);

var chrome = (agent.indexOf('chrome') > -1) && (agent.indexOf('edge') === -1) && (agent.indexOf('opr') === -1);
console.log('Chrome：' + chrome);

var firefox = (agent.indexOf('firefox') > -1);
console.log('Firefox：' + firefox);

var opera = (agent.indexOf('opr') > -1);
console.log('Opera：' + opera);

var safari = (agent.indexOf('safari') > -1) && (agent.indexOf('chrome') === -1);
console.log('Safari：' + safari);