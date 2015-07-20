var gulp = require('gulp');
var coffee = require('gulp-coffee');
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');

gulp.task('coffee', function () {
	return gulp.src("js/*.coffee")
		.pipe(coffee())
		.pipe(gulp.dest('js'))
		.pipe(livereload())
		.pipe(notify({ message: 'coffee task complete' }));;
});


gulp.task('html', function() {
    return gulp.src('*.html')
        .pipe(gulp.dest(''))
        .pipe(livereload())
        .pipe(notify({ message: 'HTML task complete' }));
});


gulp.task('css', function() {
    return gulp.src('css/*.css')
        .pipe(livereload())
        .pipe(notify({ message: 'CSS task complete' }));
});

gulp.task('default', ['coffee', 'html', 'css'], function () {

});

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch("js/*.coffee", ["coffee"]);
	gulp.watch("*.html", ["html"]);
	gulp.watch("css/*.css", ["css"]);
});