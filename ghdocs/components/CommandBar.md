# Command Bar
Commanding surface for panels, pages, and applications. When planning to use the surface for navigation only, consider the NavBar variant.

## Variants

### Default


![CommandBar example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/CommandBar-default.png)


### Dropdowns


![CommandBar example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/CommandBar-dropdowns.png)


### NavBar
Provides a means of navigating to different areas within an application. On small screens, the navigation items are placed inside a hamburger menu.


![CommandBar example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/CommandBar-navbar.png)


## States
State | Applied to | Result
 --- | --- | ---
`.is-hidden` | `.ms-CommandBarItem` | Hides a Command Bar item from view.
`.is-active` | `.ms-CommandBarSearch` | Expands the search field for use.

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
 
&lt;div class&#x3D;&quot;ms-CommandBar &quot;&gt;
    &lt;div class&#x3D;&quot;ms-CommandBar-sideCommands&quot;&gt;
        
&lt;div class&#x3D;&quot;ms-CommandButton  ms-CommandButton--noLabel  &quot;&gt;
  &lt;button class&#x3D;&quot;ms-CommandButton-button&quot;  &gt;
      &lt;span class&#x3D;&quot;ms-CommandButton-icon ms-fontColor-themePrimary&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--CircleRing&quot;&gt;&lt;/i&gt;&lt;/span&gt;&lt;span class&#x3D;&quot;ms-CommandButton-label&quot;&gt;&lt;/span&gt;  &lt;/button&gt;
&lt;/div&gt;
    &lt;/div&gt;
  &lt;div class&#x3D;&quot;ms-CommandBar-mainArea&quot;&gt;
      

&lt;div class&#x3D;&quot;ms-SearchBox  ms-SearchBox--commandBar  &quot;&gt;
  &lt;input class&#x3D;&quot;ms-SearchBox-field&quot; type&#x3D;&quot;text&quot; value&#x3D;&quot;&quot;&gt;
  &lt;label class&#x3D;&quot;ms-SearchBox-label&quot;&gt;
    &lt;i class&#x3D;&quot;ms-SearchBox-icon ms-Icon ms-Icon--Search&quot;&gt;&lt;/i&gt;
    &lt;span class&#x3D;&quot;ms-SearchBox-text&quot;&gt;Search&lt;/span&gt;
  &lt;/label&gt;
  
&lt;div class&#x3D;&quot;ms-CommandButton ms-SearchBox-clear ms-CommandButton--noLabel  &quot;&gt;
  &lt;button class&#x3D;&quot;ms-CommandButton-button&quot;  &gt;
      &lt;span class&#x3D;&quot;ms-CommandButton-icon &quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Cancel&quot;&gt;&lt;/i&gt;&lt;/span&gt;&lt;span class&#x3D;&quot;ms-CommandButton-label&quot;&gt;&lt;/span&gt;  &lt;/button&gt;
&lt;/div&gt;
  
&lt;div class&#x3D;&quot;ms-CommandButton ms-SearchBox-exit ms-CommandButton--noLabel  &quot;&gt;
  &lt;button class&#x3D;&quot;ms-CommandButton-button&quot;  &gt;
      &lt;span class&#x3D;&quot;ms-CommandButton-icon &quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--ChromeBack&quot;&gt;&lt;/i&gt;&lt;/span&gt;&lt;span class&#x3D;&quot;ms-CommandButton-label&quot;&gt;&lt;/span&gt;  &lt;/button&gt;
&lt;/div&gt;
  
&lt;div class&#x3D;&quot;ms-CommandButton ms-SearchBox-filter ms-CommandButton--noLabel  &quot;&gt;
  &lt;button class&#x3D;&quot;ms-CommandButton-button&quot;  &gt;
      &lt;span class&#x3D;&quot;ms-CommandButton-icon &quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Filter&quot;&gt;&lt;/i&gt;&lt;/span&gt;&lt;span class&#x3D;&quot;ms-CommandButton-label&quot;&gt;&lt;/span&gt;  &lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
      
&lt;div class&#x3D;&quot;ms-CommandButton    &quot;&gt;
  &lt;button class&#x3D;&quot;ms-CommandButton-button&quot;  &gt;
      &lt;span class&#x3D;&quot;ms-CommandButton-icon ms-fontColor-themePrimary&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--CircleRing&quot;&gt;&lt;/i&gt;&lt;/span&gt;&lt;span class&#x3D;&quot;ms-CommandButton-label&quot;&gt;Command&lt;/span&gt;  &lt;/button&gt;
&lt;/div&gt;
      
&lt;div class&#x3D;&quot;ms-CommandButton    &quot;&gt;
  &lt;button class&#x3D;&quot;ms-CommandButton-button&quot;  &gt;
      &lt;span class&#x3D;&quot;ms-CommandButton-icon ms-fontColor-themePrimary&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--CircleRing&quot;&gt;&lt;/i&gt;&lt;/span&gt;&lt;span class&#x3D;&quot;ms-CommandButton-label&quot;&gt;New&lt;/span&gt;&lt;span class&#x3D;&quot;ms-CommandButton-dropdownIcon&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--ChevronDown&quot;&gt;&lt;/i&gt;&lt;/span&gt;
  &lt;/button&gt;
    
&lt;ul class&#x3D;&quot;ms-ContextualMenu  is-opened ms-ContextualMenu--hasIcons&quot;&gt;
      &lt;li class&#x3D;&quot;ms-ContextualMenu-item &quot;&gt;
        &lt;a class&#x3D;&quot;ms-ContextualMenu-link &quot; tabindex&#x3D;&quot;1&quot; &gt;Folder&lt;/a&gt;
        &lt;i class&#x3D;&quot;ms-Icon ms-Icon--Folder &quot;&gt;&lt;/i&gt;
      &lt;/li&gt;
      &lt;li class&#x3D;&quot;ms-ContextualMenu-item ms-ContextualMenu-item--divider&quot;&gt;&lt;/li&gt;
      &lt;li class&#x3D;&quot;ms-ContextualMenu-item &quot;&gt;
        &lt;a class&#x3D;&quot;ms-ContextualMenu-link &quot; tabindex&#x3D;&quot;1&quot; &gt;Plain Text Document&lt;/a&gt;
        &lt;i class&#x3D;&quot;ms-Icon ms-Icon--Page &quot;&gt;&lt;/i&gt;
      &lt;/li&gt;
      &lt;li class&#x3D;&quot;ms-ContextualMenu-item &quot;&gt;
        &lt;a class&#x3D;&quot;ms-ContextualMenu-link &quot; tabindex&#x3D;&quot;1&quot; &gt;A Coffee&lt;/a&gt;
        &lt;i class&#x3D;&quot;ms-Icon ms-Icon--Coffee &quot;&gt;&lt;/i&gt;
      &lt;/li&gt;
      &lt;li class&#x3D;&quot;ms-ContextualMenu-item &quot;&gt;
        &lt;a class&#x3D;&quot;ms-ContextualMenu-link &quot; tabindex&#x3D;&quot;1&quot; &gt;Picture&lt;/a&gt;
        &lt;i class&#x3D;&quot;ms-Icon ms-Icon--Picture &quot;&gt;&lt;/i&gt;
      &lt;/li&gt;
      &lt;li class&#x3D;&quot;ms-ContextualMenu-item &quot;&gt;
        &lt;a class&#x3D;&quot;ms-ContextualMenu-link &quot; tabindex&#x3D;&quot;1&quot; &gt;Money&lt;/a&gt;
        &lt;i class&#x3D;&quot;ms-Icon ms-Icon--Money &quot;&gt;&lt;/i&gt;
      &lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
      
&lt;div class&#x3D;&quot;ms-CommandButton    &quot;&gt;
  &lt;button class&#x3D;&quot;ms-CommandButton-button&quot;  &gt;
      &lt;span class&#x3D;&quot;ms-CommandButton-icon ms-fontColor-themePrimary&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--CircleRing&quot;&gt;&lt;/i&gt;&lt;/span&gt;&lt;span class&#x3D;&quot;ms-CommandButton-label&quot;&gt;Command&lt;/span&gt;  &lt;/button&gt;
&lt;/div&gt;
      
&lt;div class&#x3D;&quot;ms-CommandButton    &quot;&gt;
  &lt;button class&#x3D;&quot;ms-CommandButton-button&quot;  &gt;
      &lt;span class&#x3D;&quot;ms-CommandButton-icon ms-fontColor-themePrimary&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--CircleRing&quot;&gt;&lt;/i&gt;&lt;/span&gt;&lt;span class&#x3D;&quot;ms-CommandButton-label&quot;&gt;Command&lt;/span&gt;  &lt;/button&gt;
&lt;/div&gt;
      
&lt;div class&#x3D;&quot;ms-CommandButton    &quot;&gt;
  &lt;button class&#x3D;&quot;ms-CommandButton-button&quot;  &gt;
      &lt;span class&#x3D;&quot;ms-CommandButton-icon ms-fontColor-themePrimary&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--CircleRing&quot;&gt;&lt;/i&gt;&lt;/span&gt;&lt;span class&#x3D;&quot;ms-CommandButton-label&quot;&gt;Command&lt;/span&gt;  &lt;/button&gt;
&lt;/div&gt;
      
        
&lt;div class&#x3D;&quot;ms-CommandButton ms-CommandBar-overflowButton ms-CommandButton--noLabel  &quot;&gt;
  &lt;button class&#x3D;&quot;ms-CommandButton-button&quot;  &gt;
      &lt;span class&#x3D;&quot;ms-CommandButton-icon &quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--More&quot;&gt;&lt;/i&gt;&lt;/span&gt;&lt;span class&#x3D;&quot;ms-CommandButton-label&quot;&gt;&lt;/span&gt;  &lt;/button&gt;
    
&lt;ul class&#x3D;&quot;ms-ContextualMenu  is-opened ms-ContextualMenu--hasIcons&quot;&gt;
      &lt;li class&#x3D;&quot;ms-ContextualMenu-item &quot;&gt;
        &lt;a class&#x3D;&quot;ms-ContextualMenu-link &quot; tabindex&#x3D;&quot;1&quot; &gt;Folder&lt;/a&gt;
        &lt;i class&#x3D;&quot;ms-Icon ms-Icon--Folder &quot;&gt;&lt;/i&gt;
      &lt;/li&gt;
      &lt;li class&#x3D;&quot;ms-ContextualMenu-item ms-ContextualMenu-item--divider&quot;&gt;&lt;/li&gt;
      &lt;li class&#x3D;&quot;ms-ContextualMenu-item &quot;&gt;
        &lt;a class&#x3D;&quot;ms-ContextualMenu-link &quot; tabindex&#x3D;&quot;1&quot; &gt;Plain Text Document&lt;/a&gt;
        &lt;i class&#x3D;&quot;ms-Icon ms-Icon--Page &quot;&gt;&lt;/i&gt;
      &lt;/li&gt;
      &lt;li class&#x3D;&quot;ms-ContextualMenu-item &quot;&gt;
        &lt;a class&#x3D;&quot;ms-ContextualMenu-link &quot; tabindex&#x3D;&quot;1&quot; &gt;A Coffee&lt;/a&gt;
        &lt;i class&#x3D;&quot;ms-Icon ms-Icon--Coffee &quot;&gt;&lt;/i&gt;
      &lt;/li&gt;
      &lt;li class&#x3D;&quot;ms-ContextualMenu-item &quot;&gt;
        &lt;a class&#x3D;&quot;ms-ContextualMenu-link &quot; tabindex&#x3D;&quot;1&quot; &gt;Picture&lt;/a&gt;
        &lt;i class&#x3D;&quot;ms-Icon ms-Icon--Picture &quot;&gt;&lt;/i&gt;
      &lt;/li&gt;
      &lt;li class&#x3D;&quot;ms-ContextualMenu-item &quot;&gt;
        &lt;a class&#x3D;&quot;ms-ContextualMenu-link &quot; tabindex&#x3D;&quot;1&quot; &gt;Money&lt;/a&gt;
        &lt;i class&#x3D;&quot;ms-Icon ms-Icon--Money &quot;&gt;&lt;/i&gt;
      &lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
      
  &lt;/div&gt;
&lt;/div&gt;
    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all CommandBar components on the page:

<pre>
    <code>
 &lt;script type&#x3D;&quot;text/javascript&quot;&gt;
  var CommandBarElements &#x3D; document.querySelectorAll(&quot;.ms-CommandBar&quot;);
  for(var i &#x3D; 0; i &lt; CommandBarElements.length; i++) {
    new fabric[&#x27;CommandBar&#x27;](CommandBarElements[i]);
  }
&lt;/script&gt;

    </code>
</pre>

4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as `.ms-CommandBarItem` elements) with your content.

## Dependencies
This component has no dependencies.

## Accessibility
Refer to the sample code to see how `tabindex` attributes should be set to support keyboard navigation.


<script type="text/javascript">
  var CommandBarElements = document.querySelectorAll(".ms-CommandBar");
  for(var i = 0; i < CommandBarElements.length; i++) {
    new fabric['CommandBar'](CommandBarElements[i]);
  }
</script>

