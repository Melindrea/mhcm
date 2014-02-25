module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('commit', [
        'concurrent:lint'
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
};
