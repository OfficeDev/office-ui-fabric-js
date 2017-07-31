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

	```
    <div class="ms-DatePicker">
        <div class="ms-TextField">
            <label class="ms-Label">Start date</label>
            <i class="ms-DatePicker-event ms-Icon ms-Icon--Event"></i>
            <input class="ms-TextField-field" type="text" placeholder="Select a date&hellip;">
        </div>
        <div class="ms-DatePicker-monthComponents">
            <span class="ms-DatePicker-nextMonth js-nextMonth"><i class="ms-Icon ms-Icon--ChevronRight"></i></span>
            <span class="ms-DatePicker-prevMonth js-prevMonth"><i class="ms-Icon ms-Icon--ChevronLeft"></i></span>
            <div class="ms-DatePicker-headerToggleView js-showMonthPicker"></div>
        </div>
        <span class="ms-DatePicker-goToday js-goToday">Go to today</span>
        <div class="ms-DatePicker-monthPicker">
            <div class="ms-DatePicker-header">
                <div class="ms-DatePicker-yearComponents">
                    <span class="ms-DatePicker-nextYear js-nextYear"><i class="ms-Icon ms-Icon--ChevronRight"></i></span>
                    <span class="ms-DatePicker-prevYear js-prevYear"><i class="ms-Icon ms-Icon--ChevronLeft"></i></span>
                </div>
                <div class="ms-DatePicker-currentYear js-showYearPicker"></div>
            </div>
            <div class="ms-DatePicker-optionGrid">
                <span class="ms-DatePicker-monthOption js-changeDate" data-month="0">Jan</span>
                <span class="ms-DatePicker-monthOption js-changeDate" data-month="1">Feb</span>
                <span class="ms-DatePicker-monthOption js-changeDate" data-month="2">Mar</span>
                <span class="ms-DatePicker-monthOption js-changeDate" data-month="3">Apr</span>
                <span class="ms-DatePicker-monthOption js-changeDate" data-month="4">May</span>
                <span class="ms-DatePicker-monthOption js-changeDate" data-month="5">Jun</span>
                <span class="ms-DatePicker-monthOption js-changeDate" data-month="6">Jul</span>
                <span class="ms-DatePicker-monthOption js-changeDate" data-month="7">Aug</span>
                <span class="ms-DatePicker-monthOption js-changeDate" data-month="8">Sep</span>
                <span class="ms-DatePicker-monthOption js-changeDate" data-month="9">Oct</span>
                <span class="ms-DatePicker-monthOption js-changeDate" data-month="10">Nov</span>
                <span class="ms-DatePicker-monthOption js-changeDate" data-month="11">Dec</span>
            </div>
        </div>
        <div class="ms-DatePicker-yearPicker">
            <div class="ms-DatePicker-decadeComponents">
                <span class="ms-DatePicker-nextDecade js-nextDecade"><i class="ms-Icon ms-Icon--ChevronRight"></i></span>
                <span class="ms-DatePicker-prevDecade js-prevDecade"><i class="ms-Icon ms-Icon--ChevronLeft"></i></span>
            </div>
        </div>
    </div>
	```


3. Add the following `<script>` tag to your page, below the references to PickaDate and Fabric's JS, to instantiate all DatePicker components on the page:

	```
    <script type="text/javascript">
        var DatePickerElements = document.querySelectorAll(".ms-DatePicker");
        for (var i = 0; i < DatePickerElements.length; i++) {
            new fabric['DatePicker'](DatePickerElements[i]);
        }
    </script>
	```

4. Verify that the component is working the same as in the sample above.

## Dependencies
This component has no dependencies on other components. It does, however, require [pickadate.js 3.5.3](https://github.com/amsul/pickadate.js/releases/tag/3.5.3). Once you have downloaded the ZIP, you'll find `picker.js` and `picker.date.js` in the `lib` folder.

## Accessibility
More details will be added here.

