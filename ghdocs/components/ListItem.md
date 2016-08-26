# List Item
Suitable for presenting a summary of an item with associated actions. Most often used within a List component. It was designed to represent an email message on desktop computers and is not currently touch friendly.

## Variants

### Default


<li class="ms-ListItem  " tabindex="0">
  
  <span class="ms-ListItem-primaryText">Alton Lafferty</span>
  <span class="ms-ListItem-secondaryText">Meeting notes</span>
  <span class="ms-ListItem-tertiaryText">Today we discussed the importance of a, b, and c in regards to d.</span>
  <span class="ms-ListItem-metaText">2:42p</span>
  
  <div class="ms-ListItem-selectionTarget"></div>
  <div class="ms-ListItem-actions">
    
    <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Mail"></i></div>
    <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Delete"></i></div>
    <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Flag"></i></div>
    <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Pinned"></i></div>
  </div>
</li>



![ListItem example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/ListItem-default.png)


### Image
The same as the default variant, with a thumbnail image added.



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
 &lt;!-- Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. --&gt;

&lt;li class&#x3D;&quot;ms-ListItem  &quot; tabindex&#x3D;&quot;0&quot;&gt;
  
  &lt;span class&#x3D;&quot;ms-ListItem-primaryText&quot;&gt;Alton Lafferty&lt;/span&gt;
  &lt;span class&#x3D;&quot;ms-ListItem-secondaryText&quot;&gt;Meeting notes&lt;/span&gt;
  &lt;span class&#x3D;&quot;ms-ListItem-tertiaryText&quot;&gt;Today we discussed the importance of a, b, and c in regards to d.&lt;/span&gt;
  &lt;span class&#x3D;&quot;ms-ListItem-metaText&quot;&gt;2:42p&lt;/span&gt;
  
  &lt;div class&#x3D;&quot;ms-ListItem-selectionTarget&quot;&gt;&lt;/div&gt;
  &lt;div class&#x3D;&quot;ms-ListItem-actions&quot;&gt;
    
    &lt;div class&#x3D;&quot;ms-ListItem-action&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Mail&quot;&gt;&lt;/i&gt;&lt;/div&gt;
    &lt;div class&#x3D;&quot;ms-ListItem-action&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Delete&quot;&gt;&lt;/i&gt;&lt;/div&gt;
    &lt;div class&#x3D;&quot;ms-ListItem-action&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Flag&quot;&gt;&lt;/i&gt;&lt;/div&gt;
    &lt;div class&#x3D;&quot;ms-ListItem-action&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Pinned&quot;&gt;&lt;/i&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/li&gt;


    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all ListItem components on the page:

<pre>
    <code>
 &lt;script type&#x3D;&quot;text/javascript&quot;&gt;
    var ListItemElements &#x3D; document.querySelectorAll(&quot;.ms-ListItem&quot;);
    for(var i &#x3D; 0; i &lt; ListItemElements.length; i++) {
        new fabric[&#x27;ListItem&#x27;](ListItemElements[i]);
    }
&lt;/script&gt;
    </code>
</pre>

4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the content of `.ms-ListItem-primaryText`) with your content.

## Dependencies
This component has no dependencies on other components, although it is most often used within a List component.

## Accessibility
More details will be added here.


<script type="text/javascript">
    var ListItemElements = document.querySelectorAll(".ms-ListItem");
    for(var i = 0; i < ListItemElements.length; i++) {
        new fabric['ListItem'](ListItemElements[i]);
    }
</script>
