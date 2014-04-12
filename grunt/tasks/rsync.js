module.exports = function(grunt) {
    'use strict';

    grunt.config('rsync', {
        options: {
            args: ['--verbose', '--delete'],
            exclude: [
                '.git*',
                '*.scss',
                'node_modules',
                'vendor',
                'app/storage',
                'phpdocs/phpdoc-cache*'
            ],
            recursive: true
        },
        localDocs: {
            options: {
                src: './html/',
                dest: '../docs'
            }
        },
        productionDocs: {
            options: {
                src: './html/',
                dest: '<%= config.target.html %>',
                host: '<%= config.remote.username %>@<%= config.remote.host %>',
                syncDestIgnoreExcl: true
            }
        },
        localLaravel: {
            options: {
                src: '<%= files.laravel %>',
                dest: '../laravel'
            }
        },
        productionLaravel: {
            options: {
                src: '<%= files.laravel %>',
                dest: '<%= config.target.laravel %>',
                host: '<%= config.remote.username %>@<%= config.remote.host %>',
                syncDestIgnoreExcl: true
            }
        }
    });
};
