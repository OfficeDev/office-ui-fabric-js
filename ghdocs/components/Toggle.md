# Toggle
Allows for turning on or off a setting. This is best suited for simple, singular configuration (e.g. application level settings) whereas the ChoiceField is better suited when there is a longer list of individual choices or in a form (e.g. signing up for different newsletters during registration for an event).

## Variants

### Label above (default)


![Toggle example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Toggle-default.png)


### Label on left


![Toggle example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Toggle-left.png)


### Disabled


![Toggle example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Toggle-disabled.png)


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
    <div class="ms-Toggle">
        <span class="ms-Toggle-description">Let apps use my location</span>
        <input type="checkbox" id="demo-toggle-3" class="ms-Toggle-input" />
        <label for="demo-toggle-3" class="ms-Toggle-field" tabindex="0">
            <span class="ms-Label ms-Label--off">Off</span>
            <span class="ms-Label ms-Label--on">On</span>
        </label>
    </div>
	```

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all Toggle components on the page:

	```
    <script type="text/javascript">
        var ToggleElements = document.querySelectorAll(".ms-Toggle");
        for (var i = 0; i < ToggleElements.length; i++) {
            new fabric['Toggle'](ToggleElements[i]);
        }
    </script>
	```

4. Update the `.ms-Label` to contain your label text.

## Dependencies
This component has a dependency on the Label component.
