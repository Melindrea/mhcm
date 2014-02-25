module.exports = function(grunt) {
    'use strict';

    grunt.config('compass', {
        options: {
            sassDir: '<%= directories.flatBuild.styles %>',
            cssDir: '<%= directories.flatBuild.build %>/assets/styles',
            generatedImagesDir: '<%= directories.flatBuild.build %>/assets/images/generated',
            imagesDir: '<%= directories.flatBuild.base %>/assets/media/images',
            javascriptsDir: '<%= directories.flatBuild.build %>/assets/scripts',
            fontsDir: '<%= directories.flatBuild.fonts %>',
            httpImagesPath: '/assets/media/images',
            httpGeneratedImagesPath: '/assets/images/generated',
            importPath: '<%= directories.flatBuild.base %>/bower_components',
            httpFontsPath: '/assets/fonts',
            relativeAssets: false,
            outputStyle: 'compressed',
            require: [
                'breakpoint',
                'sass-globbing'
            ]
        },
        dist: {
            options: {
                generatedImagesDir: '<%= directories.flatBuild.build %>/assets/images/generated'
            }
        }
    });
};
