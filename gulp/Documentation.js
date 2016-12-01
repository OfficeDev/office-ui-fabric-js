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
var demoPagesList = Utilities.getFolders(Config.paths.srcDocsPages);
var reload = require('require-reload')(require);
var BuildConfig = require('./modules/BuildConfig');

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

gulp.task('Documentation-copyAssets', function() {
    var paths = [
        Config.paths.srcDocsPages + '/**/*.jpg', 
        Config.paths.srcDocsPages + '/**/*.png',
        Config.paths.srcDocsPages + '/**/*.gif',
        Config.paths.srcDocsPages + '/**/*.svg'
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
    _srcFolderName = Config.paths.srcDocsPages + '/' + _folderName + '/' + Config.paths.srcDocsPagesExamples;
    
    if (fs.existsSync(_srcFolderName)) {
        Config.handleBarsConfig.batch.push('./' + _srcFolderName);
    }
   }
   
   cb();
});

//
// Sample Component Building
// ----------------------------------------------------------------------------
gulp.task('Documentation-build', ['Documentation-handlebars'], function() {
   var streams = [],
       pageName,
       srcFolderName,
       distFolderName,
       hasFileChanged,
       manifest,
       filesArray,
       componentPipe,
       markdown,
       templateData,
       exampleModels;
       
   var demoPagesList = Utilities.getFolders(Config.paths.srcDocsPages);
  
   for (var i=0; i < demoPagesList.length; i++) {
       
       templateData = {};
       pageName = demoPagesList[i];
       var exampleModels = [];
       
       // Current Page Folder path
       srcFolderName = Config.paths.srcDocsPages + '/' + pageName;
       
       // Current Page example folder path
       exampleFolderName = srcFolderName + '/' + Config.paths.srcDocsPagesExamples;
       
       // Dist folder name for page
       distFolderName = Config.paths.distDocumentation + '/' + pageName;
     
       try {
        fs.statSync(exampleFolderName);
        exampleModels = Utilities.getFilesByExtension(exampleFolderName, '.js');
       } catch (err) {}
       
       
       // Go through and find the view model for each example handlebars file and store in context
        if(exampleModels.length > 0) {
            for(var x = 0; x < exampleModels.length; x++) {
                var file = exampleModels[x];
                var modelName = file.replace('.js', '');
                modelName = modelName.replace(" ", '');
                var modelFile = reload('../' + exampleFolderName + '/' + file);
                templateData[modelName] = modelFile;
               
            }
        }

       hasFileChanged = Utilities.hasFileChangedInFolder(srcFolderName, distFolderName, '.md', '.html');
        markdown = srcFolderName + '/' + pageName + '.md';

        componentPipe = gulp.src(markdown)
            .pipe(Plugins.plumber(ErrorHandling.oneErrorInPipe))
            .pipe(Plugins.gulpif(Config.debugMode, Plugins.debug({
                title: "Building documentation page " + pageName
            })))
            .pipe(Plugins.replace(/<!---i(.|\s)*?i--->/img, ""))
            .pipe(Plugins.marked())
            .on('error', function(err) {
                console.log(err);  
            })
            .pipe(Plugins.fileinclude())
            .pipe(Plugins.replace("<!----", ""))
            .pipe(Plugins.replace("---->", ""))
            .pipe(Plugins.replace("<!---", ""))
            .pipe(Plugins.replace("--->", ""))
            //.pipe(Plugins.handlebars(templateData, Config.handleBarsConfig))
            // .pipe(Plugins.replace(Banners.getHTMLCopyRight(), ""))
            .pipe(Plugins.htmlbeautify())
            .pipe(Plugins.rename(pageName + ".hbs"))
            // .pipe(Plugins.wrap(
            //     {
            //         src:  Config.paths.srcTemplate + '/componentDemo.html' 
            //     },
            //     {
            //         pageName: pageName
            //     }
            // ));
            // Replace Comments to hide code
            .pipe(gulp.dest(Config.paths.srcDocsPages + '/' + pageName));


        markdownPipe = gulp.src(markdown)
            .pipe(Plugins.plumber(ErrorHandling.oneErrorInPipe))
            .pipe(Plugins.gulpif(Config.debugMode, Plugins.debug({
                    title: "Building documentation page " + pageName
                })))
            .on('error', function(err) {
                console.log(err);  
                })
            .pipe(Plugins.fileinclude())
            .pipe(Plugins.replace(/<!----(.|\s)*?---->/img, ""))
            .pipe(Plugins.replace("<!---i", ""))
            .pipe(Plugins.replace("i--->", ""))
            .pipe(Plugins.replace("<!---", ""))
            .pipe(Plugins.replace("--->", ""))
            .pipe(Plugins.handlebars(templateData, Config.handleBarsConfig))
            .pipe(Plugins.replace(Banners.getHTMLCopyRight(), ""))
            // Replace Comments to hide code
            .pipe(gulp.dest('./ghdocs/components/'));

        // Add stream
        streams.push(markdownPipe);
        streams.push(componentPipe);
   }
   
   if (streams.length > 0) {
       return Plugins.mergeStream(streams);
   } else {
       return;
   }
});

gulp.task('Documentation-buildStyles', function () {
    return gulp.src(Config.paths.srcDocumentationCSS + '/' + 'demo.scss')
            .pipe(Plugins.plumber(ErrorHandling.onErrorInPipe))
            .pipe(Plugins.debug({
              title: "Building Documentation SASS " + BuildConfig.fileExtension + " File"
            }))
            .pipe(Plugins.header(Banners.getBannerTemplate(), Banners.getBannerData()))
            .pipe(Plugins.header(Banners.getCSSCopyRight(), Banners.getBannerData()))
            .pipe(BuildConfig.processorPlugin().on('error', BuildConfig.compileErrorHandler))
            .pipe(Plugins.rename('demo.css'))
            .pipe(Plugins.changed(Config.paths.distDocumentationCSS, {extension: '.css'}))
            .pipe(Plugins.autoprefixer({
              browsers: ['last 3 versions', 'ie >= 9'],
              cascade: false
            }))
            .pipe(Plugins.cssbeautify())
            .pipe(Plugins.csscomb())
            .pipe(gulp.dest(Config.paths.distDocumentationCSS))
            .pipe(Plugins.rename('demo.min.css'))
            .pipe(Plugins.cssMinify())
            .pipe(Plugins.header(Banners.getBannerTemplate(), Banners.getBannerData()))
            .pipe(Plugins.header(Banners.getCSSCopyRight(), Banners.getBannerData()))
            .pipe(gulp.dest(Config.paths.distDocumentationCSS));
                
});

gulp.task('Documentation-convertMarkdown', function() {
  return gulp.src('./ghdocs/*.md')
          .pipe(Plugins.plumber(ErrorHandling.onErrorInPipe))
          .pipe(Plugins.debug({
            title: "Building Getting Started Documentation"
          }))
          .pipe(Plugins.marked())
          .pipe(Plugins.wrap(
              {
                  src:  Config.paths.srcTemplate + '/gettingStartedTemplate.html'  
              },
              {
                  pageName: 'Getting Started Page'
              }
         ))
          .pipe(gulp.dest(Config.paths.distDocsGettingStarted))
          
});

//
// Rolled up Build tasks
// ----------------------------------------------------------------------------

var DocumentationTasks = [
    'Documentation-build', 
    'Documentation-copyAssets',
    'ComponentJS',
    'Documentation-copyIgnoredFiles',
    "Documentation-buildStyles",
    "Documentation-convertMarkdown"
];

//Build Fabric Component Samples
gulp.task('Documentation', DocumentationTasks);
BuildConfig.buildTasks.push('Documentation');
BuildConfig.nukeTasks.push('Documentation-nuke');