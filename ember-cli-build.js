/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var filterImports = require('babel-plugin-filter-imports');

function babelConfigFor(environment) {
  var isDevelopment = (environment === 'development');
  var isProduction = (environment === 'production');

  var plugins = [];

  if (isProduction) {
    plugins.push(filterImports({
      'ember-metal/debug': ['assert', 'debug', 'deprecate', 'info', 'runInDebug', 'warn', 'debugSeal']
    }));
  }

  return { plugins: plugins };
}


module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    babel: {
      plugins: [
        filterImports({
          'ember': ['assert', 'debug', 'deprecate', 'info', 'runInDebug', 'warn', 'debugSeal']
        })
      ]
      // development: babelConfigFor('development'),
      // production: babelConfigFor('production')
    }
  });

  // console.log('app', app);

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
