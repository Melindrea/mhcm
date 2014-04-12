module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('deploy', function(target, location) {
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
        } else if (target === 'html') {
            if (location === undefined) {
                // Assume local if argument is left off
                location = 'local';
            }
            return grunt.task.run([
                'deploy:pre',
                'rsync:' + location + 'Docs'
            ]);
        } else if (target === 'laravel') {
            if (location === undefined) {
                // Assume local if argument is left off
                location = 'local';
            }

            if (location === 'local') {
                return grunt.task.run([
                    'deploy:assets',
                    'rsync:' + location + 'Laravel'
                ]);
            }
            return grunt.task.run([
                'deploy:assets',
                'sshexec:down',
                'rsync:' + location + 'Laravel',
                'sshexec:composer',
                'sshexec:migrate',
                'sshexec:up'
            ]);
        }
    });
};
