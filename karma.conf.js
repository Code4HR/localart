/*jshint undef:false */

// Karma configuration
module.exports = function(config) {

  config.set({

    // Base path that will be used to resolve files and exclude.
    basePath : '',

    // Testing framework to be used, default is `jasmine`.
    frameworks : [
      'qunit'
      
    ],

    // plugins
    plugins: [
	'karma-qunit',
        'karma-junit-reporter',
        'karma-coverage',
	'karma-ember-preprocessor',
	'karma-phantomjs-launcher'
    ],

    // preprocessor
    preprocessors: {
	'app/templates/**/*.hbs': 'ember',
	'app/scripts/**/*.js': 'coverage',
	'test/spec/**/*.js': 'coverage'
    },

    coverageReporter: {
	type: 'text'
    },


    // List of files / patterns to load in the browser.
    files : [
      'app/bower_components/jquery/dist/jquery.min.js',
      'app/bower_components/handlebars/handlebars.runtime.js',
      'app/bower_components/ember/ember.js',
      'app/bower_components/ember-data/ember-data.js',
      'app/bower_components/leaflet-dist/leaflet-src.js',
      'app/bower_components/ember-leaflet/dist/ember-leaflet.js',
      
      '.tmp/scripts/combined-scripts.js',
      '.tmp/scripts/compiled-templates.js',
      'test/spec/*.js',
    ],


    // List of files to exclude.
    exclude : [],


    // Test results reporter to use.
    // Possible values: 'dots', 'progress', 'junit'
    reporters : ['progress', 'junit', 'coverage'],


    // Web server port.
    port : 9876,


    // Cli runner port.
    runnerPort : 9100,


    // Enable / disable colors in the output (reporters and logs).
    colors : true,


    // Level of logging. Possible values are:
    //
    // * LOG_DISABLE
    // * LOG_ERROR
    // * LOG_WARN
    // * LOG_INFO
    // * LOG_DEBUG
    logLevel : config.LOG_INFO,


    // Enable / disable watching files and executing tests whenever any of them
    // changes.
    autoWatch : true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers : ['PhantomJS'],


    // If the browser does not capture in the given timeout [ms], then kill it.
    captureTimeout : 60000,


    // Continuous Integration mode.
    // If it's `true`, then it captures browsers, runs the tests and exits.
    singleRun : false

  });

};
