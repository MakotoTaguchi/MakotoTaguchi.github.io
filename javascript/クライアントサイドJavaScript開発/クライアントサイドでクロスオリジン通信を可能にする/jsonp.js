'use strict';

document.getElementById('btn').addEventListener('click', function () {
    // サービスへの問い合わせURLを作成
    var url = 'http://b.hatena.ne.jp/entry/jsonlite/?callback=show&url=' + encodeURIComponent(document.getElementById('url').value);
    // サービスからJavaScriptのコードを受け取るための<script>要素を生成
    var scr = document.createElement('script');
    scr.src = url;
    document.getElementsByTagName('body').item(0).appendChild(scr);
}, false);

function show(data) {
    if (data === null) {
        result.textContent = 'ブックマークは存在しませんでした';
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
        result.appendChild(ul);
    }
}
