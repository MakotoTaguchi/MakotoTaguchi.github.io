document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', function () {
        var result = document.getElementById('result');
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);
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
                        result.replaceChild(ul, result.firstChild);
                    }
                } else {
                    result.textContent = 'サーバーエラーが発生しました。';
                }
            } else {
                result.textContent = '通信中';
            }
        };

        xhr.open('GET', 'bm.php?url=' + encodeURIComponent(document.getElementById('url').value), true);
        xhr.send(null);
    }, false);
}, false);