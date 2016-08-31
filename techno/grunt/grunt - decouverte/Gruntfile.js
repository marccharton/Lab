module.exports = function ( grunt ) {

	grunt.initConfig({
		// Défini la variable 'pkg' comme étant le fichier packge.json, pour récupérer des informations
		pkg: grunt.file.readJSON('package.json'),
		
		// Configuration de la tâche 'concat'
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ["scripts/*.js"],
				dest: 'dist/<%= pkg.name %>.js'
			}
		},

		// Configuration de la tâche 'uglify'
		uglify: {
			options: {
				banner: '// @package <%= pkg.name %> \n// @date <%= grunt.template.today("yyyy-mm-dd") %>\n'
			},
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},

		// Configuration de la tâche 'jshint'
		jshint: {
			file: ['Gruntfile.js', 'scripts/**/*.js'],
			 options: {
				globals: {
				  jQuery: true,
				  console: true,
				  module: true
				}
			}
		},

		// Configuration de la tâche 'watch'
		watch: {
			files: ['<%= jshint.file %>'],
			tasks: ['jshint', 'concat', 'uglify']
		}
	});

	// Chargement des tâches installées
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Enregistrement de tâches perso avec leur nol et les tâches qu'elles éxecutent
	grunt.registerTask('test', ['jshint']);
	grunt.registerTask('default', ['watch']);

};