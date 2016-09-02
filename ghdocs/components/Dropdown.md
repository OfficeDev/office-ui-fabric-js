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

<pre>
    <code>
 


&lt;div class&#x3D;&quot;ms-Dropdown  &quot; tabindex&#x3D;&quot;0&quot;&gt;
  &lt;label class&#x3D;&quot;ms-Label&quot;&gt;Dropdown label&lt;/label&gt;
  &lt;i class&#x3D;&quot;ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown&quot;&gt;&lt;/i&gt;
  &lt;select class&#x3D;&quot;ms-Dropdown-select&quot;&gt;
      &lt;option&gt;Choose a sound&amp;amp;hellip;&lt;/option&gt;
      &lt;option&gt;Dog barking&lt;/option&gt;
      &lt;option&gt;Wind blowing&lt;/option&gt;
      &lt;option&gt;Duck quacking&lt;/option&gt;
      &lt;option&gt;Cow mooing&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;
    </code>
</pre>

3. Add the following `<script>` tag to your page to instantiate all Dropdown components on the page:

<pre>
    <code>
 &lt;script type&#x3D;&quot;text/javascript&quot;&gt;
  var DropdownHTMLElements &#x3D; document.querySelectorAll(&#x27;.ms-Dropdown&#x27;);
  for (var i &#x3D; 0; i &lt; DropdownHTMLElements.length; ++i) {
    var Dropdown &#x3D; new fabric[&#x27;Dropdown&#x27;](DropdownHTMLElements[i]);
  }
&lt;/script&gt;

    </code>
</pre>

4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the options within `.ms-Dropdown-select`) with your content.

## Dependencies
This component depends on Panel for when it is rendered on mobile.

## Accessibility
More details will be added here.


<script type="text/javascript">
  var DropdownHTMLElements = document.querySelectorAll('.ms-Dropdown');
  for (var i = 0; i < DropdownHTMLElements.length; ++i) {
    var Dropdown = new fabric['Dropdown'](DropdownHTMLElements[i]);
  }
</script>
