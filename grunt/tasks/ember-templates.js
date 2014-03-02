module.exports = function(grunt) {
    'use strict';

    grunt.config('emberTemplates', {
        options: {
            templateBasePath: '<%= directories.ember.templates %>'
        },
        dist: {
            files: {
                '.tmp/compiled-templates.js': '<%= directories.ember.templates %>/{,*/}*.hbs'
            }
        }
    });
};
