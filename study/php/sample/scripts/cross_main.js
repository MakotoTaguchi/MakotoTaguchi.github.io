document.addEventListener('DOMContentLoaded', function () {

  var target = 'http://localhost:4000';

  document.getElementById('btn').addEventListener('click', function () {

    document.getElementById('frame').contentWindow.postMessage(
      document.getElementById('message').value, target);
  }, false);

  window.addEventListener('message', function (e) {
    if (e.origin !== target) {
      return;
    }
    console.log(e.data);
  }, false);
}, false);