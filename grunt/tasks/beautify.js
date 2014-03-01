module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('beautify', function(target) {
        if (target === 'scripts') {
            return grunt.task.run([
                'newer:jsbeautifier:js'
            ]);
        } else if (target === 'html') {
            return grunt.task.run([
                'prettify'
            ]);
        } else if (target === 'json') {
            return grunt.task.run([
                'newer:jsbeautifier:json'
            ]);
        }

        grunt.task.run([
            'beautify:scripts',
            'beautify:json',
            'beautify:html'
        ]);
    });
};
