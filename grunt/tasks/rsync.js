module.exports = function(grunt) {
    'use strict';

    grunt.config('rsync', {
        options: {
            args: ['--verbose', '--delete'],
            exclude: ['.git*', '*.scss', 'node_modules'],
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
                dest: '/var/www/vhosts/docs.exaltedage.net' //,
                // host: 'user@staging-host',
                // syncDestIgnoreExcl: true
            }
        }
    });
};
