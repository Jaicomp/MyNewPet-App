'use strict'

var gulp = require('gulp'),
	livereload = require('gulp-livereload');

//Listening all types of files: $ gulp
gulp.task('default', function(){
	livereload.listen();
	gulp.watch('../public/html/*.html', ['html']);
	gulp.watch('../public/css/*.css', ['css']);
	gulp.watch('../public/js/*.js', ['js']);
	gulp.watch('../views/*.pug', ['pug']);

});

gulp.task('html', function() {
	gulp.src('../public/html/*.html')
		.pipe(livereload());
});

gulp.task('css', function() {
	gulp.src('../public/css/*.css')
		.pipe(livereload());
});

gulp.task('js', function() {
	gulp.src('../public/js/*.js')
		.pipe(livereload());
});

gulp.task('pug', function() {
	gulp.src('../views/*.pug')
		.pipe(livereload());
});
