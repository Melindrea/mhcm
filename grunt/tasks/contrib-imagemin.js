module.exports = function(grunt) {
    'use strict';

    grunt.config('imagemin', {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= directories.flatBuild.base %>/assets/media/images',
                src: '{,*/}*.{png,jpg,jpeg}',
                dest: '<%= directories.flatBuild.build %>/assets/media/images'
            }]
        }
    });
};
