# Search Box
A special form field that allows for the input of search text.

## Variants

### Default

-

![SearchBox example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/SearchBox-default.png)


### Collapsed

-

![SearchBox example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/SearchBox-collapsed.png)



### Command bar


![SearchBox example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/SearchBox-collapsed.png)


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
 

&lt;div class&#x3D;&quot;ms-SearchBox  &quot;&gt;
  &lt;input class&#x3D;&quot;ms-SearchBox-field&quot; type&#x3D;&quot;text&quot; value&#x3D;&quot;&quot;&gt;
  &lt;label class&#x3D;&quot;ms-SearchBox-label&quot;&gt;
    &lt;i class&#x3D;&quot;ms-SearchBox-icon ms-Icon ms-Icon--Search&quot;&gt;&lt;/i&gt;
    &lt;span class&#x3D;&quot;ms-SearchBox-text&quot;&gt;Search&lt;/span&gt;
  &lt;/label&gt;
  
&lt;div class&#x3D;&quot;ms-CommandButton ms-SearchBox-clear ms-CommandButton--noLabel  &quot;&gt;
  &lt;button class&#x3D;&quot;ms-CommandButton-button&quot;  &gt;
      &lt;span class&#x3D;&quot;ms-CommandButton-icon &quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Clear&quot;&gt;&lt;/i&gt;&lt;/span&gt;&lt;span class&#x3D;&quot;ms-CommandButton-label&quot;&gt;&lt;/span&gt;  &lt;/button&gt;
&lt;/div&gt;
  
  
&lt;/div&gt;
    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all SearchBox components on the page:

<pre>
    <code>
 &lt;script type&#x3D;&quot;text/javascript&quot;&gt;
  var SearchBoxElements &#x3D; document.querySelectorAll(&quot;.ms-SearchBox&quot;);
  for(var i &#x3D; 0; i &lt; SearchBoxElements.length; i++) {
    new fabric[&#x27;SearchBox&#x27;](SearchBoxElements[i]);
  }
&lt;/script&gt;

    </code>
</pre>

4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the name within `.ms-SearchBox-text`) with your content.

## Dependencies
This component has a dependency on the Label component.


<script type="text/javascript">
  var SearchBoxElements = document.querySelectorAll(".ms-SearchBox");
  for(var i = 0; i < SearchBoxElements.length; i++) {
    new fabric['SearchBox'](SearchBoxElements[i]);
  }
</script>

