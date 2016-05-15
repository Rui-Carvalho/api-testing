'use strict';

var gulp   = require('gulp'),
    inject = require('gulp-inject'),
    debug  = require('gulp-debug')
    ;

var testFiles = ['suite/*/*.js'],
    injectInto = 'runTests.html';

gulp.task('inject-test-files', function () {
    return gulp.src(injectInto)
        .pipe(debug({title: 'Injecting:'}))
        .pipe(inject(
            gulp.src(testFiles)
        ))
        .pipe(gulp.dest('.'));
});
