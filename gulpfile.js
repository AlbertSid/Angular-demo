/*!
 * gulp
 * $ npm install gulp gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    browserSync = require("browser-sync"),
    sass = require("gulp-sass-china"),
    dgbl = require("del-gulpsass-blank-lines"),
    del = require('del');

gulp.task('styles', function() {
    return gulp.src('app/styles/*.scss')
        .pipe(concat('main.scss'))
        .pipe(sass({
            outputStyle: 'compact'
        }).on('error', sass.logError))
        .pipe(dgbl())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('app/dist/styles'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('app/dist/styles'))
        .pipe(browserSync.stream())
        .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() {
    return gulp.src('app/scripts/app/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('app/dist/scripts'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('app/dist/scripts'))
        .pipe(browserSync.stream())
        .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('images', function() {
    return gulp.src('app/images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('app/dist/images'))
        .pipe(browserSync.stream())
        .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('clean', function(cb) {
    del(['app/dist/'], cb)
});

//gulp.task('default', ['clean'], function() {
gulp.task('default', ['clean', 'styles', 'scripts', 'images'], function(cb) {
    //gulp.start('styles','scripts','images');
    //gulp.start(['styles','scripts','images']);
    //del(['app/dist/styles/main.css','app/dist/scripts/main.js'], cb)
})

gulp.task('watch', function() {
    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch('app/scripts/app/**/*.js', ['scripts']);
    gulp.watch('app/images/**/*', ['images']);
    livereload.listen();
    gulp.watch(['app/dist/**']).on('change', livereload.changed);
});


gulp.task("serve", ['watch'], function() {
    browserSync.init({
        server: "./app/"
    });
    gulp.watch(["app/*.html", "app/view/**/*.html"]).on("change", function() {
        browserSync.reload;
    });
});
