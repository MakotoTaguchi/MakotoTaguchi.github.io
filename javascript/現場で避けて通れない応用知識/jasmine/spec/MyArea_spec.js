'use strict';

describe('Jasmine�̊�{', function () {
    var area;

    beforeEach(function () {
        area = new MyArea(10, 5);
    });

    afterEach(function () {
        // �I������
    });

    it('getTriangle���\�b�h�̃e�X�g', function () {
        expect(area.getTriangle()).toEqual(25);
    });

    it('getSquare���\�b�h�̃e�X�g', function () {
        expect(area.getSquare() === 50).toBeTruthy();
    });
});
