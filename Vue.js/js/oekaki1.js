// Lineクラス
class Line{
    constructor(points, color, width) {
        this.width = width;
        this.points = points;
        this.color = color;
    }
}

// Pointクラス
class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
var vm = new Vue({
    el: '#app',
    data: {
        line: null,
        lines: [],
        points: [],
        color: 'black',
        width: 4,
        isDrawing: false,
        canvas: null
    },
    methods: {
        mousedown: function (event) {
            this.isDrawing = true; // 描画開始
            this.points = [];
            this.points.push(new Point(event.offsetX, event.offsetY));
            // Lineオブジェクトを生成
            this.line = new Line(this.points, this.color, this.width);
            // linesに線を追加
            this.lines.push(this.line);
        },
        mousemove: function (event) {
            if (!this.isDrawing) return;
            // console.log(event)
            // ひとつ前のポイント
            var prevPoint = this.line.points[this.line.points.length - 1];

            // 線を描く
            var x = event.offsetX;
            var y = event.offsetY;

            var ctx = this.canvas.getContext('2d');
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.width;
            ctx.beginPath();
            ctx.moveTo(prevPoint.x, prevPoint.y);
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.closePath();
            this.line.points.push(new Point(x, y));
        },
        mouseup: function (event) {
            this.isDrawing = false;
        }
    },
    mounted: function () {
        this.canvas = this.$refs.myCanvas;
    }
});