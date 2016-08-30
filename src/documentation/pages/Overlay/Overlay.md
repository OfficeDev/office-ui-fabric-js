# Overlay
Partially obscures the page to create a modal experience and focus the user's attention. Typically used with a Dialog or Panel.

## Variants

### Default
<!----
{{> OverlayExample }}
---->
<!---i
![Overlay example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Overlay-default.png)
i--->

### Dark
<!----
{{> OverlayDarkExample }}
---->
<!---i
![Overlay example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Overlay-dark.png)
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
    ```
    <div class="ms-Overlay"></div>
    ```
3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate an Overlay component on the page:
<!---
<pre>
    <code>
{{renderPartialPre "Overlay" "OverlayExampleJS" "" false}}
    </code>
</pre>
--->
3. Replace the sample HTML content (such as the content of `.ms-Button-label`) with your content.

## Dependencies
This component has no dependencies.
