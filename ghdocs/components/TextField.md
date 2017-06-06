# Text Field
Allows for the input of text. Can be a single line or multiple lines. Typically used to accept user input within a form.

## Variants

### Default


![TextField example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/TextField-default.png)


### Multiline


![TextField example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/TextField-multiline.png)


### Placeholder text


![TextField example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/TextField-placeholdertext.png)


### Underlined


![TextField example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/TextField-underlined.png)


## States

### Disabled


![TextField example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/TextField-disabled.png)


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

<pre>
    <code>
<div class="ms-TextField">
  <label class="ms-Label">Name</label>
  <input class="ms-TextField-field" type="text" value="" placeholder="">  
</div>
    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all TextField components on the page:

<pre>
    <code>
 <script type="text/javascript">
    var TextFieldElements = document.querySelectorAll(".ms-TextField");
    for(var i = 0; i < TextFieldElements.length; i++) {
        new fabric['TextField'](TextFieldElements[i]);
    }
</script>
    </code>
</pre>

4. Update the `.ms-Label` to contain your label text.

## Dependencies
This component has a dependency on the Label component.
