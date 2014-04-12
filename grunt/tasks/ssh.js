module.exports = function(grunt) {
    'use strict';

    grunt.config('sshexec', {
        options: {
            host: '<%= config.remote.host %>',
            username: '<%= config.remote.username %>',
            password: '<%= config.remote.password %>'
        },
        uptime: {
            command: 'uptime'
        },
        down: {
            command: [
                'cd <%= config.target.laravel %>',
                'php artisan down'
            ].join('&&')
        },
        up: {
            command: [
                'cd <%= config.target.laravel %>',
                'php artisan up'
            ].join('&&')
        },
        test: {
            command: [
                'cd <%= config.target.laravel %>',
                'ls'
            ].join('&&')
        },
        composer: {
            command: [
                'cd <%= config.target.laravel %>',
                'php composer.phar -o update'
            ].join('&&')
        },
        database: {
            command: [
                'cd <%= config.target.laravel %>',
                'php artisan migrate'
            ].join('&&')
        }
    });
};
