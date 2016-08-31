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
 

&lt;div class&#x3D;&quot;ms-FacePile&quot;&gt;
  &lt;button class&#x3D;&quot;ms-FacePile-addButton ms-FacePile-addButton--addPerson&quot;&gt;
    &lt;i class&#x3D;&quot;ms-FacePile-addPersonIcon ms-Icon ms-Icon--AddFriend&quot;&gt;&lt;/i&gt;
  &lt;/button&gt;
  
      
      
      &lt;div class&#x3D;&quot;ms-Persona
            ms-Persona--facePile
        &quot;&gt;
        &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
            &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;AL&lt;/div&gt;
            &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
        &lt;/div&gt;
        &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
        &lt;/div&gt;
        &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
            &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Alton Lafferty&lt;/div&gt;
            &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Accountant&lt;/div&gt;
        &lt;/div&gt;
          
          &lt;div class&#x3D;&quot;ms-PersonaCard &quot;&gt;
            &lt;div class&#x3D;&quot;ms-PersonaCard-persona&quot;&gt;
              
              
              &lt;div class&#x3D;&quot;ms-Persona
                    ms-Persona--lg
                &quot;&gt;
                &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                    &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;AL&lt;/div&gt;
                    &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                &lt;/div&gt;
                &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                &lt;/div&gt;
                &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                    &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Alton Lafferty&lt;/div&gt;
                    &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Accountant&lt;/div&gt;
                    &lt;div class&#x3D;&quot;ms-Persona-tertiaryText&quot;&gt;In a meeting&lt;/div&gt;
                    &lt;div class&#x3D;&quot;ms-Persona-optionalText&quot;&gt;Available at 4:00pm&lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;ul class&#x3D;&quot;ms-PersonaCard-actions&quot;&gt;
              &lt;li data-action-id&#x3D;&quot;chat&quot; class&#x3D;&quot;ms-PersonaCard-action&quot; tabindex&#x3D;&quot;1&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Chat&quot;&gt;&lt;/i&gt;&lt;/li&gt;
              &lt;li data-action-id&#x3D;&quot;phone&quot; class&#x3D;&quot;ms-PersonaCard-action is-active&quot; tabindex&#x3D;&quot;2&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Phone&quot;&gt;&lt;/i&gt;&lt;/li&gt;
              &lt;li data-action-id&#x3D;&quot;video&quot; class&#x3D;&quot;ms-PersonaCard-action&quot; tabindex&#x3D;&quot;3&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Video&quot;&gt;&lt;/i&gt;&lt;/li&gt;
              &lt;li data-action-id&#x3D;&quot;mail&quot; class&#x3D;&quot;ms-PersonaCard-action&quot; tabindex&#x3D;&quot;4&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Mail&quot;&gt;&lt;/i&gt;&lt;/li&gt;
              &lt;li class&#x3D;&quot;ms-PersonaCard-overflow&quot; alt&#x3D;&quot;View profile in Delve&quot; title&#x3D;&quot;View profile in Delve&quot; &gt;View profile&lt;/li&gt;
              &lt;li data-action-id&#x3D;&quot;org&quot; class&#x3D;&quot;ms-PersonaCard-action ms-PersonaCard-orgChart&quot; tabindex&#x3D;&quot;5&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Org&quot;&gt;&lt;/i&gt;&lt;/li&gt;
            &lt;/ul&gt;
            &lt;div class&#x3D;&quot;ms-PersonaCard-actionDetailBox&quot;&gt;
              &lt;div data-detail-id&#x3D;&quot;mail&quot; class&#x3D;&quot;ms-PersonaCard-details&quot;&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailLine&quot;&gt;&lt;span class&#x3D;&quot;ms-PersonaCard-detailLabel&quot;&gt;Personal:&lt;/span&gt; &lt;a class&#x3D;&quot;ms-Link&quot; href&#x3D;&quot;mailto:alton.lafferty@outlook.com&quot;&gt;alton.lafferty@outlook.com&lt;/a&gt;&lt;/div&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailLine&quot;&gt;&lt;span class&#x3D;&quot;ms-PersonaCard-detailLabel&quot;&gt;Work:&lt;/span&gt; &lt;a class&#x3D;&quot;ms-Link&quot; href&#x3D;&quot;mailto:alton.lafferty@outlook.com&quot;&gt;altonlafferty@contoso.com&lt;/a&gt;&lt;/div&gt;
              &lt;/div&gt;
              &lt;div data-detail-id&#x3D;&quot;chat&quot; class&#x3D;&quot;ms-PersonaCard-details&quot;&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailLine&quot;&gt;&lt;span class&#x3D;&quot;ms-PersonaCard-detailLabel&quot;&gt;Lync:&lt;/span&gt; &lt;a class&#x3D;&quot;ms-Link&quot; href&#x3D;&quot;#&quot;&gt;Start Lync call&lt;/a&gt;&lt;/div&gt;
              &lt;/div&gt;
              &lt;div data-detail-id&#x3D;&quot;phone&quot; class&#x3D;&quot;ms-PersonaCard-details&quot;&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailExpander&quot;&gt;&lt;/div&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailLine&quot;&gt;&lt;span class&#x3D;&quot;ms-PersonaCard-detailLabel&quot;&gt;Details&lt;/div&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailLine&quot;&gt;&lt;span class&#x3D;&quot;ms-PersonaCard-detailLabel&quot;&gt;Personal:&lt;/span&gt; 555.206.2443&lt;/div&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailLine&quot;&gt;&lt;span class&#x3D;&quot;ms-PersonaCard-detailLabel&quot;&gt;Work:&lt;/span&gt; 555.929.8240&lt;/div&gt;
              &lt;/div&gt;
              &lt;div data-detail-id&#x3D;&quot;video&quot; class&#x3D;&quot;ms-PersonaCard-details&quot;&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailLine&quot;&gt;&lt;span class&#x3D;&quot;ms-PersonaCard-detailLabel&quot;&gt;Skype:&lt;/span&gt; &lt;a class&#x3D;&quot;ms-Link&quot; href&#x3D;&quot;#&quot;&gt;Start Skype call&lt;/a&gt;&lt;/div&gt;
              &lt;/div&gt;
                
              &lt;div data-detail-id&#x3D;&quot;org&quot; class&#x3D;&quot;ms-PersonaCard-details&quot;&gt;
                
                
                &lt;div class&#x3D;&quot;ms-OrgChart &quot;&gt;
                    &lt;div class&#x3D;&quot;ms-OrgChart-group&quot;&gt;
                      
                      &lt;ul class&#x3D;&quot;ms-OrgChart-list&quot;&gt;
                          &lt;li class&#x3D;&quot;ms-OrgChart-listItem&quot;&gt;
                            &lt;button class&#x3D;&quot;ms-OrgChart-listItemBtn&quot; tabindex&#x3D;&quot;1&quot;&gt;
                              
                
                &lt;div class&#x3D;&quot;ms-Persona
                &quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
                      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Russel Miller&lt;/div&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Sales&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                
                            &lt;/button&gt;
                          &lt;/li&gt;
                          &lt;li class&#x3D;&quot;ms-OrgChart-listItem&quot;&gt;
                            &lt;button class&#x3D;&quot;ms-OrgChart-listItemBtn&quot; tabindex&#x3D;&quot;1&quot;&gt;
                              
                
                &lt;div class&#x3D;&quot;ms-Persona
                &quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
                      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Douglas Fielder&lt;/div&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Public Relations&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                
                            &lt;/button&gt;
                          &lt;/li&gt;
                      &lt;/ul&gt;
                    &lt;/div&gt;
                    &lt;div class&#x3D;&quot;ms-OrgChart-group&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-OrgChart-groupTitle&quot;&gt;Manager&lt;/div&gt;
                      &lt;ul class&#x3D;&quot;ms-OrgChart-list&quot;&gt;
                          &lt;li class&#x3D;&quot;ms-OrgChart-listItem&quot;&gt;
                            &lt;button class&#x3D;&quot;ms-OrgChart-listItemBtn&quot; tabindex&#x3D;&quot;1&quot;&gt;
                              
                
                &lt;div class&#x3D;&quot;ms-Persona
                &quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
                      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Grant Steel&lt;/div&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Sales&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                
                            &lt;/button&gt;
                          &lt;/li&gt;
                      &lt;/ul&gt;
                    &lt;/div&gt;
                    &lt;div class&#x3D;&quot;ms-OrgChart-group&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-OrgChart-groupTitle&quot;&gt;Staff&lt;/div&gt;
                      &lt;ul class&#x3D;&quot;ms-OrgChart-list&quot;&gt;
                          &lt;li class&#x3D;&quot;ms-OrgChart-listItem&quot;&gt;
                            &lt;button class&#x3D;&quot;ms-OrgChart-listItemBtn&quot; tabindex&#x3D;&quot;1&quot;&gt;
                              
                
                &lt;div class&#x3D;&quot;ms-Persona
                &quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
                      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Harvey Wallin&lt;/div&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Public Relations&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                
                            &lt;/button&gt;
                          &lt;/li&gt;
                          &lt;li class&#x3D;&quot;ms-OrgChart-listItem&quot;&gt;
                            &lt;button class&#x3D;&quot;ms-OrgChart-listItemBtn&quot; tabindex&#x3D;&quot;1&quot;&gt;
                              
                
                &lt;div class&#x3D;&quot;ms-Persona
                &quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
                      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Marcus Lauer&lt;/div&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Technical Support&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                
                            &lt;/button&gt;
                          &lt;/li&gt;
                          &lt;li class&#x3D;&quot;ms-OrgChart-listItem&quot;&gt;
                            &lt;button class&#x3D;&quot;ms-OrgChart-listItemBtn&quot; tabindex&#x3D;&quot;1&quot;&gt;
                              
                
                &lt;div class&#x3D;&quot;ms-Persona
                &quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
                      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Marcel Groce&lt;/div&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Delivery&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                
                            &lt;/button&gt;
                          &lt;/li&gt;
                          &lt;li class&#x3D;&quot;ms-OrgChart-listItem&quot;&gt;
                            &lt;button class&#x3D;&quot;ms-OrgChart-listItemBtn&quot; tabindex&#x3D;&quot;1&quot;&gt;
                              
                
                &lt;div class&#x3D;&quot;ms-Persona
                &quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
                      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Jessica Fischer&lt;/div&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Marketing&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                
                            &lt;/button&gt;
                          &lt;/li&gt;
                      &lt;/ul&gt;
                    &lt;/div&gt;
                &lt;/div&gt;    &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
      &lt;/div&gt;
      
      
      &lt;div class&#x3D;&quot;ms-Persona
            ms-Persona--facePile
        &quot;&gt;
        &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
            &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--purple&quot;&gt;ML&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
        &lt;/div&gt;
        &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
            &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Marcus Lauer&lt;/div&gt;
            &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Accountant&lt;/div&gt;
        &lt;/div&gt;
          
          &lt;div class&#x3D;&quot;ms-PersonaCard &quot;&gt;
            &lt;div class&#x3D;&quot;ms-PersonaCard-persona&quot;&gt;
              
              
              &lt;div class&#x3D;&quot;ms-Persona
                    ms-Persona--lg
                &quot;&gt;
                &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                    &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--purple&quot;&gt;ML&lt;/div&gt;
                &lt;/div&gt;
                &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                &lt;/div&gt;
                &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                    &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Marcus Lauer&lt;/div&gt;
                    &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Accountant&lt;/div&gt;
                    &lt;div class&#x3D;&quot;ms-Persona-tertiaryText&quot;&gt;In a meeting&lt;/div&gt;
                    &lt;div class&#x3D;&quot;ms-Persona-optionalText&quot;&gt;Available at 4:00pm&lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;ul class&#x3D;&quot;ms-PersonaCard-actions&quot;&gt;
              &lt;li data-action-id&#x3D;&quot;chat&quot; class&#x3D;&quot;ms-PersonaCard-action&quot; tabindex&#x3D;&quot;1&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Chat&quot;&gt;&lt;/i&gt;&lt;/li&gt;
              &lt;li data-action-id&#x3D;&quot;phone&quot; class&#x3D;&quot;ms-PersonaCard-action is-active&quot; tabindex&#x3D;&quot;2&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Phone&quot;&gt;&lt;/i&gt;&lt;/li&gt;
              &lt;li data-action-id&#x3D;&quot;video&quot; class&#x3D;&quot;ms-PersonaCard-action&quot; tabindex&#x3D;&quot;3&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Video&quot;&gt;&lt;/i&gt;&lt;/li&gt;
              &lt;li data-action-id&#x3D;&quot;mail&quot; class&#x3D;&quot;ms-PersonaCard-action&quot; tabindex&#x3D;&quot;4&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Mail&quot;&gt;&lt;/i&gt;&lt;/li&gt;
              &lt;li class&#x3D;&quot;ms-PersonaCard-overflow&quot; alt&#x3D;&quot;View profile in Delve&quot; title&#x3D;&quot;View profile in Delve&quot; &gt;View profile&lt;/li&gt;
              &lt;li data-action-id&#x3D;&quot;org&quot; class&#x3D;&quot;ms-PersonaCard-action ms-PersonaCard-orgChart&quot; tabindex&#x3D;&quot;5&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Org&quot;&gt;&lt;/i&gt;&lt;/li&gt;
            &lt;/ul&gt;
            &lt;div class&#x3D;&quot;ms-PersonaCard-actionDetailBox&quot;&gt;
              &lt;div data-detail-id&#x3D;&quot;mail&quot; class&#x3D;&quot;ms-PersonaCard-details&quot;&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailLine&quot;&gt;&lt;span class&#x3D;&quot;ms-PersonaCard-detailLabel&quot;&gt;Personal:&lt;/span&gt; &lt;a class&#x3D;&quot;ms-Link&quot; href&#x3D;&quot;mailto:alton.lafferty@outlook.com&quot;&gt;alton.lafferty@outlook.com&lt;/a&gt;&lt;/div&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailLine&quot;&gt;&lt;span class&#x3D;&quot;ms-PersonaCard-detailLabel&quot;&gt;Work:&lt;/span&gt; &lt;a class&#x3D;&quot;ms-Link&quot; href&#x3D;&quot;mailto:alton.lafferty@outlook.com&quot;&gt;altonlafferty@contoso.com&lt;/a&gt;&lt;/div&gt;
              &lt;/div&gt;
              &lt;div data-detail-id&#x3D;&quot;chat&quot; class&#x3D;&quot;ms-PersonaCard-details&quot;&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailLine&quot;&gt;&lt;span class&#x3D;&quot;ms-PersonaCard-detailLabel&quot;&gt;Lync:&lt;/span&gt; &lt;a class&#x3D;&quot;ms-Link&quot; href&#x3D;&quot;#&quot;&gt;Start Lync call&lt;/a&gt;&lt;/div&gt;
              &lt;/div&gt;
              &lt;div data-detail-id&#x3D;&quot;phone&quot; class&#x3D;&quot;ms-PersonaCard-details&quot;&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailExpander&quot;&gt;&lt;/div&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailLine&quot;&gt;&lt;span class&#x3D;&quot;ms-PersonaCard-detailLabel&quot;&gt;Details&lt;/div&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailLine&quot;&gt;&lt;span class&#x3D;&quot;ms-PersonaCard-detailLabel&quot;&gt;Personal:&lt;/span&gt; 555.206.2443&lt;/div&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailLine&quot;&gt;&lt;span class&#x3D;&quot;ms-PersonaCard-detailLabel&quot;&gt;Work:&lt;/span&gt; 555.929.8240&lt;/div&gt;
              &lt;/div&gt;
              &lt;div data-detail-id&#x3D;&quot;video&quot; class&#x3D;&quot;ms-PersonaCard-details&quot;&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailLine&quot;&gt;&lt;span class&#x3D;&quot;ms-PersonaCard-detailLabel&quot;&gt;Skype:&lt;/span&gt; &lt;a class&#x3D;&quot;ms-Link&quot; href&#x3D;&quot;#&quot;&gt;Start Skype call&lt;/a&gt;&lt;/div&gt;
              &lt;/div&gt;
                
              &lt;div data-detail-id&#x3D;&quot;org&quot; class&#x3D;&quot;ms-PersonaCard-details&quot;&gt;
                
                
                &lt;div class&#x3D;&quot;ms-OrgChart &quot;&gt;
                    &lt;div class&#x3D;&quot;ms-OrgChart-group&quot;&gt;
                      
                      &lt;ul class&#x3D;&quot;ms-OrgChart-list&quot;&gt;
                          &lt;li class&#x3D;&quot;ms-OrgChart-listItem&quot;&gt;
                            &lt;button class&#x3D;&quot;ms-OrgChart-listItemBtn&quot; tabindex&#x3D;&quot;1&quot;&gt;
                              
                
                &lt;div class&#x3D;&quot;ms-Persona
                &quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
                      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Russel Miller&lt;/div&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Sales&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                
                            &lt;/button&gt;
                          &lt;/li&gt;
                          &lt;li class&#x3D;&quot;ms-OrgChart-listItem&quot;&gt;
                            &lt;button class&#x3D;&quot;ms-OrgChart-listItemBtn&quot; tabindex&#x3D;&quot;1&quot;&gt;
                              
                
                &lt;div class&#x3D;&quot;ms-Persona
                &quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
                      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Douglas Fielder&lt;/div&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Public Relations&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                
                            &lt;/button&gt;
                          &lt;/li&gt;
                      &lt;/ul&gt;
                    &lt;/div&gt;
                    &lt;div class&#x3D;&quot;ms-OrgChart-group&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-OrgChart-groupTitle&quot;&gt;Manager&lt;/div&gt;
                      &lt;ul class&#x3D;&quot;ms-OrgChart-list&quot;&gt;
                          &lt;li class&#x3D;&quot;ms-OrgChart-listItem&quot;&gt;
                            &lt;button class&#x3D;&quot;ms-OrgChart-listItemBtn&quot; tabindex&#x3D;&quot;1&quot;&gt;
                              
                
                &lt;div class&#x3D;&quot;ms-Persona
                &quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
                      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Grant Steel&lt;/div&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Sales&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                
                            &lt;/button&gt;
                          &lt;/li&gt;
                      &lt;/ul&gt;
                    &lt;/div&gt;
                    &lt;div class&#x3D;&quot;ms-OrgChart-group&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-OrgChart-groupTitle&quot;&gt;Staff&lt;/div&gt;
                      &lt;ul class&#x3D;&quot;ms-OrgChart-list&quot;&gt;
                          &lt;li class&#x3D;&quot;ms-OrgChart-listItem&quot;&gt;
                            &lt;button class&#x3D;&quot;ms-OrgChart-listItemBtn&quot; tabindex&#x3D;&quot;1&quot;&gt;
                              
                
                &lt;div class&#x3D;&quot;ms-Persona
                &quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
                      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Harvey Wallin&lt;/div&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Public Relations&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                
                            &lt;/button&gt;
                          &lt;/li&gt;
                          &lt;li class&#x3D;&quot;ms-OrgChart-listItem&quot;&gt;
                            &lt;button class&#x3D;&quot;ms-OrgChart-listItemBtn&quot; tabindex&#x3D;&quot;1&quot;&gt;
                              
                
                &lt;div class&#x3D;&quot;ms-Persona
                &quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
                      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Marcus Lauer&lt;/div&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Technical Support&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                
                            &lt;/button&gt;
                          &lt;/li&gt;
                          &lt;li class&#x3D;&quot;ms-OrgChart-listItem&quot;&gt;
                            &lt;button class&#x3D;&quot;ms-OrgChart-listItemBtn&quot; tabindex&#x3D;&quot;1&quot;&gt;
                              
                
                &lt;div class&#x3D;&quot;ms-Persona
                &quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
                      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Marcel Groce&lt;/div&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Delivery&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                
                            &lt;/button&gt;
                          &lt;/li&gt;
                          &lt;li class&#x3D;&quot;ms-OrgChart-listItem&quot;&gt;
                            &lt;button class&#x3D;&quot;ms-OrgChart-listItemBtn&quot; tabindex&#x3D;&quot;1&quot;&gt;
                              
                
                &lt;div class&#x3D;&quot;ms-Persona
                &quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
                      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Jessica Fischer&lt;/div&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Marketing&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                
                            &lt;/button&gt;
                          &lt;/li&gt;
                      &lt;/ul&gt;
                    &lt;/div&gt;
                &lt;/div&gt;    &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
      &lt;/div&gt;
      
      
      &lt;div class&#x3D;&quot;ms-Persona
            ms-Persona--facePile
        &quot;&gt;
        &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
            &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--green&quot;&gt;DF&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
        &lt;/div&gt;
        &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
            &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Douglas Fielder&lt;/div&gt;
            &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Accountant&lt;/div&gt;
        &lt;/div&gt;
          
          &lt;div class&#x3D;&quot;ms-PersonaCard &quot;&gt;
            &lt;div class&#x3D;&quot;ms-PersonaCard-persona&quot;&gt;
              
              
              &lt;div class&#x3D;&quot;ms-Persona
                    ms-Persona--lg
                &quot;&gt;
                &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                    &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--green&quot;&gt;DF&lt;/div&gt;
                &lt;/div&gt;
                &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                &lt;/div&gt;
                &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                    &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Douglas Fielder&lt;/div&gt;
                    &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Accountant&lt;/div&gt;
                    &lt;div class&#x3D;&quot;ms-Persona-tertiaryText&quot;&gt;In a meeting&lt;/div&gt;
                    &lt;div class&#x3D;&quot;ms-Persona-optionalText&quot;&gt;Available at 4:00pm&lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;ul class&#x3D;&quot;ms-PersonaCard-actions&quot;&gt;
              &lt;li data-action-id&#x3D;&quot;chat&quot; class&#x3D;&quot;ms-PersonaCard-action&quot; tabindex&#x3D;&quot;1&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Chat&quot;&gt;&lt;/i&gt;&lt;/li&gt;
              &lt;li data-action-id&#x3D;&quot;phone&quot; class&#x3D;&quot;ms-PersonaCard-action is-active&quot; tabindex&#x3D;&quot;2&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Phone&quot;&gt;&lt;/i&gt;&lt;/li&gt;
              &lt;li data-action-id&#x3D;&quot;video&quot; class&#x3D;&quot;ms-PersonaCard-action&quot; tabindex&#x3D;&quot;3&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Video&quot;&gt;&lt;/i&gt;&lt;/li&gt;
              &lt;li data-action-id&#x3D;&quot;mail&quot; class&#x3D;&quot;ms-PersonaCard-action&quot; tabindex&#x3D;&quot;4&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Mail&quot;&gt;&lt;/i&gt;&lt;/li&gt;
              &lt;li class&#x3D;&quot;ms-PersonaCard-overflow&quot; alt&#x3D;&quot;View profile in Delve&quot; title&#x3D;&quot;View profile in Delve&quot; &gt;View profile&lt;/li&gt;
              &lt;li data-action-id&#x3D;&quot;org&quot; class&#x3D;&quot;ms-PersonaCard-action ms-PersonaCard-orgChart&quot; tabindex&#x3D;&quot;5&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Org&quot;&gt;&lt;/i&gt;&lt;/li&gt;
            &lt;/ul&gt;
            &lt;div class&#x3D;&quot;ms-PersonaCard-actionDetailBox&quot;&gt;
              &lt;div data-detail-id&#x3D;&quot;mail&quot; class&#x3D;&quot;ms-PersonaCard-details&quot;&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailLine&quot;&gt;&lt;span class&#x3D;&quot;ms-PersonaCard-detailLabel&quot;&gt;Personal:&lt;/span&gt; &lt;a class&#x3D;&quot;ms-Link&quot; href&#x3D;&quot;mailto:alton.lafferty@outlook.com&quot;&gt;alton.lafferty@outlook.com&lt;/a&gt;&lt;/div&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailLine&quot;&gt;&lt;span class&#x3D;&quot;ms-PersonaCard-detailLabel&quot;&gt;Work:&lt;/span&gt; &lt;a class&#x3D;&quot;ms-Link&quot; href&#x3D;&quot;mailto:alton.lafferty@outlook.com&quot;&gt;altonlafferty@contoso.com&lt;/a&gt;&lt;/div&gt;
              &lt;/div&gt;
              &lt;div data-detail-id&#x3D;&quot;chat&quot; class&#x3D;&quot;ms-PersonaCard-details&quot;&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailLine&quot;&gt;&lt;span class&#x3D;&quot;ms-PersonaCard-detailLabel&quot;&gt;Lync:&lt;/span&gt; &lt;a class&#x3D;&quot;ms-Link&quot; href&#x3D;&quot;#&quot;&gt;Start Lync call&lt;/a&gt;&lt;/div&gt;
              &lt;/div&gt;
              &lt;div data-detail-id&#x3D;&quot;phone&quot; class&#x3D;&quot;ms-PersonaCard-details&quot;&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailExpander&quot;&gt;&lt;/div&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailLine&quot;&gt;&lt;span class&#x3D;&quot;ms-PersonaCard-detailLabel&quot;&gt;Details&lt;/div&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailLine&quot;&gt;&lt;span class&#x3D;&quot;ms-PersonaCard-detailLabel&quot;&gt;Personal:&lt;/span&gt; 555.206.2443&lt;/div&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailLine&quot;&gt;&lt;span class&#x3D;&quot;ms-PersonaCard-detailLabel&quot;&gt;Work:&lt;/span&gt; 555.929.8240&lt;/div&gt;
              &lt;/div&gt;
              &lt;div data-detail-id&#x3D;&quot;video&quot; class&#x3D;&quot;ms-PersonaCard-details&quot;&gt;
                &lt;div class&#x3D;&quot;ms-PersonaCard-detailLine&quot;&gt;&lt;span class&#x3D;&quot;ms-PersonaCard-detailLabel&quot;&gt;Skype:&lt;/span&gt; &lt;a class&#x3D;&quot;ms-Link&quot; href&#x3D;&quot;#&quot;&gt;Start Skype call&lt;/a&gt;&lt;/div&gt;
              &lt;/div&gt;
                
              &lt;div data-detail-id&#x3D;&quot;org&quot; class&#x3D;&quot;ms-PersonaCard-details&quot;&gt;
                
                
                &lt;div class&#x3D;&quot;ms-OrgChart &quot;&gt;
                    &lt;div class&#x3D;&quot;ms-OrgChart-group&quot;&gt;
                      
                      &lt;ul class&#x3D;&quot;ms-OrgChart-list&quot;&gt;
                          &lt;li class&#x3D;&quot;ms-OrgChart-listItem&quot;&gt;
                            &lt;button class&#x3D;&quot;ms-OrgChart-listItemBtn&quot; tabindex&#x3D;&quot;1&quot;&gt;
                              
                
                &lt;div class&#x3D;&quot;ms-Persona
                &quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
                      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Russel Miller&lt;/div&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Sales&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                
                            &lt;/button&gt;
                          &lt;/li&gt;
                          &lt;li class&#x3D;&quot;ms-OrgChart-listItem&quot;&gt;
                            &lt;button class&#x3D;&quot;ms-OrgChart-listItemBtn&quot; tabindex&#x3D;&quot;1&quot;&gt;
                              
                
                &lt;div class&#x3D;&quot;ms-Persona
                &quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
                      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Douglas Fielder&lt;/div&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Public Relations&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                
                            &lt;/button&gt;
                          &lt;/li&gt;
                      &lt;/ul&gt;
                    &lt;/div&gt;
                    &lt;div class&#x3D;&quot;ms-OrgChart-group&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-OrgChart-groupTitle&quot;&gt;Manager&lt;/div&gt;
                      &lt;ul class&#x3D;&quot;ms-OrgChart-list&quot;&gt;
                          &lt;li class&#x3D;&quot;ms-OrgChart-listItem&quot;&gt;
                            &lt;button class&#x3D;&quot;ms-OrgChart-listItemBtn&quot; tabindex&#x3D;&quot;1&quot;&gt;
                              
                
                &lt;div class&#x3D;&quot;ms-Persona
                &quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
                      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Grant Steel&lt;/div&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Sales&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                
                            &lt;/button&gt;
                          &lt;/li&gt;
                      &lt;/ul&gt;
                    &lt;/div&gt;
                    &lt;div class&#x3D;&quot;ms-OrgChart-group&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-OrgChart-groupTitle&quot;&gt;Staff&lt;/div&gt;
                      &lt;ul class&#x3D;&quot;ms-OrgChart-list&quot;&gt;
                          &lt;li class&#x3D;&quot;ms-OrgChart-listItem&quot;&gt;
                            &lt;button class&#x3D;&quot;ms-OrgChart-listItemBtn&quot; tabindex&#x3D;&quot;1&quot;&gt;
                              
                
                &lt;div class&#x3D;&quot;ms-Persona
                &quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
                      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Harvey Wallin&lt;/div&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Public Relations&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                
                            &lt;/button&gt;
                          &lt;/li&gt;
                          &lt;li class&#x3D;&quot;ms-OrgChart-listItem&quot;&gt;
                            &lt;button class&#x3D;&quot;ms-OrgChart-listItemBtn&quot; tabindex&#x3D;&quot;1&quot;&gt;
                              
                
                &lt;div class&#x3D;&quot;ms-Persona
                &quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
                      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Marcus Lauer&lt;/div&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Technical Support&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                
                            &lt;/button&gt;
                          &lt;/li&gt;
                          &lt;li class&#x3D;&quot;ms-OrgChart-listItem&quot;&gt;
                            &lt;button class&#x3D;&quot;ms-OrgChart-listItemBtn&quot; tabindex&#x3D;&quot;1&quot;&gt;
                              
                
                &lt;div class&#x3D;&quot;ms-Persona
                &quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
                      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Marcel Groce&lt;/div&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Delivery&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                
                            &lt;/button&gt;
                          &lt;/li&gt;
                          &lt;li class&#x3D;&quot;ms-OrgChart-listItem&quot;&gt;
                            &lt;button class&#x3D;&quot;ms-OrgChart-listItemBtn&quot; tabindex&#x3D;&quot;1&quot;&gt;
                              
                
                &lt;div class&#x3D;&quot;ms-Persona
                &quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
                      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;../persona/Persona.Person2.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Jessica Fischer&lt;/div&gt;
                      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Marketing&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                
                            &lt;/button&gt;
                          &lt;/li&gt;
                      &lt;/ul&gt;
                    &lt;/div&gt;
                &lt;/div&gt;    &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
      &lt;/div&gt;
  
  &lt;button class&#x3D;&quot;ms-FacePile-addButton ms-FacePile-addButton--overflow&quot;&gt;
    &lt;span class&#x3D;&quot;ms-FacePile-overflowText&quot;&gt;+3&lt;/span&gt;
  &lt;/button&gt;
&lt;/div&gt;
    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all FacePile components on the page:

<pre>
    <code>
 &lt;script type&#x3D;&quot;text/javascript&quot;&gt;
    var FacePileElements &#x3D; document.querySelectorAll(&quot;.ms-FacePile&quot;);
    for(var i &#x3D; 0; i &lt; FacePileElements.length; i++) {
        new fabric[&#x27;FacePile&#x27;](FacePileElements[i]);
    }
&lt;/script&gt;
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