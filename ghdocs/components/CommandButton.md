# CommandButton
Allows users to take action, such as submitting a form or dismissing a message. Primary use is in command bar or in Callout.

## Variants

### Default


![CommandButton example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/CommandButton-default.png)


### Action Button


![CommandButton example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/CommandButton-action.png)


### Disabled


![CommandButton example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/CommandButton-disabled.png)


### Dropdown


![CommandButton example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/CommandButton-dropdown.png)


### Inline


![CommandButton example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/CommandButton-inline.png)


### No Label


![CommandButton example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/CommandButton-nolabel.png)


### No Label Split


![CommandButton example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/CommandButton-nolabelsplit.png)


### Pivot


![CommandButton example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/CommandButton-pivot.png)


### Split


![CommandButton example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/CommandButton-split.png)


### Text Only


![CommandButton example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/CommandButton-textonly.png)


## States
State | Applied to | Result
 --- | --- | ---
`.is-disabled` | `.ms-Button` | When using an `<a>` element, apply this class to disable the button. When using a `<button>`, the `disabled` attribute can be used instead.

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
 
&lt;div class&#x3D;&quot;ms-CommandButton    &quot;&gt;
  &lt;button class&#x3D;&quot;ms-CommandButton-button&quot;  &gt;
      &lt;span class&#x3D;&quot;ms-CommandButton-icon ms-fontColor-themePrimary&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--CircleRing&quot;&gt;&lt;/i&gt;&lt;/span&gt;&lt;span class&#x3D;&quot;ms-CommandButton-label&quot;&gt;Command&lt;/span&gt;  &lt;/button&gt;
&lt;/div&gt;
    </code>
</pre>

3. Replace the sample HTML content (such as the content of `.ms-CommandButton-label`) with your content.
4. If you are using any of CommandButton's variants that use a dropdown, the below JavaScript is required.

<pre>
    <code>
 &lt;script type&#x3D;&quot;text/javascript&quot;&gt;
  var CommandButtonElements &#x3D; document.querySelectorAll(&quot;.ms-CommandButton&quot;);
  for(var i &#x3D; 0; i &lt; CommandButtonElements.length; i++) {
    new fabric[&#x27;CommandButton&#x27;](CommandButtonElements[i]);
  }
&lt;/script&gt;

    </code>
</pre>



## Dependencies
ContextualMenu, ContextualHost

## Accessibility
Focus styles are included for keyboard navigation.


<script type="text/javascript">
  var CommandButtonElements = document.querySelectorAll(".ms-CommandButton");
  for(var i = 0; i < CommandButtonElements.length; i++) {
    new fabric['CommandButton'](CommandButtonElements[i]);
  }
</script>
