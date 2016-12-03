var gulp = require('gulp');
var Utilites = require('./modules/Utilities');
var Config = require('./modules/Config');
var ConsoleHelper = require('./modules/ConsoleHelper');
var ErrorHandling = require('./modules/ErrorHandling');
var Plugins = require('./modules/Plugins');
var BuildConfig = require('./modules/BuildConfig');

//
// Sample Index Page Build
// ----------------------------------------------------------------------------

gulp.task('DocumentationViewer', ['FabricComponents', 'Documentation', 'Samples'], function() {
    // Get components and save to template navigation
    var components = [];
    var componentsList = Utilites.getFolders(Config.paths.srcDocsJSCompPages);
    for (var i = 0; i < componentsList.length; i++) {
        components.push({
            "name": componentsList[i]
        });
    }

    return gulp.src(Config.paths.srcTemplate + '/'+ 'samples-index.hbs')
        .pipe(Plugins.plumber(ErrorHandling.oneErrorInPipe))
        .pipe(Plugins.data(function () {
            return { "components" : components };
        }))
        .pipe(Plugins.handlebars({}, Config.handleBarsConfig))
        .pipe(Plugins.template())
        .pipe(Plugins.rename('index.html'))
        .pipe(gulp.dest(Config.paths.distDocumentation));
});

BuildConfig.buildTasks.push('DocumentationViewer');