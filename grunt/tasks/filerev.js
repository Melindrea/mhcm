module.exports = function(grunt) {
    'use strict';

    grunt.config('filerev', {
        fonts: {
            src: '<%= directories.flatBuild.build %>/assets/fonts/**/*.{eot,svg,ttf,otf,woff}'
        },
        css: {
            src: [
                '<%= directories.flatBuild.build %>/assets/styles/**/*.css',
                '!<%= directories.flatBuild.build %>/assets/styles/**/*.max.css'
            ]
        },
        images: {
            src: '<%= directories.flatBuild.build %>/assets/media/images/**/*.{jpg,jpeg,gif,png,webp,svg}'
        },
        scripts: {
            src: [
                '<%= directories.flatBuild.build %>/assets/scripts/**/*.js',
                '!<%= directories.flatBuild.build %>/assets/scripts/**/*.max.js'
            ]
        }
    });

    grunt.config('filerev_assets', {
        options: {
            prettyPrint: true,
            cwd: '<%= directories.flatBuild.build %>',
            dest: 'assets.json'
        },
        dist: {}
    });
};
