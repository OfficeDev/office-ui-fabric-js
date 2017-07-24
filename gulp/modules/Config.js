var path = require('path');
var pkg = require('../../package.json');
var Plugins = require('./Plugins');
var Utilities = require('./Utilities');

/**
 * Configuration class containing all properties to be used throughout the build
 */
var Config = function() {
  this.debugMode = false;
  this.sassExtension = "scss";
  this.buildSass = false;
  this.copyRightMessage = "Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.";
  this.packageData = pkg;
  this.paths = {
    dist: 'dist',
    src: 'src',
    srcDocsPagesExamples: 'examples',
		componentsPath : 'src/components',
    docPages : 'src/documentation/pages',
    srcLibPath: 'lib',
    uiCorePath: 'node_modules/office-ui-fabric-core',
	};
  
  this.paths.distComponents = this.paths.dist + '/components';
  this.paths.distSass = this.paths.dist + '/sass';
  this.paths.distCSS = this.paths.dist + '/css';
  this.paths.distDocumentation = this.paths.dist + '/documentation';
  this.paths.distDocumentationCSS = this.paths.distDocumentation;
  this.paths.distSamples = this.paths.dist + '/samples';
  this.paths.distSampleComponents = this.paths.dist + '/samples/' + '/Components';
  this.paths.distImages = this.paths.distDocumentation + '/images';
  this.paths.distJS = this.paths.dist + '/js';
  this.paths.distPackages = this.paths.dist + '/packages';
  this.paths.distDocsComponents = this.paths.distDocumentation + '/Components';
  this.paths.distDocsGettingStarted = this.paths.distDocumentation + '/GetStarted';
  this.paths.distDocsSamples = this.paths.distDocumentation + '/Samples';
  this.paths.distDocsStyles = this.paths.distDocumentation + '/Styles';
  this.paths.bundlePath = this.paths.dist + '/bundles';
  this.paths.distLibPath = this.paths.dist + '/lib';
  this.paths.uiCorePathDist = this.paths.uiCorePath + '/dist';
  this.paths.uiCorePathDistCSS = this.paths.uiCorePathDist + '/css';
  
  this.paths.srcSamples = this.paths.src + '/samples';
  this.paths.srcSass = this.paths.src + '/sass';
  this.paths.srcDocs = this.paths.src + '/documentation';
  this.paths.srcDocImages = this.paths.srcDocs + '/images';
  this.paths.srcDocsPages = this.paths.srcDocs + '/pages';
  this.paths.srcDocsJSCompPages = this.paths.srcDocsPages + '/Components';
  // this.paths.srcDocsComponents = this.paths.srcDocs + '/components';
  this.paths.srcTemplate = this.paths.srcDocs + '/templates';
  this.paths.srcDocumentationSCSS = this.paths.srcDocs + '/sass';
  
	this.port =  process.env.PORT || 2020;
	this.projectURL =  "http://localhost";
	this.projectDirectory =  path.resolve(__dirname, '../../' + this.paths.distDocumentation);
	this.servePaths = [
        {
            'urlPath': '/css',
            'folderPath': '../css'
        },
        {
            'urlPath': '/js',
            'folderPath': '../js'
        },
        {
            'urlPath': '/lib',
            'folderPath': '../lib'
        },
        {
          'urlPath': '/bundles',
          'folderPath': '../bundles'
        }
    ];
    this.typescriptConfig = {
        module: 'commonjs',
        declaration: true,
        target: 'ES5',
        noEmitOnError: true
    };
  this.typescriptProject = Plugins.tsc.createProject(this.typescriptConfig);
	this.nugetConfig = {
		id: "OfficeUIFabricJS",
		title: "Office UI Fabric JS",
		version: pkg.version,
		authors: "Microsoft Corporation",
		owners: "Microsoft Corporation",
		description: "This framework uses styles from the Office UI Fabric project. Fabric is a responsive, mobile-first collection of styles and tools designed to make it quick and simple for you to create web experiences using the Office Design Language.",
		summary: "The JavaScript front-end framework for building experiences for Office and Office 365.",
		language: "en-us",
		projectUrl: "https://github.com/OfficeDev/Office-UI-Fabric-JS",
		licenseUrl: "https://github.com/OfficeDev/Office-UI-Fabric-JS/blob/master/LICENSE",
		copyright: "Copyright (c) Microsoft Corporation",
		requireLicenseAcceptance: true,
		tags: "Microsoft UI Fabric CSS",
		outputDir: this.paths.distPackages
	};
	this.nugetPaths = [
		{src: this.paths.distCSS, dest: "/content/Content/"},
		{src: this.paths.distSass, dest: "/content/Content/sass/"},
		{src: this.paths.distJS, dest: "/content/Scripts/"}
	];
  this.componentSamplesUpdate = "Components Samples updated successfully! Yay!";
  this.componentSamplesFinished = ' Component Samples build was successful! Yay!';
  //JS Files to be ignored in the JS Linter for Components
  //NOTE: Only use this for third party files, do not add any Fabric JS files to this.
  this.ignoreComponentJSLinting = [{
    src: this.paths.componentsPath + '/DatePicker/PickaDate.js',
    dist: this.paths.distSampleComponents + '/DatePicker/'
  }];
  //Errors
  this.genericBuildError = "Hmm, something went wrong in the build... Here is the error dump";
  this.bundlesConfig = {
    "bundles": [
      {
        "name": "fabric-full",
        "description": "A bundle containing all of Fabric's core and Component CSS.",
        "excludes": [],
        "options": {
          // Log helpful messages about the bundles being built.
          "verbose": true,

          // Log warnings about the bundles being built.
          "logWarnings": false
        }
      },
      {
        "name": "custom-bundle",
        "description": "A custom bundle including a handful of modules.",
        "includes": [
          "_Fabric.Color.Variables",
          "_Fabric.Color.Mixins",
          "_Fabric.Typography.Variables",
          "_Fabric.Typography",
          "_Fabric.Typography.Fonts",
          "_Fabric.Typography.Languageoverrides",
          "_Fabric.Utilities",
          "Button",
          "PersonaCard"
        ],
        "options": {
          "verbose": true,
          "logWarnings": false
          }
        }
      ]
	};
  this.templateLibraryConfig = {
    "components": [
      "ContextualHost",
      "Button"
    ]
  };
  this.handleBarsConfig = {
      ignorePartials: true,
      partials:  {

      },
      batch: [],
      helpers:  {
        compileHBS: function(text) {
          var hbs = Plugins.handlebars.Handlebars;
          return text;
        },
        toLowerCase: function(text) {
          return text.toLowerCase();
        },
        // Helper function for codeBlock helper to highlight code
        outputCode: function(text, language) {
          var hbs = Plugins.handlebars.Handlebars;
          var hljs = Plugins.hljs;
          text = text.trim();
          text = text.replace(/(<!--.+-->)+/g, "");
          text = text.replace(/^\s+|\s+$/g, "");
          text = hljs.highlight(language, text).value;
          return text;
        },

        renderCode: function(text, language) {
          var hljs = Plugins.hljs;
          var code = text.toString();
          code = code.replace(/(<!--.+-->)+/g, "");
          code = code.replace(/^\s+|\s+$/g, "");
          code = Plugins.pretty(code);
          code = "<div class=\"codeBlock isDarkTheme\"><pre class=\"hljs\"><code class=\"" + language + "\">"  
           + hljs.highlight(language, code).value 
           + "</code></pre></div>";
          return code;
        },

        cdnLinks: function(version) {
          return `<link rel="stylesheet" href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/${version}/css/fabric.min.css" />
<link rel="stylesheet" href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/${version}/css/fabric.components.min.css" />
<script src="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/${version}/js/fabric.min.js"></script>`;
        },

        // Output code from a string
        codeBlock: function(code, language, theme) {
          var hbs = Plugins.handlebars.Handlebars;
          var fileContents = Plugins.fs.readFileSync(this.paths.srcTemplate + '/codeBlock.hbs',  "utf8");
          var template = hbs.compile(fileContents);
          var templateData = {
            code: code,
            language: language,
            theme: theme
          }

          return new hbs.SafeString(template(templateData));
        }.bind(this),

        renderDocPage: function(page) {
          var hbs = Plugins.handlebars.Handlebars;
          var pagePath = page.data.root.page;
          var tmplFile = page.data.root.template;
          var fileContents = Plugins.fs.readFileSync(this.paths.docPages + '/' + pagePath + '/' + tmplFile +'.hbs',  "utf8");
          var template = hbs.compile(fileContents);
          return new hbs.SafeString(template(page.data.root));
        }.bind(this),

        renderComponentExample: function(component, exampleName, props) {
          var hbs = Plugins.handlebars.Handlebars;
          var fileContents = Plugins.fs.readFileSync(this.paths.srcDocsJSCompPages + '/' + component + '/examples/' + exampleName +'.hbs',  "utf8");
          var template = hbs.compile(fileContents);
          var thisProps = {props: props};
          return new hbs.SafeString(template(thisProps));
        }.bind(this),

        renderPartial: function(partial, props) {
          var hbs = Plugins.handlebars.Handlebars;
          var fileContents = Plugins.fs.readFileSync(this.paths.componentsPath + '/' + partial + '/' + partial +'.hbs',  "utf8");
          var template = hbs.compile(fileContents);
          var thisProps = {props: props};
          return new hbs.SafeString(template(thisProps));
        }.bind(this),

        renderPartialPre: function(partial, examplePartial, props, isComponent) {
          var hbs = Plugins.handlebars.Handlebars;

          if (isComponent) {
            var fileContents = Plugins.fs.readFileSync(this.paths.componentsPath + '/' + partial + '/' + partial +'.hbs',  "utf8");
          } else {
            var fileContents = Plugins.fs.readFileSync(this.paths.srcDocsJSCompPages + '/' + partial + '/examples/' + examplePartial +'.hbs',  "utf8");
          }

          var template = hbs.compile(fileContents);
          var thisProps = {props: props};
          var templateString = new hbs.SafeString(template(thisProps));
          var commentRegex = /(<!--.+-->)+/g;
          templateString = ' ' + templateString;
          templateString = templateString.replace(commentRegex, '');
          return templateString;
        }.bind(this)
      }
  };
};

module.exports = new Config();