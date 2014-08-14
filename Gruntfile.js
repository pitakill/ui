module.exports = function(grunt) {
  var vendorScriptFiles = 'bower_components/jquery/dist/jquery.min.js',
      scriptFiles = 'scripts/main.js',
      vendorStyleFiles = [
        'bower_components/animate.css/animate.min.css',
        'bower_components/normalize.css/normalize.css'
      ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      assets: {
        expand: true,
        flatten: true,
        src: 'assets/*',
        dest: 'web/img/'
      },
      scriptFiles: {
        expand: true,
        flatten: true,
        src: scriptFiles,
        dest: 'web/js/'
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
    jshint: {
      all: {
        src: [
          'Gruntfile.js',
          'scripts/*.js'
        ]
      }
    },
    stylus: {
      compile: {
        files: {
          'web/css/main.css': 'stylus/main.styl'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: 'stylus/*.styl',
        tasks: 'stylus'
      },
      html: {
        files: 'jades/*.jade',
        tasks: 'jade'
      },
      scripts: {
        files: 'scripts/*.js',
        tasks: 'scriptFiles'
      },
      verifyScripts: {
        files: [
          'scripts/*js',
          'Gruntfile.js'
        ],
        tasks: 'jshint'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('assetsCopy', ['copy:assets']);
  grunt.registerTask('scriptFiles', ['copy:scriptFiles']);
  grunt.registerTask('scriptFilesCopy', [
    'copy:vendorScriptFiles',
    'copy:scriptFiles'
  ]);
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
