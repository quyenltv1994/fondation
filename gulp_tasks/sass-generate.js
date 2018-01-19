var concat = require('gulp-concat-sourcemap'),
    minifyCSS = require('gulp-clean-css'),
    pxtorem = require('gulp-pxtorem'),
    pxtoremOptions = require('./sass-options'),
    rename = require('gulp-rename');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

module.exports = function (gulp, plugins, globalConfiguration, moduleConfiguration) {
    return function () {
        return gulp.src(moduleConfiguration.sass_root_path + '/' + moduleConfiguration.sass_main_file)
            .pipe(sass().on('error', sass.logError))
            .pipe(rename(moduleConfiguration.sass_output_name + '.css'))
            .pipe(pxtorem(pxtoremOptions))
            .pipe(gulp.dest(moduleConfiguration.sass_output_path))
            .pipe(rename({ suffix : '.min' }))
            .pipe(minifyCSS())
            .pipe(gulp.dest(moduleConfiguration.sass_output_path))
            .pipe(browserSync.reload({stream:true}));
    }
};