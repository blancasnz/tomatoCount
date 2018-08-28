module.exports = function (grunt) {

  grunt.initConfig({
    name: 'class',
    watch: {
      files: ['*.js', '*.css'],
      task: ['updated']
    },
    uglify: { //build is a parameter that comes with uglify module
      build: {//this pulled the index.js and logger.js and made a file that unites both! We need this to happen because inside index.html, line 13 is waiting for a dist/bundle.js file
        src: 'compiled.js',
        dest: 'dist/bundle.js'
      }
    }
  });

  //load the uglify into grunt
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //load the watching into grunt
  grunt.loadNpmTasks('grunt-contrib-watch');

  //task that reacts when any .js or .css file gets updted
  grunt.registerTask('updated', () => {
    grunt.log.writeln('It updated again!')
  })

  //a default task
  grunt.registerTask('default', () => {
    grunt.log.writeln(`Hello, ${grunt.config.get('name')}`);
  });
}
