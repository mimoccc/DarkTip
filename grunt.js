/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    code: {
      outer_closure_start: 'var DarkTip = (function (window, document, undefined) {',
      outer_closure_end: 'return DarkTip; })(window, window.document);',

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
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
    },
    qunit: {
      files: ['test/**/*.html']
    },
    concat: {
      dist: {
        src: [
            '<banner:meta.banner>',
            // '<banner:code.check_yepnope_start>', 'vendor/yepnope.js/yepnope.1.5.4-min.js', '<banner:code.check_yepnope_end>',
            '<banner:code.check_jquery_start>','external/jQuery/jQuery-1.9.1.js', '<banner:code.check_jquery_end>',
            '<banner:code.check_dust_start>', 'external/dust/dust-full-1.2.2.js', '<banner:code.check_dust_end>',
            '<banner:code.check_messageformat_start>',
                'external/messageformat/messageformat.js',
                'external/messageformat/locale/en.js',
                'external/messageformat/locale/de.js',
            '<banner:code.check_messageformat_end>',
            // '<banner:code.check_spinner_start>', 'vendor/spin.js/spin.min.js', '<banner:code.check_spinner_end>',
            // '<banner:code.check_opentip_start>', 'vendor/opentip/min/opentip-jquery.js', '<banner:code.check_opentip_end>',
            '<banner:code.outer_closure_start>',
            '<file_strip_banner:lib/<%= pkg.name %>.js>',
            '<banner:code.outer_closure_end>'
        ],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
      options: {
        curly  : true,
        eqeqeq : true,
        immed  : true,
        latedef: true,
        newcap : true,
        noarg  : true,
        sub    : true,
        undef  : true,
        boss   : true,
        eqnull : true,
        browser: true
      },
      globals: {}
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'lint qunit concat min');

};
