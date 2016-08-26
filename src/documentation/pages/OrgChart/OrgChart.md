# Org Chart
Displays multiple Persona components in groups with headers in order to show the hierarchy of an organization or team.

## Variants

### Default

<!----
{{> OrgChart props=OrgChartModels.basic}}
---->
<!---i
![OrgChart example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/OrgChart-default.png)
i--->

## Using this component
1. Confirm that you have references to Fabric's CSS on your page:
    ```
    <head>
        <link rel="stylesheet" href="fabric.min.css">
        <link rel="stylesheet" href="fabric.components.min.css">
    </head>
    ```
2. Copy the HTML from the samples above into your page. For example:
<!---
<pre>
    <code>
{{renderPartialPre "OrgChart" "OrgChartElem" OrgChartModels.basic false}}
    </code>
</pre>
--->
3. Replace the Persona components with your own.

## Dependencies
This component has a dependency on the Persona component.


