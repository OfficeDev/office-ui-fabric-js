var gulp = require('gulp');
var Utilities = require('./modules/Utilities');
var Banners = require('./modules/Banners');
var Config = require('./modules/Config');
var BuildConfig = require('./modules/BuildConfig');
var ConsoleHelper = require('./modules/ConsoleHelper');
var ErrorHandling = require('./modules/ErrorHandling');
var Plugins = require('./modules/Plugins');
var ComponentHelper = require('./modules/ComponentHelper');
var folderList = Utilities.getFolders(Config.paths.componentsPath);


//
// Clean/Delete Tasks
// ----------------------------------------------------------------------------

gulp.task('FabricComponents-nuke', function () {
    return Plugins.del.sync([Config.paths.distComponents, Config.paths.distJS, Config.paths.distCSS]);
});


//
// Copying Files Tasks
// ----------------------------------------------------------------------------

gulp.task('FabricComponents-copyAssets', function () {
    // Copy all Components files.
    return gulp.src([Config.paths.componentsPath + '/**/*.json',
        '!' + Config.paths.componentsPath + '/**/*.js',
        '!' + Config.paths.componentsPath + '/**/*.ts',
        '!' + Config.paths.componentsPath + '/**/*.hbs',
        '!' + Config.paths.componentsPath + '/**/*.scss'])
        .pipe(Plugins.plumber(ErrorHandling.onErrorInPipe))
        .pipe(Plugins.changed(Config.paths.distComponents))
        .pipe(Plugins.gulpif(Config.debugMode, Plugins.debug({
                title: "Moving Fabric Component Assets to Dist"
        })))
        .pipe(gulp.dest(Config.paths.distComponents));
});

gulp.task('FabricCoreStyles-copyAssets', function() {
    return gulp.src([Config.paths.uiCorePathDistCSS + '/*.min.css'])
            .pipe(Plugins.plumber(ErrorHandling.onErrorInPipe))
            .pipe(Plugins.changed(Config.paths.distComponents))
            .pipe(Plugins.gulpif(Config.debugMode, Plugins.debug({
                    title: "Moving Fabric Core Style CSS to Dist"
            })))
            .pipe(gulp.dest(Config.paths.distCSS));
});

//
// Add Comments to Component Files (HBS and SCSS) and copy to Dist/Components
// ----------------------------------------------------------------------------

gulp.task('FabricComponents-addCommentsToComponentsHBS', ['FabricComponents-copyAssets'], function(){
    return gulp.src(Config.paths.componentsPath + '/**/' + '*.hbs')
            .pipe(Plugins.debug({
                title: "Adding Comments to Component HBS"
            }))
            .pipe(Plugins.header(Banners.getBannerTemplateHTML(), Banners.getBannerData()))
            .pipe(gulp.dest(Config.paths.distComponents));
});

gulp.task('FabricComponents-addCommentsToComponentsSCSS', ['FabricComponents-copyAssets'], function(){
    return gulp.src(Config.paths.componentsPath + '/**/' + '*.scss')
            .pipe(Plugins.debug({
                title: "Adding Comments to Component SASS"
            }))
            .pipe(Plugins.header(Banners.getBannerTemplate(), Banners.getBannerData()))
            .pipe(gulp.dest(Config.paths.distComponents));
});


//
// Sass tasks
// ----------------------------------------------------------------------------

// Build Components Sass files
gulp.task('FabricComponents-buildAndCombineStyles', function () {
    var stream = gulp.src(BuildConfig.srcPath + '/Fabric.Components.' + BuildConfig.fileExtension)
        .pipe(Plugins.plumber())
        .pipe(Plugins.header(Banners.getBannerTemplate(), Banners.getBannerData()))
        .pipe(Plugins.header(Banners.getCSSCopyRight(), Banners.getBannerData()))
        .pipe(BuildConfig.processorPlugin().on('error', BuildConfig.compileErrorHandler))
        // .pipe(Plugins.changed(Config.paths.distCSS, {extension: '.css'}))
        .pipe(Plugins.gulpif(Config.debugMode, Plugins.debug({
                title: "Building Fabric Components " + BuildConfig.processorName + " into One Files"
        })))
        .pipe(Plugins.autoprefixer(
            {
                browsers: ['last 3 versions', 'ie >= 9'],
                cascade: false
            }
        ))
        .pipe(Plugins.rename('fabric.components.css'))
        .pipe(Plugins.cssbeautify())
        .pipe(Plugins.csscomb())
        .pipe(gulp.dest(Config.paths.distCSS))
        .pipe(Plugins.rename('fabric.components.min.css'))
        .pipe(Plugins.cssMinify({
            safe: true
        }))
        .pipe(Plugins.header(Banners.getBannerTemplate(), Banners.getBannerData()))
        .pipe(Plugins.header(Banners.getCSSCopyRight(), Banners.getBannerData()))
        .pipe(gulp.dest(Config.paths.distCSS))
        .pipe(Plugins.flipper())
        .pipe(Plugins.cssbeautify())
        .pipe(Plugins.csscomb())
        .pipe(Plugins.rename('fabric.components.rtl.css'))
        .pipe(gulp.dest(Config.paths.distCSS))
        .pipe(Plugins.cssMinify({
            safe: true
        }))
        .pipe(Plugins.header(Banners.getBannerTemplate(), Banners.getBannerData()))
        .pipe(Plugins.header(Banners.getCSSCopyRight(), Banners.getBannerData()))
        .pipe(Plugins.rename('fabric.components.rtl.min.css'))
        .pipe(gulp.dest(Config.paths.distCSS));
     return stream;
     
});

//
// Rolled up Build tasks
// ----------------------------------------------------------------------------

// Build for Fabric component demos
gulp.task('FabricComponents', [
        'FabricComponents-buildAndCombineStyles',
        'FabricComponents-copyAssets', 
        'FabricCoreStyles-copyAssets',
        'FabricComponents-addCommentsToComponentsHBS',
        'FabricComponents-addCommentsToComponentsSCSS',
        'ComponentJS'
    ]
);

BuildConfig.buildTasks.push('FabricComponents');
BuildConfig.nukeTasks.push('FabricComponents-nuke');