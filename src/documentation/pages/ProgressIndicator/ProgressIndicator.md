# Progress Indicator
Displays the progress of an operation when the percentage complete can be determined. Unable to determine how much of the operation is complete? Use a Spinner instead.

## Variants

### Default
<!---
{{> ProgressIndicator props=ProgressIndicatorExampleProps.default }}
--->

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
{{renderPartialPre "ProgressIndicator" "ProgressIndicatorExample" PivotExampleProps.default false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all ProgressIndicators on the page:
<!---
<pre>
    <code>
{{renderPartialPre "ProgressIndicator" "ProgressIndicatorExampleJS" "" false}}
    </code>
</pre>
--->
4. Verify that the component is working the same as in the sample above.

## Dependencies
This component has no dependency on other components.

<!---
{{> ProgressIndicatorExampleJS }}
--->
