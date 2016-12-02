# Spinner
Displays the progress of an operation when the percentage complete can not be determined. Do you know how much of the operation is complete? Use a ProgressIndicator instead.

## Variants

### Default
<!----
{{> SpinnerExample props=SpinnerExampleModel}}
---->
<!---i
![Spinner example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Spinner-default.png)
i--->

### Large
<!----
{{> SpinnerLargeExample props=SpinnerLargeExampleModel}}
---->
<!---i
![Spinner example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Spinner-large.png)
i--->

### Default with label
<!----
{{> SpinnerWithLabelExample props=SpinnerWithLabelExampleModel}}
---->
<!---i
![Spinner example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Spinner-defaultwithlabel.png)
i--->

### Large with label
<!----
{{> SpinnerLargeWithLabelExample props=SpinnerLargeWithLabelExampleModel}}
---->
<!---i
![Spinner example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Spinner-largewithlabel.png)
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
{{renderPartialPre "Spinner" "SpinnerExample" SpinnerExampleModel false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all Spinner components on the page:
<!---
<pre>
    <code>
{{renderPartialPre "Spinner" "SpinnerExampleJS" "" false}}
    </code>
</pre>
--->
4. Verify that the component is working the same as in the sample above.

## Dependencies
This component has no dependency on other components.

<!---
{{> SpinnerExampleJS }}
--->