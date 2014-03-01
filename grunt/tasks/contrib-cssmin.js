module.exports = function(grunt) {
    'use strict';

    grunt.config('cssmin', {
        dist: {
            expand: true,
            cwd: '<%= directories.flatBuild.build %>/assets/styles',
            src: ['{,*/}*.max.css'],
            dest: '<%= directories.flatBuild.build %>/assets/styles',
            ext: '.css'
        }
    });
};
