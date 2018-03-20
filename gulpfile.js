'use strict'

var gulp = require('gulp')
var zip = require('gulp-zip')

var files = ['./webExtension/manifest.json', './webExtension/content_script.js']
var xpiName = 'translate-on-site.xpi'

gulp.task('default', function () {
  gulp.src(files)
    .pipe(zip(xpiName))
    .pipe(gulp.dest('.'))
})
