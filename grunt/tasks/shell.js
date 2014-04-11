module.exports = function(grunt) {
    'use strict';

    grunt.config('shell', {
        phploc: {
            command: 'php <%= composer.config["bin-dir"] %>/phploc --log-xml <%= directories.reports.phploc %>/<%= grunt.template.today("isoDateTime") %>.xml <%= directories.laravel.base %>'
        },
        pdepend: {
            command: function() {
                var now = grunt.template.today('isoDateTime'),
                    directory = '<%= directories.reports.pdepend %>/' + now,
                    mkdir = 'mkdir -p ' + directory,
                    summary = directory + '/summary.xml',
                    chart = directory + '/chart.svg',
                    pyramid = directory + '/pyramid.svg',
                    pdepend = 'php <%= composer.config["bin-dir"] %>/pdepend ';
                pdepend += '--summary-xml=' + summary + ' ';
                pdepend += '--jdepend-chart=' + chart + ' ';
                pdepend += '--overview-pyramid=' + pyramid + ' ';
                pdepend += '<%= directories.laravel.base %>';

                return mkdir + ' && ' + pdepend;
            }
        }
    });
};
