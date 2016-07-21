# Choice Field
Allows selection from one or more options.

### Radio button group
Used to indicate a single choice from multiple options.

<!---
{{> ChoiceFieldGroupElem props=ChoiceFieldGroupModels.props }}
--->

<!---
{{> ChoiceFieldGroupJS }}
--->

## Using this component
1. Confirm that you have references to Fabric's CSS on your page:
    ```
    <head> 
        <link rel="stylesheet" href="fabric.min.css">
        <link rel="stylesheet" href="fabric.components.min.css">
    </head>
    ```
2. Copy the HTML from the sample above into your page. For example:
    ```
    <div class="ms-ChoiceFieldGroup" id="choicefieldgroup" role="radiogroup">
        <div class="ms-ChoiceFieldGroup-title">
            <label class="ms-Label  is-required ">Unselected</label>
        </div>
        <ul class="ms-ChoiceFieldGroup-list">
            <div class="ms-RadioButton">
                <li role="radio" class="ms-Choice-field ms-Choice-type--radio" tabindex="0" aria-checked="false" name="choicefieldgroup">
                    <span class="ms-Label">Option 1</span>
                </li>
            </div>
            <div class="ms-RadioButton">
                <li role="radio" class="ms-Choice-field ms-Choice-type--radio" tabindex="0" aria-checked="false" name="choicefieldgroup">
                    <span class="ms-Label">Option 2</span>
                </li>
            </div>
            <div class="ms-RadioButton">
                <li role="radio" class="ms-Choice-field  is-disabled ms-Choice-type--radio" tabindex="0" aria-checked="false" name="choicefieldgroup">
                    <span class="ms-Label">Option 3</span>
                </li>
            </div>
            <div class="ms-RadioButton">
                <li role="radio" class="ms-Choice-field ms-Choice-type--radio" tabindex="0" aria-checked="false" name="choicefieldgroup">
                    <span class="ms-Label">Option 4</span>
                </li>
            </div>
        </ul>
    </div>
    ```
3. Replace the sample HTML content (such as the `.ms-Label` elements) with your content.