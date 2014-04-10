module.exports = function(grunt) {
    'use strict';

    grunt.config('phpmd', {
        application: {
            dir: '<%= directories.laravel.base %>'
        },
        options: {
            rulesets: 'codesize,unusedcode,naming',
            bin: '<%= composer.config["bin-dir"] %>/phpmd',
            reportFile: '<%= directories.reports.phpmd %>/<%= grunt.template.today("isoDateTime") %>.xml'
        }
    });
};
