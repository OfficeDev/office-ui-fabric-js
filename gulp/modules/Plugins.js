// Add plugins here to use throughout the fabric build
/**
 * Class for accessing gulp and node plugins
 */
var Plugins = function() {
	this.colors = require('colors/safe');
	this.del = require('del');
	this.autoprefixer = require('gulp-autoprefixer');
	this.batch = require('gulp-batch');
	this.changed = require('gulp-changed');
	this.handlebars = require('gulp-compile-handlebars');
	this.concat = require('gulp-concat');
	this.flipper = require('gulp-css-flipper');
	this.cssbeautify = require('gulp-cssbeautify');
	this.csscomb = require('gulp-csscomb');
	this.cssMinify = require('gulp-cssnano');
	this.data = require('gulp-data');
	this.debug = require('gulp-debug');
	this.fileinclude = require('gulp-file-include');
	this.header = require('gulp-header');
	this.htmlbeautify = require('gulp-html-beautify');
	this.pretty = require('pretty');
	this.gulpif = require('gulp-if');
	this.lintspaces = require('gulp-lintspaces');
	this.marked = require('gulp-marked');
	this.nugetpack = require('gulp-nuget-pack');
	this.plumber = require('gulp-plumber');
	this.rename = require('gulp-rename');
	this.replace = require('gulp-replace');
	this.sass = require('gulp-sass');
	this.sasslint = require('gulp-sass-lint');
	this.size = require('gulp-size');
	this.template = require('gulp-template');
	this.tslint = require("gulp-tslint");
	this.gutil = require('gulp-util');
	this.wrap = require('gulp-wrap');
	this.mergeStream = require('merge-stream');
	this.path = require('path');
	this.pkg = require('../../package.json');
	this.uglify = require('gulp-uglify');
	this.requireDir = require('require-dir');
	this.fs = require('fs');
	this.tsc = require('gulp-typescript');
	this.runSequence = require('run-sequence');
	this.walkSync = require('walk-sync');
	this.hljs = require('highlight.js');
};

module.exports = new Plugins();