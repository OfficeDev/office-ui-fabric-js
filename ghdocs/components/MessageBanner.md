# Message Banner
Presents a message to the user, with an optional call to action. The message is typically an error, update, or alert.

## Variants

### Default


![MessageBanner example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/MessageBanner-default.png)


## States
This component has only the default state.

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
 &lt;div class&#x3D;&quot;docs-MessageBannerExample&quot;&gt;
  
  
  &lt;div class&#x3D;&quot;ms-MessageBanner&quot;&gt;
    &lt;div class&#x3D;&quot;ms-MessageBanner-content&quot;&gt;
      &lt;div class&#x3D;&quot;ms-MessageBanner-text&quot;&gt;
        &lt;div class&#x3D;&quot;ms-MessageBanner-clipper&quot;&gt;
          You&amp;#x27;ve reached your total storage on OneDrive. Please upgrade your storage plan if you need more storage.
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;button class&#x3D;&quot;ms-MessageBanner-expand&quot;&gt;
        &lt;i class&#x3D;&quot;ms-Icon ms-Icon--ChevronDown&quot;&gt;&lt;/i&gt;
      &lt;/button&gt;
      &lt;div class&#x3D;&quot;ms-MessageBanner-action&quot;&gt;
        
  &lt;button class&#x3D;&quot;ms-Button 
    ms-Button--primary
    &quot;&gt;
    &lt;span class&#x3D;&quot;ms-Button-label&quot;&gt;Get More Storage&lt;/span&gt;
  &lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;button class&#x3D;&quot;ms-MessageBanner-close&quot;&gt;
      &lt;i class&#x3D;&quot;ms-Icon ms-Icon--Clear&quot;&gt;&lt;/i&gt;
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;button class&#x3D;&quot;ms-Button docs-MessageBannerExample-button is-hidden&quot;&gt;Show the banner&lt;/button&gt;
&lt;/div&gt;
    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate a MessageBanner component on the page:

<pre>
    <code>
 &lt;script type&#x3D;&quot;text/javascript&quot;&gt;
  var MessageBannerExample &#x3D; document.querySelector(&#x27;.docs-MessageBannerExample&#x27;);
  var MessageBanner &#x3D; new fabric[&#x27;MessageBanner&#x27;](MessageBannerExample.querySelector(&#x27;.ms-MessageBanner&#x27;));
  var MessageBannerButton &#x3D; MessageBannerExample.querySelector(&#x27;.docs-MessageBannerExample-button&#x27;);
  var MessageBannerCloseButton &#x3D; MessageBannerExample.querySelector(&#x27;.ms-MessageBanner-close&#x27;);

  // When clicking the button, open the MessageBanner
  MessageBannerButton.onclick &#x3D; function() {
    MessageBanner.showBanner();
    this.classList.add(&quot;is-hidden&quot;);
  };

  // Hide &quot;Show the Banner Button&quot; when banner is active
  MessageBannerCloseButton.addEventListener(&quot;click&quot;, function(){
  	setTimeout(function() {
  		MessageBannerButton.classList.remove(&quot;is-hidden&quot;);
  	}, 500);
  });
&lt;/script&gt;
    </code>
</pre>

4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the text in `.ms-MessageBanner-action`) with your content.

## Dependencies
This component has a dependency on Button.


<script type="text/javascript">
  var MessageBannerExample = document.querySelector('.docs-MessageBannerExample');
  var MessageBanner = new fabric['MessageBanner'](MessageBannerExample.querySelector('.ms-MessageBanner'));
  var MessageBannerButton = MessageBannerExample.querySelector('.docs-MessageBannerExample-button');
  var MessageBannerCloseButton = MessageBannerExample.querySelector('.ms-MessageBanner-close');

  // When clicking the button, open the MessageBanner
  MessageBannerButton.onclick = function() {
    MessageBanner.showBanner();
    this.classList.add("is-hidden");
  };

  // Hide "Show the Banner Button" when banner is active
  MessageBannerCloseButton.addEventListener("click", function(){
  	setTimeout(function() {
  		MessageBannerButton.classList.remove("is-hidden");
  	}, 500);
  });
</script>