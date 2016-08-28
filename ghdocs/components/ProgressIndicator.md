# Progress Indicator
Displays the progress of an operation when the percentage complete can be determined. Unable to determine how much of the operation is complete? Use a Spinner instead.

## Variants

### Default


![ProgressIndicator example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/ProgressIndicator-default.png)


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
 &lt;!-- Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. --&gt;

&lt;div class&#x3D;&quot;ms-ProgressIndicator&quot;&gt;
  &lt;div class&#x3D;&quot;ms-ProgressIndicator-itemName&quot;&gt;&lt;/div&gt;
  &lt;div class&#x3D;&quot;ms-ProgressIndicator-itemProgress&quot;&gt;
    &lt;div class&#x3D;&quot;ms-ProgressIndicator-progressTrack&quot;&gt;&lt;/div&gt;
    &lt;div class&#x3D;&quot;ms-ProgressIndicator-progressBar&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class&#x3D;&quot;ms-ProgressIndicator-itemDescription&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all ProgressIndicators on the page:

<pre>
    <code>
 &lt;script type&#x3D;&quot;text/javascript&quot;&gt;
  var ProgressIndicatorElements &#x3D; document.querySelectorAll(&quot;.ms-ProgressIndicator&quot;);
  for(var i &#x3D; 0; i &lt; ProgressIndicatorElements.length; i++) {
    let ProgressIndicator &#x3D; new fabric[&#x27;ProgressIndicator&#x27;](ProgressIndicatorElements[i]);

    setTimeout(
      function() {
        ProgressIndicator.setProgressPercent(1);
      },
      2000);
  }
&lt;/script&gt;

    </code>
</pre>

4. Verify that the component is working the same as in the sample above.

## Dependencies
This component has no dependency on other components.


<script type="text/javascript">
  var ProgressIndicatorElements = document.querySelectorAll(".ms-ProgressIndicator");
  for(var i = 0; i < ProgressIndicatorElements.length; i++) {
    let ProgressIndicator = new fabric['ProgressIndicator'](ProgressIndicatorElements[i]);

    setTimeout(
      function() {
        ProgressIndicator.setProgressPercent(1);
      },
      2000);
  }
</script>

