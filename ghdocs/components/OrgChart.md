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

<pre>
    <code>
 

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
&lt;/div&gt;
    </code>
</pre>

3. Replace the Persona components with your own.

## Dependencies
This component has a dependency on the Persona component.


