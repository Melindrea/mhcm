module.exports = function(grunt) {
    'use strict';

    grunt.config('svgmin', {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= directories.flatBuild.base %>/assets/media/images',
                src: '{,*/}*.{svg}',
                dest: '<%= directories.flatBuild.build %>/assets/media/images'
            }]
        }
    });
};
