'use strict';

// Utilities
var     gulp = require('gulp'),
        sass = require('gulp-sass'),
        rename = require('gulp-rename'),
        neat = require('node-neat').includePaths;;

gulp.task('compile', function(){
    return gulp.src('./src/**/*.scss')
        .pipe(sass({
            includePaths: ['styles'].concat(neat)
        }).on('error', sass.logError))
        .pipe(rename('nice.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('compile-min', function(){
    return gulp.src('./src/**/*.scss')
        .pipe(sass({
            includePaths: ['styles'].concat(neat),
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(rename('nice.min.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function(){
    gulp.watch('./src/**/*.scss', ['compile-min']);
})

gulp.task('default', ['compile-min']);