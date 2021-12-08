describe('Jasmineの基本', () => {
    var area;

    beforeEach(function () {
        area = new MyArea(10, 5);
    });

    afterEach(function () {

    });

    it('getTriangleのメソッドのテスト', () => {
        expect(area.getTriangle()).toEqual(24);
    });

    it('getSquareメソッドのテスト', () => {
        expect(area.getSquare() === 50).toBeTruthy();
    });
});