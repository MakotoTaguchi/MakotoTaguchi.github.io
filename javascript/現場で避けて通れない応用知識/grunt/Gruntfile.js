// Grunt�R�[�h�̊O�g
module.exports = function (grunt) {
    // ���������i�^�X�N�̒�`�j
  grunt.initConfig({
    uglify: { // grunt-contrib-ugilify�̃^�X�N
          myTask: { // �C�ӂ̎q�^�X�N
          // ���k���[��
            files: {
          'scripts/app.min.js' : // �o�̓t�@�C����
          [
            'src/Member.js',
            'src/MyArea.js',
            'src/MyStorage.js'
          ] // ���́i���k�Ώہj�t�@�C����
        }
      }
    }
  });
    // grunt-contrib-ugilify�v���O�C�������[�h
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // default�^�X�N��ugilify��o�^
  grunt.registerTask('default', [ 'uglify' ]);
};
