module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('server', function() {
        grunt.task.run([
            'clean:flatBuild',
            'build',
            'connect:livereload',
            'watch'
        ]);
    });
};
