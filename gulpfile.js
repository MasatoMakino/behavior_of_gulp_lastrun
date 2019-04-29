"use strict";
const { src, dest, lastRun, watch } = require("gulp");
const imagemin = require("gulp-imagemin");
const del = require("del");

const clean = () => {
  return del(["./dist/**/*.jpg"]);
};

const images = () => {
  const lastRunResult = lastRun(images);
  console.log(lastRunResult);
  return src("./src/img/**/*.jpg", { since: lastRunResult })
    .pipe(imagemin())
    .pipe(dest("./dist/img/"));
};

const watcher = () => {
  watch("src/img/**/*.jpg", images);
};

exports.clean = clean;
exports.images = images;
exports.watch = watcher;
