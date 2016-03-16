module.exports = function (grunt) {

	grunt.initConfig({
		concat: {
   		 js: {
    		src: ['dev/js/ShowDateTime.js', 'dev/js/contactFormValidator.js'],
			dest: 'prod/js/script.js',
   		 },
   		 css: {
    		src: ['dev/css/home.css', 'dev/css/about.css', 'dev/css/contact.css'],
			dest: 'prod/css/style.css',
   		 }		 
  		},
		
		cssmin: {			 
			target: {
				files: {
				  'prod/css/style.min.css': ['dev/css/home.css', 'dev/css/about.css', 'dev/css/contact.css']
				}
			}
		},
		jshint : {
			options : {
				eqeqeq : true,
				curly : true
			},
			target : {
				src : 'dev/js/*.js'
			}
		},
		uglify : {
			js: {
				src: ['dev/js/ShowDateTime.js', 'dev/js/contactFormValidator.js'],
				dest: 'prod/js/script.min.js',
			}	 		
		},			
		
		watch : {
			options: {
				livereload: true,
				port: 9001,
				base: 'prod/'				
			},
			js: {
				files : ['dev/js/*.js'],
				tasks : ['uglify', 'jshint', 'concat:js']
			},
			css: {
				files : ['dev/css/*.css'],
				tasks : ['cssmin'] 
			 		
			} 			
		},
  		
		clean : {
			clean: 'prod/'	
		},		
		copy: {
            main: {
                files: [{
                    expand: true,
					flatten: true,
                    src: ['dev/*.html'],
                    dest: 'prod/',
					filter: 'isFile'
                }]
            }
        },
		connect: {
			server: {
				options: {
					port: 9001,
					base: 'prod/'
				}
			}
		},
		env : {
			dev: {
				NODE_ENV : 'DEVELOPMENT'
			},
			prod : {
				NODE_ENV : 'PRODUCTION'
			}
		},
		preprocess : {
			/*dev : {
				src : './src/tmpl/index.html',
				dest : './dev/index.html'
			},*/
			 			 
		 
			prod : { 
				src  : 'dev/index.html',
				dest : 'prod/index.html' 
			  },
			prod1 : { 
				src  : 'dev/about.html',
				dest : 'prod/about.html' 
			  }	,
			prod2 : { 
				src  : 'dev/contact.html',
				dest : 'prod/contact.html' 
			  }		
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd : 'dev/img/',
					src:  ['*.{png,jpg,gif}'],
					dest: 'prod/img/'
				}]
			}
		}		
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	
	grunt.loadNpmTasks('grunt-env');
	grunt.loadNpmTasks('grunt-preprocess');
	
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	
	grunt.registerTask('default', ['clean',  'env:prod', 'imagemin', 'concat', 'cssmin', 'jshint', 'uglify', 'preprocess', 'connect', 'watch']);
};