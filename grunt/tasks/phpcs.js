module.exports = function(grunt) {
    'use strict';

    grunt.config('phpcs', {
        application: {
            dir: [
                '<%= directories.laravel.base %>',
                '<%= directories.test.phpunit %>'
            ]
        },
        options: {
            bin: '<%= composer.config["bin-dir"] %>/phpcs',
            standard: 'PSR2',
            ignore: ['database', 'cache'],
            extensions: 'php'
        }
        // newSniffer: {
        //     dir: '<%= files.php %>',
        //     options: {
        //         standard: '../development-tools/PSR2Extended/ruleset.xml',
        //         warningSeverity: 10
        //     }
        // }
    });
};
