# Dialog
Displays content that temporarily blocks interactions with the application. It is primarily used for confirmation tasks, light-weight creation or edit tasks, and simple management tasks.

## Variants

### Default
Includes a content area and two buttons.




![Dialog example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dialog-default.png)


### Multiline
Includes multiple large buttons, each with a title and description.



![Dialog example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dialog-multiline.png)


### Large Header
Provides a large, styled header followed by a content area and two buttons.



![Dialog example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dialog-largeheader.png)


### Blocking
The overlay for this variant does not dismiss the Dialog.



![Dialog example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dialog-blocking.png)


### Close
Includes a close button at the top right, as an additional way to dismiss the dialog.



![Dialog example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dialog-close.png)


## States
This component has only the default state.

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
    <div class="ms-Dialog ">
        <div class="ms-Dialog-title">All emails together</div>
        <div class="ms-Dialog-content">
            <p class="ms-Dialog-subText">Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.</p>
            <div class="ms-CheckBox">
                <input tabindex="-1" type="checkbox" class="ms-CheckBox-input">
                <label role="checkbox"
                       class="ms-CheckBox-field"
                       tabindex="0"
                       aria-checked="false"
                       name="checkboxa">
                    <span class="ms-Label">Option1</span>
                </label>
            </div>
            <div class="ms-CheckBox">
                <input tabindex="-1" type="checkbox" class="ms-CheckBox-input">
                <label role="checkbox"
                       class="ms-CheckBox-field"
                       tabindex="0"
                       aria-checked="false"
                       name="checkboxa">
                    <span class="ms-Label">Option2</span>
                </label>
            </div>
        </div>
        <div class="ms-Dialog-actions">
            <button class="ms-Button ms-Dialog-action ms-Button--primary">
                <span class="ms-Button-label">Save</span>
            </button>
            <button class="ms-Button ms-Dialog-action">
                <span class="ms-Button-label">Cancel</span>
            </button>
        </div>
    </div>
	```

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all Dialog components on the page:

	```
    <script type="text/javascript">
        var DialogElements = document.querySelectorAll(".ms-Dialog");
        var DialogComponents = [];
        for (var i = 0; i < DialogElements.length; i++) {
            (function () {
                DialogComponents[i] = new fabric['Dialog'](DialogElements[i]);
            }());
        }
    </script>
	```

	or add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate a single Dialog component on the page:

	```
    <script type="text/javascript">
        var DialogElement = document.querySelector(".ms-Dialog");
        var dialogComponent = new fabric['Dialog'](DialogElement);
    </script>
	```

4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the content of `.ms-Dialog-content`) with your content.

## Dependencies
This component has no dependencies on other components.

## Accessibility
More details will be added here.