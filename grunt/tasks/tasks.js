module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('commit', [
        'lint'
    ]);

    grunt.registerTask('lint', [
        'jsvalidate',
        'jshint',
        'jsonlint'
    ]);

    grunt.registerTask('default', [
        'lint',
        'assemble'
    ]);

};
