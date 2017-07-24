# Choice Field Group
Allows selection from one or more options.

## Variants

### Default
Used to indicate a single choice from multiple options.



![ChoiceFieldGroup example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/ChoiceFieldGroup-default.png)



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
    <div class="ms-ChoiceFieldGroup" id="choicefieldgroup" role="radiogroup">
        <div class="ms-ChoiceFieldGroup-title">
            <label class="ms-Label  is-required ">Unselected</label>
        </div>

        <ul class="ms-ChoiceFieldGroup-list">
            <li class="ms-RadioButton">
                <input tabindex="-1" type="radio" class="ms-RadioButton-input">
                <label role="radio"
                       class="ms-RadioButton-field"
                       tabindex="0"
                       aria-checked="false"
                       name="choicefieldgroup">
                    <span class="ms-Label">Option 1</span>
                </label>
            </li>

            <li class="ms-RadioButton">
                <input tabindex="-1" type="radio" class="ms-RadioButton-input">
                <label role="radio"
                       class="ms-RadioButton-field"
                       tabindex="0"
                       aria-checked="false"
                       name="choicefieldgroup">
                    <span class="ms-Label">Option 2</span>
                </label>
            </li>
            <li class="ms-RadioButton">
                <input tabindex="-1" type="radio" class="ms-RadioButton-input">
                <label role="radio"
                       class="ms-RadioButton-field is-disabled"
                       tabindex="0"
                       aria-checked="false"
                       name="choicefieldgroup"
                       aria-disabled="true">
                    <span class="ms-Label">Option 3</span>
                </label>
            </li>

            <li class="ms-RadioButton">
                <input tabindex="-1" type="radio" class="ms-RadioButton-input">
                <label role="radio"
                       class="ms-RadioButton-field"
                       tabindex="0"
                       aria-checked="false"
                       name="choicefieldgroup">
                    <span class="ms-Label">Option 4</span>
                </label>
            </li>
        </ul>
    </div>
	```

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all ChoiceFieldGroup components on the page:

	```
    <script type="text/javascript">
        var ChoiceFieldGroupElements = document.querySelectorAll(".ms-ChoiceFieldGroup");
        for(var i = 0; i < ChoiceFieldGroupElements.length; i++) {
        new fabric['ChoiceFieldGroup'](ChoiceFieldGroupElements[i]);
        }
    </script>
	```

4. Replace the sample HTML content (such as the `.ms-Label` elements) with your content.


## Dependencies
Label, CheckBox