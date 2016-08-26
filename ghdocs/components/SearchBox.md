# Search Box
A special form field that allows for the input of search text.

## Variants

### Default


![SearchBox example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/SearchBox-collapsed.png)



### Command bar


<div class="ms-SearchBox  ms-SearchBox--commandBar  ">
  <input class="ms-SearchBox-field" type="text" value="">
  <label class="ms-SearchBox-label">
    <i class="ms-SearchBox-icon ms-Icon ms-Icon--Search"></i>
    <span class="ms-SearchBox-text">Search</span>
  </label>
  <div class="ms-CommandButton ms-SearchBox-clear ms-CommandButton--noLabel  ">
  <button class="ms-CommandButton-button"  >
      <span class="ms-CommandButton-icon "><i class="ms-Icon ms-Icon--Clear"></i></span><span class="ms-CommandButton-label"></span>  </button>
</div>
  <div class="ms-CommandButton ms-SearchBox-exit ms-CommandButton--noLabel  ">
  <button class="ms-CommandButton-button"  >
      <span class="ms-CommandButton-icon "><i class="ms-Icon ms-Icon--ChromeBack"></i></span><span class="ms-CommandButton-label"></span>  </button>
</div>
  <div class="ms-CommandButton ms-SearchBox-filter ms-CommandButton--noLabel  ">
  <button class="ms-CommandButton-button"  >
      <span class="ms-CommandButton-icon "><i class="ms-Icon ms-Icon--Filter"></i></span><span class="ms-CommandButton-label"></span>  </button>
</div>
</div>

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
 &lt;!-- Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. --&gt;

&lt;div class&#x3D;&quot;ms-SearchBox  &quot;&gt;
  &lt;input class&#x3D;&quot;ms-SearchBox-field&quot; type&#x3D;&quot;text&quot; value&#x3D;&quot;&quot;&gt;
  &lt;label class&#x3D;&quot;ms-SearchBox-label&quot;&gt;
    &lt;i class&#x3D;&quot;ms-SearchBox-icon ms-Icon ms-Icon--Search&quot;&gt;&lt;/i&gt;
    &lt;span class&#x3D;&quot;ms-SearchBox-text&quot;&gt;Search&lt;/span&gt;
  &lt;/label&gt;
  &lt;!-- Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. --&gt;
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

