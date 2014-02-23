module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('build', function(target) {
        if (target === 'scripts') {
            return grunt.task.run([
                'modernizr',
                'concat',
                'uglify'
            ]);
        } else if (target === 'html') {
            return grunt.task.run([
                'assemble'
            ]);
        }

        grunt.task.run([
            'build:scripts',
            'build:html'
        ]);
    });
};
