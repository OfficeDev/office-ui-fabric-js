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

<pre>
    <code>
 

&lt;div class&#x3D;&quot;ms-PeoplePicker
&quot;&gt;
  &lt;div class&#x3D;&quot;ms-PeoplePicker-searchBox&quot;&gt;
    
    
    &lt;div class&#x3D;&quot;ms-TextField  ms-TextField--textFieldUnderlined &quot;&gt;
      
      &lt;input class&#x3D;&quot;ms-TextField-field&quot; type&#x3D;&quot;text&quot; value&#x3D;&quot;&quot; placeholder&#x3D;&quot;Select or enter an option&quot; &gt;
      
      
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class&#x3D;&quot;ms-PeoplePicker-results
  &quot;&gt;
      &lt;div class&#x3D;&quot;ms-PeoplePicker-resultGroup&quot;&gt;
        &lt;div class&#x3D;&quot;ms-PeoplePicker-resultGroupTitle&quot;&gt;
          Contacts
        &lt;/div&gt;
          &lt;div class&#x3D;&quot;ms-PeoplePicker-result &quot; tabindex&#x3D;&quot;1&quot;&gt;
            
            
            &lt;div class&#x3D;&quot;ms-Persona
                  ms-Persona--sm
              &quot;&gt;
              &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--blue&quot;&gt;RM&lt;/div&gt;
              &lt;/div&gt;
              &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
              &lt;/div&gt;
              &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Russel Miller&lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Sales&lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
              &lt;button class&#x3D;&quot;ms-PeoplePicker-resultAction&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Clear&quot;&gt;&lt;/i&gt;&lt;/button&gt;
          &lt;/div&gt;
          &lt;div class&#x3D;&quot;ms-PeoplePicker-result &quot; tabindex&#x3D;&quot;1&quot;&gt;
            
            
            &lt;div class&#x3D;&quot;ms-Persona
                  ms-Persona--sm
              &quot;&gt;
              &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--purple&quot;&gt;DF&lt;/div&gt;
              &lt;/div&gt;
              &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
              &lt;/div&gt;
              &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Douglas Fielder&lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Public Relations&lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
              &lt;button class&#x3D;&quot;ms-PeoplePicker-resultAction&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Clear&quot;&gt;&lt;/i&gt;&lt;/button&gt;
          &lt;/div&gt;
          &lt;div class&#x3D;&quot;ms-PeoplePicker-result &quot; tabindex&#x3D;&quot;1&quot;&gt;
            
            
            &lt;div class&#x3D;&quot;ms-Persona
                  ms-Persona--sm
              &quot;&gt;
              &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--black&quot;&gt;GS&lt;/div&gt;
              &lt;/div&gt;
              &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
              &lt;/div&gt;
              &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Grant Steel&lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Sales&lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
              &lt;button class&#x3D;&quot;ms-PeoplePicker-resultAction&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Clear&quot;&gt;&lt;/i&gt;&lt;/button&gt;
          &lt;/div&gt;
          &lt;div class&#x3D;&quot;ms-PeoplePicker-result &quot; tabindex&#x3D;&quot;1&quot;&gt;
            
            
            &lt;div class&#x3D;&quot;ms-Persona
                  ms-Persona--sm
              &quot;&gt;
              &lt;div class&#x3D;&quot;ms-Persona-imageArea&quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-initials ms-Persona-initials--green&quot;&gt;HW&lt;/div&gt;
              &lt;/div&gt;
              &lt;div class&#x3D;&quot;ms-Persona-presence&quot;&gt;
              &lt;/div&gt;
              &lt;div class&#x3D;&quot;ms-Persona-details&quot;&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-primaryText&quot;&gt;Harvey Wallin&lt;/div&gt;
                  &lt;div class&#x3D;&quot;ms-Persona-secondaryText&quot;&gt;Public Relations&lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
              &lt;button class&#x3D;&quot;ms-PeoplePicker-resultAction&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--Clear&quot;&gt;&lt;/i&gt;&lt;/button&gt;
          &lt;/div&gt;
      &lt;/div&gt;
      &lt;button class&#x3D;&quot;ms-PeoplePicker-searchMore&quot;&gt;
        &lt;div class&#x3D;&quot;ms-PeoplePicker-searchMoreIcon&quot;&gt;
          &lt;i class&#x3D;&quot;ms-Icon ms-Icon--Search&quot;&gt;&lt;/i&gt;
        &lt;/div&gt;
        &lt;div class&#x3D;&quot;ms-PeoplePicker-searchMoreText&quot;&gt;
          Search my groups
        &lt;/div&gt;
      &lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;
    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all PeoplePicker components on the page:

<pre>
    <code>
 &lt;script type&#x3D;&quot;text/javascript&quot;&gt;
  var PeoplePickerElements &#x3D; document.querySelectorAll(&quot;.ms-PeoplePicker&quot;);
  for(var i &#x3D; 0; i &lt; PeoplePickerElements.length; i++) {
    new fabric[&#x27;PeoplePicker&#x27;](PeoplePickerElements[i]);
  }
&lt;/script&gt;

    </code>
</pre>

4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content with your content.

## Dependencies
This component uses Persona and PersonaCard to display people and Label for the Members List variant. It also uses a Spinner when searching for results.


<script type="text/javascript">
  var PeoplePickerElements = document.querySelectorAll(".ms-PeoplePicker");
  for(var i = 0; i < PeoplePickerElements.length; i++) {
    new fabric['PeoplePicker'](PeoplePickerElements[i]);
  }
</script>

