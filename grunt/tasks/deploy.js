module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('deploy', function(target) {
        if (target === 'pre') {
            return grunt.task.run([
                'lint',
                'clean:flatBuild',
                'build',
                'rev',
                'test'
            ]);
        } else if (target === 'assets') {
            return grunt.task.run([
                'deploy:pre',
                'clean:assets',
                'copy:assets'
            ]);
        }
    });
};
