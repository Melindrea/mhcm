module.exports = function(grunt) {
    'use strict';

    grunt.config('concat', {
        options: {
            // define a string to put between each file in the concatenated output
            separator: ';'
        },
        head: {
            // the files to concatenate
            src: [
                '<%= directories.flatBuild.js %>/vendor/modernizr.dev.js'
            ],
            // the location of the resulting JS file
            dest: '<%= directories.flatBuild.build %>/assets/scripts/head.max.js'
        },
        main: {
            // the files to concatenate
            src: [
                '<%= directories.flatBuild.base %>/bower_components/jquery/jquery.js',
                '<%= directories.flatBuild.base %>/bower_components/magnific-popup/dist/jquery.magnific-popup.js',
                '<%= directories.flatBuild.base %>/bower_components/showdown/src/showdown.js',
                '<%= directories.flatBuild.base %>/bower_components/momentjs/moment.js',
                '<%= directories.flatBuild.js %>/main.js',
                '<%= directories.flatBuild.js %>/lightbox.js'
            ],
            // the location of the resulting JS file
            dest: '<%= directories.flatBuild.build %>/assets/scripts/main.max.js'
        },
        ember: {
            // the files to concatenate
            src: [
                '<%= directories.flatBuild.base %>/bower_components/handlebars/handlebars.runtime.js',
                '<%= directories.flatBuild.base %>/bower_components/ember/ember.js',
                '<%= directories.flatBuild.base %>/bower_components/ember-data-shim/ember-data.js',
                '<%= directories.flatBuild.base %>/bower_components/ember-localstorage-adapter/localstorage_adapter.js',
                '<%= directories.ember.base %>/app.js',
                '<%= directories.ember.base %>/helpers.js',
                '<%= directories.ember.base %>/store.js',
                '<%= directories.ember.components %>/{,*/}*.js',
                '<%= directories.ember.controllers %>/{,*/}*.js',
                '<%= directories.ember.models %>/{,*/}*.js',
                '<%= directories.ember.routes %>/{,*/}*.js',
                '<%= directories.ember.views %>/{,*/}*.js',
                '<%= directories.ember.base %>/router.js',
                '.tmp/compiled-templates.js'
            ],
            // the location of the resulting JS file
            dest: '<%= directories.flatBuild.build %>/assets/scripts/ember.max.js'
        }
    });
};
