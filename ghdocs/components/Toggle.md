# Toggle
Allows for turning on or off a setting. This is best suited for simple, singular configuration (e.g. application level settings) whereas the ChoiceField is better suited when there is a longer list of individual choices or in a form (e.g. signing up for different newsletters during registration for an event).

## Variants

### Label above (default)


![Toggle example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Toggle-default.png)


### Label on left


![Toggle example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Toggle-left.png)


### Disabled


![Toggle example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Toggle-disabled.png)


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
 

&lt;div class&#x3D;&quot;ms-Toggle  &quot;&gt;
  &lt;span class&#x3D;&quot;ms-Toggle-description&quot;&gt;Let apps use my location&lt;/span&gt;
  &lt;input type&#x3D;&quot;checkbox&quot; id&#x3D;&quot;demo-toggle-3&quot; class&#x3D;&quot;ms-Toggle-input&quot; /&gt;
  &lt;label for&#x3D;&quot;demo-toggle-3&quot; class&#x3D;&quot;ms-Toggle-field&quot;  tabindex&#x3D;&quot;0&quot; &gt;
    &lt;span class&#x3D;&quot;ms-Label ms-Label--off&quot;&gt;Off&lt;/span&gt;
    &lt;span class&#x3D;&quot;ms-Label ms-Label--on&quot;&gt;On&lt;/span&gt;
  &lt;/label&gt;
&lt;/div&gt;

    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all Toggle components on the page:

<pre>
    <code>
 &lt;script type&#x3D;&quot;text/javascript&quot;&gt;
    var ToggleElements &#x3D; document.querySelectorAll(&quot;.ms-Toggle&quot;);
    for(var i &#x3D; 0; i &lt; ToggleElements.length; i++) {
        new fabric[&#x27;Toggle&#x27;](ToggleElements[i]);
    }
&lt;/script&gt;
    </code>
</pre>

4. Update the `.ms-Label` to contain your label text.

## Dependencies
This component has a dependency on the Label component.


<script type="text/javascript">
    var ToggleElements = document.querySelectorAll(".ms-Toggle");
    for(var i = 0; i < ToggleElements.length; i++) {
        new fabric['Toggle'](ToggleElements[i]);
    }
</script>