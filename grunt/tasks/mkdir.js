module.exports = function(grunt) {
    'use strict';

    grunt.config('mkdir', {
        laravel: {
            options: {
                mode: '0775',
                create: [
                    'app/storage/cache',
                    'app/storage/logs',
                    'app/storage/meta',
                    'app/storage/views'
                ]
            }
        },
        composer: {
            options: {
                create: [
                    'app/controllers',
                    'app/commands',
                    'app/models',
                    'app/database/migrations',
                    'app/database/seeds',
                    'app/libraries'
                ]
            }
        }
    });
};
