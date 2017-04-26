/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
	  jshint: {
    all: ['Gruntfile.js', 'js/*.js', 'views/js/*.js']
  },
	    uglify: {
    my_target: {
      files: {
        'dest/output.min.js': ['js/perfmatters.js'],
		'dest/main.min.js': ['views/js/main.js']
      }
    }
  },
    responsive_images: {
      dev: {
        options: {
          sizes: [{
            /* Change these */
            width: 1600,
            quality: 30
          },
          {
            /* Change these */
            width: 800,
            quality: 30
          },
		  {
            /* Change these */
            width: 240,
            quality: 30
          }
          ]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img_src/',
          dest: 'img/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['img'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['img']
        },
      },
    },

  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images', 'uglify']);

};