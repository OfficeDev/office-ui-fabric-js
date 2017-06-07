# People Picker
A form input that allows for the choice of one or more people.

## Variants

### Default
Uses the standard sized Persona component.


![PeoplePicker example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/PeoplePicker-default.png)


### Compact
Use the extra small Persona component to fit more results.


![PeoplePicker example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/PeoplePicker-compact.png)


### Face pile
Presents the selected people in a list below the search field, rather than inline.


![PeoplePicker example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/PeoplePicker-facepile.png)



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
    <div class="ms-PeoplePicker">
        <div class="ms-PeoplePicker-searchBox">
            <div class="ms-TextField  ms-TextField--textFieldUnderlined">
                <input class="ms-TextField-field" type="text" value="" placeholder="Select or enter an option">
            </div>
        </div>
        <div class="ms-PeoplePicker-results">
            <div class="ms-PeoplePicker-resultGroup">
                <div class="ms-PeoplePicker-resultGroupTitle">
                    Contacts
                </div>
                <div class="ms-PeoplePicker-result" tabindex="1">
                    <div class="ms-Persona ms-Persona--sm">
                        <div class="ms-Persona-imageArea">
                            <div class="ms-Persona-initials ms-Persona-initials--blue">RM</div>
                        </div>
                        <div class="ms-Persona-presence">
                        </div>
                        <div class="ms-Persona-details">
                            <div class="ms-Persona-primaryText">Russel Miller</div>
                            <div class="ms-Persona-secondaryText">Sales</div>
                        </div>
                    </div>
                    <button class="ms-PeoplePicker-resultAction"><i class="ms-Icon ms-Icon--Clear"></i></button>
                </div>
                <div class="ms-PeoplePicker-result" tabindex="1">
                    <div class="ms-Persona ms-Persona--sm">
                        <div class="ms-Persona-imageArea">
                            <div class="ms-Persona-initials ms-Persona-initials--purple">DF</div>
                        </div>
                        <div class="ms-Persona-presence">
                        </div>
                        <div class="ms-Persona-details">
                            <div class="ms-Persona-primaryText">Douglas Fielder</div>
                            <div class="ms-Persona-secondaryText">Public Relations</div>
                        </div>
                    </div>
                    <button class="ms-PeoplePicker-resultAction"><i class="ms-Icon ms-Icon--Clear"></i></button>
                </div>
                <div class="ms-PeoplePicker-result" tabindex="1">
                    <div class="ms-Persona ms-Persona--sm">
                        <div class="ms-Persona-imageArea">
                            <div class="ms-Persona-initials ms-Persona-initials--black">GS</div>
                        </div>
                        <div class="ms-Persona-presence">
                        </div>
                        <div class="ms-Persona-details">
                            <div class="ms-Persona-primaryText">Grant Steel</div>
                            <div class="ms-Persona-secondaryText">Sales</div>
                        </div>
                    </div>
                    <button class="ms-PeoplePicker-resultAction"><i class="ms-Icon ms-Icon--Clear"></i></button>
                </div>
                <div class="ms-PeoplePicker-result " tabindex="1">
                    <div class="ms-Persona ms-Persona--sm">
                        <div class="ms-Persona-imageArea">
                            <div class="ms-Persona-initials ms-Persona-initials--green">HW</div>
                        </div>
                        <div class="ms-Persona-presence">
                        </div>
                        <div class="ms-Persona-details">
                            <div class="ms-Persona-primaryText">Harvey Wallin</div>
                            <div class="ms-Persona-secondaryText">Public Relations</div>
                        </div>
                    </div>
                    <button class="ms-PeoplePicker-resultAction"><i class="ms-Icon ms-Icon--Clear"></i></button>
                </div>
            </div>
            <button class="ms-PeoplePicker-searchMore">
                <div class="ms-PeoplePicker-searchMoreIcon">
                    <i class="ms-Icon ms-Icon--Search"></i>
                </div>
                <div class="ms-PeoplePicker-searchMoreText">
                    Search my groups
                </div>
            </button>
        </div>
    </div>
	```

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all PeoplePicker components on the page:

	```
    <script type="text/javascript">
        var PeoplePickerElements = document.querySelectorAll(".ms-PeoplePicker");
        for (var i = 0; i < PeoplePickerElements.length; i++) {
            new fabric['PeoplePicker'](PeoplePickerElements[i]);
        }
    </script>
	```

4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content with your content.

## Dependencies
This component uses Persona and PersonaCard to display people and Label for the Members List variant. It also uses a Spinner when searching for results.


