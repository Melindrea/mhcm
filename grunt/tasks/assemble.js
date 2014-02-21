module.exports = function (grunt) {
    'use strict';

    grunt.config('assemble', {
        options: {
            flatten: true,
            layout: 'default.hbs',
            layoutdir: '<%= directories.flatBuild.base %>/templates/layouts',
            partials: ['<%= directories.flatBuild.base %>/templates/partials/*.hbs'],
            helpers: ['<%= directories.flatBuild.base %>/templates/helpers/*.js'],
            pkg: '<%= pkg %>',
            data: '<%= directories.flatBuild.base %>/data/*.{json,yml}',
        },
        site: {
            files: {
                '<%= directories.flatBuild.build %>/': [
                    '<%= directories.flatBuild.base %>/content/*.hbs'
                ],
                '<%= directories.flatBuild.build %>/mockup/': [
                    '<%= directories.flatBuild.base %>/content/mockup/*.hbs'
                ]
            }
        }
    });
};
