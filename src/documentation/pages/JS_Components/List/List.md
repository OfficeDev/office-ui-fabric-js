# List
Presents a number of related items, either as a vertical list or in a grid.

## Variants

### Default
A standard vertical list of items.

<!----
{{> ListElem props=ListModels.basic }}
---->
<!---i
![List example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/List-default.png)
i--->

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
<!---
<pre>
    <code>
{{renderPartialPre "List" "ListElem" ListModels.basic false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all ListItem components on the page:
<!---
<pre>
    <code>
{{renderPartialPre "List" "ListJS" "" false}}
    </code>
</pre>
--->
4. Replace the content with whatever you'd like to display as a list. The samples use `.ms-ListItem` components, but you can place any content within `.ms-List`.

## Dependencies
This component has no dependencies on other components, although it does often contain ListItem components.

## Accessibility
You can use a `ul` element if your content is unordered, or `ol` if the order of the content is important.

<!---
{{> ListJS }}
--->