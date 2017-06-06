# Persona Card
The visualization of details of an individual including Skype contact details, email, location information, and location within the hierarchy of an organization. Within Office 365, PersonaCards often appear when a user hovers, taps, or clicks on a Persona.

## Variants

### Default


![PersonaCard example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/PersonaCard-default.png)


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

<pre>
    <code> 
<div class="ms-PersonaCard">
  <div class="ms-PersonaCard-persona">
    <div class="ms-Persona ms-Persona--lg">
      <div class="ms-Persona-imageArea">
          <div class="ms-Persona-initials ms-Persona-initials--blue">AL</div>
          <img class="ms-Persona-image" src="../persona/Persona.Person2.png">
      </div>
      <div class="ms-Persona-presence">
          <i class="ms-Persona-presenceIcon ms-Icon ms-Icon--SkypeCheck"></i>
      </div>
      <div class="ms-Persona-details">
          <div class="ms-Persona-primaryText">Alton Lafferty</div>
          <div class="ms-Persona-secondaryText">Accountant</div>
          <div class="ms-Persona-tertiaryText">In a meeting</div>
          <div class="ms-Persona-optionalText">Available at 4:00pm</div>
      </div>
    </div>
  </div>
  <ul class="ms-PersonaCard-actions">
    <li data-action-id="chat" class="ms-PersonaCard-action" tabindex="1"><i class="ms-Icon ms-Icon--Chat"></i></li>
    <li data-action-id="phone" class="ms-PersonaCard-action is-active" tabindex="2"><i class="ms-Icon ms-Icon--Phone"></i></li>
    <li data-action-id="video" class="ms-PersonaCard-action" tabindex="3"><i class="ms-Icon ms-Icon--Video"></i></li>
    <li data-action-id="mail" class="ms-PersonaCard-action" tabindex="4"><i class="ms-Icon ms-Icon--Mail"></i></li>
    <li class="ms-PersonaCard-overflow" alt="View profile in Delve" title="View profile in Delve" >View profile</li>
    <li data-action-id="org" class="ms-PersonaCard-action ms-PersonaCard-orgChart" tabindex="5"><i class="ms-Icon ms-Icon--Org"></i></li>
  </ul>
  <div class="ms-PersonaCard-actionDetailBox">
    <div data-detail-id="mail" class="ms-PersonaCard-details">
      <div class="ms-PersonaCard-detailLine"><span class="ms-PersonaCard-detailLabel">Personal:</span> <a class="ms-Link" href="mailto:alton.lafferty@outlook.com">alton.lafferty@outlook.com</a></div>
      <div class="ms-PersonaCard-detailLine"><span class="ms-PersonaCard-detailLabel">Work:</span> <a class="ms-Link" href="mailto:alton.lafferty@outlook.com">altonlafferty@contoso.com</a></div>
    </div>
    <div data-detail-id="chat" class="ms-PersonaCard-details">
      <div class="ms-PersonaCard-detailLine"><span class="ms-PersonaCard-detailLabel">Lync:</span> <a class="ms-Link" href="#">Start Lync call</a></div>
    </div>
    <div data-detail-id="phone" class="ms-PersonaCard-details">
      <div class="ms-PersonaCard-detailExpander"></div>
      <div class="ms-PersonaCard-detailLine"><span class="ms-PersonaCard-detailLabel">Details</div>
      <div class="ms-PersonaCard-detailLine"><span class="ms-PersonaCard-detailLabel">Personal:</span> 555.206.2443</div>
      <div class="ms-PersonaCard-detailLine"><span class="ms-PersonaCard-detailLabel">Work:</span> 555.929.8240</div>
    </div>
    <div data-detail-id="video" class="ms-PersonaCard-details">
      <div class="ms-PersonaCard-detailLine"><span class="ms-PersonaCard-detailLabel">Skype:</span> <a class="ms-Link" href="#">Start Skype call</a></div>
    </div>      
    <div data-detail-id="org" class="ms-PersonaCard-details">
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
                                <i class="ms-Persona-presenceIcon ms-Icon ms-Icon--SkypeCheck"></i>
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
                                <i class="ms-Persona-presenceIcon ms-Icon ms-Icon--SkypeCheck"></i>
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
                            <i class="ms-Persona-presenceIcon ms-Icon ms-Icon--SkypeCheck"></i>
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
                                <i class="ms-Persona-presenceIcon ms-Icon ms-Icon--SkypeCheck"></i>
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
                            <i class="ms-Persona-presenceIcon ms-Icon ms-Icon--SkypeCheck"></i>
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
                    <i class="ms-Persona-presenceIcon ms-Icon ms-Icon--SkypeCheck"></i>
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
                            <i class="ms-Persona-presenceIcon ms-Icon ms-Icon--SkypeCheck"></i>
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
      </div>
  </div>
</div>
    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all PersonaCard components on the page:

<pre>
    <code>
 <script type="text/javascript">
    var PersonaCardElement = document.querySelectorAll(".ms-PersonaCard");
    for(var i = 0; i < PersonaCardElement.length; i++) {
        new fabric.PersonaCard(PersonaCardElement[i]);
    }
</script>
    </code>
</pre>

4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content with your content.

## Dependencies
This component uses a Persona component to present the person, an OrgChart to present the persona's position within the organization, and a Link for navigation.
