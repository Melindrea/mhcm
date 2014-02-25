module.exports = function(grunt) {
    'use strict';

    grunt.config('watch', {
        assemble: {
            files: ['<%= directories.flatBuild.base %>/{content,data,templates}/**/*.{md,hbs,yml,json}'],
            tasks: ['assemble']
        },
        styles: {
            files: ['<%= directories.flatBuild.styles %>/{,*/}*.scss'],
            tasks: ['compass']
        },
        // scripts: {
        //     files: ['<%= directories.flatBuild.js %>/{,*/}*.js'],
        //     tasks: ['scripts', 'modernizr']
        // },
        // images: {
        //     files: ['<%= directories.flatBuild.base %>/assets/images/{,*/}*'],
        //     tasks: ['images']
        // },
        // fonts: {
        //     files: ['<%= directories.flatBuild.base %>/assets/fonts/{,*/}*'],
        //     tasks: ['fonts']
        // },
        json: {
            files: ['<%= directories.flatBuild.base %>/data/{,*/}*.json'],
            tasks: ['jsonlint']
        },
        livereload: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                '<%= directories.flatBuild.build %>/{,*/}*.html',
                '<%= directories.flatBuild.build %>/assets/styles/{,*/}*.css',
                '<%= directories.flatBuild.build %>/assets/scripts/{,*/}*.js',
                '<%= directories.flatBuild.build %>/assets/{images,fonts}/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }
    });
};
