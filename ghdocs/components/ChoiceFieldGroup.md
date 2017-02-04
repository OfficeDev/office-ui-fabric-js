# Choice Field Group
Allows selection from one or more options.

## Variants

### Default
Used to indicate a single choice from multiple options.



![ChoiceFieldGroup example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/ChoiceFieldGroup-default.png)



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
 
&lt;div class&#x3D;&quot;ms-ChoiceFieldGroup&quot; id&#x3D;&quot;choicefieldgroup&quot; role&#x3D;&quot;radiogroup&quot;&gt;
  &lt;div class&#x3D;&quot;ms-ChoiceFieldGroup-title&quot;&gt;
    &lt;label class&#x3D;&quot;ms-Label  is-required &quot;&gt;Unselected&lt;/label&gt;
  &lt;/div&gt;
  &lt;ul class&#x3D;&quot;ms-ChoiceFieldGroup-list&quot;&gt;
    

&lt;li class&#x3D;&quot;ms-RadioButton&quot;&gt; 
    &lt;input tabindex&#x3D;&quot;-1&quot; type&#x3D;&quot;radio&quot; class&#x3D;&quot;ms-RadioButton-input&quot;&gt;
    &lt;label role&#x3D;&quot;radio&quot;
        class&#x3D;&quot;ms-RadioButton-field &quot;
        tabindex&#x3D;&quot;0&quot;
        aria-checked&#x3D;&quot;false&quot;
        name&#x3D;&quot;choicefieldgroup&quot;
&gt;
        &lt;span class&#x3D;&quot;ms-Label&quot;&gt;Option 1&lt;/span&gt;
    &lt;/label&gt;
&lt;/li&gt; 
    

&lt;li class&#x3D;&quot;ms-RadioButton&quot;&gt; 
    &lt;input tabindex&#x3D;&quot;-1&quot; type&#x3D;&quot;radio&quot; class&#x3D;&quot;ms-RadioButton-input&quot;&gt;
    &lt;label role&#x3D;&quot;radio&quot;
        class&#x3D;&quot;ms-RadioButton-field &quot;
        tabindex&#x3D;&quot;0&quot;
        aria-checked&#x3D;&quot;false&quot;
        name&#x3D;&quot;choicefieldgroup&quot;
&gt;
        &lt;span class&#x3D;&quot;ms-Label&quot;&gt;Option 2&lt;/span&gt;
    &lt;/label&gt;
&lt;/li&gt; 
    

&lt;li class&#x3D;&quot;ms-RadioButton&quot;&gt; 
    &lt;input tabindex&#x3D;&quot;-1&quot; type&#x3D;&quot;radio&quot; class&#x3D;&quot;ms-RadioButton-input&quot;&gt;
    &lt;label role&#x3D;&quot;radio&quot;
        class&#x3D;&quot;ms-RadioButton-field  is-disabled &quot;
        tabindex&#x3D;&quot;0&quot;
        aria-checked&#x3D;&quot;false&quot;
        name&#x3D;&quot;choicefieldgroup&quot;
        aria-disabled&#x3D;&quot;true&quot;
        &gt;
        &lt;span class&#x3D;&quot;ms-Label&quot;&gt;Option 3&lt;/span&gt;
    &lt;/label&gt;
&lt;/li&gt; 
    

&lt;li class&#x3D;&quot;ms-RadioButton&quot;&gt; 
    &lt;input tabindex&#x3D;&quot;-1&quot; type&#x3D;&quot;radio&quot; class&#x3D;&quot;ms-RadioButton-input&quot;&gt;
    &lt;label role&#x3D;&quot;radio&quot;
        class&#x3D;&quot;ms-RadioButton-field &quot;
        tabindex&#x3D;&quot;0&quot;
        aria-checked&#x3D;&quot;false&quot;
        name&#x3D;&quot;choicefieldgroup&quot;
&gt;
        &lt;span class&#x3D;&quot;ms-Label&quot;&gt;Option 4&lt;/span&gt;
    &lt;/label&gt;
&lt;/li&gt; 
  &lt;/ul&gt;
&lt;/div&gt; 
    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all ChoiceFieldGroup components on the page:

<pre>
    <code>
 &lt;script type&#x3D;&quot;text/javascript&quot;&gt;
    var ChoiceFieldGroupElements &#x3D; document.querySelectorAll(&quot;.ms-ChoiceFieldGroup&quot;);
    for(var i &#x3D; 0; i &lt; ChoiceFieldGroupElements.length; i++) {
        new fabric[&#x27;ChoiceFieldGroup&#x27;](ChoiceFieldGroupElements[i]);
    }
&lt;/script&gt;
    </code>
</pre>

4. Replace the sample HTML content (such as the `.ms-Label` elements) with your content.


## Dependencies
Label, CheckBox