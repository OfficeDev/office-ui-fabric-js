# Table
Presents tabular data with multiple rows and columns. The table's width is flexible, but it does not have any advanced responsive behaviors.

## Variants

### Default
The column widths are determined by the content.


![Table example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Table-default.png)


### Fixed
The columns are split evenly, regardless of their content.


![Table example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Table-fixed.png)


### Selectable
Rows can be selected.


![Table example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Table-selectable.png)


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

	```
    <table class="ms-Table">
        <thead>
            <tr>
                <th>Location</th>
                <th>Modified</th>
                <th>Type</th>
                <th>File Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Location</td>
                <td>Modified</td>
                <td>Type</td>
                <td>File Name</td>
            </tr>
            <tr>
                <td>Location</td>
                <td>Modified</td>
                <td>Type</td>
                <td>File Name</td>
            </tr>
            <tr>
                <td>Location</td>
                <td>Modified</td>
                <td>Type</td>
                <td>File Name</td>
            </tr>
            <tr>
                <td>Location</td>
                <td>Modified</td>
                <td>Type</td>
                <td>File Name</td>
            </tr>
            <tr>
                <td>Location</td>
                <td>Modified</td>
                <td>Type</td>
                <td>File Name</td>
            </tr>
            <tr>
                <td>Location</td>
                <td>Modified</td>
                <td>Type</td>
                <td>File Name</td>
            </tr>
            <tr>
                <td>Location</td>
                <td>Modified</td>
                <td>Type</td>
                <td>File Name</td>
            </tr>
        </tbody>
    </table>
	```

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all Table components on the page:

	```
    <script type="text/javascript">
        var TableElements = document.querySelectorAll(".ms-Table");
        for (var i = 0; i < TableElements.length; i++) {
            new fabric['Table'](TableElements[i]);
        }
    </script>
	```

4. Replace the content with your own data. You can add more rows or columns.

## Dependencies
This component has no dependency on other components.


