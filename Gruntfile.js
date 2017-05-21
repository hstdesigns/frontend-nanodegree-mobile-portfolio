/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
  "grunt build" recreates the dist directory for production use
*/
var mozjpeg = require('imagemin-mozjpeg');

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: { // copy src/. to dist/
      main: {
        expand: true,
        cwd: 'src',
        src: '**',
        dest: 'dist',
      },
    },
    jshint: { // check js syntax
      all: ['gruntfile.js', 'src/js/**/*.js', 'src/views/js/**/*.js']
    },
    uglify: { // minify js files
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/js/perfmatters.js': ['src/js/perfmatters.js'],
          'dist/views/js/main.js': ['src/views/js/main.js']
        }
      }
    },
    cssmin: { // minify css files
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css'
        }]
      }
    },
    htmlmin: { // Task
      dist: { // Target
        options: { // Target options
          removeComments: true,
          collapseWhitespace: true
        }
      },
      dev: { // Another target
        options: { // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: ['src/**/*.html', '*.html'],
          dest: 'dist'
        }]
      }
    },
    responsive_images: {  // resize images 
      dev: {
        options: {
          sizes: [{
              /* Change these */
              name: "opt",
              height: 600,
              quality: 80
            },
            {
              /* Change these */
              name: "opt",
              height: 50,
              quality: 80,
              suffix: "-sm"
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
            cwd: 'src/img/org/',
            dest: 'src/img/'
          },
          {
            expand: true,
            src: ['*.{gif,jpg,png}'],
            cwd: 'src/views/img/org/',
            dest: 'src/views/img/'
          }
        ]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['dist/*', 'src/img/*.{gif,jpg,png}']
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['dist/img']
        },
      },
    },
    imagemin: { // Task 
      static: { // Target 
        options: { // Target options 
          optimizationLevel: 3,
          svgoPlugins: [{
            removeViewBox: false
          }],
          use: [mozjpeg()]
        },
      },
      dynamic: { // Another target 
        files: [{
          expand: true, // Enable dynamic expansion 
          cwd: 'dist/img', // Src matches are relative to this path 
          src: ['**/*.{png,jpg,gif}'], // Actual patterns to match 
          dest: 'dist/img' // Destination path prefix 
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['clean', 'responsive_images', 'copy', 'jshint', 'uglify']);
  grunt.registerTask('build', ['clean', 'responsive_images', 'copy', 'imagemin', 'jshint', 'uglify', 'cssmin', 'htmlmin']);
};