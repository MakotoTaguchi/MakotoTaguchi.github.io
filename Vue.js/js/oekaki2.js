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
        },
        clearAll: function () {
            this.lines = []
            var ctx = this.canvas.getContext('2d');
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        },
        undo: function () {
            if (this.lines.length == 0) return;

            // キャンバスをクリアする
            var ctx = this.canvas.getContext('2d');
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            
            // 最後の線を削除
            this.lines.pop();

            // ポイントを2つずつ取り出して描画する
            for (i = 0; i < this.lines.length; i++) {
                var line = this.lines[i];
                for (j = 0; j < line.points.length - 1; j++) {
                    point1 = line.points[j];
                    point2 = line.points[j + 1];
                    ctx.strokeStyle = line.color;
                    ctx.lineWidth = line.width;
                    ctx.beginPath();
                    ctx.moveTo(point1.x, point2.y);
                    ctx.lineTo(point2.x, point2.y);
                    ctx.stroke();
                }
            }
        },
        redraw: function () {
            if (this.lines.length == 0) return;
            // キャンパスをクリアする
            var ctx = this.canvas.getContext('2d');
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            for (i = 0; i < this.lines.length; i++) {
                var line = this.lines[i];
                line.color = this.color // 色を選択色に
                for (j = 0; j < line.points.length - 1; j++) {
                    point1 = line.points[j];
                    point2 = line.points[j + 1];
                    ctx.strokeStyle = line.color;
                    ctx.lineWidth = line.width;
                    ctx.beginPath();
                    ctx.moveTo(point1.x, point2.y);
                    ctx.lineTo(point2.x, point2.y);
                    ctx.stroke();
                    ctx.closePath();
                }
            }
        }
    },
    mounted: function () {
        this.canvas = this.$refs.myCanvas;
    }
});