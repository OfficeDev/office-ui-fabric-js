# Message Bar

## Variants

### Default
Lowest level of caution. Use when you want to present timely, concise information that accelerates a workflow, or to provide key information or actions that avoid a dead end in the experience.



![MessageBar example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/MessageBar-blocked.png)


### Success
Use sparingly when there's an exceptional need to tell the use that something went right. The preferred way to show success is to show, not tell (e.g. by navigating to show the result of the user action and letting users continue working on it or elsewhere).



<div class="ms-MessageBar ms-MessageBar--success">
  <div class="ms-MessageBar-content">
    <div class="ms-MessageBar-icon">
      <i class="ms-Icon ms-Icon--Completed"></i>
    </div>
    <div class="ms-MessageBar-text">
      Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.<br>
      <a href="" class="ms-Link">Hyperlink string</a>
    </div>
  </div>
</div>


![MessageBar example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/MessageBar-success.png)


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
 &lt;!-- Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. --&gt;

&lt;div class&#x3D;&quot;ms-MessageBar &quot;&gt;
  &lt;div class&#x3D;&quot;ms-MessageBar-content&quot;&gt;
    &lt;div class&#x3D;&quot;ms-MessageBar-icon&quot;&gt;
      &lt;i class&#x3D;&quot;ms-Icon ms-Icon--Info&quot;&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;div class&#x3D;&quot;ms-MessageBar-text&quot;&gt;
      Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.&lt;br&gt;
      &lt;a href&#x3D;&quot;&quot; class&#x3D;&quot;ms-Link&quot;&gt;Hyperlink string&lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

    </code>
</pre>

3. Verify that the component is working the same as in the sample above.
4. Replace the sample HTML content (such as the content of `.ms-MessageBar-text`) with your content.

## Dependencies
Link
