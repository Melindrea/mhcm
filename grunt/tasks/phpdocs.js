module.exports = function(grunt) {
    'use strict';

    grunt.config('phpdocumentor', {
        options: {
            bin: '<%= composer.config["bin-dir"] %>/phpdoc.php',
            // directory: '<%= directories.php %>',
            directory: '<%= directories.laravel.base %>/controllers,' + '<%= directories.laravel.base %>/models,' + '<%= directories.laravel.base %>/libraries',
            target: '<%= directories.reports.phpdocs %>'
        },
        dist: {}
    });
};
