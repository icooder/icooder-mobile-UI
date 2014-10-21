module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	
	less: {
	        production: {
	            options: {
	                yuicompress: true
	            },
	            files: {
	                "dist/imui.css": "less/imui.less"
	            }
	        }
   },
   cssmin: {
   		options: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        css: {
            src: 'dist/imui.css',
            dest: 'dist/imui.min.css'
        }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  //less 解析
  grunt.loadNpmTasks('grunt-contrib-less');
  //css压缩
  grunt.loadNpmTasks('grunt-css');
  //grunt.loadNpmTasks('grunt-contrib-concat');
 
  // 默认被执行的任务列表。
  grunt.registerTask('default', ['less','cssmin']);

};