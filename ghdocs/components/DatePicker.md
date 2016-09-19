# Date Picker
Allows for the selection of a date into a text field.

## Variants

### Default


![DatePicker example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/DatePicker-default.png)


## States
State | Applied to | Result
 --- | --- | ---
`.is-highlighted` | `.ms-DatePicker-monthOption`, `.ms-DatePicker-yearOption` | Marks a month or year as selected.
`.is-pickingYears` | `.ms-DatePicker` | Displays a set of years to choose from.
`.is-pickingMonths` | `.ms-DatePicker` | Displays a set of months to choose from.

## Using this component
1. Confirm that you have references to Fabric's CSS and JavaScript on your page, as well as jQuery and PickaDate.js library:
    ```
    <head>
        <link rel="stylesheet" href="fabric.min.css">
        <link rel="stylesheet" href="fabric.components.min.css">
        <script src="jquery-2.2.1.min.js"></script>
        <script src="fabric.min.js"></script>
        <script src="PickaDate.js"></script>
    </head>
    ```
2. Copy the HTML from one of the samples above into your page. For example:

<pre>
    <code>
 


&lt;div class&#x3D;&quot;ms-DatePicker&quot;&gt;
  &lt;div class&#x3D;&quot;ms-TextField&quot;&gt;
    &lt;label class&#x3D;&quot;ms-Label&quot;&gt;Start date&lt;/label&gt;
    &lt;i class&#x3D;&quot;ms-DatePicker-event ms-Icon ms-Icon--Event&quot;&gt;&lt;/i&gt;
    &lt;input class&#x3D;&quot;ms-TextField-field&quot; type&#x3D;&quot;text&quot; placeholder&#x3D;&quot;Select a date&amp;hellip;&quot;&gt;
  &lt;/div&gt;
  &lt;div class&#x3D;&quot;ms-DatePicker-monthComponents&quot;&gt;
    &lt;span class&#x3D;&quot;ms-DatePicker-nextMonth js-nextMonth&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--ChevronRight&quot;&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;span class&#x3D;&quot;ms-DatePicker-prevMonth js-prevMonth&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--ChevronLeft&quot;&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;div class&#x3D;&quot;ms-DatePicker-headerToggleView js-showMonthPicker&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;span class&#x3D;&quot;ms-DatePicker-goToday js-goToday&quot;&gt;Go to today&lt;/span&gt;
  &lt;div class&#x3D;&quot;ms-DatePicker-monthPicker&quot;&gt;
    &lt;div class&#x3D;&quot;ms-DatePicker-header&quot;&gt;
      &lt;div class&#x3D;&quot;ms-DatePicker-yearComponents&quot;&gt;
        &lt;span class&#x3D;&quot;ms-DatePicker-nextYear js-nextYear&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--ChevronRight&quot;&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class&#x3D;&quot;ms-DatePicker-prevYear js-prevYear&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--ChevronLeft&quot;&gt;&lt;/i&gt;&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class&#x3D;&quot;ms-DatePicker-currentYear js-showYearPicker&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class&#x3D;&quot;ms-DatePicker-optionGrid&quot;&gt;
      &lt;span class&#x3D;&quot;ms-DatePicker-monthOption js-changeDate&quot; data-month&#x3D;&quot;0&quot;&gt;Jan&lt;/span&gt;
      &lt;span class&#x3D;&quot;ms-DatePicker-monthOption js-changeDate&quot; data-month&#x3D;&quot;1&quot;&gt;Feb&lt;/span&gt;
      &lt;span class&#x3D;&quot;ms-DatePicker-monthOption js-changeDate&quot; data-month&#x3D;&quot;2&quot;&gt;Mar&lt;/span&gt;
      &lt;span class&#x3D;&quot;ms-DatePicker-monthOption js-changeDate&quot; data-month&#x3D;&quot;3&quot;&gt;Apr&lt;/span&gt;
      &lt;span class&#x3D;&quot;ms-DatePicker-monthOption js-changeDate&quot; data-month&#x3D;&quot;4&quot;&gt;May&lt;/span&gt;
      &lt;span class&#x3D;&quot;ms-DatePicker-monthOption js-changeDate&quot; data-month&#x3D;&quot;5&quot;&gt;Jun&lt;/span&gt;
      &lt;span class&#x3D;&quot;ms-DatePicker-monthOption js-changeDate&quot; data-month&#x3D;&quot;6&quot;&gt;Jul&lt;/span&gt;
      &lt;span class&#x3D;&quot;ms-DatePicker-monthOption js-changeDate&quot; data-month&#x3D;&quot;7&quot;&gt;Aug&lt;/span&gt;
      &lt;span class&#x3D;&quot;ms-DatePicker-monthOption js-changeDate&quot; data-month&#x3D;&quot;8&quot;&gt;Sep&lt;/span&gt;
      &lt;span class&#x3D;&quot;ms-DatePicker-monthOption js-changeDate&quot; data-month&#x3D;&quot;9&quot;&gt;Oct&lt;/span&gt;
      &lt;span class&#x3D;&quot;ms-DatePicker-monthOption js-changeDate&quot; data-month&#x3D;&quot;10&quot;&gt;Nov&lt;/span&gt;
      &lt;span class&#x3D;&quot;ms-DatePicker-monthOption js-changeDate&quot; data-month&#x3D;&quot;11&quot;&gt;Dec&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class&#x3D;&quot;ms-DatePicker-yearPicker&quot;&gt;
    &lt;div class&#x3D;&quot;ms-DatePicker-decadeComponents&quot;&gt;
      &lt;span class&#x3D;&quot;ms-DatePicker-nextDecade js-nextDecade&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--ChevronRight&quot;&gt;&lt;/i&gt;&lt;/span&gt;
      &lt;span class&#x3D;&quot;ms-DatePicker-prevDecade js-prevDecade&quot;&gt;&lt;i class&#x3D;&quot;ms-Icon ms-Icon--ChevronLeft&quot;&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

    </code>
</pre>

3. Add the following `<script>` tag to your page, below the references to PickaDate and Fabric's JS, to instantiate all DatePicker components on the page:

<pre>
    <code>
 &lt;script type&#x3D;&quot;text/javascript&quot;&gt;
  var DatePickerElements &#x3D; document.querySelectorAll(&quot;.ms-DatePicker&quot;);
  for(var i &#x3D; 0; i &lt; DatePickerElements.length; i++) {
    new fabric[&#x27;DatePicker&#x27;](DatePickerElements[i]);
  }
&lt;/script&gt;

    </code>
</pre>

4. Verify that the component is working the same as in the sample above.

## Dependencies
This component has no dependencies on other components. It does, however, require [pickadate.js 3.5.3](https://github.com/amsul/pickadate.js/releases/tag/3.5.3). Once you have downloaded the ZIP, you'll find `picker.js` and `picker.date.js` in the `lib` folder.

## Accessibility
More details will be added here.


<script type="text/javascript">
  var DatePickerElements = document.querySelectorAll(".ms-DatePicker");
  for(var i = 0; i < DatePickerElements.length; i++) {
    new fabric['DatePicker'](DatePickerElements[i]);
  }
</script>

