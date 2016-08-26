# Table
Presents tabular data with multiple rows and columns. The table's width is flexible, but it does not have any advanced responsive behaviors.

## Variants

### Default
The column widths are determined by the content.
<!----
{{> Table props=TableExampleModel}}
---->
<!---i
![Table example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Table-default.png)
i--->

### Fixed
The columns are split evenly, regardless of their content.
<!----
{{> Table props=TableFixedExampleModel}}
---->
<!---i
![Table example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Table-fixed.png)
i--->

### Selectable
Rows can be selected.
<!----
{{> Table props=TableSelectableExampleModel}}
---->
<!---i
![Table example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Table-selectable.png)
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
2. Copy the HTML from the sample above into your page. For example:
<!---
<pre>
    <code>
{{renderPartialPre "Table" "TableExample" TableExampleModel false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all Table components on the page:
<!---
<pre>
    <code>
{{renderPartialPre "Table" "TableExampleJS" "" false}}
    </code>
</pre>
--->
4. Replace the content with your own data. You can add more rows or columns.

## Dependencies
This component has no dependency on other components.

<!---
{{> TableExampleJS }}
--->
