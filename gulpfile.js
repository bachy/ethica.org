'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

gulp.task('scss', function () {
  gulp.src('./public/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

// default gulp task
gulp.task('default', ['scss'], function() {
  gulp.watch('./public/scss/**/*.scss', ['scss']);
});
