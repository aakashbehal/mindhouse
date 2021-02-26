const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');

gulp.task('sass', function () {
  return gulp.src('./styles/**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./styles/css'))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  })
})

gulp.task('watch', function() {
  gulp.watch('./styles/**/*.sass', gulp.series('sass'));
})

gulp.task('default', gulp.series('sass'));