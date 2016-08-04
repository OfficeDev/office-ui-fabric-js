# CommandButton
Allows users to take action, such as submitting a form or dismissing a message. Primary use is in command bar or in Callout.

## Variants

### Default
<!--- 
{{> CommandButton props=CommandButtonExampleModel.props}} 
--->

### Action Button
<!--- 
{{> CommandButton props=CommandButtonExampleModel.propsActionButton}} 
--->

### Disabled
<!--- 
{{> CommandButton props=CommandButtonExampleModel.propsDisabled}} 
--->

### Dropdown
<!--- 
{{> CommandButton props=CommandButtonExampleModel.propsDropdown}} 
--->

### Inline
<!--- 
{{> CommandButton props=CommandButtonExampleModel.propsInline}} 
--->

### No Label
<!--- 
{{> CommandButton props=CommandButtonExampleModel.propsNoLabel}} 
--->

### No Label Split
<!--- 
{{> CommandButton props=CommandButtonExampleModel.propsNoLabelSplit}} 
--->

### Pivot
<!--- 
{{> CommandButton props=CommandButtonExampleModel.propsPivot}} 
--->

### Split
<!--- 
{{> CommandButton props=CommandButtonExampleModel.propsSplit}} 
--->

### Text Only
<!--- 
{{> CommandButton props=CommandButtonExampleModel.propsTextOnly}} 
--->

## States
State | Applied to | Result
 --- | --- | ---
`.is-disabled` | `.ms-Button` | When using an `<a>` element, apply this class to disable the button. When using a `<button>`, the `disabled` attribute can be used instead.

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
{{renderPartialPre "CommandButton" "CommandButtonExample" CommandButtonExampleModel.props false}}
    </code>
</pre>
--->
3. Replace the sample HTML content (such as the content of `.ms-CommandButton-label`) with your content.
4. If you are using any of CommandButton's variants that use a dropdown, the below JavaScript is required.
<!---
<pre>
    <code>
{{renderPartialPre "CommandButton" "CommandButtonExampleJS" ""  false}}
    </code>
</pre>
--->


## Dependencies
ContextualMenu, ContextualHost

## Accessibility
Focus styles are included for keyboard navigation.

<!---
{{> CommandButtonExampleJS }}
--->