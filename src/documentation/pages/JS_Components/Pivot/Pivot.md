# Pivot
A layout component that allows a user to switch between different sets of content or filters on the content currently visible. This is in contrast to a purely navigational UI element such as NavBar or a commanding element such as CommandBar. An example would be Read vs. Unread items in the Outlook Web App.

## Variants

### Default
<!----
{{> Pivot props=PivotExampleProps.default}}
---->
<!---i
![Pivot example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Pivot-default.png)
i--->

### Large
<!----
{{> Pivot props=PivotExampleProps.large}}
---->
<!---i
![Pivot example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Pivot-large.png)
i--->

### Tabs
<!----
{{> Pivot props=PivotExampleProps.tabs}}
---->
<!---i
![Pivot example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Pivot-tabs.png)
i--->

### Large tabs
<!----
{{> Pivot props=PivotExampleProps.largeTabs}}
---->
<!---i
![Pivot example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Pivot-largetabs.png)
i--->

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
{{renderPartialPre "Pivot" "PivotExample" PivotExampleProps.default false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all Pivot components on the page:
<!---
<pre>
    <code>
{{renderPartialPre "Pivot" "PivotExampleJS" "" false}}
    </code>
</pre>
--->
4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the name within `.ms-Pivot-link`) with your content.

## Dependencies
This component has no dependency on other components.

<!---
{{> PivotExampleJS}}
--->