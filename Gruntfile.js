var path = require('path');
module.exports = function (grunt) {

  grunt.initConfig({
    nunjucks: {
      precompile: {
        src: './views/templates/*',
        dest: './public/js/templates.js'
      },
      options: {
        name: function (filename) {
          return path.basename(filename, '.html');
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-nunjucks');

  grunt.registerTask('default', [
    'nunjucks',
  ]);
};
