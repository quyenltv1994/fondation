var browserSync = require('browser-sync');

module.exports = function (gulp, plugins, globalConfiguration, moduleConfiguration) {
    return function () {
        browserSync(moduleConfiguration.browserSync);
    };
};
