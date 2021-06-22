'use strict';

var MyStorage = function (app) {
    // �A�v����
    this.app = app;
    // ���p����X�g���[�W�̎�ށi�����ł̓��[�J���X�g���[�W�j
    this.storage = localStorage;
    // �X�g���[�W����ǂݍ��񂾃I�u�W�F�N�g
    // �Y������f�[�^���Ȃ��ꍇ�́A��̃I�u�W�F�N�g�𐶐�
    this.data = JSON.parse(this.storage[this.app] || '{}');
};

MyStorage.prototype = {
    // �w�肳�ꂽ�L�[�Œl���擾
    getItem: function (key) {
        return this.data[key];
    },
    // �w�肳�ꂽ�L�[/�l�ŃI�u�W�F�N�g��u������
    setItem: function (key, value) {
        this.data[key] = value;
    },
    // MyStorage�I�u�W�F�N�g�̓��e���X�g���[�W�ɕۑ�
    save: function () {
        this.storage[this.app] = JSON.stringify(this.data);
    }
};
