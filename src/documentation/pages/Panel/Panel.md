# Panel
Presents content by sliding over the rest of the application, which is covered by a partially-transparent overlay. Best used for experiences that do not require explicit context for heavy-weight creation/edit/management tasks such as settings, multi-field forms, and permissions. For containers used for complex tasks that requires context, use a separate Pane alongside the existing experience such as a List/Details layout.

## Variants

### Default
<!---
{{> PanelDefaultExample}}
--->

### Medium
<!---
{{> PanelMediumExample}}
--->

### Large
<!---
{{> PanelLargeExample}}
--->

### Large, fixed
<!---
{{> PanelLargeFixedExample}}
--->

### Extra Large
<!---
{{> PanelExtraLargeExample}}
--->

### Extra extra large
<!---
{{> PanelExtraExtraLargeExample}}
--->

### Left aligned
You can add the `ms-Panel--left` modifier to any panel to attach it to the left side of the screen.
<!---
{{> PanelLeftExample}}
--->

## States
State | Applied to | Result
 --- | --- | ---
`.is-open` | `.ms-Panel` | The panel is closed by default. Apply this class to open it.

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
{{renderPartialPre "Panel" "PanelExample" PanelExampleProps.default false}}
    </code>
</pre>
--->
3. Verify that the component is working the same as in the sample above.
4. Replace the sample HTML content (such as the content of `.ms-Panel-content`) with your content.

<!---
{{> PanelDocExampleJS}}
--->