module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('commit', [
        'concurrent:lint',
        'concurrent:test'
    ]);

    grunt.registerTask('default', [
        'concurrent:lint',
        'concurrent:build',
        'concurrent:test'
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
