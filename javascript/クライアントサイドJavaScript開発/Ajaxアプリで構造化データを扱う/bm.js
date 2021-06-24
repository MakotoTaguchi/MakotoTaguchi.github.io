'use strict';

document.addEventListener('DOMContentLoaded', function () {
    // [検索]ボタンクリック時に実行されるコード
    document.getElementById('btn').addEventListener('click', function () {
        var result = document.getElementById('result');
        var xhr = new XMLHttpRequest();
        // 非同期通信時の処理を定義
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) { // 通信が完了した時
                if (xhr.status === 200) { // 通信が成功した時
                    var data = JSON.parse(xhr.responseText);
                    // 結果からbookmarksキーにアクセス
                    if (data === null) {
                        // ブックマークがなかった場合には、エラーメッセージを表示
                        result.textContent = 'ブックマークは存在しませんでした。';
                    } else {
                        // ブックマークが取得できた場合、ユーザをリスト表示
                        var bms = data.bookmarks;
                        var ul = document.createElement('ul');
                        for (var i = 0; i < bms.length; i++) {
                            // <li>、<a>要素、テキストを生成（<a>要素にはhref属性を設定）
                            var li = document.createElement('li');
                            var anchor = document.createElement('a');
                            anchor.href = 'http://b.hatena.ne.jp/' + bms[i].user;
                            var text = document.createTextNode(bms[i].user + ' ' + bms[i].comment);
                            // テキスト→<a>→<li>→<ul>の順にノードを組み立て
                            anchor.appendChild(text);
                            li.appendChild(anchor);
                            ul.appendChild(li);
                        }
                        // <div id='result'>の配下を<ul>要素で置き換え
                        result.replaceChild(ul, result.firstChild);
                    }
                } else { // 通信が失敗した時
                    result.textContent = 'サーバーエラーが発生しました。';
                }
            } else { // 通信が完了する時
                result.textContent = '通信中...';
            }
        };

        // サーバーとの非同期通信を開始
        xhr.open('GET', 'bm.php?url=' + encodeURIComponent(document.getElementById('url').value), true);
        xhr.send(null);
    }, false);
}, false);
