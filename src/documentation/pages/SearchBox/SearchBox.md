# Search Box
A special form field that allows for the input of search text.

## Variants

### Default
<!----
{{> SearchBox props=SearchBoxExampleProps.default}}
---->
---->
<!---i
![SearchBox example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/SearchBox-default.png)
i--->

### Collapsed
<!----
{{> SearchBox props=SearchBoxExampleProps.collapsed}}
---->
---->
<!---i
![SearchBox example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/SearchBox-collapsed.png)
i--->


### Command bar
<!----
{{> SearchBox props=SearchBoxExampleProps.commandBar}}
---->
<!---i
![SearchBox example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/SearchBox-collapsed.png)
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
{{renderPartialPre "SearchBox" "SearchBoxExample" SearchBoxExampleProps.default false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all SearchBox components on the page:
<!---
<pre>
    <code>
{{renderPartialPre "SearchBox" "SearchBoxExampleJS" "" false}}
    </code>
</pre>
--->
4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the name within `.ms-SearchBox-text`) with your content.

## Dependencies
This component has a dependency on the Label component.

<!---
{{> SearchBoxExampleJS}}
--->
