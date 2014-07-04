module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    files: ['src/**/*.js'],

    coffee: {
      compile: {
        files: {
          'dist/app.js':['src/**/*.coffee']
        }
      } 
    },

    jshint: {
      files: ['<%= files %>', '!src/**/*.spec.js'],
      options: {
        reporter: require('jshint-stylish')
      }
    },

    watch: {
      all: {
        files: ['<%= files %>'],
        tasks: ['clear', 'jshint', 'mochaTest']
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['coffee']);
};
