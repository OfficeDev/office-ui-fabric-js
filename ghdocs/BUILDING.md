# Building Fabric, gulp tasks, bundling, and the starter template

Office UI Fabric JS uses [gulp](http://gulpjs.com/) to compile its styling, build and serve demos, and generate or watch other parts of the framework for changes. Use it to customize Fabric JS for your project, or to test changes you make to specific aspects of the components.

It's also valuable for seeing the [locally hosted docs site](#gulp-watch-and-the-local-docs-site).

## Contents

- [Building Fabric](#building-fabric)
- [Gulp tasks](#gulp-tasks)
- [Starter template](#starter-template)

## Building Fabric

Before you get started, make sure you have [node.js](https://nodejs.org/), [gulp](http://gulpjs.com/), and [git](https://git-scm.com/) installed. To build Fabric:

1. Clone the repo.
2. Navigate to the folder that contains the gulpfile.js file (Fabric JS's root).
3. `npm install`
4. `gulp`

The built files will be in the `/dist/` folder.

## Gulp tasks

You can test and work with Fabric JS locally using the tasks below.

### gulp

Builds everything incrementally. This will run slowly the first time and very quickly on subsequent runs. This task will build all parts of Fabric JS and move all changed files into `/dist/`. Every time you make changes, re-run this task.

### gulp watch and the local docs site

Builds and watches everything. After running this once, your builds will be a lot faster. Now if you make a change anything anywhere in Fabric JS, only that area/section/file will get built/changed/moved.

Once Fabric JS is built, you can view the localhost docs site by pointing your favorite browser at http://localhost:2020. This docs site allows you to view a list of the components, customize them (while `watch` runs), and see their responsive behavior.

### gulp watch-debug

This task is similar to `gulp watch` except you can now get a readout of what files are in the pipe. This will be helpful to make sure that the build is working properly. 

### gulp watch-sass

Builds and watches everything but builds only Sass versions of our library files.

### gulp watch-sass-debug

Builds and watches everything but uses the Sass versions of the files and gives a readout of files in the pipe.

### gulp Bundles

Builds all bundles specified in `gulp/modules/Config.js`. View more details in the [Bundling](https://github.com/OfficeDev/Office-UI-Fabric-js/blob/master/ghdocs/BUNDLING.md)


## Starter template

The following starter template represents the minimum recommended HTML structure for an app or add-in that uses Fabric. Copy the code into your project to start working with a basic Fabric document.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Application Name</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Optionally include jQuery to use Fabric's Component jQuery plugins -->
    <script type="text/javascript" src="js/jquery.js"></script>

    <!-- Fabric core -->
    <link rel="stylesheet" href="css/fabric.min.css">
    <link rel="stylesheet" href="css/fabric.components.min.css">

    <!-- Application-specific CSS -->
    <link rel="stylesheet" href="/css/app.css">
  </head>
  <body>
    <!-- Application content goes here -->
    <h1 class="ms-font-su">Why, hello, world.</h1>

    <!-- Optionally include Fabric's Component jQuery plugins -->
    <script type="text/javascript" src="js/jquery.fabric.min.js"></script>
  </body>
</html>
```
