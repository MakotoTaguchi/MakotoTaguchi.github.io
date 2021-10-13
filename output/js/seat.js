$(document).ready(function () {
    // ファイル読み込み
    $.ajax({
            url: './seat.json',
            dataType: 'json'
        }).done(function (data) {
            data.forEach(function (item, index) {
                // console.log(item);
                if (item.crowded === 'yes') {
                    const idName = '#' + item.id;
                    $(idName).find('.check').addClass('crowded');
                }
            });
        })
        .fail(function () {
            window.alert('読み込みエラー');
        });

    // クリックされたら空席状況を表示
    $('.check').on('click', function () {
        if ($(this).hasClass('crowded')) {
            $(this).text('残りわずか').addClass('red')
        } else {
            $(this).text('お席あります').addClass('green');
        }
    });
});