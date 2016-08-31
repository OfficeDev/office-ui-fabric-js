# Persona
Represents a person, complete with a profile image and additional details. Where a profile image is not available, the user's initials can be shown instead.

## Variants

### Circle (default)
Six sizes are available: tiny, extraSmall, small, default, large, and extraLarge


![Persona example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Persona-circle.png)


### Initials
Don't have a profile image for the user? Provide the person's initials as an alternative.


![Persona example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Persona-initials.png)


### Presence indicators
A persona can have one of seven presences: available, away, blocked, busy, do not disturb, and offline.


![Persona example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Persona-presence.png)


### Token


![Persona example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Persona-facepile.png)


## Using this component
1. Confirm that you have references to Fabric's CSS on your page:
    ```
    <head>
        <link rel="stylesheet" href="fabric.min.css">
        <link rel="stylesheet" href="fabric.components.min.css">
    </head>
    ```
2. Copy the HTML from one of the samples above into your page. For example:

<pre>
    <code>
 

&lt;div class&#x3D;&quot;ms-Persona
&quot;&gt;
  &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
      &lt;img class&#x3D;&quot;ms-Persona-image&quot; src&#x3D;&quot;Persona.Person2.png&quot;&gt;
  &lt;/div&gt;
  &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
      &lt;i class&#x3D;&quot;ms-Persona-presenceIcon ms-Icon ms-Icon--SkypeCheck&quot;&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
      &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Alton Lafferty&lt;/div&gt;
      &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Accountant&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all Persona components on the page:

<pre>
    <code>
 &lt;script type&#x3D;&quot;text/javascript&quot;&gt;
  var PersonaElements &#x3D; document.querySelectorAll(&quot;.ms-Persona&quot;);
  for(var i &#x3D; 0; i &lt; PersonaElements.length; i++) {
    new fabric[&#x27;Persona&#x27;](PersonaElements[i]);
  }
&lt;/script&gt;

    </code>
</pre>

4. Replace the sample HTML content (such as the name within `.ms-Persona-primaryText`) with your content.

## Dependencies
This component has no dependencies.


<script type="text/javascript">
  var PersonaElements = document.querySelectorAll(".ms-Persona");
  for(var i = 0; i < PersonaElements.length; i++) {
    new fabric['Persona'](PersonaElements[i]);
  }
</script>

