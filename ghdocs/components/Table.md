# Table
Presents tabular data with multiple rows and columns. The table's width is flexible, but it does not have any advanced responsive behaviors.

## Variants

### Default
The column widths are determined by the content.


![Table example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Table-default.png)


### Fixed
The columns are split evenly, regardless of their content.


![Table example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Table-fixed.png)


### Selectable
Rows can be selected.


![Table example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Table-selectable.png)


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
 

&lt;table class&#x3D;&quot;ms-Table &quot;&gt;
  &lt;thead&gt;
    &lt;tr&gt;
        &lt;th&gt;Location&lt;/th&gt;
        &lt;th&gt;Modified&lt;/th&gt;
        &lt;th&gt;Type&lt;/th&gt;
        &lt;th&gt;File Name&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
      &lt;tr&gt;
          &lt;td&gt;Location&lt;/td&gt;
          &lt;td&gt;Modified&lt;/td&gt;
          &lt;td&gt;Type&lt;/td&gt;
          &lt;td&gt;File Name&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
          &lt;td&gt;Location&lt;/td&gt;
          &lt;td&gt;Modified&lt;/td&gt;
          &lt;td&gt;Type&lt;/td&gt;
          &lt;td&gt;File Name&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
          &lt;td&gt;Location&lt;/td&gt;
          &lt;td&gt;Modified&lt;/td&gt;
          &lt;td&gt;Type&lt;/td&gt;
          &lt;td&gt;File Name&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
          &lt;td&gt;Location&lt;/td&gt;
          &lt;td&gt;Modified&lt;/td&gt;
          &lt;td&gt;Type&lt;/td&gt;
          &lt;td&gt;File Name&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
          &lt;td&gt;Location&lt;/td&gt;
          &lt;td&gt;Modified&lt;/td&gt;
          &lt;td&gt;Type&lt;/td&gt;
          &lt;td&gt;File Name&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
          &lt;td&gt;Location&lt;/td&gt;
          &lt;td&gt;Modified&lt;/td&gt;
          &lt;td&gt;Type&lt;/td&gt;
          &lt;td&gt;File Name&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
          &lt;td&gt;Location&lt;/td&gt;
          &lt;td&gt;Modified&lt;/td&gt;
          &lt;td&gt;Type&lt;/td&gt;
          &lt;td&gt;File Name&lt;/td&gt;
      &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;

    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all Table components on the page:

<pre>
    <code>
 &lt;script type&#x3D;&quot;text/javascript&quot;&gt;
    var TableElements &#x3D; document.querySelectorAll(&quot;.ms-Table&quot;);
    for(var i &#x3D; 0; i &lt; TableElements.length; i++) {
        new fabric[&#x27;Table&#x27;](TableElements[i]);
    }
&lt;/script&gt;

    </code>
</pre>

4. Replace the content with your own data. You can add more rows or columns.

## Dependencies
This component has no dependency on other components.


<script type="text/javascript">
    var TableElements = document.querySelectorAll(".ms-Table");
    for(var i = 0; i < TableElements.length; i++) {
        new fabric['Table'](TableElements[i]);
    }
</script>

