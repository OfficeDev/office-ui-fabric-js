var gulp = require('gulp');
var fs = require('fs');
var Utilities = require('./modules/Utilities');
var Banners = require('./modules/Banners');
var Config = require('./modules/Config');
var BuildConfig = require('./modules/BuildConfig');
var ConsoleHelper = require('./modules/ConsoleHelper');
var ErrorHandling = require('./modules/ErrorHandling');
var Plugins = require('./modules/Plugins');
var ComponentHelper = require('./modules/ComponentHelper');
var folderList = Utilities.getFolders(Config.paths.componentsPath);
var demoPagesList = Utilities.getFolders(Config.paths.srcDocsJSCompPages);
var reload = require('require-reload')(require);
var BuildConfig = require('./modules/BuildConfig');


var componentSidebarList = [];
var componentsList = Utilities.getFolders(Config.paths.srcDocsJSCompPages);
for (var i = 0; i < componentsList.length; i++) {
    componentSidebarList.push({
        "name": componentsList[i]
    });
}

//
// Clean/Delete Tasks
// ----------------------------------------------------------------------------

gulp.task('Documentation-nuke', function () {
    return Plugins.del.sync([Config.paths.distDocumentation]);
});

//
// Copying Files Tasks
// ----------------------------------------------------------------------------

gulp.task('Documentation-copyIgnoredFiles', function() {
    return Config.ignoreComponentJSLinting.map(function(element) {
        var src = element.src;
        var dist = element.dist;
        return gulp.src(src)
            .pipe(Plugins.gulpif(Config.debugMode, Plugins.debug({
                title: "Copying Ignored Files"
            })))
            .pipe(Plugins.plumber(ErrorHandling.onErrorInPipe))
            .pipe(Plugins.changed(dist))
            .pipe(gulp.dest(dist));
    });
});

gulp.task('Documentation-copyDocImages', function() {
  return gulp.src(Config.paths.srcDocImages + '/*')
            .pipe(Plugins.gulpif(Config.debugMode, Plugins.debug({
                title: "Copying Documentation Images"
            })))
            .pipe(Plugins.plumber(ErrorHandling.onErrorInPipe))
            .pipe(gulp.dest(Config.paths.distImages));
});

gulp.task('Documentation-copyAssets', function() {
    var paths = [
        Config.paths.srcDocsJSCompPages + '/**/*.jpg', 
        Config.paths.srcDocsJSCompPages + '/**/*.png',
        Config.paths.srcDocsJSCompPages + '/**/*.gif',
        Config.paths.srcDocsJSCompPages + '/**/*.svg'
    ];

    return gulp.src(paths)
        .pipe(Plugins.gulpif(Config.debugMode, Plugins.debug({
                title: "Copying Component Assets"
            })))
        .pipe(Plugins.plumber(ErrorHandling.onErrorInPipe))
        .pipe(Plugins.changed(Config.paths.distDocsComponents))
        .pipe(gulp.dest(Config.paths.distDocsComponents));
});

gulp.task('Documentation-handlebars', function(cb) {
   var _folderName;
   var _srcFolderName;
   var _demoPageComponents;
   
   // Reset current batch
   Config.handleBarsConfig.batch = [];
   
   // Get all components partials first
   for (var i = 0; i < folderList.length; i++) {
    _folderName = folderList[i];
    _srcFolderName = Config.paths.componentsPath + '/' + _folderName;
    // Push to Handlebars config
    Config.handleBarsConfig.batch.push('./' + _srcFolderName);
   }
    
   // Next get all example partials inside of the pages folders
   for (var i = 0; i < demoPagesList.length; i++) {
    _folderName = demoPagesList[i];
    _srcFolderName = Config.paths.srcDocsJSCompPages + '/' + _folderName + '/' + Config.paths.srcDocsPagesExamples;

    if (fs.existsSync(_srcFolderName)) {
        Config.handleBarsConfig.batch.push('./' + _srcFolderName);
    }
   }
   
   cb();
});

//
// Sample Index Page Build
// ----------------------------------------------------------------------------

gulp.task('DocumentationViewer', ['FabricComponents', 'Samples'], function() {
    // Get components and save to template navigation

    var templateData = {
        page: 'HomePage',
        template: 'HomePage',
        isHome: true,
        packageData: Config.packageData,
        relativePath: './'
    };

    return gulp.src(Config.paths.srcTemplate + '/'+ 'samples-index.hbs')
        .pipe(Plugins.plumber(ErrorHandling.oneErrorInPipe))
        .pipe(Plugins.data(function () {
            return { "components" : componentSidebarList };
        }))
        .pipe(Plugins.handlebars(templateData, Config.handleBarsConfig))
        .pipe(Plugins.template())
        .pipe(Plugins.rename('index.html'))
        .pipe(gulp.dest(Config.paths.distDocumentation));
});

//
// Get Started Page Building
// ----------------------------------------------------------------------------
gulp.task('Documentation-getStartedPage', ['Documentation-handlebars'], function() {
    var templateData = {
        page: 'GetStarted',
        template: 'GetStarted',
        isHome: true,
        packageData: Config.packageData,
        relativePath: '../'
    };

    return gulp.src(Config.paths.srcTemplate + '/'+ 'samples-index.hbs')
        .pipe(Plugins.plumber(ErrorHandling.oneErrorInPipe))
        .pipe(Plugins.data(function () {
            return { "components" : componentSidebarList };
        }))
        .pipe(Plugins.handlebars(templateData, Config.handleBarsConfig))
        .pipe(Plugins.template())
        .pipe(Plugins.rename('GetStarted.html'))
        .pipe(gulp.dest(Config.paths.distDocsGettingStarted));
});

//
// Sample Component Building
// ----------------------------------------------------------------------------
gulp.task('Documentation-build', ['Documentation-handlebars'], function() {
    var streams = [],
        pageName,
        srcFolderName,
        jsonFolderName,
        distFolderName,
        exampleFolderName,
        hasFileChanged,
        manifest,
        filesArray,
        componentPipe,
        hbs,
        templateData,
        jsonFile
        exampleModels;
       
    var demoPagesList = Utilities.getFolders(Config.paths.srcDocsJSCompPages);

    // Current Page Folder path
    srcFolderName = Config.paths.srcDocsJSCompPages;
    for (var i=0; i < demoPagesList.length; i++) {       
        templateData = {};
        pageName = demoPagesList[i];

        var exampleModels = [];

        // Component Page folder path
        compFolderPath = srcFolderName + '/'  + pageName;

        // Current Page example folder path
        exampleFolderName = compFolderPath + '/' + Config.paths.srcDocsPagesExamples;

        // Dist folder name for page
        distFolderName = Config.paths.distDocumentation + '/' + pageName;

        try {
          fs.statSync(exampleFolderName);
          exampleModels = Utilities.getFilesByExtension(exampleFolderName, '.js');
        } catch (err) {}

        // Go through and find the view model for each example handlebars file and store in context
        if(exampleModels.length > 0) {
          var modelsData = {};
          for(var x = 0; x < exampleModels.length; x++) {
              var file = exampleModels[x];
              var modelName = file.replace('.js', '');
              modelName = modelName.replace(" ", '');
              var modelFile = reload('../' + exampleFolderName + '/' + file);
              modelsData[modelName] = modelFile;
          }
          templateData['models'] = modelsData;
        }

        jsonFile = Utilities.getFilesByExtension(compFolderPath, '.js');
        if (jsonFile.length > 0) {
          for (var j = 0; j < jsonFile.length; j++) {
            var file = jsonFile[j];
            var pageInfo = reload('../' + compFolderPath + '/' + file);
            templateData['pageInfo'] = pageInfo;
          }
        }

       // hasFileChanged = Utilities.hasFileChangedInFolder(srcFolderName, distFolderName, '.hbs', '.html');

        templateData['page'] = 'Components';
        templateData['template'] = 'ComponentPageTmpl';
        templateData['isHome'] = false;
        templateData['relativePath'] = '../../';
        templateData['packageData'] = Config.packageData;
        hbs = Config.paths.srcTemplate + '/'+ 'samples-index.hbs';
        componentPipe = gulp.src(hbs)
            .pipe(Plugins.plumber(ErrorHandling.oneErrorInPipe))
            .pipe(Plugins.gulpif(Config.debugMode, Plugins.debug({
                title: "Building documentation page " + pageName
            })))
            // .pipe(Plugins.replace(/<!---i(.|\s)*?i--->/img, ""))
            // .pipe(Plugins.marked())
            // .on('error', function(err) {
            //     console.log(err);  
            // })
            // .pipe(Plugins.fileinclude())
            // .pipe(Plugins.replace("<!----", ""))
            // .pipe(Plugins.replace("---->", ""))
            // .pipe(Plugins.replace("<!---", ""))
            // .pipe(Plugins.replace("--->", ""))
            .pipe(Plugins.data(function () {
                return { "components" : componentSidebarList };
            }))
            .pipe(Plugins.handlebars(templateData, Config.handleBarsConfig))
            // .pipe(Plugins.replace(Banners.getHTMLCopyRight(), ""))
            // .pipe(Plugins.htmlbeautify())
            .pipe(Plugins.template())
            .pipe(Plugins.rename(pageName + ".html"))
            // .pipe(Plugins.wrap(
            //     {
            //         src:  Config.paths.srcTemplate + '/componentDemo.html' 
            //     },
            //     {
            //         pageName: pageName
            //     }
            // ));
            // Replace Comments to hide code
            .pipe(gulp.dest(Config.paths.distDocsComponents + '/' + pageName));


        // markdownPipe = gulp.src(markdown)
        //     .pipe(Plugins.plumber(ErrorHandling.oneErrorInPipe))
        //     .pipe(Plugins.gulpif(Config.debugMode, Plugins.debug({
        //             title: "Building documentation page " + pageName
        //         })))
        //     .on('error', function(err) {
        //         console.log(err);  
        //         })
        //     .pipe(Plugins.fileinclude())
        //     .pipe(Plugins.replace(/<!----(.|\s)*?---->/img, ""))
        //     .pipe(Plugins.replace("<!---i", ""))
        //     .pipe(Plugins.replace("i--->", ""))
        //     .pipe(Plugins.replace("<!---", ""))
        //     .pipe(Plugins.replace("--->", ""))
        //     .pipe(Plugins.handlebars(templateData, Config.handleBarsConfig))
        //     .pipe(Plugins.replace(Banners.getHTMLCopyRight(), ""))
        //     // Replace Comments to hide code
        //     .pipe(gulp.dest('./ghdocs/components/'));

        // // Add stream
        // streams.push(markdownPipe);
        streams.push(componentPipe);
   }
   
   if (streams.length > 0) {
       return Plugins.mergeStream(streams);
   } else {
       return;
   }
});

gulp.task('Documentation-buildStyles', function () {
  return gulp.src(Config.paths.srcDocumentationSCSS + '/' + 'style.scss')
                      .pipe(Plugins.plumber(ErrorHandling.onErrorInPipe))
                      .pipe(Plugins.debug({
                        title: "Building Documentation SASS " + BuildConfig.fileExtension + " File"
                      }))
                      .pipe(Plugins.header(Banners.getBannerTemplate(), Banners.getBannerData()))
                      .pipe(Plugins.header(Banners.getCSSCopyRight(), Banners.getBannerData()))
                      .pipe(BuildConfig.processorPlugin().on('error', BuildConfig.compileErrorHandler))
                      .pipe(Plugins.rename('styles.css'))
                      // .pipe(Plugins.changed(Config.paths.distDocumentationCSS, {extension: '.css'}))
                      .pipe(Plugins.autoprefixer({
                        browsers: ['last 3 versions', 'ie >= 9'],
                        cascade: false
                      }))
                      .pipe(Plugins.cssbeautify())
                      .pipe(Plugins.csscomb())
                      .pipe(gulp.dest(Config.paths.distDocumentationCSS))
                      .pipe(Plugins.rename('styles.min.css'))
                      .pipe(Plugins.cssMinify())
                      .pipe(Plugins.header(Banners.getBannerTemplate(), Banners.getBannerData()))
                      .pipe(Plugins.header(Banners.getCSSCopyRight(), Banners.getBannerData()))
                      .pipe(gulp.dest(Config.paths.distDocumentationCSS));
});

//
// Rolled up Build tasks
// ----------------------------------------------------------------------------

var DocumentationTasks = [
  'DocumentationViewer',
  'Documentation-build',
  'Documentation-getStartedPage',
  'Documentation-copyDocImages',
  'Documentation-copyAssets',
  'ComponentJS',
  'Documentation-copyIgnoredFiles',
  'Documentation-buildStyles'
];

//Build Fabric Component Samples
gulp.task('Documentation', DocumentationTasks);
BuildConfig.buildTasks.push('Documentation');
BuildConfig.nukeTasks.push('Documentation-nuke');