"use strict";

const gulp = require("gulp");
const zip = require("gulp-zip");

const files = [
  "./webExtension/manifest.json",
  "./webExtension/content_script.js"
];
const xpiName = "./build/translate-on-site.xpi";

gulp.task("default", () =>
  gulp
    .src(files)
    .pipe(zip(xpiName))
    .pipe(gulp.dest("."))
);
