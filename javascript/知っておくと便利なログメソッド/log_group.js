'use strict';

// �e�O���[�v���J�n
console.group('��ʃO���[�v');
for (var i = 0; i < 3; i++) {
    // �q�O���[�v���J�n
    console.group('���ʃO���[�v');
    for (var j = 0; j < 3; j++) {
        console.log(i, j);
    }
    // �q�O���[�v���I��
    console.groupEnd();
}
// �e�O���[�v���I��
console.groupEnd();