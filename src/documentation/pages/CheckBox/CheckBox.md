# Check Box
Allows selection from one or more options.

## Variants

### Checkbox
Used to indicate a simple yes or no choice, typically as part of a form.

<!----
{{> CheckBoxElem props=CheckBoxModels.basic }}
{{> CheckBoxElem props=CheckBoxModels.checkboxDisabled }}
{{> CheckBoxElem props=CheckBoxModels.checkboxSelected }}
---->
<!---i
![CheckBox example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/CheckBox-default.png)
i--->


## States
State | Applied to | Result
 --- | --- | ---
`disabled` attribute | `.ms-CheckBox-input` | Disables the input.
`checked` attribute | `.ms-CheckBox-input` | Fills in the checkbox or radio button.

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
<!---
<pre>
    <code>
{{renderPartialPre "Checkbox" "CheckBoxElem" CheckBoxModels.basic false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all CheckBox components on the page:
<!---
<pre>
    <code>
{{renderPartialPre "Checkbox" "CheckBoxJS" "" false}}
    </code>
</pre>
--->
4. Replace the sample HTML content (such as the content of `.ms-Label`) with your content.

## Dependencies
Label

## Accessibility
Focus styles are included for these fields. Ensure that you use descriptive labels.

<!---
{{> CheckBoxJS }}
--->