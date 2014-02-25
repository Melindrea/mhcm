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
        directories: {
            flatBuild: {
                base: 'src',
                build: 'html',
                js: 'src/assets/scripts',
                styles: 'src/assets/styles',
                fonts: 'src/assets/fonts'
            },
            test: {
                mocha: 'test/mocha'
            }
        },
        files: {
            js: [
                'Gruntfile.js',
                'grunt/{,*/}*.js',
                '<%= directories.flatBuild.js %>/{,*/}*.js',
                '!<%= directories.flatBuild.js %>/vendor/*'

            ],
            json: [
                '*.json',
                '<%= directories.flatBuild.base %>/data/{,*/}*.json',
                'grunt/hooks/data/*.json'
            ],
            packages: ['package.json', 'bower.json']
        }
    });

    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load grunt tasks "just in time"
    require('jit-grunt')(grunt);
    grunt.loadTasks('grunt/tasks');
};
