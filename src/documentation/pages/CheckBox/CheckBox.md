# Check Box
Allows selection from one or more options.

## Variants

### Checkbox
Used to indicate a simple yes or no choice, typically as part of a form.

<!---
{{> CheckBoxElem props=CheckBoxModels.basic }}
{{> CheckBoxElem props=CheckBoxModels.checkboxDisabled }}
{{> CheckBoxElem props=CheckBoxModels.checkboxSelected }}
--->


## States
State | Applied to | Result
 --- | --- | ---
`disabled` attribute | `.ms-CheckBox-input` | Disables the input.
`checked` attribute | `.ms-CheckBox-input` | Fills in the checkbox or radio button.

## Using this component
1. Confirm that you have references to Fabric's CSS on your page:
    ```
    <head>
        <link rel="stylesheet" href="fabric.min.css">
        <link rel="stylesheet" href="fabric.components.min.css">
    </head>
    ```
2. Copy the HTML from one of the samples above into your page. For example:
    ```
    <div class="ms-CheckBox">
        <li role="checkbox" class="ms-Choice-field ms-Choice-type--checkbox" tabindex="0" aria-checked="false" name="checkboxa">
            <span class="ms-Label">Checkbox</span>
        </li>
    </div>
    ```
3. Add the following `<script>` tag to your page, below the references to jQuery and Fabric's JS, to instantiate all CheckBox components on the page:
    ```
    <script type="text/javascript">
        var CheckBoxElements = document.querySelectorAll(".ms-CheckBox");
        for(var i = 0; i < CheckBoxElements.length; i++) {
            new fabric['CheckBox'](CheckBoxElements[i]);
        }
    </script>
    ```
4. Replace the sample HTML content (such as the content of `.ms-Label`) with your content.

## Dependencies
This component uses a **Label** to label each checkbox, radio button, and group.

## Accessibility
Focus styles are included for these fields. Ensure that you use descriptive labels.

<!---
{{> CheckBoxJS }}
--->

