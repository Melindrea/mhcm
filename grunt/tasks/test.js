module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('test', function(target) {
        if (target === 'mocha') {
            return grunt.task.run([
                'connect:test',
                'mocha'
            ]);
        } else if (target === 'phpunit') {
            return grunt.task.run([
                'shell:up',
                'phpunit'
            ]);
        }

        grunt.task.run([
            'concurrent:test'
        ]);
    });
};
