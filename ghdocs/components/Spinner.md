# Spinner
Displays the progress of an operation when the percentage complete can not be determined. Do you know how much of the operation is complete? Use a ProgressIndicator instead.

## Variants

### Default


![Spinner example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Spinner-default.png)


### Large


![Spinner example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Spinner-large.png)


### Default with label


![Spinner example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Spinner-defaultwithlabel.png)


### Large with label


![Spinner example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Spinner-largewithlabel.png)


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
 

&lt;div class&#x3D;&quot;ms-Spinner &quot;&gt;
&lt;/div&gt;

    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all Spinner components on the page:

<pre>
    <code>
 &lt;script&gt;
    if (typeof fabric !&#x3D;&#x3D; &quot;undefined&quot;) {
        if (&#x27;Spinner&#x27; in fabric) {
            var elements &#x3D; document.querySelectorAll(&#x27;.ms-Spinner&#x27;);
            var i &#x3D; elements.length;
            var component;
            while(i--) {
                component &#x3D; new fabric[&#x27;Spinner&#x27;](elements[i]);
            }
        }
    }
&lt;/script&gt;
    </code>
</pre>

4. Verify that the component is working the same as in the sample above.

## Dependencies
This component has no dependency on other components.


<script>
    if (typeof fabric !== "undefined") {
        if ('Spinner' in fabric) {
            var elements = document.querySelectorAll('.ms-Spinner');
            var i = elements.length;
            var component;
            while(i--) {
                component = new fabric['Spinner'](elements[i]);
            }
        }
    }
</script>