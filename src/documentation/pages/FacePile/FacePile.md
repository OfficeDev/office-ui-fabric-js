# FacePile
Displays several people with the option to add additional people or view the details of a person. Although not baked into the component, adding new people to a FacePile (the listing of faces horizontally) should occur through a panel using the FacePile PeoplePicker variant.

## Variants

### Default
<!----
{{> FacePileElem props=FacePileModels.basic }}
---->
<!---i
![FacePile example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/FacePile-default.png)
i--->

## States
State | Applied to | Result
 --- | --- | ---
`.is-active` | `.ms-PersonaCard` | Makes the PersonaCard for a person visible.
`.is-active` | `.ms-FacePile-itemBtn--overflow` | Makes the overflow item for additional people visible.

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
{{renderPartialPre "FacePile" "FacePileElem" FacePileModels.basic false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all FacePile components on the page:
<!---
<pre>
    <code>
{{renderPartialPre "FacePile" "FacePileJS" "" false}}
    </code>
</pre>
--->
4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content with your content.

## Dependencies
This component has dependencies on Overlay, Link, Panel, PeoplePicker, Persona, PersonaCard, and Spinner.

## Accessibility
More details will be added here.

<!---
{{> FacePileJS }}
--->