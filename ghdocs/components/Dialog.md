# Dialog
Displays content that temporarily blocks interactions with the application. It is primarily used for confirmation tasks, light-weight creation or edit tasks, and simple management tasks.

## Variants

### Default
Includes a content area and two buttons.


<div class="docs-DialogExample-default">
    <div class="ms-Dialog ">
      <div class="ms-Dialog-title">All emails together</div>
      <div class="ms-Dialog-content">
          <p class="ms-Dialog-subText">Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.</p>
              
  <div class="ms-CheckBox"> 
      <input tabindex="-1" type="checkbox" class="ms-CheckBox-input">
      <label role="checkbox"
          class="ms-CheckBox-field "
          tabindex="0"
          aria-checked="false"
          name="checkboxa"
  >
          <span class="ms-Label">Option1</span>
      </label>
  </div>
  
              
  <div class="ms-CheckBox"> 
      <input tabindex="-1" type="checkbox" class="ms-CheckBox-input">
      <label role="checkbox"
          class="ms-CheckBox-field "
          tabindex="0"
          aria-checked="false"
          name="checkboxa"
  >
          <span class="ms-Label">Option2</span>
      </label>
  </div>
  
      </div>
        <div class="ms-Dialog-actions">
              <button class="ms-Button ms-Dialog-action
    ms-Button--primary
    ">
    <span class="ms-Button-label">Save</span>
  </button>
              <button class="ms-Button ms-Dialog-action
    
    ">
    <span class="ms-Button-label">Cancel</span>
  </button>
        </div>
  </div>
  <button class="ms-Button docs-DialogExample-button">Open Dialog</button>
  <label class="docs-DialogExample-label"></label>
</div> 
<script type="text/javascript">
(function(){
  var example = document.querySelector(".docs-DialogExample-default");
  var button = example.querySelector(".docs-DialogExample-button");
  var dialog = example.querySelector(".ms-Dialog");
  var label = example.querySelector(".docs-DialogExample-label")
  
  var checkBoxElements = example.querySelectorAll(".ms-CheckBox");
  var actionButtonElements = example.querySelectorAll(".ms-Dialog-action");
  var checkBoxComponents = [];
  var actionButtonComponents = [];
  
  // Wire up the dialog
  var dialogComponent = new fabric['Dialog'](dialog);
  
  // Wire up the checkBoxes
  for(var i = 0; i < checkBoxElements.length; i++) {
      checkBoxComponents[i] = new fabric['CheckBox'](checkBoxElements[i]);
  }
  
  // Wire up the buttons
  for(var i = 0; i < actionButtonElements.length; i++) {
      actionButtonComponents[i] = new fabric['Button'](actionButtonElements[i], actionHandler);
  }

  // When clicking the button, open the dialog
  button.onclick = function() {
      openDialog(dialog);
    };
    
  function actionHandler(event) {
   var labelText = "";
   var counter = 0;
   for(var i = 0; i < checkBoxComponents.length; i++) {
      if(checkBoxComponents[i].getValue()) {
          counter++;
      }
    }
    labelText += counter + " option(s) selected. " + this.innerText.trim() + " clicked" ;
    label.innerText = labelText;
  }
  
  function openDialog(dialog) {
    // Open the dialog
    dialogComponent.open();
  }
}());
</script>



![Dialog example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dialog-default.png)


### Multiline
Includes multiple large buttons, each with a title and description.


<div class="docs-DialogExample-multiline">
    <div class="ms-Dialog  ms-Dialog--multiline ">
      <div class="ms-Dialog-title">All emails together</div>
      <div class="ms-Dialog-content">
              <button class="ms-Button ms-Dialog-action
    ms-Button--compound
    ">
      <span class="ms-Button-icon"><i class="ms-Icon ms-Icon--Add"></i></span>
    <span class="ms-Button-label">Create Account</span>
      <span class="ms-Button-description">Description of this action this button takes</span>
  </button>
              <button class="ms-Button ms-Dialog-action
    ms-Button--compound
    ">
      <span class="ms-Button-icon"><i class="ms-Icon ms-Icon--Add"></i></span>
    <span class="ms-Button-label">Sign in</span>
      <span class="ms-Button-description">Description of this action this button takes</span>
  </button>
              <button class="ms-Button ms-Dialog-action
    ms-Button--compound
    ">
      <span class="ms-Button-icon"><i class="ms-Icon ms-Icon--Add"></i></span>
    <span class="ms-Button-label">Settings</span>
      <span class="ms-Button-description">Description of this action this button takes</span>
  </button>
      </div>
  </div>
  <button class="ms-Button docs-DialogExample-button">Open Dialog</button>
  <label class="docs-DialogExample-label"></label>
</div>
<script type="text/javascript">
(function(){
  var example = document.querySelector(".docs-DialogExample-multiline");
  var button = example.querySelector(".docs-DialogExample-button");
  var dialog = example.querySelector(".ms-Dialog");
  var label = example.querySelector(".docs-DialogExample-label")
  
  var actionButtonElements = example.querySelectorAll(".ms-Dialog-action");
  var actionButtonComponents = [];
  
  // Wire up the dialog
  var dialogComponent = new fabric['Dialog'](dialog);
  
  // Wire up the buttons
  for(var i = 0; i < actionButtonElements.length; i++) {
      actionButtonComponents[i] = new fabric['Button'](actionButtonElements[i], actionHandler);
  }

  // When clicking the button, open the dialog
  button.onclick = function() {
      openDialog(dialog);
    };
    
  function actionHandler(event) {
    label.innerText = this.querySelector(".ms-Button-label").innerText.trim();
  }
  
  function openDialog(dialog) {
    // Open the dialog
    dialogComponent.open();
  }
}());
</script>


![Dialog example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dialog-multiline.png)


### Large Header
Provides a large, styled header followed by a content area and two buttons.


<div class="docs-DialogExample-lgHeader">
    <div class="ms-Dialog  ms-Dialog--lgHeader ">
      <div class="ms-Dialog-title">All emails together</div>
      <div class="ms-Dialog-content">
          <p class="ms-Dialog-subText">Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.</p>
      </div>
        <div class="ms-Dialog-actions">
              <button class="ms-Button ms-Dialog-action
    ms-Button--primary
    ">
    <span class="ms-Button-label">Save</span>
  </button>
              <button class="ms-Button ms-Dialog-action
    
    ">
    <span class="ms-Button-label">Cancel</span>
  </button>
        </div>
  </div>
  <button class="ms-Button docs-DialogExample-button">Open Dialog</button>
  <label class="docs-DialogExample-label"></label>
</div>
<script type="text/javascript">
(function(){
  var example = document.querySelector(".docs-DialogExample-lgHeader");
  var button = example.querySelector(".docs-DialogExample-button");
  var dialog = example.querySelector(".ms-Dialog");
  var label = example.querySelector(".docs-DialogExample-label")
  
  var actionButtonElements = example.querySelectorAll(".ms-Dialog-action");
  var actionButtonComponents = [];
  
  // Wire up the dialog
  var dialogComponent = new fabric['Dialog'](dialog);
  
  // Wire up the buttons
  for(var i = 0; i < actionButtonElements.length; i++) {
      actionButtonComponents[i] = new fabric['Button'](actionButtonElements[i], actionHandler);
  }

  // When clicking the button, open the dialog
  button.onclick = function() {
      openDialog(dialog);
    };
    
  function actionHandler(event) {
    label.innerText = this.innerText.trim() + " clicked" ;
  }
  
  function openDialog(dialog) {
    // Open the dialog
    dialogComponent.open();
  }
}());
</script>

![Dialog example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dialog-largeheader.png)


### Blocking
The overlay for this variant does not dismiss the Dialog.


<div class="docs-DialogExample-blocking">
    <div class="ms-Dialog  ms-Dialog--blocking ">
      <div class="ms-Dialog-title">Unsaved changes</div>
      <div class="ms-Dialog-content">
          <p class="ms-Dialog-subText">Are you sure you want to discard these changes?.</p>
              
  <div class="ms-CheckBox"> 
      <input tabindex="-1" type="checkbox" class="ms-CheckBox-input">
      <label role="checkbox"
          class="ms-CheckBox-field "
          tabindex="0"
          aria-checked="false"
          name="checkboxa"
  >
          <span class="ms-Label">Option1</span>
      </label>
  </div>
  
              
  <div class="ms-CheckBox"> 
      <input tabindex="-1" type="checkbox" class="ms-CheckBox-input">
      <label role="checkbox"
          class="ms-CheckBox-field "
          tabindex="0"
          aria-checked="false"
          name="checkboxa"
  >
          <span class="ms-Label">Option2</span>
      </label>
  </div>
  
      </div>
        <div class="ms-Dialog-actions">
              <button class="ms-Button ms-Dialog-action
    ms-Button--primary
    ">
    <span class="ms-Button-label">Save</span>
  </button>
              <button class="ms-Button ms-Dialog-action
    
    ">
    <span class="ms-Button-label">Delete</span>
  </button>
        </div>
  </div>
  <button class="ms-Button docs-DialogExample-button">Open Dialog</button>
  <label class="docs-DialogExample-label"></label>
</div>
<script type="text/javascript">
(function(){
  var example = document.querySelector(".docs-DialogExample-blocking");
  var button = example.querySelector(".docs-DialogExample-button");
  var dialog = example.querySelector(".ms-Dialog");
  var label = example.querySelector(".docs-DialogExample-label")
  
  var checkBoxElements = example.querySelectorAll(".ms-CheckBox");
  var actionButtonElements = example.querySelectorAll(".ms-Dialog-action");
  var checkBoxComponents = [];
  var actionButtonComponents = [];
  
  // Wire up the dialog
  var dialogComponent = new fabric['Dialog'](dialog);
  
  // Wire up the checkBoxes
  for(var i = 0; i < checkBoxElements.length; i++) {
      checkBoxComponents[i] = new fabric['CheckBox'](checkBoxElements[i]);
  }
  
  // Wire up the buttons
  for(var i = 0; i < actionButtonElements.length; i++) {
      actionButtonComponents[i] = new fabric['Button'](actionButtonElements[i], actionHandler);
  }

  // When clicking the button, open the dialog
  button.onclick = function() {
      openDialog(dialog);
    };
    
  function actionHandler(event) {
   var labelText = "";
   var counter = 0;
   for(var i = 0; i < checkBoxComponents.length; i++) {
      if(checkBoxComponents[i].getValue()) {
          counter++;
      }
    }
    labelText += counter + " option(s) selected. " + this.innerText.trim() + " clicked" ;
    label.innerText = labelText;
  }
  
  function openDialog(dialog) {
    // Open the dialog
    dialogComponent.open();
  }
}());
</script>


![Dialog example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dialog-blocking.png)


### Close
Includes a close button at the top right, as an additional way to dismiss the dialog.


<div class="docs-DialogExample-close">
    <div class="ms-Dialog  ms-Dialog--close ">
          <button class="ms-Dialog-button ms-Dialog-buttonClose">
            <i class="ms-Icon ms-Icon--Cancel"></i>
          </button>
      <div class="ms-Dialog-title">All emails together</div>
      <div class="ms-Dialog-content">
              
  <div class="ms-CheckBox"> 
      <input tabindex="-1" type="checkbox" class="ms-CheckBox-input">
      <label role="checkbox"
          class="ms-CheckBox-field "
          tabindex="0"
          aria-checked="false"
          name="checkboxa"
  >
          <span class="ms-Label">Option1</span>
      </label>
  </div>
  
              
  <div class="ms-CheckBox"> 
      <input tabindex="-1" type="checkbox" class="ms-CheckBox-input">
      <label role="checkbox"
          class="ms-CheckBox-field "
          tabindex="0"
          aria-checked="false"
          name="checkboxa"
  >
          <span class="ms-Label">Option2</span>
      </label>
  </div>
  
      </div>
        <div class="ms-Dialog-actions">
              <button class="ms-Button ms-Dialog-action
    ms-Button--primary
    ">
    <span class="ms-Button-label">Save</span>
  </button>
              <button class="ms-Button ms-Dialog-action
    
    ">
    <span class="ms-Button-label">Cancel</span>
  </button>
        </div>
  </div>
  <button class="ms-Button docs-DialogExample-button">Open Dialog</button>
  <label class="docs-DialogExample-label"></label>
</div>
<script type="text/javascript">
(function(){
  var example = document.querySelector(".docs-DialogExample-close");
  var button = example.querySelector(".docs-DialogExample-button");
  var dialog = example.querySelector(".ms-Dialog");
  var label = example.querySelector(".docs-DialogExample-label")
  
  var checkBoxElements = example.querySelectorAll(".ms-CheckBox");
  var actionButtonElements = example.querySelectorAll(".ms-Dialog-action");
  var checkBoxComponents = [];
  var actionButtonComponents = [];
  
  // Wire up the dialog
  var dialogComponent = new fabric['Dialog'](dialog);
  
  // Wire up the checkBoxes
  for(var i = 0; i < checkBoxElements.length; i++) {
      checkBoxComponents[i] = new fabric['CheckBox'](checkBoxElements[i]);
  }
  
  // Wire up the buttons
  for(var i = 0; i < actionButtonElements.length; i++) {
      actionButtonComponents[i] = new fabric['Button'](actionButtonElements[i], actionHandler);
  }

  // When clicking the button, open the dialog
  button.onclick = function() {
      openDialog(dialog);
    };
    
  function actionHandler(event) {
   var labelText = "";
   var counter = 0;
   for(var i = 0; i < checkBoxComponents.length; i++) {
      if(checkBoxComponents[i].getValue()) {
          counter++;
      }
    }
    labelText += counter + " option(s) selected. " + this.innerText.trim() + " clicked" ;
    label.innerText = labelText;
  }
  
  function openDialog(dialog) {
    // Open the dialog
    dialogComponent.open();
  }
}());
</script>


![Dialog example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Dialog-close.png)


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
2. Copy the HTML from one of the samples above into your page. For example:

<pre>
    <code>
 &lt;!-- Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. --&gt;
&lt;div class&#x3D;&quot;ms-Dialog &quot;&gt;
    &lt;div class&#x3D;&quot;ms-Dialog-title&quot;&gt;All emails together&lt;/div&gt;
    &lt;div class&#x3D;&quot;ms-Dialog-content&quot;&gt;
        &lt;p class&#x3D;&quot;ms-Dialog-subText&quot;&gt;Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.&lt;/p&gt;
          &lt;!-- Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. --&gt;

&lt;div class&#x3D;&quot;ms-CheckBox&quot;&gt; 
    &lt;input tabindex&#x3D;&quot;-1&quot; type&#x3D;&quot;checkbox&quot; class&#x3D;&quot;ms-CheckBox-input&quot;&gt;
    &lt;label role&#x3D;&quot;checkbox&quot;
        class&#x3D;&quot;ms-CheckBox-field &quot;
        tabindex&#x3D;&quot;0&quot;
        aria-checked&#x3D;&quot;false&quot;
        name&#x3D;&quot;checkboxa&quot;
&gt;
        &lt;span class&#x3D;&quot;ms-Label&quot;&gt;Option1&lt;/span&gt;
    &lt;/label&gt;
&lt;/div&gt;

          &lt;!-- Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. --&gt;

&lt;div class&#x3D;&quot;ms-CheckBox&quot;&gt; 
    &lt;input tabindex&#x3D;&quot;-1&quot; type&#x3D;&quot;checkbox&quot; class&#x3D;&quot;ms-CheckBox-input&quot;&gt;
    &lt;label role&#x3D;&quot;checkbox&quot;
        class&#x3D;&quot;ms-CheckBox-field &quot;
        tabindex&#x3D;&quot;0&quot;
        aria-checked&#x3D;&quot;false&quot;
        name&#x3D;&quot;checkboxa&quot;
&gt;
        &lt;span class&#x3D;&quot;ms-Label&quot;&gt;Option2&lt;/span&gt;
    &lt;/label&gt;
&lt;/div&gt;

    &lt;/div&gt;
      &lt;div class&#x3D;&quot;ms-Dialog-actions&quot;&gt;
          &lt;!-- Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. --&gt;
&lt;button class&#x3D;&quot;ms-Button ms-Dialog-action
  ms-Button--primary
  &quot;&gt;
  &lt;span class&#x3D;&quot;ms-Button-label&quot;&gt;Save&lt;/span&gt;
&lt;/button&gt;
          &lt;!-- Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. --&gt;
&lt;button class&#x3D;&quot;ms-Button ms-Dialog-action
  
  &quot;&gt;
  &lt;span class&#x3D;&quot;ms-Button-label&quot;&gt;Cancel&lt;/span&gt;
&lt;/button&gt;
      &lt;/div&gt;
&lt;/div&gt;

    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all Dialog components on the page:

<pre>
    <code>
 &lt;script type&#x3D;&quot;text/javascript&quot;&gt;
    var DialogElements &#x3D; document.querySelectorAll(&quot;.ms-Dialog&quot;);
    var DialogComponents &#x3D; [];
    for (var i &#x3D; 0; i &lt; DialogElements.length; i++) {
        (function(){
            DialogComponents[i] &#x3D; new fabric[&#x27;Dialog&#x27;](DialogElements[i]);
        }());
    }
&lt;/script&gt;
    </code>
</pre>


    or add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate a single Dialog component on the page:

    
    <pre>
        <code>
     &lt;script type&#x3D;&quot;text/javascript&quot;&gt;
    var DialogElement &#x3D; document.querySelector(&quot;.ms-Dialog&quot;);
    var dialogComponent &#x3D; new fabric[&#x27;Dialog&#x27;](DialogElement);
&lt;/script&gt;
        </code>
    </pre>
    
4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the content of `.ms-Dialog-content`) with your content.

## Dependencies
This component has no dependencies on other components.

## Accessibility
More details will be added here.