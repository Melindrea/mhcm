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
        } else if (target === 'css') {
            return grunt.task.run([
                'compass:dist'
            ]);
        }

        grunt.task.run([
            'build:scripts',
            'build:html',
            'build:css'
        ]);
    });
};
