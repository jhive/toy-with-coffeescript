module.exports = function(grunt) {

  grunt.initConfig({
    src: 'src/',
    dest: 'dist/',

    pkg: grunt.file.readJSON('package.json'),
    files: ['src/**/*.js'],

    clean: {
      all: {
         src: ["<%= dest %>"]
      }
    },
    copy: {
      lib: {
        expand: true,
        cwd: 'bower_components/',
        src: ['**/*'],
        dest: 'dist/lib/' 
      } 
    },
    coffee: {
      compile: {
        files: {
          '<%= dest %>/app.js':['<%= src %>/**/*.coffee']
        }
      } 
    },

    jade: {
      options: {
        client: false
      },
      html: {
        files: {
          'dist/': ['src/index.jade'],
          'dist/sample/': ['src/sample/sample.jade'],
          'dist/home/':   ['src/home/*.jade']
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
      options: {
        livereload: true,
      },
      scripts: {
        livereload: true,
        files: ['<%= files %>'],
        tasks: ['coffee']
      },
      jade: {
        
        files:['src/**/*.jade'],
        tasks: ['jade']
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['coffee']);
  grunt.registerTask('build', ['coffee', 'jade']);
};
