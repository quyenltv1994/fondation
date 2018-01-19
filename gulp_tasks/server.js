var php = require('gulp-connect-php');

module.exports = function (gulp, plugins, globalConfiguration, moduleConfiguration) {
    return function () {
        php.server(moduleConfiguration.server);
    };
};
