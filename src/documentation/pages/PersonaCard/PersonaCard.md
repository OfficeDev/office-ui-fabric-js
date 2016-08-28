# Persona Card
The visualization of details of an individual including Skype contact details, email, location information, and location within the hierarchy of an organization. Within Office 365, PersonaCards often appear when a user hovers, taps, or clicks on a Persona.

## Variants

### Default
<!----
{{> PersonaCardExample props=PersonaCardExampleModel.default}}
---->
<!---i
![PersonaCard example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/PersonaCard-default.png)
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
{{renderPartialPre "PersonaCard" "PersonaCardExample" PersonaCardExampleModel.default false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all PersonaCard components on the page:
<!---
<pre>
    <code>
{{renderPartialPre "PersonaCard" "PersonaCardExampleJS" "" false}}
    </code>
</pre>
--->
4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content with your content.

## Dependencies
This component uses a Persona component to present the person, an OrgChart to present the persona's position within the organization, and a Link for navigation.

<!---
{{> PersonaCardExampleJS }}
--->