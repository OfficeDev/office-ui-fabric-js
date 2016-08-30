# List Item
Suitable for presenting a summary of an item with associated actions. Most often used within a List component. It was designed to represent an email message on desktop computers and is not currently touch friendly.

## Variants

### Default
<!----
{{> ListItemElem props=ListItemModels.basic }}
---->
<!---i
![ListItem example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/ListItem-default.png)
i--->

### Image
The same as the default variant, with a thumbnail image added.

<!----
{{> ListItemElem props=ListItemModels.image }}
---->
<!---i
![ListItem example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/ListItem-image.png)
i--->

### Document
Showcases a document by providing a thumbnail, title, and some metadata.
<!----
{{> ListItemElem props=ListItemModels.document }}
---->
<!---i
![ListItem example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/ListItem-document.png)
i--->

## States

### Selectable
Apply the `is-selectable` class to make it possible to select the item.
<!----
{{> ListItemElem props=ListItemModels.selectable }}
---->

### Selected
When applied alongside the `is-selectable` class, `is-selected` will mark it as selected.
<!----
{{> ListItemElem props=ListItemModels.selected }}
--->

### Unseen
Use `is-unseen` to indicate that the item has not been seen.
<!----
{{> ListItemElem props=ListItemModels.unseen }}
---->

### Unread
Use `is-unread` to indicate that the item has not been read.
<!----
{{> ListItemElem props=ListItemModels.unread }}
---->

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
{{renderPartialPre "ListItem" "ListItemElem" ListItemModels.basic false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all ListItem components on the page:
<!---
<pre>
    <code>
{{renderPartialPre "ListItem" "ListItemJS" "" false}}
    </code>
</pre>
--->
4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the content of `.ms-ListItem-primaryText`) with your content.

## Dependencies
This component has no dependencies on other components, although it is most often used within a List component.

## Accessibility
More details will be added here.

<!---
{{> ListItemJS }}
--->
