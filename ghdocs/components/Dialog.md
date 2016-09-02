# Dialog
Displays content that temporarily blocks interactions with the application. It is primarily used for confirmation tasks, light-weight creation or edit tasks, and simple management tasks.

## Variants

### Default
Includes a content area and two buttons.




![Dialog example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dialog-default.png)


### Multiline
Includes multiple large buttons, each with a title and description.



![Dialog example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dialog-multiline.png)


### Large Header
Provides a large, styled header followed by a content area and two buttons.



![Dialog example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dialog-largeheader.png)


### Blocking
The overlay for this variant does not dismiss the Dialog.



![Dialog example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dialog-blocking.png)


### Close
Includes a close button at the top right, as an additional way to dismiss the dialog.



![Dialog example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dialog-close.png)


## States
This component has only the default state.

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
 
&lt;div class&#x3D;&quot;ms-Dialog &quot;&gt;
    &lt;div class&#x3D;&quot;ms-Dialog-title&quot;&gt;All emails together&lt;/div&gt;
    &lt;div class&#x3D;&quot;ms-Dialog-content&quot;&gt;
        &lt;p class&#x3D;&quot;ms-Dialog-subText&quot;&gt;Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.&lt;/p&gt;
          

&lt;div class&#x3D;&quot;ms-CheckBox&quot;&gt; 
    &lt;input tabindex&#x3D;&quot;-1&quot; type&#x3D;&quot;checkbox&quot; class&#x3D;&quot;ms-CheckBox-input&quot;&gt;
    &lt;label role&#x3D;&quot;checkbox&quot;
        class&#x3D;&quot;ms-CheckBox-field &quot;
        tabindex&#x3D;&quot;0&quot;
        aria-checked&#x3D;&quot;false&quot;
        name&#x3D;&quot;checkboxa&quot;
&gt;
        &lt;span class&#x3D;&quot;ms-Label&quot;&gt;Option1&lt;/span&gt;
    &lt;/label&gt;
&lt;/div&gt;

          

&lt;div class&#x3D;&quot;ms-CheckBox&quot;&gt; 
    &lt;input tabindex&#x3D;&quot;-1&quot; type&#x3D;&quot;checkbox&quot; class&#x3D;&quot;ms-CheckBox-input&quot;&gt;
    &lt;label role&#x3D;&quot;checkbox&quot;
        class&#x3D;&quot;ms-CheckBox-field &quot;
        tabindex&#x3D;&quot;0&quot;
        aria-checked&#x3D;&quot;false&quot;
        name&#x3D;&quot;checkboxa&quot;
&gt;
        &lt;span class&#x3D;&quot;ms-Label&quot;&gt;Option2&lt;/span&gt;
    &lt;/label&gt;
&lt;/div&gt;

    &lt;/div&gt;
      &lt;div class&#x3D;&quot;ms-Dialog-actions&quot;&gt;
          
&lt;button class&#x3D;&quot;ms-Button ms-Dialog-action
  ms-Button--primary
  &quot;&gt;
  &lt;span class&#x3D;&quot;ms-Button-label&quot;&gt;Save&lt;/span&gt;
&lt;/button&gt;
          
&lt;button class&#x3D;&quot;ms-Button ms-Dialog-action
  
  &quot;&gt;
  &lt;span class&#x3D;&quot;ms-Button-label&quot;&gt;Cancel&lt;/span&gt;
&lt;/button&gt;
      &lt;/div&gt;
&lt;/div&gt;

    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all Dialog components on the page:

<pre>
    <code>
 &lt;script type&#x3D;&quot;text/javascript&quot;&gt;
    var DialogElements &#x3D; document.querySelectorAll(&quot;.ms-Dialog&quot;);
    var DialogComponents &#x3D; [];
    for (var i &#x3D; 0; i &lt; DialogElements.length; i++) {
        (function(){
            DialogComponents[i] &#x3D; new fabric[&#x27;Dialog&#x27;](DialogElements[i]);
        }());
    }
&lt;/script&gt;
    </code>
</pre>


    or add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate a single Dialog component on the page:

    
    <pre>
        <code>
     &lt;script type&#x3D;&quot;text/javascript&quot;&gt;
    var DialogElement &#x3D; document.querySelector(&quot;.ms-Dialog&quot;);
    var dialogComponent &#x3D; new fabric[&#x27;Dialog&#x27;](DialogElement);
&lt;/script&gt;
        </code>
    </pre>
    
4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the content of `.ms-Dialog-content`) with your content.

## Dependencies
This component has no dependencies on other components.

## Accessibility
More details will be added here.