# Search Box
A special form field that allows for the input of search text.

## Variants

### Default

-

![SearchBox example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/SearchBox-default.png)


### Collapsed

-

![SearchBox example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/SearchBox-collapsed.png)



### Command bar


![SearchBox example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/SearchBox-collapsed.png)


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

    <div class="ms-SearchBox">
        <input class="ms-SearchBox-field" type="text" value="">
        <label class="ms-SearchBox-label">
            <i class="ms-SearchBox-icon ms-Icon ms-Icon--Search"></i>
            <span class="ms-SearchBox-text">Search</span>
        </label>
        <div class="ms-CommandButton ms-SearchBox-clear ms-CommandButton--noLabel">
            <button class="ms-CommandButton-button">
                <span class="ms-CommandButton-icon "><i class="ms-Icon ms-Icon--Clear"></i></span><span class="ms-CommandButton-label"></span>
            </button>
        </div>
    </div>
	```

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all SearchBox components on the page:

	``` 
    <script type="text/javascript">
        var SearchBoxElements = document.querySelectorAll(".ms-SearchBox");
        for (var i = 0; i < SearchBoxElements.length; i++) {
            new fabric['SearchBox'](SearchBoxElements[i]);
        }
    </script>
	```

4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the name within `.ms-SearchBox-text`) with your content.

## Dependencies
This component has a dependency on the Label component.
