# Date Picker
Allows for the selection of a date into a text field.

## Variants

### Default
<!----
{{> DatePicker}}
---->
<!---i
![DatePicker example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/DatePicker-default.png)
i--->

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
<!---
<pre>
    <code>
{{renderPartialPre "DatePicker" "DatePickerExample" "" false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page, below the references to PickaDate and Fabric's JS, to instantiate all DatePicker components on the page:
<!---
<pre>
    <code>
{{renderPartialPre "DatePicker" "DatePickerExampleJS" "" false}}
    </code>
</pre>
--->
4. Verify that the component is working the same as in the sample above.

## Dependencies
This component has no dependencies on other components. It does, however, require [pickadate.js 3.5.3](https://github.com/amsul/pickadate.js/releases/tag/3.5.3). Once you have downloaded the ZIP, you'll find `picker.js` and `picker.date.js` in the `lib` folder.

## Accessibility
More details will be added here.

<!---
{{> DatePickerExampleJS}}
--->
