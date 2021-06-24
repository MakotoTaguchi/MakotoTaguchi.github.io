'use strict';

/**
 * @constructor
 * @classdesc �����o�[�ɂ��Ă̏����Ǘ����܂�
 * @param {String} firstName ��
 * @param {String} lastName ��
 * @throws {Error} firstName��lastName������܂���B
 * @author Yoshihiro Yamada
 * @version 1.0.0
 */

var Member = function (firstName, lastName) {
    if (firstName === undefined || lastName === undefined) {
        throw new Error('firstName��lastName������܂���B');
    }
    this.firstName = firstName;
    this.lastName = lastName;

};

/**
 *�����o�[�Ɋւ���ڍ׏���\�����܂��B
 * @return {String} �����o�[�̎���
 * @deprecated {@link Member#toString}���\�b�h�����ɗ��p���Ă��������B
 */

Member.prototype.getName = function () {
    return this.lastName + ' ' + this.firstName;
};

/**
 *Member�N���X�̓��e�𕶎��񉻂��܂��B
 * @return {String} �����o�[�̎���
 */

Member.prototype.toString = function () {
    return this.lastName + ' ' + this.firstName;
}