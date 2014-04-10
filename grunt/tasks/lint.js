module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('lint', function(target) {
        if (target === 'scripts') {
            return grunt.task.run([
                'beautify:scripts',
                'newer:jsvalidate',
                'newer:jshint',
            ]);
        } else if (target === 'json') {
            return grunt.task.run([
                'beautify:json',
                'newer:jsonlint'
            ]);
        } else if (target === 'css') {
            return grunt.task.run([
                'compass:lint',
                'csscss:lint',
                'clean:tmp'
            ]);
        } else if (target === 'php') {
            return grunt.task.run([
                'newer:phplint',
                'phpcs'
            ]);
        }

        grunt.task.run([
            'concurrent:lint',
            'concurrent:lint2'
        ]);
    });
};
