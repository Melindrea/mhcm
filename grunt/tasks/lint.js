module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('lint', function(target) {
        if (target === 'scripts') {
            return grunt.task.run([
                'newer:jsbeautifier',
                'newer:jsvalidate',
                'newer:jshint',
                'newer:jsonlint'
            ]);
        } else if (target === 'json') {
            return grunt.task.run([
                'newer:jsonlint'
            ]);
        } else if (target === 'css') {
            return grunt.task.run([
                'compass:lint',
                'csscss:lint',
                'clean:tmp'
            ]);
        }

        grunt.task.run([
            'concurrent:lint'
        ]);
    });
};
