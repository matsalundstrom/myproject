/*global module, require*/
module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    jshint: {
      files: ['src/app/app.js'],
      options: {
        reporter: require('jshint-stylish')
      }
    },

    jscs: {
      src: 'src/app/app.js',
      options: {
        config: '.jscsrc'
      }
    },

    eslint: {
      target: ['src/app/app.js']
    }

  });

  grunt.registerTask('default', ['jshint']);
};
