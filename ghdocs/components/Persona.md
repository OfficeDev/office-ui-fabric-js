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
<div class="ms-Persona">
  <div class="ms-Persona-imageArea">
      <img class="ms-Persona-image" src="Persona.Person2.png">
  </div>
  <div class="ms-Persona-presence">
      <i class="ms-Persona-presenceIcon ms-Icon ms-Icon--SkypeCheck"></i>
  </div>
  <div class="ms-Persona-details">
      <div class="ms-Persona-primaryText">Alton Lafferty</div>
      <div class="ms-Persona-secondaryText">Accountant</div>
  </div>
</div>
    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all Persona components on the page:

<pre>
    <code>
 <script type="text/javascript">
  var PersonaElements = document.querySelectorAll(".ms-Persona");
  for(var i = 0; i < PersonaElements.length; i++) {
    new fabric['Persona'](PersonaElements[i]);
  }
</script>

    </code>
</pre>

4. Replace the sample HTML content (such as the name within `.ms-Persona-primaryText`) with your content.

## Dependencies
This component has no dependencies.
