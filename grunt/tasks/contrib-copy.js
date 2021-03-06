module.exports = function(grunt) {
    'use strict';

    grunt.config('copy', {
        fonts: {
            files: [{
                expand: true,
                cwd: '<%= directories.flatBuild.fonts %>',
                src: '{,*/}*.{eot,svg,ttf,otf,woff}',
                dest: '<%= directories.flatBuild.build %>/assets/fonts'
            }]
        },
        assets: {
            files: [{
                expand: true,
                cwd: '<%= directories.flatBuild.build %>/assets',
                src: [
                    '**',
                    '!{scripts,styles}/{,*/}*.max.*'
                ],
                dest: '<%= directories.laravel.assets %>'
            }]
        }
    });
};
