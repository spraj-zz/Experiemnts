module.exports = function(grunt) {
  // Project configuration 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //Define resualbe paths
    paths:{
      app:'app',
      app_css:'<%= paths.app %>/css',
      app_js:'<%= paths.app %>/js'
    },
    connect: {
    			sever: {
    				options: {
    					hostname: 'localhost',
    					port: 3000,
    					base: '<%= paths.app %>',
    					livereload: true
    				}
    			}
    },
		watch: {
    				options: {
    					livereload: true,
    					dateFormat: function(time) {
    						grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
    						grunt.log.writeln('Waiting for more changes...');
    					}
            },
              htmls: {
                 files: ['**/*'],
    						tasks: [],
              },
    					scripts: {
    						files: '<%= paths.app_js %>/*.js',
    						tasks: [],
    						},
    					css: {
    						files: ['<%= paths.app_css %>/*.css'],
    						tasks: []
    						}
    }
    
  });
  // load pluggins
  grunt.loadNpmTasks('grunt-contrib-connect');
 grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', [  'connect', 'watch']);

};