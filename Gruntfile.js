'use strict';

/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
      ' * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
      ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %><%= pkg.author.email ? " <" + pkg.author.email + ">" : "" %>; Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n' +
      ' */\n\n',
    code: {
      check_yepnope_start      : 'if(!window.yepnope) {',
      check_yepnope_end        : '}',
      check_jquery_start       : 'if(!window.jQuery || window.jQuery().jquery < \'1.9.0\') {',
      check_jquery_end         : '}',
      check_dust_start         : 'if(!window.dust) {',
      check_dust_end           : '}',
      check_messageformat_start: 'if(!window.Messageformat) {',
      check_messageformat_end  : '}',
      check_spinner_start      : 'if(!window.Spinner) {',
      check_spinner_end        : '}',
      check_opentip_start      : 'if(!window.opentip) {',
      check_opentip_end        : '}'
    },
    clean: {
      files: ['dist']
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: [
          // 'vendor/yepnope.js/yepnope.1.5.4-min.js',
          'external/jQuery/jQuery-1.9.1.js',
          'external/dust/dust-full-1.2.2.js',
          'external/messageformat/messageformat.js',
          'external/messageformat/locale/en.js',
          'external/messageformat/locale/de.js',
          // 'vendor/spin.js/spin.min.js',
          // 'vendor/opentip/min/opentip-jquery.js',
          'src/<%= pkg.name %>.js'
        ],
        dest: 'dist/<%= pkg.name %>.js'
      },
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
      },
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      gruntfile: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: 'Gruntfile.js'
      },
      src: {
        options: {
          jshintrc: 'src/.jshintrc'
        },
        src: ['src/**/*.js']
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/**/*.js']
      },
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', 'qunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      },
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'concat']);
};
