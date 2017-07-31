# Command Bar
Commanding surface for panels, pages, and applications. When planning to use the surface for navigation only, consider the NavBar variant.

## Variants

### Default


![CommandBar example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/CommandBar-default.png)


### Dropdowns


![CommandBar example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/CommandBar-dropdowns.png)


### NavBar
Provides a means of navigating to different areas within an application. On small screens, the navigation items are placed inside a hamburger menu.


![CommandBar example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/CommandBar-navbar.png)


## States
State | Applied to | Result
 --- | --- | ---
`.is-hidden` | `.ms-CommandBarItem` | Hides a Command Bar item from view.
`.is-active` | `.ms-CommandBarSearch` | Expands the search field for use.

## Using this component
1. Confirm that you have references to Fabric's CSS and JavaScript on your page:

	```
    <head>
        <link rel="stylesheet" href="fabric.min.css">
        <link rel="stylesheet" href="fabric.components.min.css">
        <script src="fabric.min.js"></script>
    </head>
	```

2. Copy the HTML from the sample above into your page. For example:

	```
    <div class="ms-CommandBar">
        <div class="ms-CommandBar-sideCommands">
            <div class="ms-CommandButton  ms-CommandButton--noLabel">
                <button class="ms-CommandButton-button">
                    <span class="ms-CommandButton-icon ms-fontColor-themePrimary"><i class="ms-Icon ms-Icon--CircleRing"></i></span><span class="ms-CommandButton-label"></span>
                </button>
            </div>
        </div>

        <div class="ms-CommandBar-mainArea">
            <div class="ms-SearchBox ms-SearchBox--commandBar">
                <input class="ms-SearchBox-field" type="text" value="">
                <label class="ms-SearchBox-label">
                    <i class="ms-SearchBox-icon ms-Icon ms-Icon--Search"></i>
                    <span class="ms-SearchBox-text">Search</span>
                </label>

                <div class="ms-CommandButton ms-SearchBox-clear ms-CommandButton--noLabel">
                    <button class="ms-CommandButton-button">
                        <span class="ms-CommandButton-icon "><i class="ms-Icon ms-Icon--Cancel"></i></span><span class="ms-CommandButton-label"></span>
                    </button>
                </div>

                <div class="ms-CommandButton ms-SearchBox-exit ms-CommandButton--noLabel">
                    <button class="ms-CommandButton-button">
                        <span class="ms-CommandButton-icon"><i class="ms-Icon ms-Icon--ChromeBack"></i></span><span class="ms-CommandButton-label"></span>
                    </button>
                </div>

                <div class="ms-CommandButton ms-SearchBox-filter ms-CommandButton--noLabel">
                    <button class="ms-CommandButton-button">
                        <span class="ms-CommandButton-icon"><i class="ms-Icon ms-Icon--Filter"></i></span><span class="ms-CommandButton-label"></span>
                    </button>
                </div>
            </div>

            <div class="ms-CommandButton">
                <button class="ms-CommandButton-button">
                    <span class="ms-CommandButton-icon ms-fontColor-themePrimary"><i class="ms-Icon ms-Icon--CircleRing"></i></span><span class="ms-CommandButton-label">Command</span>
                </button>
            </div>

            <div class="ms-CommandButton">
                <button class="ms-CommandButton-button">
                    <span class="ms-CommandButton-icon ms-fontColor-themePrimary">
                        <i class="ms-Icon ms-Icon--CircleRing"></i>
                    </span>
                    <span class="ms-CommandButton-label">New</span>
                    <span class="ms-CommandButton-dropdownIcon"><i class="ms-Icon ms-Icon--ChevronDown"></i></span>
                </button>

                <ul class="ms-ContextualMenu  is-opened ms-ContextualMenu--hasIcons">
                    <li class="ms-ContextualMenu-item">
                        <a class="ms-ContextualMenu-link " tabindex="1">Folder</a>
                        <i class="ms-Icon ms-Icon--Folder"></i>
                    </li>
                    <li class="ms-ContextualMenu-item ms-ContextualMenu-item--divider"></li>
                    <li class="ms-ContextualMenu-item">
                        <a class="ms-ContextualMenu-link" tabindex="1">Plain Text Document</a>
                        <i class="ms-Icon ms-Icon--Page"></i>
                    </li>
                    <li class="ms-ContextualMenu-item">
                        <a class="ms-ContextualMenu-link " tabindex="1">A Coffee</a>
                        <i class="ms-Icon ms-Icon--Coffee"></i>
                    </li>
                    <li class="ms-ContextualMenu-item">
                        <a class="ms-ContextualMenu-link" tabindex="1">Picture</a>
                        <i class="ms-Icon ms-Icon--Picture"></i>
                    </li>
                    <li class="ms-ContextualMenu-item">
                        <a class="ms-ContextualMenu-link" tabindex="1">Money</a>
                        <i class="ms-Icon ms-Icon--Money"></i>
                    </li>
                </ul>
            </div>

            <div class="ms-CommandButton">
                <button class="ms-CommandButton-button">
                    <span class="ms-CommandButton-icon ms-fontColor-themePrimary"><i class="ms-Icon ms-Icon--CircleRing"></i></span>
                    <span class="ms-CommandButton-label">Command</span>
                </button>
            </div>

            <div class="ms-CommandButton">
                <button class="ms-CommandButton-button">
                    <span class="ms-CommandButton-icon ms-fontColor-themePrimary"><i class="ms-Icon ms-Icon--CircleRing"></i></span>
                    <span class="ms-CommandButton-label">Command</span>
                </button>
            </div>

            <div class="ms-CommandButton">
                <button class="ms-CommandButton-button">
                    <span class="ms-CommandButton-icon ms-fontColor-themePrimary"><i class="ms-Icon ms-Icon--CircleRing"></i></span>
                    <span class="ms-CommandButton-label">Command</span>
                </button>
            </div>

            <div class="ms-CommandButton ms-CommandBar-overflowButton ms-CommandButton--noLabel">
                <button class="ms-CommandButton-button">
                    <span class="ms-CommandButton-icon"><i class="ms-Icon ms-Icon--More"></i></span>
                    <span class="ms-CommandButton-label"></span>
                </button>

                <ul class="ms-ContextualMenu is-opened ms-ContextualMenu--hasIcons">
                    <li class="ms-ContextualMenu-item">
                        <a class="ms-ContextualMenu-link" tabindex="1">Folder</a>
                        <i class="ms-Icon ms-Icon--Folder"></i>
                    </li>
                    <li class="ms-ContextualMenu-item ms-ContextualMenu-item--divider"></li>
                    <li class="ms-ContextualMenu-item">
                        <a class="ms-ContextualMenu-link" tabindex="1">Plain Text Document</a>
                        <i class="ms-Icon ms-Icon--Page"></i>
                    </li>
                    <li class="ms-ContextualMenu-item">
                        <a class="ms-ContextualMenu-link" tabindex="1">A Coffee</a>
                        <i class="ms-Icon ms-Icon--Coffee"></i>
                    </li>
                    <li class="ms-ContextualMenu-item">
                        <a class="ms-ContextualMenu-link" tabindex="1">Picture</a>
                        <i class="ms-Icon ms-Icon--Picture"></i>
                    </li>
                    <li class="ms-ContextualMenu-item">
                        <a class="ms-ContextualMenu-link" tabindex="1">Money</a>
                        <i class="ms-Icon ms-Icon--Money"></i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
	```

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all CommandBar components on the page:

	```
    <script type="text/javascript">
        var CommandBarElements = document.querySelectorAll(".ms-CommandBar");
        for (var i = 0; i < CommandBarElements.length; i++) {
            new fabric['CommandBar'](CommandBarElements[i]);
        }
    </script>
	```

4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as `.ms-CommandBarItem` elements) with your content.

## Dependencies
This component has no dependencies.

## Accessibility
Refer to the sample code to see how `tabindex` attributes should be set to support keyboard navigation.

