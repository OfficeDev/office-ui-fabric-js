# People Picker
A form input that allows for the choice of one or more people.

## Variants

### Default
Uses the standard sized Persona component.
<!----
{{> PeoplePicker props=PeoplePickerExampleProps.default}}
---->
<!---i
![PeoplePicker example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/PeoplePicker-default.png)
i--->

### Compact
Use the extra small Persona component to fit more results.
<!----
{{> PeoplePicker props=PeoplePickerExampleProps.compact}}
---->
<!---i
![PeoplePicker example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/PeoplePicker-compact.png)
i--->

### Face pile
Presents the selected people in a list below the search field, rather than inline.
<!----
{{> PeoplePicker props=PeoplePickerExampleProps.facePile}}
---->
<!---i
![PeoplePicker example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/PeoplePicker-facepile.png)
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
{{renderPartialPre "PeoplePicker" "PeoplePickerExample" PeoplePickerExampleProps.default false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all PeoplePicker components on the page:
<!---
<pre>
    <code>
{{renderPartialPre "PeoplePicker" "PeoplePickerExampleJS" "" false}}
    </code>
</pre>
--->
4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content with your content.

## Dependencies
This component uses Persona and PersonaCard to display people and Label for the Members List variant. It also uses a Spinner when searching for results.

<!---
{{> PeoplePickerExampleJS}}
--->
