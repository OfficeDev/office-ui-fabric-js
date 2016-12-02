# Dropdown
Allows for the selection of one option from a list.

## Variants

### Default
<!----
{{> Dropdown props=DropdownExampleModel.props}}
---->
<!---i
![Dropdown example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dropdown-default.png)
i--->

### Disabled
<!----
{{> Dropdown props=DropdownExampleModel.propsDisabled}}
---->
<!---i
![Dropdown example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dropdown-disabled.png)
i--->

## States
State | Applied to | Result
 --- | --- | ---
`.is-disabled` | `.ms-Dropdown` | Disables the dropdown.

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
{{renderPartialPre "Dropdown" "DropdownExample" DropdownExampleModel.props false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page to instantiate all Dropdown components on the page:
<!---
<pre>
    <code>
{{renderPartialPre "Dropdown" "DropdownExampleJS" "" false}}
    </code>
</pre>
--->
4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the options within `.ms-Dropdown-select`) with your content.

## Dependencies
This component depends on Panel for when it is rendered on mobile.

## Accessibility
More details will be added here.

<!---
{{> DropdownExampleJS }}
--->