'use strict';

var current = new Date();
// <input name="time">�v�f���擾
var nam = document.getElementsByName('time');
// ����value������ݒ�
nam[0].value = current.toLocaleTimeString();
