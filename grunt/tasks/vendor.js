module.exports = function(grunt) {
    'use strict';
    // var sh = require('execSync').run,
    var fs = require('fs');

    grunt.registerTask('vendor', function() {
        console.log('bower install');

        console.log('bundle');

        fs.exists('../composer.lock', function(exists) {
            if (exists) {
                console.log('php composer.phar update');
            } else {
                console.log('php composer.phar install');
            }
            return;
        });
    });
};
