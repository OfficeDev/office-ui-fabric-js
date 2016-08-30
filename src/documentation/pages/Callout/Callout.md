# Callout
Callouts are a powerful way to simplify a user interface. They host tips and other information users need when they need it, with minimal effort on their part. Callouts can help you use screen space more effectively and reduce screen clutter. However, poorly designed Callouts can be annoying, distracting, unhelpful, overwhelming, or in the way. 

Use a Callout for displaying additional contextual information about an item on the screen. Unlike Tooltips, Callouts also have a tail that identifies their source. A common use for Callout is the introduction of a new feature or capability of an app or site. Alternate usages include pairing the Callout with a button or clickable element for on-demand presentation of additional or supporting content. 

Real-world examples of this implementation can be seen in administrative interfaces where a particularly difficult-to-understand concept is paired with the ms-Icon--info "i" icon. In this example, Callout - with its tip text - is opened when the user clicks on or hovers over the icon.

### Best Practices
Do | Don't
--- | ---
Use Callouts to introduce new concepts in an experience where highlighting specific pieces of the UI is necessary. | Don’t overuse Callout without putting the user in control. Too many Callouts which open automatically can be perceived as interrupting workflow and are a bad user experience. 
Do be concise with the information you provide inside of a Callout. Short sentences or sentence fragments are best. | Don't use large, unformatted blocks of text in your Callout, they are difficult to read and overwhelming.
Do be helpful with the tip text inside of your Callout. | Don't put obvious tip text, or text that simply repeats what is already on the screen in your Callout.
Do limit the information inside of a Callout to supplemental information that users don't have to read. | Because the content inside of a Callout isn't always visible, don't put important or required information in a Callout. 
Callouts should be placed near the object being described, usually at the pointer's tail or head if possible. | Don’t block important UI with the placement of your Callout, it is a poor user experience that will lead to frustration.
When additional context - or more advanced description - is necessary, consider placing a link to "Learn more" at the bottom of the Callout and opening the additional content in a new window or Panel when clicked. | Don’t open Callout from within another Callout.
 | Don’t use Callout to ask the user to confirm an action, use a Dialog instead.
 | Don’t show Callouts on hidden elements.

## Variants

### Default
<!----
{{> CalloutExample props=CalloutExampleModel.props }}
---->
<!---i
![Callout example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Callout-default.png)
i--->


### Close
Includes an icon to dismiss the callout.

<!----
{{> CalloutExample props=CalloutExampleModel.propsClose }}
---->
<!---i
![Callout example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Callout-close.png)
i--->

### Action text
Includes buttons to take action.

<!----
{{> CalloutExample props=CalloutExampleModel.propsActionText }}
---->
<!---i
![Callout example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Callout-action.png)
i--->

### OOBE (Out Of the Box Experience)
Draws attention to one aspect of the application during a product tour.

<!----
{{> CalloutExample props=CalloutExampleModel.propsOobe }}
---->
<!---i
![Callout example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Callout-oobe.png)
i--->

### Peek
A smaller callout with an action.

<!----
{{> CalloutExample props=CalloutExampleModel.propsPeek }}
---->
<!---i
![Callout example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Callout-peek.png)
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
{{renderPartialPre "Callout" "CalloutExample" CalloutExampleModel.props false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate a Callout component on the page:
<!---
<pre>
    <code>
{{renderPartialPre "Callout" "CalloutExampleJS" "" false}}
    </code>
</pre>
--->
3. Replace the sample HTML content (such as the content of `.ms-Callout-title`) with your content.

## Dependencies
Button, Label, Link, ContextualHost, CommandButton

## Accessibility
Focus styles are included for all of the actions (links and buttons) included within a Callout.

<!---
{{> CalloutExampleJS }}
--->
