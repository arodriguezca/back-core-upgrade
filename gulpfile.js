var gulp = require('gulp'),
    jade = require('gulp-jade');
var browserify = require('gulp-browserify');

// run this task by typing in gulp jade in CLI
gulp.task('jade', function() {
    return gulp.src('node_modules/src/templates/**/*.jade')
        .pipe(jade()) // pip to jade plugin
        .pipe(gulp.dest('Builds/development/views')); // tell gulp our output folder
});

gulp.task('js', function(){
	return gulp.src('node_modules/src/js/main.js')
		.pipe(browserify({debug: true}))
		.pipe(gulp.dest('Builds/development/js'));
});