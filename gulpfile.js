'use strict';

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('css', _ => {
    return gulp
        .src('./public/css/*.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('./build/static/css/'));
});

gulp.task('html', _ => {
    return gulp
        .src('./src/*.html')
        .pipe(gulp.dest('./build/'));
});

gulp.task('move', _ => {
    return gulp
        .src('./public/**')
        .pipe(gulp.dest('./build/static/'));
});

gulp.task('default', ['move', 'html', 'css']);