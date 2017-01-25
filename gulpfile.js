var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync');


gulp.task('less', function() {
	return gulp.src('app/less/importer.less')
	.pipe(less())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload( {
		stream:true
	}))
});

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify:false
	});
});

gulp.task('watch', ['browserSync', 'less'], function() {
	 gulp.watch('app/less/*.less', ['less']);
});

