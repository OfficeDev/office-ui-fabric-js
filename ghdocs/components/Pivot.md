# Pivot
A layout component that allows a user to switch between different sets of content or filters on the content currently visible. This is in contrast to a purely navigational UI element such as NavBar or a commanding element such as CommandBar. An example would be Read vs. Unread items in the Outlook Web App.

## Variants

### Default


![Pivot example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Pivot-default.png)


### Large


![Pivot example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Pivot-large.png)


### Tabs


![Pivot example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Pivot-tabs.png)


### Large tabs


![Pivot example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Pivot-largetabs.png)


## Using this component
1. Confirm that you have references to Fabric's CSS and JavaScript on your page:

    ```
    <head>
        <link rel="stylesheet" href="fabric.min.css">
        <link rel="stylesheet" href="fabric.components.min.css">
        <script src="fabric.min.js"></script>
    </head>
    ```

2. Copy the HTML from one of the samples above into your page. For example:

	```
    <div class="ms-Pivot">
        <ul class="ms-Pivot-links">
            <li class="ms-Pivot-link is-selected" data-content="files" title="My files" tabindex="1">
                My files
            </li>
            <li class="ms-Pivot-link" data-content="recent" title="Recent" tabindex="1">
                Recent
            </li>
            <li class="ms-Pivot-link" data-content="shared" title="Shared with me" tabindex="1">
                Shared with me
            </li>
            <li class="ms-Pivot-link" tabindex="1">
                <i class="ms-Pivot-ellipsis ms-Icon ms-Icon--More"></i>
            </li>
        </ul>
        <div class="ms-Pivot-content" data-content="files">
            This is the my files tab.
        </div>
        <div class="ms-Pivot-content" data-content="recent">
            This is the recent tab.
        </div>
        <div class="ms-Pivot-content" data-content="shared">
            This is the shared with me tab.
        </div>
    </div>
	```

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all Pivot components on the page:

	```
    <script type="text/javascript">
        var PivotElements = document.querySelectorAll(".ms-Pivot");
        for (var i = 0; i < PivotElements.length; i++) {
            new fabric['Pivot'](PivotElements[i]);
        }
    </script>
	```

4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the name within `.ms-Pivot-link`) with your content.

## Dependencies
This component has no dependency on other components.
