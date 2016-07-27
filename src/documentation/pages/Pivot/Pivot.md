# Pivot
A layout component that allows a user to switch between different sets of content or filters on the content currently visible. This is in contrast to a purely navigational UI element such as NavBar or a commanding element such as CommandBar. An example would be Read vs. Unread items in the Outlook Web App.

## Variants

### Default
<!---
{{> Pivot props=PivotExampleProps.default}}
--->

### Large
<!---
{{> Pivot props=PivotExampleProps.large}}
--->

### Tabs
<!---
{{> Pivot props=PivotExampleProps.tabs}}
--->

### Large tabs
<!---
{{> Pivot props=PivotExampleProps.largeTabs}}
--->

## Using this component
1. Confirm that you have references to Fabric's CSS and JavaScript on your page, as well as jQuery:
    ```
    <head>
        <link rel="stylesheet" href="fabric.min.css">
        <link rel="stylesheet" href="fabric.components.min.css">
        <script src="jquery-2.2.1.min.js"></script>
        <script src="jquery.fabric.min.js"></script>
    </head>
    ```
2. Copy the HTML from one of the samples above into your page. For example:
    ```
    <div class="ms-Pivot">
        <ul class="ms-Pivot-links">
            <li class="ms-Pivot-link is-selected" data-content="files" title="My files" tabindex="1">
            My files
            </li>
            <li class="ms-Pivot-link" data-content="recent" title="Recent" tabindex="1">
            Recent
            </li>
            <li class="ms-Pivot-link" data-content="shared" title="Shared with me" tabindex="1">
            Shared with me
            </li>
            <li class="ms-Pivot-link" tabindex="1">
            <i class="ms-Pivot-ellipsis ms-Icon ms-Icon--ellipsis"></i>
            </li>
        </ul>
        <div class="ms-Pivot-content" data-content="files" style="display: block;">
            This is the my files tab.
        </div>
        <div class="ms-Pivot-content" data-content="recent" style="display: none;">
            This is the recent tab.
        </div>
        <div class="ms-Pivot-content" data-content="shared" style="display: none;">
            This is the shared with me tab.
        </div>
    </div>
    ```
3. Add the following `<script>` tag to your page, below the references to jQuery and Fabric's JS, to instantiate all Pivot components on the page:
    ```
    <script>
        $(document).ready(function() {
            if ($.fn.Pivot) {
                $('.ms-Pivot').Pivot();
            }
        });
    </script>
    ```
4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the name within `.ms-Pivot-link`) with your content.

## Dependencies
This component has no dependency on other components.

<!---
{{> PivotExampleJS}}
--->
