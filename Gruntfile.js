module.exports = function(grunt) {
  var vendorScriptFiles = 'bower_components/jquery/dist/jquery.min.js',
      vendorStyleFiles = [
        'bower_components/animate.css/animate.min.css',
        'bower_components/normalize.css/normalize.css'
      ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      assets: {
        src: 'assets/*',
        dest: 'web/img/'
      },
      vendorScriptFiles: {
        expand: true,
        flatten: true,
        src: vendorScriptFiles,
        dest: 'web/js/'
      },
      vendorStyleFiles: {
        expand: true,
        flatten: true,
        src: vendorStyleFiles,
        dest: 'web/css/'
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

  grunt.registerTask('assetsCopy', ['copy:assets']);
  grunt.registerTask('scriptFilesCopy', ['copy:vendorScriptFiles']);
  grunt.registerTask('styleFilesCopy', ['copy:vendorStyleFiles']);

  grunt.registerTask('jadeCompile', ['jade:compile']);
  grunt.registerTask('stylusCompile', ['stylus:compile']);

  grunt.registerTask('default', [
    'assetsCopy',
    'scriptFilesCopy',
    'styleFilesCopy',
    'jadeCompile',
    'stylusCompile'
  ]);
};
