module.exports = function(grunt) {
    'use strict';

    grunt.config('connect', {
        options: {
            port: 9000,
            livereload: 35729,
            // change this to '0.0.0.0' to access the server from outside
            hostname: '0.0.0.0'
        },
        livereload: {
            options: {
                base: [
                    '<%= directories.flatBuild.base %>',
                    '<%= directories.flatBuild.build %>'
                ]
            }
        },
        test: {
            options: {
                port: 8000,
                base: [
                    '<%= directories.flatBuild.base %>',
                    '<%= directories.test.mocha %>'
                ]
            }
        }
    });
};
