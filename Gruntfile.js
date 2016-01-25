/*
 * http://yakovlevyuri.com
 * Copyright (c) 2016 Yuri Yakovlev (contact@yakovlevyuri.com)
 */

/* global module:false, require:false */
module.exports = function(grunt) {

    // Display the elapsed execution time of grunt tasks
    require('time-grunt')(grunt);

    // A JIT(Just In Time) plugin loader for Grunt
    require('jit-grunt')(grunt);


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        lessFile: {
            front: 'less/front.less',
        },

        cssFile: {
            front: 'css/front.min.css',
        },

        banner: '/*\n' +
        ' * <%= pkg.name %>\n' +
        ' * <%= pkg.version %>\n' +
        ' * <%= pkg.description %> <%= pkg.url %>\n' +
        ' * This version was compiled <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> (<%= pkg.email %>)\n' +
        ' */\n' +
        '\n',

        // compile LESS files to CSS.
        less: {
            options: {
                banner: '<%= banner %>'
            },

            // compilation for development, uncompressed with source map
            develop: {

                files:
                {
                    '<%= cssFile.front %>': '<%= lessFile.front %>'
                },

                options: {
                    sourceMap: true,
                    sourceMapFilename: 'css/front.css.map',
                    sourceMapURL: 'front.css.map',
                    sourceMapBasepath: '',
                    sourceMapRootpath: '/',
                    compress: false
                }
            },

            // compilation for production, compressed
            production: {
                files: {
                    '<%= cssFile.front %>': '<%= lessFile.front %>'
                },
                options: {
                    compress: true
                }
            }
        },

        // Run predefined tasks whenever watched file patterns are added, changed or deleted
        watch: {
            options: {
                nospawn: true
            },
            less: {
                files: [
                    'less/**/*.less',

                    // exclude other files
                    '!<%= lessFile.print %>',
                ],
                tasks: ['less:develop'],
            }
        }
    });

    grunt.registerTask('build-develop', [
        'less:develop'
    ]);

    grunt.registerTask('build', [
        'less:production'
    ]);

    grunt.registerTask('default', [
        'watch'
    ]);
};