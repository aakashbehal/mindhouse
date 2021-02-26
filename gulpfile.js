const gulp = require('gulp');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./styles/**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./styles/css'));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./styles/**/*.sass', gulp.series('sass'));
})

gulp.task('default', gulp.series('sass'));