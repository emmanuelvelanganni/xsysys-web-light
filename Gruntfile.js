module.exports = function(grunt) {

    grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				curly: true
			},
			dev: {        
				src: ['src/js/**/*.js',  '!src/js/vendor/**/**.js']
			}
		},
		
		autoprefixer: {
			options: {
			  browsers: ['opera 12', 'ff 15', 'chrome 25'],
			  safe: true
			},
			
			// prefix the specified file
			multiple_files: {
			  expand: true,
			  flatten: true,
			  src: 'src/css/**/*.css', // -> src/css/file1.css, src/css/file2.css
			  dest: 'dest/css/' // -> dest/css/file1.css, dest/css/file2.css
			},
		},
		
		watch: {
			options: {
				livereload: true // refreshes browser window whenever changes are applied
			},
			css: {
				files: ['src/css/**/*.css'],
				tasks: ['autoprefixer']
				
			},
			scripts: {
				files: ['src/js/**/*.js'],
				tasks: ['jshint']
			}
		}
		
	});

    // task setup 
	//grunt.loadTasks('tasks');
	grunt.registerTask('test', ['clean', 'copy', 'autoprefixer', 'nodeunit']);
	grunt.registerTask('default', ['jshint']);
	grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
};