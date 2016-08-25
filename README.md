# [Office UI Fabric JS](http://dev.office.com/fabric)

##### The JavaScript front-end framework for building experiences for Office and Office 365.

This framework uses styles from the [Office UI Fabric Core](https://github.com/OfficeDev/office-ui-fabric-core/) project. Fabric is a responsive, mobile-first collection of styles and tools designed to make it quick and simple for you to create web experiences using the Office Design Language.

**Please note**: We are currently removing the core styles (colors, fonts, icons, etc.) from this project as they are part of the core [Office UI Fabric](https://github.com/OfficeDev/office-ui-fabric/) project. If you have any issues related to these core styles, please open them in that project.

## Contents
- [What's included](#whats-included)
- [Get started](#get-started)
- [Learn more](#learn-more)
- [Contribute to Fabric](#contribute-to-fabric)
- [Licenses](#licenses)
- [Changelog](#changelog)

## What's included
This repository contains simple, visuals-focused components that don't require a framework. If you have any issues with core styling - icons, typography, fonts, colors, the grid, etc. - please file them in the [Office UI Fabric Core repository](https://github.com/OfficeDev/office-ui-fabric-core). For more information about the React components, check out the [Office UI Fabric React repository](https://github.com/OfficeDev/office-ui-fabric-react).

For documentation on Fabric's last stable version that included both the components *and* the core, check out the [Fabric 2.6.1 get started guide (located in the Core repo)](https://github.com/OfficeDev/office-ui-fabric-core/blob/master/ghdocs/V2GETSTARTED.md).

## Get started
For a quick start, you can reference the latest release of Fabric from a CDN or download and add a copy to your project. Once you've got Fabric JS added to your project, look at the [component list]() for documentation pertaining to each available component.

### Referencing the CDN
Include the following reference in the `<head>` of your page:

```html
<link rel="stylesheet" href="https://appsforoffice.microsoft.com/fabric/2.2.0/fabric.components.min.css">
```

New versions of Fabric might not be available on the CDN right away. The following table lists the releases that are available now. To reference a specific version, update the version number in the URL to match the one you want.

| Fabric JS Release | Available on CDN |
|:-----------------:|:----------------:|
|       3.0.0       |        Yes       |

If you want to reference previous versions, please see [this get started guide (located in the Core repo)](https://github.com/OfficeDev/office-ui-fabric-core/blob/master/ghdocs/V2GETSTARTED.md).

### Download and add to your project

THe simplest way to get started is to add a copy of Fabric to your project.

1. Download the source code zip file from the [latest release on GitHub](https://github.com/OfficeDev/Office-UI-Fabric-js/releases/latest).
2. Unzip the file and copy the Fabric folder into your project.
3. Add a reference to `fabric.components.css` in the `<head>` of your page. Make sure the path is correct.
4. If you'd also like to use the core, add a reference to `fabric.css` after the `fabric.components.css` reference.

## Learn more

New to Fabric? Although [the project's site](http://dev.office.com/fabric) contains lots of great info about its purpose and what's included, most of Fabric JS's documentation is contained in this repository.

To see a full component list, you can check out the [component list]() here or [build the project locally to use the fully interactive docs site]().

When you're ready to create an Office Add-in with Fabric, take a look at the [Use Office UI Fabric with Office Add-ins on MSDN article](https://msdn.microsoft.com/EN-US/library/office/mt450443.aspx).

## Contribute to Fabric JS

Bug reports, feature requests, and questions are posted on the [issue tracker](https://github.com/OfficeDev/Office-UI-Fabric-js/issues). For details on our contribution process and how we label issues, see our [Contributing](https://github.com/OfficeDev/Office-UI-Fabric-js/blob/master/ghdocs/CONTRIBUTING.md) page.


## Licenses

All files on the Office UI Fabric GitHub repository are subject to the MIT license. Please read the License file at the root of the project. Usage of the fonts referenced on Office UI Fabric files is subject to the [license](http://aka.ms/fabric-font-license).


## Changelog
We use [GitHub Releases](https://github.com/blog/1547-release-your-software) to manage our releases, including the changelog between every release. View a complete list of additions, fixes, and changes since 1.0 on the [releases](https://github.com/OfficeDev/office-ui-fabric-js/releases) page.

- - - 

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
