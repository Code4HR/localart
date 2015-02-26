localart
==========

[![Build Status](https://travis-ci.org/Code4HR/localart.svg)](https://travis-ci.org/Code4HR/localart)

An HTML5 mobile app for navigating &amp; browsing locations of public art, architecture, and culture in your local city.

Prerequisite Tools
==================

    npm install -g yo yuidocjs karma-cli
    
Dependency Installation
=======================

    npm install && bower install && cd test && bower install && cd ..
    
Generate documentation with `yuidoc .`.

Just run unit tests with `grunt test`.  `npm test` will also install dependencies.

Lint with `grunt jshint`.

Just debug with `grunt serve`.  `npm start` will also install dependencies.

Build for production or deployment with `grunt build`.

Lint, test and package any build by simply running `grunt`.
