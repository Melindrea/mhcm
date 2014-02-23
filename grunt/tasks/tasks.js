module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('commit', [
        'lint'
    ]);

    grunt.registerTask('lint', function(target) {
        if (target === 'scripts') {
            return grunt.task.run([
                'newer:jsbeautifier',
                'newer:jsvalidate',
                'newer:jshint',
                'newer:jsonlint'
            ]);
        }

        grunt.task.run([
            'lint:scripts'
        ]);
    });

    grunt.registerTask('default', [
        'lint',
        'build'
    ]);

};
