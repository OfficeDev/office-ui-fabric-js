# Org Chart
Displays multiple Persona components in groups with headers in order to show the hierarchy of an organization or team.

## Variants

### Default



![OrgChart example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/OrgChart-default.png)


## Using this component
1. Confirm that you have references to Fabric's CSS on your page:

    ```
    <head>
        <link rel="stylesheet" href="fabric.min.css">
        <link rel="stylesheet" href="fabric.components.min.css">
    </head>
    ```

2. Copy the HTML from the samples above into your page. For example:


	```
    <div class="ms-OrgChart ">
        <div class="ms-OrgChart-group">
            <ul class="ms-OrgChart-list">
                <li class="ms-OrgChart-listItem">
                    <button class="ms-OrgChart-listItemBtn" tabindex="1">
                        <div class="ms-Persona">
                            <div class="ms-Persona-imageArea">
                                <div class="ms-Persona-initials ms-Persona-initials--blue">RM</div>
                                <img class="ms-Persona-image" src="../persona/Persona.Person2.png">
                            </div>
                            <div class="ms-Persona-presence">
                            </div>
                            <div class="ms-Persona-details">
                                <div class="ms-Persona-primaryText">Russel Miller</div>
                                <div class="ms-Persona-secondaryText">Sales</div>
                            </div>
                        </div>
                    </button>
                </li>
                <li class="ms-OrgChart-listItem">
                    <button class="ms-OrgChart-listItemBtn" tabindex="1">
                        <div class="ms-Persona">
                            <div class="ms-Persona-imageArea">
                                <div class="ms-Persona-initials ms-Persona-initials--blue">RM</div>
                                <img class="ms-Persona-image" src="../persona/Persona.Person2.png">
                            </div>
                            <div class="ms-Persona-presence">
                            </div>
                            <div class="ms-Persona-details">
                                <div class="ms-Persona-primaryText">Douglas Fielder</div>
                                <div class="ms-Persona-secondaryText">Public Relations</div>
                            </div>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
        <div class="ms-OrgChart-group">
            <div class="ms-OrgChart-groupTitle">Manager</div>
            <ul class="ms-OrgChart-list">
                <li class="ms-OrgChart-listItem">
                    <button class="ms-OrgChart-listItemBtn" tabindex="1">
                        <div class="ms-Persona">
                            <div class="ms-Persona-imageArea">
                                <div class="ms-Persona-initials ms-Persona-initials--blue">RM</div>
                                <img class="ms-Persona-image" src="../persona/Persona.Person2.png">
                            </div>
                            <div class="ms-Persona-presence">
                            </div>
                            <div class="ms-Persona-details">
                                <div class="ms-Persona-primaryText">Grant Steel</div>
                                <div class="ms-Persona-secondaryText">Sales</div>
                            </div>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
        <div class="ms-OrgChart-group">
            <div class="ms-OrgChart-groupTitle">Staff</div>
            <ul class="ms-OrgChart-list">
                <li class="ms-OrgChart-listItem">
                    <button class="ms-OrgChart-listItemBtn" tabindex="1">
                        <div class="ms-Persona">
                            <div class="ms-Persona-imageArea">
                                <div class="ms-Persona-initials ms-Persona-initials--blue">RM</div>
                                <img class="ms-Persona-image" src="../persona/Persona.Person2.png">
                            </div>
                            <div class="ms-Persona-presence">
                            </div>
                            <div class="ms-Persona-details">
                                <div class="ms-Persona-primaryText">Harvey Wallin</div>
                                <div class="ms-Persona-secondaryText">Public Relations</div>
                            </div>
                        </div>
                    </button>
                </li>
                <li class="ms-OrgChart-listItem">
                    <button class="ms-OrgChart-listItemBtn" tabindex="1">
                        <div class="ms-Persona">
                            <div class="ms-Persona-imageArea">
                                <div class="ms-Persona-initials ms-Persona-initials--blue">RM</div>
                                <img class="ms-Persona-image" src="../persona/Persona.Person2.png">
                            </div>
                            <div class="ms-Persona-presence">
                            </div>
                            <div class="ms-Persona-details">
                                <div class="ms-Persona-primaryText">Marcus Lauer</div>
                                <div class="ms-Persona-secondaryText">Technical Support</div>
                            </div>
                        </div>
                    </button>
                </li>
                <li class="ms-OrgChart-listItem">
                    <button class="ms-OrgChart-listItemBtn" tabindex="1">
                        <div class="ms-Persona">
                            <div class="ms-Persona-imageArea">
                                <div class="ms-Persona-initials ms-Persona-initials--blue">RM</div>
                                <img class="ms-Persona-image" src="../persona/Persona.Person2.png">
                            </div>
                            <div class="ms-Persona-presence">
                            </div>
                            <div class="ms-Persona-details">
                                <div class="ms-Persona-primaryText">Marcel Groce</div>
                                <div class="ms-Persona-secondaryText">Delivery</div>
                            </div>
                        </div>
                    </button>
                </li>
                <li class="ms-OrgChart-listItem">
                    <button class="ms-OrgChart-listItemBtn" tabindex="1">
                        <div class="ms-Persona">
                            <div class="ms-Persona-imageArea">
                                <div class="ms-Persona-initials ms-Persona-initials--blue">RM</div>
                                <img class="ms-Persona-image" src="../persona/Persona.Person2.png">
                            </div>
                            <div class="ms-Persona-presence">
                            </div>
                            <div class="ms-Persona-details">
                                <div class="ms-Persona-primaryText">Jessica Fischer</div>
                                <div class="ms-Persona-secondaryText">Marketing</div>
                            </div>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    </div>
	```

3. Replace the Persona components with your own.

## Dependencies
This component has a dependency on the Persona component.


