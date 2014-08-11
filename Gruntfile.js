module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      assets: {
        src: 'assets/*',
        dest: 'web/img/'
      }
    },
    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: {
          'web/index.html': 'jades/index.jade'
        }
      }
    },
    stylus: {
      compile: {
        files: {
          'web/css/main.css': 'stylus/main.styl'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('assets', ['copy:assets']);
  grunt.registerTask('jadeCompile', ['jade:compile']);
  grunt.registerTask('stylusCompile', ['stylus:compile']);
  //grunt.registerTask('default', ['assets', 'watch']);

};
