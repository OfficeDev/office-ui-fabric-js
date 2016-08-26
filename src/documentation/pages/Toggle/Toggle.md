# Toggle
Allows for turning on or off a setting. This is best suited for simple, singular configuration (e.g. application level settings) whereas the ChoiceField is better suited when there is a longer list of individual choices or in a form (e.g. signing up for different newsletters during registration for an event).

## Variants

### Label above (default)
<!----
{{> ToggleElem props=ToggleModels.basic }}
---->
<!---i
![Toggle example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Toggle-default.png)
i--->

### Label on left
<!----
{{> ToggleElem props=ToggleModels.textLeft }}
---->
<!---i
![Toggle example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Toggle-left.png)
i--->

### Disabled
<!----
{{> ToggleElem props=ToggleModels.disabled }}
---->
<!---i
![Toggle example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Toggle-disabled.png)
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
{{renderPartialPre "Toggle" "ToggleElem" ToggleModels.basic false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all Toggle components on the page:
<!---
<pre>
    <code>
{{renderPartialPre "Toggle" "ToggleJS" "" false}}
    </code>
</pre>
--->
4. Update the `.ms-Label` to contain your label text.

## Dependencies
This component has a dependency on the Label component.

<!---
{{> ToggleJS }}
--->