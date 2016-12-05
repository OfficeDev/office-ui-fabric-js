# [Office UI Fabric JS](http://dev.office.com/fabric)

##### The JavaScript front-end framework for building experiences for Office and Office 365.

Fabric JS is a JavaScript front-end framework which provides visuals-focused [components](https://github.com/OfficeDev/office-ui-fabric-js/blob/master/ghdocs/COMPONENTSLIST.md) to extend, re-work and use in your Office and Office 365 experiences. Fabric JS uses styles from the [Office UI Fabric Core](https://github.com/OfficeDev/office-ui-fabric-core/) project. Fabric JS is a collection of responsive, mobile-first styles and tools designed to make it quick and simple for you to create web experiences using the Office Design Language. 

**Latest version:** Fabric JS 1.3.0, which uses [Fabric Core](https://github.com/OfficeDev/office-ui-fabric-core) 5.1.0.

## Contents
- [What's included](#whats-included)
- [Get started](#get-started)
- [View the interactive docs](#clone-build-and-view-the-docs)
- [Learn more](#learn-more)
- [Trello board](#trello-board)
- [Contribute to Fabric](#contribute-to-fabric-js)
- [Licenses](#licenses)
- [Changelog](#changelog)

## What's included
This repository contains simple, visuals-focused components that don't require a framework. For the entire list of components available in Fabric JS, see the [component list](https://github.com/OfficeDev/office-ui-fabric-js/blob/master/ghdocs/COMPONENTSLIST.md).

> **Note:** For more information on Office UI Fabric version 2.6.1, which combined Fabric core and Fabric’s components together, see [Get started with Fabric 2.6.1](https://github.com/OfficeDev/office-ui-fabric-core/blob/master/ghdocs/V2GETSTARTED.md).

## Get started
For a quick start, you can reference the latest release of Fabric from a CDN or clone and build locally. Once you've got Fabric JS added to your project, look at the [component list](https://github.com/OfficeDev/office-ui-fabric-js/blob/master/ghdocs/COMPONENTSLIST.md) for documentation pertaining to each available component.

If you'd like to get Fabric through a package manager such as Bower, npm, or NuGet, check out the [package manager docs](https://github.com/OfficeDev/office-ui-fabric-js/blob/master/ghdocs/PACKAGES.md).

### Referencing the CDN
Include the following references in the `<head>` of your page:

```html
<link rel="stylesheet" href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/1.2.0/css/fabric.min.css">
<link rel="stylesheet" href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/1.2.0/css/fabric.components.min.css">
<script src="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/1.2.0/js/fabric.min.js"></script>
```

**Note:** You may notice an additional reference to the Fabric Core. The components of Fabric JS use styles from Fabric Core.

All [releases of Fabric JS](https://github.com/OfficeDev/office-ui-fabric-js/releases) are available on the CDN, with new versions typically added within a week of the release. To reference a specific version, update the version number in the URL to match the one you want.

If you want to reference previous versions, please see [this get started guide (located in the Core repo)](https://github.com/OfficeDev/office-ui-fabric-core/blob/master/ghdocs/V2GETSTARTED.md).

### Clone, build, and view the docs

Before you get started, make sure you have [node.js](https://nodejs.org/), [gulp](http://gulpjs.com/), and [git](https://git-scm.com/) installed. To build Fabric:

1. Clone the repo
2. Navigate to the folder that contains the gulpfile.js file (Fabric JS's root).
3. `npm install`
4. `gulp watch`

The built files will be in the `/dist/` folder. You can then add these built files directly to your project.

You can also navigate to http://localhost:2020 to see the local docs site where you can test out the components' responsive behavior and see the samples.

For more information, check out the [documentation on building Fabric JS locally](https://github.com/OfficeDev/office-ui-fabric-js/blob/master/ghdocs/BUILDING.md).

## Learn more

New to Fabric? Although [the project's site](http://dev.office.com/fabric) contains lots of great info about its purpose and what's included, most of Fabric JS's documentation is contained in this repository.

To see a full component list, you can check out the [component list](https://github.com/OfficeDev/office-ui-fabric-js/blob/master/ghdocs/COMPONENTSLIST.md) here or [build the project locally to use the fully interactive docs site](https://github.com/OfficeDev/office-ui-fabric-js/blob/master/ghdocs/BUILDING.md#gulp-watch-and-the-local-docs-site).

When you're ready to create an Office Add-in with Fabric, take a look at the [Use Office UI Fabric with Office Add-ins on MSDN article](https://msdn.microsoft.com/EN-US/library/office/mt450443.aspx).

For more information about the React components, check out the [Office UI Fabric React repository](https://github.com/OfficeDev/office-ui-fabric-react).

## Trello board

Fabric JS contains a variety of components that are a part of the Office / Office 365 design language. If you're not seeing a component here that you'd like, first check out the [Office UI Fabric JS Requests board](https://trello.com/b/wq7oIK87/office-ui-fabric-js-requests) and upvote it there (if it exists), or file an [issue on Fabric JS's issue tracker](https://github.com/OfficeDev/office-ui-fabric-js/issues) to kick off a new request.

## Contribute to Fabric JS

Bug reports, feature requests, and questions are posted on the [issue tracker](https://github.com/OfficeDev/Office-UI-Fabric-js/issues). For details on our contribution process and how we label issues, see our [contributing](https://github.com/OfficeDev/Office-UI-Fabric-js/blob/master/ghdocs/CONTRIBUTING.md) page.

If you have any style issues - icons, typography, fonts, colors, the grid, etc. - please file them in the [Office UI Fabric Core repository](https://github.com/OfficeDev/office-ui-fabric-core). 

## Licenses

All files in this GitHub repository are subject to the [MIT license](https://github.com/OfficeDev/office-ui-fabric-core/blob/master/LICENSE). This project also references fonts and icons from a CDN, which are subject to a separate [asset license](https://static2.sharepointonline.com/files/fabric/assets/license.txt).

## Changelog
We use [GitHub Releases](https://github.com/blog/1547-release-your-software) to manage our releases, including the changelog between every release. View a complete list of additions, fixes, and changes since 1.0 on the [releases](https://github.com/OfficeDev/office-ui-fabric-js/releases) page.

- - - 

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
