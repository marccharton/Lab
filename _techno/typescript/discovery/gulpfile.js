var gulp = require('gulp');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
 
gulp.task('typescript', function () {
  var tsResult = gulp.src('*.ts')
    .pipe(ts({
        noImplicitAny: true,
        out: 'main.js'
      }));
  return tsResult.js.pipe(gulp.dest('./'));
});

gulp.task("default", ["typescript"], function() {
  gulp.watch("*.ts", ["typescript"]);
})
