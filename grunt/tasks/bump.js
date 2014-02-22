module.exports = function (grunt) {
    'use strict';

    grunt.config('bump', {
        options: {
            files: '<%= files.packages %>',
            updateConfigs: ['pkg', 'bower'],
            commit: false,
            createTag: false,
            push: false
        }
    });
};
