var path = require('path');
module.exports = function (grunt) {

  grunt.initConfig({
    nunjucks: {
      precompile: {
        src: './views/**/*',
        dest: './public/js/templates.js'
      },
      options: {
        name: function (filename) {
          return path.basename(filename, '.html');
        }
      }
    },
    jsbeautifier: {
      modify: {
        src: './**/*.js*',
      },
      options: {
        js: {

          "indent_size": 2,
          "indent_char": " ",
          "indent_level": 0,
          "indent_with_tabs": false,
          "preserve_newlines": true,
          "max_preserve_newlines": 4,
          "jslint_happy": true,
          "brace_style": "end-expand",
          "keep_array_indentation": false,
          "keep_function_indentation": false,
          "space_before_conditional": true,
          "break_chained_methods": false,
          "eval_code": false,
          "unescape_strings": false,
          "wrap_line_length": 0
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-nunjucks');
  grunt.loadNpmTasks('grunt-jsbeautifier');

  grunt.registerTask('default', [
    'nunjucks',
    'jsbeautifier:modify'
  ]);
};