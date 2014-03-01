module.exports = function(grunt) {
    'use strict';

    grunt.config('jsbeautifier', {
        js: {
            src: '<%= files.js %>'
        },
        json: {
            src: '<%= files.json %>'
        }
    });
};
