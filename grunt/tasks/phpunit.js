module.exports = function(grunt) {
    'use strict';

    grunt.config('phpunit', {
        classes: {
            dir: '<%= directories.test.phpunit %>/tests'
        },
        options: {
            bin: '<%= composer.config["bin-dir"] %>/phpunit',
            bootstrap: 'bootstrap/autoload.php',
            staticBackup: false,
            colors: true,
            noGlobalsBackup: false
        }
    });
};
