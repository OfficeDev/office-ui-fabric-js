# Command Bar
Commanding surface for panels, pages, and applications. When planning to use the surface for navigation only, consider the NavBar variant.

## Variants

### Default
<!----
{{> CommandBar props=CommandBarExampleModel.props}}
---->
<!---i
![CommandBar example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/CommandBar-default.png)
i--->

### Dropdowns
<!----
{{> CommandBar props=CommandBarExampleModel.propsDropdown}}
---->
<!---i
![CommandBar example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/CommandBar-dropdowns.png)
i--->

### NavBar
Provides a means of navigating to different areas within an application. On small screens, the navigation items are placed inside a hamburger menu.
<!----
{{> CommandBar props=CommandBarExampleModel.propsNavBar}}
---->
<!---i
![CommandBar example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/CommandBar-navbar.png)
i--->

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
<!---
<pre>
    <code>
{{renderPartialPre "CommandBar" "CommandBarExample" CommandBarExampleModel.props false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all CommandBar components on the page:
<!---
<pre>
    <code>
{{renderPartialPre "CommandBar" "CommandBarExampleJS" "" false}}
    </code>
</pre>
--->
4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as `.ms-CommandBarItem` elements) with your content.

## Dependencies
This component has no dependencies.

## Accessibility
Refer to the sample code to see how `tabindex` attributes should be set to support keyboard navigation.

<!---
{{> CommandBarExampleJS }}
--->
