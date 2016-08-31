var gulp = require('gulp');
var notify = require('gulp-notify');
var compass = require('gulp-compass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');

gulp.task('styles', function () {
	var stream = gulp;

	stream.src('style/scss/**/*.scss')
	.pipe(compass({
            sass: 'style/scss',
            css: 'style/css'
        }))
	.pipe(autoprefixer())
	.pipe(concat("style.css"))
	.pipe(notify("Task 'styles' completed"))
	.pipe(livereload());
	return stream;
});

gulp.task('view', function () {
	return gulp.src('*.html')
	.pipe(livereload());
});

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch("style/scss/**/*.scss", ["styles"]);
	gulp.watch("*.php", ["view"]);
	
	gulp.watch(['gulpfile.js'], function () {
        console.log('[WARNING] gulpfile.js was changed');
    });
});

gulp.task('default', ['watch']);