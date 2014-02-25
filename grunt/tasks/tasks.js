module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('commit', [
        'concurrent:lint',
        'concurrent:test'
    ]);

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
        }

        grunt.task.run([
            'lint:scripts',
            'lint:json'
        ]);
    });

    grunt.registerTask('default', [
        'concurrent:lint',
        'concurrent:build'
    ]);

    grunt.registerTask('server', function() {
        grunt.task.run([
            'clean:flatBuild',
            'concurrent:build',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('test', function(target) {
        if (target === 'mocha') {
            return grunt.task.run([
                'connect:test',
                'mocha'
            ]);
        }

        grunt.task.run([
            'test:mocha'
        ]);
    });
};
