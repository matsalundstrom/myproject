/*global require*/
var gulp = require('gulp');
var config = require('./gulp.config')();

var $ = require('gulp-load-plugins')({ lazy: true });

// Comment
gulp.task('jshint', function () {
  'use strict';

  return gulp
    .src(config.js)
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'));
});

gulp.task('jscs', function () {
  'use strict';

  return gulp
    .src(config.js)
    .pipe($.jscs())
    .pipe($.jscs.reporter());
});

gulp.task('eslint', function () {
  'use strict';

  return gulp
    .src(config.js)
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failOnError());
});

gulp.task('sass', function () {
  'use strict';

  return gulp
    .src(config.scss)
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer({ browsers: ['last 2 version', '> 5%'] }))
    .pipe(gulp.dest('src/styles/'));
});

gulp.task('default', function () {
  'use strict';
  // place code for your default task here
});
