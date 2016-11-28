# Breadcrumb
Breadcrumbs should be used as a navigational aid in your app or site. They indicate the current page’s location within a hierarchy and help the user understand where they are in relation to the rest of that hierarchy. They also afford one-click access to higher levels of that hierarchy. Breadcrumbs are typically placed, in horizontal form, under the masthead or navigation of an experience, above the primary content area.

## Best Practices
Do | Don't
--- | ---
Place Breadcrumbs at the top of a page, above a list of items, or above the main content of a page.  |  Don't use Breadcrumbs as a primary way to navigate an app or site.

## Variants

### Default
<!----
{{> BreadcrumbExample props=BreadcrumbExampleModel }}
---->
<!---i
![Breadcrumb example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/Breadcrumb-default.png)
i--->

## States

State | Applied to | Result
 --- | --- | ---
`.is-overflow` | `.ms-Breadcrumb` | Use this class to show an ellipsis, which opens a Contextual Menu of additional breadcrumbs. Without this class items that do not fit will be unavailable.
`.is-open` | `.ms-Breadcrumb-overflowMenu` | Displays the overflow menu.

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
<!---
<pre>
    <code>
{{renderPartialPre "Breadcrumb" "BreadcrumbExample" BreadcrumbExampleModel false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all Breadcrumb components on the page:
<!---
<pre>
    <code>
{{renderPartialPre "Breadcrumb" "BreadcrumbExampleJS" "" false}}
    </code>
</pre>
--->
4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the `.ms-Breadcrumb-listItem` elements) with your content.

## Dependencies
ContextualMenu

## Accessibility
The component's JavaScript will apply the correct `tabindex` values to ensure keyboard accessibility.

<!---
{{> BreadcrumbExampleJS }}
--->