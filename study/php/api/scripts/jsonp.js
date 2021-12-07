document.getElementById('btn').addEventListener('click', function () {
    var url = 'http://b.hatena.ne.jp/entry/jsonlite/?callback=show&url=' + encodeURIComponent(document.getElementById('url').value);
    var scr = document.createElement('script');
    scr.src = url;
    document.getElementsByTagName('body').item(0).appendChild(scr);
}, false);

function show(data) {
    if (data === null) {
        result.textContent = 'ブックマークは存在しませんでした。';
    } else {
        var bms = data.bookmarks;
        var ul = document.createElement('ul');
        for (var i = 0, len = bms.length; i < len; i++) {
            var li = document.createElement('li');
            var anchor = document.createElement('a');
            anchor.href = 'http://b.hatena.ne.jp/' + bms[i].user;
            var text = document.createTextNode(
                bms[i].user + ' ' + bms[i].comment
            );
            anchor.appendChild(text);
            li.appendChild(anchor);
            ul.appendChild(li);
        }
        result.appendChild(ul);
    }
}