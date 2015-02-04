module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		jshint: {
			all: [
				'routes/*.js',
				'app.js',
				'Gruntfile.js',
				'test/*.js'
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('test', ['jshint']);
};
