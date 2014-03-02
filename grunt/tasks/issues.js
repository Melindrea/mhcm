module.exports = function(grunt) {
    'use strict';
    var sh = require('execSync').run,
        fs = require('fs'),
        branchName = require('execSync').exec('git branch | grep \'*\' | sed \'s/* //\'').stdout.trim(),
        issueNumber, rePattern, matches, file;

    grunt.registerTask('issues', function(type, target) {
        if (type === 'remote') {
            sh('ghi list');
            return;
        } else if (type === 'show') {
            if (target === undefined) {
                if (branchName !== '(no branch)') {
                    rePattern = /[a-zA-Z]+\/([0-9]+)$/;
                    matches = rePattern.exec(branchName);

                    if (matches !== null) {
                        // Branch name is named along the lines of <label>/<issue>, so the prefix is
                        // #<issue>
                        issueNumber = matches[1];
                        sh('ghi show ' + issueNumber);
                    } else {
                        console.log('You are on branch "' + branchName + '", which is not a feature branch.');
                    }
                }
            } else if (typeof parseInt(target) === 'number' && target % 1 === 0) {
                sh('ghi show ' + target);
            } else {
                console.log('Use a valid number as the second argument, or none.');
            }
            return;
        } else if (type === 'watson') {
            if (target === undefined) {
                sh('watson');
            } else {
                sh('watson -s ' + target);
            }
            return;
        } else if (type === 'update') {
            sh('watson -s dirty --format json');

            fs.rename('.watsonresults', 'watson.json', function(err) {
                if (err) {
                    throw err;
                }
                grunt.log.verbose.writeln('Renamed .watsonresults watson.json');
                file = require('../../watson');
                grunt.config.set('watson', file);
            });
            if (branchName === 'master') {
                sh('watson -u --format silent');
            }
            return grunt.task.run(['beautify:json']);
        } else if (type === 'last') {
            sh('git log -1 --oneline');
            return;
        }

        sh('watson -s dirty');
    });
};
