# List
Presents a number of related items, either as a vertical list or in a grid.

## Variants

### Default
A standard vertical list of items.



![List example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/List-default.png)


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
2. Copy the HTML from the sample above into your page. For example: 

<pre>
    <code>
 

&lt;ul class&#x3D;&quot;ms-List &quot;&gt;
    
    
    &lt;li class&#x3D;&quot;ms-ListItem  is-unread is-selectable&quot; tabindex&#x3D;&quot;0&quot;&gt;
      
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
    
    
    
    &lt;li class&#x3D;&quot;ms-ListItem  is-unread is-selectable&quot; tabindex&#x3D;&quot;0&quot;&gt;
      
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
    
    
    
    &lt;li class&#x3D;&quot;ms-ListItem  is-unread is-selectable&quot; tabindex&#x3D;&quot;0&quot;&gt;
      
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
    
    
    
    &lt;li class&#x3D;&quot;ms-ListItem  is-unread is-selectable&quot; tabindex&#x3D;&quot;0&quot;&gt;
      
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
    
    
    
    &lt;li class&#x3D;&quot;ms-ListItem  is-unread is-selectable&quot; tabindex&#x3D;&quot;0&quot;&gt;
      
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
    
    
    
    &lt;li class&#x3D;&quot;ms-ListItem  is-selectable&quot; tabindex&#x3D;&quot;0&quot;&gt;
      
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
    
    
    
    &lt;li class&#x3D;&quot;ms-ListItem  is-selectable&quot; tabindex&#x3D;&quot;0&quot;&gt;
      
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
    
    
    
    &lt;li class&#x3D;&quot;ms-ListItem  is-selectable&quot; tabindex&#x3D;&quot;0&quot;&gt;
      
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
    
&lt;/ul&gt;

    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all ListItem components on the page:

<pre>
    <code>
 &lt;script type&#x3D;&quot;text/javascript&quot;&gt;
    var ListElements &#x3D; document.querySelectorAll(&quot;.ms-List&quot;);
    for(var i &#x3D; 0; i &lt; ListElements.length; i++) {
        new fabric[&#x27;List&#x27;](ListElements[i]);
    }
&lt;/script&gt;
    </code>
</pre>

4. Replace the content with whatever you'd like to display as a list. The samples use `.ms-ListItem` components, but you can place any content within `.ms-List`.

## Dependencies
This component has no dependencies on other components, although it does often contain ListItem components.

## Accessibility
You can use a `ul` element if your content is unordered, or `ol` if the order of the content is important.


<script type="text/javascript">
    var ListElements = document.querySelectorAll(".ms-List");
    for(var i = 0; i < ListElements.length; i++) {
        new fabric['List'](ListElements[i]);
    }
</script>