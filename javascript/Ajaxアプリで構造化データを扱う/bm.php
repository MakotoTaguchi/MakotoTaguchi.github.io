<?php
// �o�͕����R�[�h�A���������R�[�h��錾
mb_http_output('UTF-8');
mb_internal_encoding('UTF-8');
// �����̃R���e���c�^�C�v��錾
header('Content-Type: application/json;charset=UTF-8');

// �͂ăuAPI�ւ̖⍇��URL��g�ݗ���
$url = 'http://b.hatena.ne.jp/entry/jsonlite/?url='.$_GET['url'];
// �₢���킹���ʂ����̂܂܏o��
print(file_get_contents($url, false, stream_context_create(['http' =>['header' => 'User-Agent: MySample']])));