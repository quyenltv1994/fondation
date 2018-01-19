module.exports = function (gulp, plugins, globalConfiguration, moduleConfiguration) {
    return function () {
        gulp.src(moduleConfiguration.js_include_order)
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter('default'));
    }
}
;