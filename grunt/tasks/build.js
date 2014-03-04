module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('build', function(target, type) {
        if (target === 'scripts') {
            return grunt.task.run([
                'modernizr',
                'emberTemplates',
                'concat',
                'clean:tmp',
                'uglify'
            ]);
        } else if (target === 'html') {
            return grunt.task.run([
                'assemble',
                'copy:docs',
                'beautify:html'
            ]);
        } else if (target === 'css') {
            return grunt.task.run([
                'compass:dist',
                'cssmin:dist',
                'autoprefixer'
            ]);
        } else if (target === 'fonts') {
            if (type === 'changed') {
                return grunt.task.run([
                    'newer:copy:fonts'
                ]);
            }
            return grunt.task.run([
                'copy:fonts'
            ]);
        } else if (target === 'images') {
            if (type === 'changed') {
                return grunt.task.run([
                    'newer:imagemin',
                    'newer:svgmin'
                ]);
            }

            return grunt.task.run([
                'imagemin',
                'svgmin'
            ]);
        }

        grunt.task.run([
            'concurrent:build',
            'concurrent:build2',
            'concurrent:build3'
        ]);
    });
};
