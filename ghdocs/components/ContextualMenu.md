# Contextual Menu
Presents options associated with an object. Often opened via a right-click or overflow button.

## Variants

### Default
A standard menu of commands. Should close when a command is invoked.



![ContextualMenu example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/ContextualMenu-default.png)


### Multiselect
Allows for multiple options to be set. Remains opened until the user clicks or taps outside of the menu.



![ContextualMenu example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/ContextualMenu-multiselect.png)


## Optional functionality

### SubMenu
You can nest a ContextualMenu inside another ContextualMenu, resulting in a submenu.



![ContextualMenu example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/ContextualMenu-submenu.png)


### Dividers
Dividers can be added to create distinct sections of options or commands.



![ContextualMenu example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/ContextualMenu-dividers.png)


## States

State | Applied to | Result
 --- | --- | ---
`.is-open` | `.ms-ContextualMenu` | The ContextualMenu is hidden by default. Toggle this class to show or hide it.
`.is-selected` | `.ms-ContextualMenu-link` | Marks that item as selected. Only available for the multiselect variant.
`.is-disabled` | `.ms-ContextualMenu-link` | Disables that item in the menu.

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
 <div class="ms-ContextualMenu-basic">    
    <button class="ms-Button ms-Button--primary">
      <span class="ms-Button-label">Open Example</span>
    </button>    
    <ul class="ms-ContextualMenu is-hidden">
      <li class="ms-ContextualMenu-item">
          <a class="ms-ContextualMenu-link"tabindex="1">Animals</a>            
        </li>
        <li class="ms-ContextualMenu-item">
          <a class="ms-ContextualMenu-link"tabindex="1">Books</a>            
        </li>
        <li class="ms-ContextualMenu-item">
          <a class="ms-ContextualMenu-link is-selected"tabindex="1">Education</a>            
        </li>
        <li class="ms-ContextualMenu-item">
          <a class="ms-ContextualMenu-link"tabindex="1">Music</a>            
        </li>
        <li class="ms-ContextualMenu-item">
          <a class="ms-ContextualMenu-link is-disabled"tabindex="1">Sports</a>            
        </li>
      </ul>
    </div>    
    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all ContextualMenu components on the page:

<pre>
    <code>
 <script type="text/javascript">
    var ButtonElement = document.querySelector(".ms-ContextualMenu-basic .ms-Button");
    var ContextualMenuElement = document.querySelector(".ms-ContextualMenu-basic .ms-ContextualMenu");
    var contextualMenu = new fabric['ContextualMenu'](ContextualMenuElement, ButtonElement);
</script>
    </code>
</pre>

4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the `.ms-ContextualMenu-link` elements) with your content.

## Dependencies
This component has no dependencies.

## Accessibility
More details will be added here.
