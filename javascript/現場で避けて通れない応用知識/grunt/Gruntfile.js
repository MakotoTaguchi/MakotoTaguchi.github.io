// Gruntコードの外枠
module.exports = function (grunt) {
    // 初期化情報（タスクの定義）
  grunt.initConfig({
    uglify: { // grunt-contrib-ugilifyのタスク
          myTask: { // 任意の子タスク
          // 圧縮ルール
            files: {
          'scripts/app.min.js' : // 出力ファイル名
          [
            'src/Member.js',
            'src/MyArea.js',
            'src/MyStorage.js'
          ] // 入力（圧縮対象）ファイル名
        }
      }
    }
  });
    // grunt-contrib-ugilifyプラグインをロード
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // defaultタスクにugilifyを登録
  grunt.registerTask('default', [ 'uglify' ]);
};
