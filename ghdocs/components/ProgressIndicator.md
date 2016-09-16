# Progress Indicator
Progress Indicators are used to show the completion status of an operation lasting more than 2 seconds. If the state of progress cannot be determined, use a Spinner instead. Progress Indicators can appear in a new panel, a flyout, under the UI initiating the operation, or even replacing the initiating UI, as long as the UI can return if the operation is canceled or is stopped.

Progress Indicators feature a bar showing total units to completion, and total units finished. The description of the operation appears above the bar, and the status in text appears below. The description should tell someone exactly what the operation is doing. Examples of formatting include:

**[Object]** is being **[operation name]**, or<br/>
**[Object]** is being **[operation name]** to **[destination name]** or<br/>
**[Object]** is being **[operation name]** from **[source name]** to **[destination name]** 

Status text is generally in units elapsed and total units. If the operation can be canceled, an “X” glyph is used and should be placed in the upper right, aligned with the baseline of the operation name. When an error occurs, replace the status text with the error description using ms-fontColor-redDark.

Real-world examples include copying files to a storage location, saving edits to a file, and more. Use units that are informative and relevant to give the best idea to users of how long the operation will take to complete. Avoid time units as they are rarely accurate enough to be trustworthy. Also combine steps of a complex operation into one total bar to avoid “rewinding” the bar. Instead change the operation description to reflect the change if necessary.  Bars moving backwards reduce confidence in the service.

## Best Practices
| Do            |Don't         |
| :------------- | :------------- |
| Use a Progress indicator when the total units to completion is known | Use a Progress indicator when the total units to completion is indeterminate |
| Display operation description | Use only a single word description |
| Show text above and/or below the bar | Show text to the right or left of the bar |
| Combine steps of a single operation into one bar  | Cause progress to “rewind” to show new steps |

## Variants

### Default


![ProgressIndicator example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/ProgressIndicator-default.png)


## States
Active
Error

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

## Accessibility
Focus styles are included for all of the actions included within a Progress Indicator.


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

