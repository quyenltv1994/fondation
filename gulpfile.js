var gulp = require('gulp');
var util = require('gulp-util');
var configuration = require('./gulp.configuration.js');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

var moduleName = '';

// Check if has modules
if (Object.keys(configuration.modules).length == 0) {
    console.log('\n--- ERROR :\n/!\\ No modules configured, please go through basic README steps !\n');
    process.exit();
}

// Check if module selected
if (!util.env.module && !util.env.m) {
    if (Object.keys(configuration.modules).length > 0) {
        moduleName = Object.keys(configuration.modules).shift();
        console.log('\nNo module name provided, using "' + moduleName + '" as default\n');
    } else {
        console.log('\n--- ERROR :\n/!\\ Missing module name !\n');
        process.exit();
    }
} else {
    // Get module name from CLI arguments
    moduleName = util.env.module;

    if (util.env.m) {
        moduleName = util.env.m;
    }
}

// Check if module configuration exists
if (!configuration.modules[moduleName]) {
    console.log('\n--- ERROR :\n/!\\ Module does not exists !\n');
    process.exit();
} else {
    var moduleConfiguration = configuration.modules[moduleName];

    // Tasks definition
    var tasks = [
        'js-generate',
        'js-check',
        'sass-generate',
        'browser-sync',
        'server',
        'bs-reload'
    ];

    function getTaskByModule(task, moduleName) {
        return require('./' + configuration.gulp_tasks_path + '/' + task)(gulp, plugins, configuration, configuration.modules[moduleName]);
    }

    for (var i in tasks) {
        gulp.task(tasks[i], getTaskByModule(tasks[i], moduleName));
    }

    // On default task, just compile on demand
    gulp.task(
        'default', ['js-generate', 'sass-generate'], function () {
            // nop
        }
    );

    // Watch for dev
    gulp.task(
        'watch', ['js-generate', 'sass-generate'], function () {
            gulp.watch(moduleConfiguration.js_root_path + '/**/*.js', ['js-generate', browserSync.reload]);
            gulp.watch(moduleConfiguration.sass_root_path + '/**/*.scss', ['sass-generate', browserSync.reload]);
        }
    );

    // Browser sync with local setup.
    gulp.task(
        'serve', ['browser-sync', 'server', 'bs-reload', 'js-generate', 'sass-generate'], function () {
            gulp.watch(moduleConfiguration.js_root_path + '/**/*.js', ['js-generate', browserSync.reload]);
            gulp.watch(moduleConfiguration.sass_root_path + '/**/*.scss', ['sass-generate', browserSync.reload]);
            gulp.watch(
                [
                    moduleConfiguration.templates_root_path + '/**/*' + moduleConfiguration.templates_file_extension
                ]
                , [browserSync.reload]
            );
        }
    );
}
