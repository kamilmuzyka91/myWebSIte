// Ścieżka do aktualnie wykonywanego zadania
const entryPath = ".";

const gulp = require("gulp");
const sass = require("gulp-sass");
sass.compiler = require("sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const cleanCSS = require('gulp-clean-css');

function compileSass(done) {
  gulp
    .src(entryPath + "/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(entryPath + "/css"));

  done();
}

function watcher(done) {
  browserSync.init({
    server: "./" + entryPath,
  });

  gulp.watch(entryPath + "/scss/**/*.scss", gulp.series(compileSass, reload));
  gulp.watch(entryPath + "/*.html", gulp.series(reload));

  done();
}

function reload(done) {
  browserSync.reload();
  done();
}

// gulp-clean-css
gulp.task('minify-css',() => {
  return gulp.src('./src/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});

exports.sass = gulp.parallel(compileSass);
exports.default = gulp.parallel(compileSass, watcher);
