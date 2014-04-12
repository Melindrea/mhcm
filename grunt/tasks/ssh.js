module.exports = function(grunt) {
    'use strict';

    grunt.config('sshexec', {
        options: {
            host: '<%= config.remote.host %>',
            username: '<%= config.remote.username %>',
            password: '<%= config.remote.password %>'
        },
        uptime: {
            command: 'uptime',
        }
    });
};
