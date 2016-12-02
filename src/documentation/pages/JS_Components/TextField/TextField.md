# Text Field
Allows for the input of text. Can be a single line or multiple lines. Typically used to accept user input within a form.

## Variants

### Default
<!----
{{> TextField props=TextFieldExampleModel}}
---->
<!---i
![TextField example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/TextField-default.png)
i--->

### Multiline
<!----
{{> TextField props=TextFieldMultilineExampleModel}}
---->
<!---i
![TextField example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/TextField-multiline.png)
i--->

### Placeholder text
<!----
{{> TextFieldPlaceholderExample props=TextFieldPlaceholderExampleModel}}
---->
<!---i
![TextField example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/TextField-placeholdertext.png)
i--->

### Underlined
<!----
{{> TextField props=TextFieldUnderlinedExampleModel}}
---->
<!---i
![TextField example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/TextField-underlined.png)
i--->

## States

### Disabled
<!----
{{> TextField props=TextFieldDisabledExampleModel}}
---->
<!---i
![TextField example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/TextField-disabled.png)
i--->

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
{{renderPartialPre "TextField" "TextFieldExample" TextFieldExampleModel false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all TextField components on the page:
<!---
<pre>
    <code>
{{renderPartialPre "TextField" "TextFieldExampleJS" "" false}}
    </code>
</pre>
--->
4. Update the `.ms-Label` to contain your label text.

## Dependencies
This component has a dependency on the Label component.
