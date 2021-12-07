var doc = xhr.responseXML;
console.log(doc.getElementsByTagName('title')[0].textContent);