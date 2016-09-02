# Contextual Menu
Presents options associated with an object. Often opened via a right-click or overflow button.

## Variants

### Default
A standard menu of commands. Should close when a command is invoked.

<!----
{{> ContextualMenuExample props=ContextualMenuExampleModel.basic }}
---->
<!---i
![ContextualMenu example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/ContextualMenu-default.png)
i--->

### Multiselect
Allows for multiple options to be set. Remains opened until the user clicks or taps outside of the menu.

<!----
{{> ContextualMenuMultiselectExample props=ContextualMenuExampleModel.multiselect }}
---->
<!---i
![ContextualMenu example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/ContextualMenu-multiselect.png)
i--->

## Optional functionality

### SubMenu
You can nest a ContextualMenu inside another ContextualMenu, resulting in a submenu.

<!----
{{> ContextualMenuSubmenuExample props=ContextualMenuExampleModel.submenu }}
---->
<!---i
![ContextualMenu example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/ContextualMenu-submenu.png)
i--->

### Dividers
Dividers can be added to create distinct sections of options or commands.

<!----
{{> ContextualMenuDividersExample props=ContextualMenuExampleModel.dividers }}
---->
<!---i
![ContextualMenu example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/ContextualMenu-dividers.png)
i--->

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
<!---
<pre>
    <code>
{{renderPartialPre "ContextualMenu" "ContextualMenuExample" ContextualMenuExampleModel.basic false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all ContextualMenu components on the page:
<!---
<pre>
    <code>
{{renderPartialPre "ContextualMenu" "ContextualMenuExampleJS" "" false}}
    </code>
</pre>
--->
4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the `.ms-ContextualMenu-link` elements) with your content.

## Dependencies
This component has no dependencies.

## Accessibility
More details will be added here.

<!---
{{> ContextualMenuExampleJS }}
--->