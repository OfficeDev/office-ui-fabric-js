# Pivot
A layout component that allows a user to switch between different sets of content or filters on the content currently visible. This is in contrast to a purely navigational UI element such as NavBar or a commanding element such as CommandBar. An example would be Read vs. Unread items in the Outlook Web App.

## Variants

### Default


![Pivot example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Pivot-default.png)


### Large


![Pivot example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Pivot-large.png)


### Tabs


![Pivot example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Pivot-tabs.png)


### Large tabs


![Pivot example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Pivot-largetabs.png)


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
 

&lt;div class&#x3D;&quot;ms-Pivot &quot;&gt;
  &lt;ul class&#x3D;&quot;ms-Pivot-links&quot;&gt;
      &lt;li class&#x3D;&quot;ms-Pivot-link is-selected&quot; data-content&#x3D;&quot;files&quot; title&#x3D;&quot;My files&quot; tabindex&#x3D;&quot;1&quot;&gt;
        My files
      &lt;/li&gt;
      &lt;li class&#x3D;&quot;ms-Pivot-link &quot; data-content&#x3D;&quot;recent&quot; title&#x3D;&quot;Recent&quot; tabindex&#x3D;&quot;1&quot;&gt;
        Recent
      &lt;/li&gt;
      &lt;li class&#x3D;&quot;ms-Pivot-link &quot; data-content&#x3D;&quot;shared&quot; title&#x3D;&quot;Shared with me&quot; tabindex&#x3D;&quot;1&quot;&gt;
        Shared with me
      &lt;/li&gt;
      &lt;li class&#x3D;&quot;ms-Pivot-link&quot; tabindex&#x3D;&quot;1&quot;&gt;
        &lt;i class&#x3D;&quot;ms-Pivot-ellipsis ms-Icon ms-Icon--More&quot;&gt;&lt;/i&gt;
      &lt;/li&gt;
  &lt;/ul&gt;
    &lt;div class&#x3D;&quot;ms-Pivot-content&quot; data-content&#x3D;&quot;files&quot;&gt;
      This is the my files tab.
    &lt;/div&gt;
    &lt;div class&#x3D;&quot;ms-Pivot-content&quot; data-content&#x3D;&quot;recent&quot;&gt;
      This is the recent tab.
    &lt;/div&gt;
    &lt;div class&#x3D;&quot;ms-Pivot-content&quot; data-content&#x3D;&quot;shared&quot;&gt;
      This is the shared with me tab.
    &lt;/div&gt;
&lt;/div&gt;

    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all Pivot components on the page:

<pre>
    <code>
 &lt;script type&#x3D;&quot;text/javascript&quot;&gt;
  var PivotElements &#x3D; document.querySelectorAll(&quot;.ms-Pivot&quot;);
  for(var i &#x3D; 0; i &lt; PivotElements.length; i++) {
    new fabric[&#x27;Pivot&#x27;](PivotElements[i]);
  }
&lt;/script&gt;

    </code>
</pre>

4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the name within `.ms-Pivot-link`) with your content.

## Dependencies
This component has no dependency on other components.


<script type="text/javascript">
  var PivotElements = document.querySelectorAll(".ms-Pivot");
  for(var i = 0; i < PivotElements.length; i++) {
    new fabric['Pivot'](PivotElements[i]);
  }
</script>
