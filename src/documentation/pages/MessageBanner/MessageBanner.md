# Message Banner
Presents a message to the user, with an optional call to action. The message is typically an error, update, or alert.

## Variants

### Default
<!----
{{> MessageBannerExample props=MessageBannerExampleModel.props }}
---->
<!---i
![MessageBanner example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/MessageBanner-default.png)
i--->

## States
This component has only the default state.

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
{{renderPartialPre "MessageBanner" "MessageBannerExample" MessageBannerExampleModel.props false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate a MessageBanner component on the page:
<!---
<pre>
    <code>
{{renderPartialPre "MessageBanner" "MessageBannerExampleJS" "" false}}
    </code>
</pre>
--->
4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the text in `.ms-MessageBanner-action`) with your content.

## Dependencies
This component has a dependency on Button.

<!---
{{> MessageBannerExampleJS }}
--->