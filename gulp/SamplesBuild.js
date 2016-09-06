var gulp = require('gulp');

var fs = require('fs');
var Utilites = require('./modules/Utilities');
var Config = require('./modules/Config');
var BuildConfig = require('./modules/BuildConfig');
var ConsoleHelper = require('./modules/ConsoleHelper');
var ErrorHandling = require('./modules/ErrorHandling');
var Plugins = require('./modules/Plugins');
var folderList = Utilites.getFolders(Config.paths.srcSamples);


var MDL2IconData = require('office-ui-fabric-core/src/data/icons.json');


//
// Clean/Delete Tasks
// ----------------------------------------------------------------------------


gulp.task('Samples-nuke', function () {
    return Plugins.del.sync(Config.paths.distDocsSamples + '/*');
});

//
// Copying Files Tasks
// ----------------------------------------------------------------------------

gulp.task('Samples-copyAssets', function () {
    // Copy all samples files.
    return gulp.src(Config.paths.srcSamples + '/**')
        .pipe(Plugins.changed(Config.paths.distDocsSamples))
            .on('error', ErrorHandling.onErrorInPipe)
         .pipe(Plugins.gulpif(Config.debugMode, Plugins.debug({
            title: "Moving All Sample Assets"
         })))
        .pipe(gulp.dest(Config.paths.distDocsSamples));
});

//
// LESS tasks
// ----------------------------------------------------------------------------

gulp.task('Samples-buildStyles',  function () {
    // Build minified Fabric Components CSS for each Component.
    return folderList.map(function(folder) {
        return gulp.src(Config.paths.srcSamples + '/' + folder + '/' + BuildConfig.processorName +'/' + folder + '.' + BuildConfig.fileExtension)
                .pipe(Plugins.plumber(ErrorHandling.onErrorInPipe))
                .pipe(Plugins.changed(Config.paths.distDocsSamples + '/' + folder + '/css', {extension: '.css'}))
                .pipe(Plugins.gulpif(Config.debugMode, Plugins.debug({
                           title: "Building Sample " + BuildConfig.processorName +" for " + folder
                 })))
                .pipe(BuildConfig.processorPlugin().on('error', BuildConfig.compileErrorHandler))
                    .on('error', ErrorHandling.onErrorInPipe)
                .pipe(Plugins.autoprefixer({
                    browsers: ['last 2 versions', 'ie >= 9'],
                    cascade: false
                }))
                .pipe(Plugins.rename(folder + '.css'))
                .pipe(Plugins.cssbeautify())
                .pipe(Plugins.csscomb())
                .pipe(gulp.dest(Config.paths.distDocsSamples + '/' + folder + '/css'))
                .pipe(Plugins.rename(folder + '.min.css'))
                .pipe(Plugins.cssMinify())
                .pipe(gulp.dest(Config.paths.distDocsSamples + '/' + folder + '/css'));
    });
});

//
// Build MDL2Samples Page from icon.json data
// ----------------------------------------------------------------------------

gulp.task('Samples-buildHandlebars', ['Samples-copyAssets'], function() {
    var templateData = [],
    options = {
        ignorePartials: true,
        partials : {},
        batch : [Config.paths.srcPartials],
        helpers : {}
    };
    templateData['icons'] = MDL2IconData;

    return gulp.src(Config.paths.srcSamples + '/MDL2Icons/index.html')
                .pipe(Plugins.handlebars(templateData, options))
                .pipe(Plugins.rename('index.html'))
                .pipe(gulp.dest(Config.paths.distDocsSamples + '/MDL2Icons'));
});

// Roll up for samples
gulp.task('Samples', ['Samples-copyAssets', 'Samples-buildStyles', 'Samples-buildHandlebars']);
BuildConfig.buildTasks.push('Samples');
BuildConfig.nukeTasks.push('Samples-nuke');