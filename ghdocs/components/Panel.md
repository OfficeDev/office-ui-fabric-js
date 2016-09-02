# Panel
Presents content by sliding over the rest of the application, which is covered by a partially-transparent overlay. Best used for experiences that do not require explicit context for heavy-weight creation/edit/management tasks such as settings, multi-field forms, and permissions. For containers used for complex tasks that requires context, use a separate Pane alongside the existing experience such as a List/Details layout.

## Variants

### Default


![Panel example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Panel.png)


### Medium



### Large



### Large, fixed



### Extra Large



### Extra extra large



### Left aligned
You can add the `ms-Panel--left` modifier to any panel to attach it to the left side of the screen.



## States
State | Applied to | Result
 --- | --- | ---
`.is-open` | `.ms-Panel` | The panel is closed by default. Apply this class to open it.

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
 &lt;div class&#x3D;&quot;ms-PanelDefaultExample ms-PanelExample&quot;&gt;
    
    &lt;button class&#x3D;&quot;ms-Button 
      
      &quot;&gt;
      &lt;span class&#x3D;&quot;ms-Button-label&quot;&gt;Open Panel&lt;/span&gt;
    &lt;/button&gt;    
    &lt;div class&#x3D;&quot;ms-Panel &quot;&gt;
        &lt;button class&#x3D;&quot;ms-Panel-closeButton ms-PanelAction-close&quot;&gt;
            &lt;i class&#x3D;&quot;ms-Panel-closeIcon ms-Icon ms-Icon--Cancel&quot;&gt;&lt;/i&gt;
        &lt;/button&gt;
        &lt;div class&#x3D;&quot;ms-Panel-contentInner&quot;&gt;
            &lt;p class&#x3D;&quot;ms-Panel-headerText&quot;&gt;Panel&lt;/p&gt;
            &lt;div class&#x3D;&quot;ms-Panel-content&quot;&gt;
                &lt;span class&#x3D;&quot;ms-font-m&quot;&gt;Content goes here&lt;/span&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;&lt;/div&gt;
    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all Panel components on the page:

<pre>
    <code>
 &lt;script type&#x3D;&quot;text/javascript&quot;&gt;
var PanelExamples &#x3D; document.getElementsByClassName(&quot;ms-PanelExample&quot;);
for (var i &#x3D; 0; i &lt; PanelExamples.length; i++) {
    (function(){
        var PanelExampleButton &#x3D; PanelExamples[i].querySelector(&quot;.ms-Button&quot;);
        var PanelExamplePanel &#x3D; PanelExamples[i].querySelector(&quot;.ms-Panel&quot;);
        PanelExampleButton.addEventListener(&quot;click&quot;, function(i) {
            new fabric[&#x27;Panel&#x27;](PanelExamplePanel);
        });
    }());
}
&lt;/script&gt;
    </code>
</pre>

4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the content of `.ms-Panel-content`) with your content.


<script type="text/javascript">
var PanelExamples = document.getElementsByClassName("ms-PanelExample");
for (var i = 0; i < PanelExamples.length; i++) {
    (function(){
        var PanelExampleButton = PanelExamples[i].querySelector(".ms-Button");
        var PanelExamplePanel = PanelExamples[i].querySelector(".ms-Panel");
        PanelExampleButton.addEventListener("click", function(i) {
            new fabric['Panel'](PanelExamplePanel);
        });
    }());
}
</script>