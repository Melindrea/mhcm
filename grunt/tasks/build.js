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
                'compass:dist',
                'autoprefixer'
            ]);
        } else if (target === 'fonts') {
            return grunt.task.run([
                'copy:fonts'
            ]);
        }

        grunt.task.run([
            'build:scripts',
            'build:html',
            'build:css',
            'build:fonts'
        ]);
    });
};
