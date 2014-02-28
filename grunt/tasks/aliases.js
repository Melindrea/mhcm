module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('commit', [
        'lint',
        'test'
    ]);

    grunt.registerTask('default', [
        'lint',
        'clean:flatBuild',
        'build',
        'rev',
        'test'
    ]);

    grunt.registerTask('rev', [
        'filerev',
        'filerev_assets'
    ]);
};
