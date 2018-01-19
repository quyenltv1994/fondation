var concatMap = require('gulp-concat-sourcemap'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');
var browserSync = require('browser-sync');

module.exports = function (gulp, plugins, globalConfiguration, moduleConfiguration) {
    return function () {
        gulp.src(moduleConfiguration.js_include_order)
            .pipe(concat(moduleConfiguration.js_output_name + '.js'))
            .pipe(gulp.dest(moduleConfiguration.js_output_path))
            .pipe(rename({ suffix : '.min' }))
            .pipe(uglify())
            .pipe(gulp.dest(moduleConfiguration.js_output_path))
            .pipe(browserSync.reload({stream:true}))
    };
};