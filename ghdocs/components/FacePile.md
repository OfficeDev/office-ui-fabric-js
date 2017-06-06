# FacePile
Displays several people with the option to add additional people or view the details of a person. Although not baked into the component, adding new people to a FacePile (the listing of faces horizontally) should occur through a panel using the FacePile PeoplePicker variant.

## Variants

### Default


![FacePile example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/FacePile-default.png)


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

<pre>
    <code>
<div class="ms-FacePile">
  <button class="ms-FacePile-addButton ms-FacePile-addButton--addPerson">
    <i class="ms-FacePile-addPersonIcon ms-Icon ms-Icon--AddFriend"></i>
  </button>       
      
      <div class="ms-Persona ms-Persona--facePile">
        <div class="ms-Persona-imageArea">
            <div class="ms-Persona-initials ms-Persona-initials--blue">AL</div>
            <img class="ms-Persona-image" src="../persona/Persona.Person2.png">
        </div>
        <div class="ms-Persona-presence">
        </div>
        <div class="ms-Persona-details">
            <div class="ms-Persona-primaryText">Alton Lafferty</div>
            <div class="ms-Persona-secondaryText">Accountant</div>
        </div>
          
          <div class="ms-PersonaCard ">
            <div class="ms-PersonaCard-persona">
              <div class="ms-Persona ms-Persona--lg">
                <div class="ms-Persona-imageArea">
                    <div class="ms-Persona-initials ms-Persona-initials--blue">AL</div>
                    <img class="ms-Persona-image" src="../persona/Persona.Person2.png">
                </div>
                <div class="ms-Persona-presence">
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
                              
                
                <div class="ms-Persona
                ">
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
                </div>    </div>
            </div>
          </div>
      </div>
      
      
      <div class="ms-Persona
            ms-Persona--facePile
        ">
        <div class="ms-Persona-imageArea">
            <div class="ms-Persona-initials ms-Persona-initials--purple">ML</div>
        </div>
        <div class="ms-Persona-presence">
        </div>
        <div class="ms-Persona-details">
            <div class="ms-Persona-primaryText">Marcus Lauer</div>
            <div class="ms-Persona-secondaryText">Accountant</div>
        </div>
          
          <div class="ms-PersonaCard ">
            <div class="ms-PersonaCard-persona">
              
              
              <div class="ms-Persona
                    ms-Persona--lg
                ">
                <div class="ms-Persona-imageArea">
                    <div class="ms-Persona-initials ms-Persona-initials--purple">ML</div>
                </div>
                <div class="ms-Persona-presence">
                </div>
                <div class="ms-Persona-details">
                    <div class="ms-Persona-primaryText">Marcus Lauer</div>
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
                              
                
                <div class="ms-Persona
                ">
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
                              
                
                <div class="ms-Persona
                ">
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
                              
                
                <div class="ms-Persona
                ">
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
                              
                
                <div class="ms-Persona
                ">
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
                              
                
                <div class="ms-Persona
                ">
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
                              
                
                <div class="ms-Persona
                ">
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
                              
                
                <div class="ms-Persona
                ">
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
                </div>    </div>
            </div>
          </div>
      </div>
      
      
      <div class="ms-Persona
            ms-Persona--facePile
        ">
        <div class="ms-Persona-imageArea">
            <div class="ms-Persona-initials ms-Persona-initials--green">DF</div>
        </div>
        <div class="ms-Persona-presence">
        </div>
        <div class="ms-Persona-details">
            <div class="ms-Persona-primaryText">Douglas Fielder</div>
            <div class="ms-Persona-secondaryText">Accountant</div>
        </div>
          
          <div class="ms-PersonaCard ">
            <div class="ms-PersonaCard-persona">
              
              
              <div class="ms-Persona
                    ms-Persona--lg
                ">
                <div class="ms-Persona-imageArea">
                    <div class="ms-Persona-initials ms-Persona-initials--green">DF</div>
                </div>
                <div class="ms-Persona-presence">
                </div>
                <div class="ms-Persona-details">
                    <div class="ms-Persona-primaryText">Douglas Fielder</div>
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
                              
                
                <div class="ms-Persona
                ">
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
                              
                
                <div class="ms-Persona
                ">
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
                              
                
                <div class="ms-Persona
                ">
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
                              
                
                <div class="ms-Persona
                ">
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
                              
                
                <div class="ms-Persona
                ">
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
                              
                
                <div class="ms-Persona
                ">
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
                              
                
                <div class="ms-Persona
                ">
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
                </div>    </div>
            </div>
          </div>
      </div>
  
  <button class="ms-FacePile-addButton ms-FacePile-addButton--overflow">
    <span class="ms-FacePile-overflowText">+3</span>
  </button>
</div>
    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all FacePile components on the page:

<pre>
    <code>
 <script type="text/javascript">
    var FacePileElements = document.querySelectorAll(".ms-FacePile");
    for(var i = 0; i < FacePileElements.length; i++) {
        new fabric['FacePile'](FacePileElements[i]);
    }
</script>
    </code>
</pre>

4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content with your content.

## Dependencies
This component has dependencies on Overlay, Link, Panel, PeoplePicker, Persona, PersonaCard, and Spinner.

## Accessibility
More details will be added here.


<script type="text/javascript">
    var FacePileElements = document.querySelectorAll(".ms-FacePile");
    for(var i = 0; i < FacePileElements.length; i++) {
        new fabric['FacePile'](FacePileElements[i]);
    }
</script>