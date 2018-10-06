const
  gulp = require('gulp'),
  nunjucks = require('gulp-nunjucks-render'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch');

const html = gulp.task('html', () =>
  gulp.src("./src/index.html")
    .pipe(nunjucks())
    .pipe(gulp.dest("./dist"))
);

gulp.task('sass', function () {
  return gulp.src('./src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch:css', function() {
    gulp.watch('src/scss/*.scss', ['sass']);
});

