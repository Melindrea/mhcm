'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: require('./package'),
        bower: require('./bower'),
        watson: require('./watson'),
        composer: require('./composer'),
        directories: {
            flatBuild: {
                base: 'src',
                build: 'html',
                js: 'src/assets/scripts',
                styles: 'src/assets/styles',
                fonts: 'src/assets/fonts'
            },
            ember: {
                base: 'src/assets/scripts/ember-app',
                components: 'src/assets/scripts/ember-app/components',
                controllers: 'src/assets/scripts/ember-app/controllers',
                models: 'src/assets/scripts/ember-app/models',
                routes: 'src/assets/scripts/ember-app/routes',
                views: 'src/assets/scripts/ember-app/views',
                templates: 'src/templates/ember'
            },
            test: {
                mocha: 'test/mocha',
                phpunit: 'test/phpunit'
            },
            laravel: {
                base: 'app',
                assets: 'public_html/assets',
                public: 'public_html'
            },
            reports: {
                phpmd: 'reports/phpmd',
                phploc: 'reports/phploc',
                pdepend: 'reports/pdepend',
                phpdocs: '<%= directories.flatBuild.build %>/phpdocs'
            }
        },
        files: {
            js: [
                'Gruntfile.js',
                'grunt/{,*/}*.js',
                '<%= directories.flatBuild.js %>/**/*.js',
                '!<%= directories.flatBuild.js %>/vendor/*'

            ],
            php: [
                '<%= directories.laravel.base %>/**/*.php',
            ],
            json: [
                '*.json',
                '<%= directories.flatBuild.base %>/data/{,*/}*.json',
                'grunt/hooks/data/*.json'
            ],
            packages: ['package.json', 'bower.json', 'composer.json']
        },
        config: {
            remote: require('./config/remote')
        }
    });

    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load grunt tasks "just in time"
    require('jit-grunt')(grunt, {
        'filerev_assets': 'grunt-filerev-assets',
        'emberTemplates': 'grunt-ember-templates',
        'sshexec': 'grunt-ssh'
    });
    grunt.loadTasks('grunt/tasks');
};
