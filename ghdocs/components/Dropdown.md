# Dropdown
Allows for the selection of one option from a list.

## Variants

### Default


![Dropdown example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dropdown-default.png)


### Disabled


![Dropdown example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dropdown-disabled.png)


## States
State | Applied to | Result
 --- | --- | ---
`.is-disabled` | `.ms-Dropdown` | Disables the dropdown.

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
    <div class="ms-Dropdown  " tabindex="0">
        <label class="ms-Label">Dropdown label</label>
        <i class="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown"></i>
        <select class="ms-Dropdown-select">
            <option>Choose a sound&amp;hellip;</option>
            <option>Dog barking</option>
            <option>Wind blowing</option>
            <option>Duck quacking</option>
            <option>Cow mooing</option>
        </select>
    </div>
	```

3. Add the following `<script>` tag to your page to instantiate all Dropdown components on the page:

	```
    <script type="text/javascript">
        var DropdownHTMLElements = document.querySelectorAll('.ms-Dropdown');
        for (var i = 0; i < DropdownHTMLElements.length; ++i) {
            var Dropdown = new fabric['Dropdown'](DropdownHTMLElements[i]);
        }
    </script>
	```

4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the options within `.ms-Dropdown-select`) with your content.

## Dependencies
This component depends on Panel for when it is rendered on mobile.

## Accessibility
More details will be added here.
