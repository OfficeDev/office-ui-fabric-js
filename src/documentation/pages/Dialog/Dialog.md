# Dialog
Displays content that temporarily blocks interactions with the application. It is primarily used for confirmation tasks, light-weight creation or edit tasks, and simple management tasks.

## Variants

### Default
Includes a content area and two buttons.

<!----
<div class="docs-DialogExample-default">
  {{> Dialog props=DialogExampleModel.default }}
  <button class="ms-Button docs-DialogExample-button">Open Dialog</button>
  <label class="docs-DialogExample-label"></label>
</div> 
{{> DialogExampleDefaultJS }}
---->

<!---i
![Dialog example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dialog-default.png)
i--->

### Multiline
Includes multiple large buttons, each with a title and description.

<!----
<div class="docs-DialogExample-multiline">
  {{> Dialog props=DialogExampleModel.multiline }}
  <button class="ms-Button docs-DialogExample-button">Open Dialog</button>
  <label class="docs-DialogExample-label"></label>
</div>
{{> DialogExampleMultilineJS }}
---->
<!---i
![Dialog example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dialog-multiline.png)
i--->

### Large Header
Provides a large, styled header followed by a content area and two buttons.

<!----
<div class="docs-DialogExample-lgHeader">
  {{> Dialog props=DialogExampleModel.lgHeader }}
  <button class="ms-Button docs-DialogExample-button">Open Dialog</button>
  <label class="docs-DialogExample-label"></label>
</div>
{{> DialogExampleLgHeaderJS }}
---->
<!---i
![Dialog example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dialog-largeheader.png)
i--->

### Blocking
The overlay for this variant does not dismiss the Dialog.

<!----
<div class="docs-DialogExample-blocking">
  {{> Dialog props=DialogExampleModel.blocking }}
  <button class="ms-Button docs-DialogExample-button">Open Dialog</button>
  <label class="docs-DialogExample-label"></label>
</div>
{{> DialogExampleBlockingJS }}
---->
<!---i
![Dialog example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dialog-blocking.png)
i--->

### Close
Includes a close button at the top right, as an additional way to dismiss the dialog.

<!----
<div class="docs-DialogExample-close">
  {{> Dialog props=DialogExampleModel.close }}
  <button class="ms-Button docs-DialogExample-button">Open Dialog</button>
  <label class="docs-DialogExample-label"></label>
</div>
{{> DialogExampleCloseJS }}
---->
<!---i
![Dialog example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dialog-close.png)
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
2. Copy the HTML from one of the samples above into your page. For example:
<!---
<pre>
    <code>
{{renderPartialPre "Dialog" "DialogExampleDoc" DialogExampleModel.default false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all Dialog components on the page:
<!---
<pre>
    <code>
{{renderPartialPre "Dialog" "DialogDocAllElementsJS" "" false}}
    </code>
</pre>
--->

    or add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate a single Dialog component on the page:

    <!---
    <pre>
        <code>
    {{renderPartialPre "Dialog" "DialogDocSingleElementJS" "" false}}
        </code>
    </pre>
    --->
4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the content of `.ms-Dialog-content`) with your content.

## Dependencies
This component has no dependencies on other components.

## Accessibility
More details will be added here.