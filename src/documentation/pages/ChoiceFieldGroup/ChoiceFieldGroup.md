# Choice Field Group
Allows selection from one or more options.

## Variants

### Default
Used to indicate a single choice from multiple options.

<!----
{{> ChoiceFieldGroupElem props=ChoiceFieldGroupModels.props }}
---->
<!---i
![ChoiceFieldGroup example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/ChoiceFieldGroup-default.png)
i--->
<!----
{{> ChoiceFieldGroupJS }}
---->

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
{{renderPartialPre "ChoiceFieldGroup" "ChoiceFieldGroupElem" ChoiceFieldGroupModels.props false}}
    </code>
</pre>
--->
3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all ChoiceFieldGroup components on the page:
<!---
<pre>
    <code>
{{renderPartialPre "ChoiceFieldGroup" "ChoiceFieldGroupJS" "" false}}
    </code>
</pre>
--->
4. Replace the sample HTML content (such as the `.ms-Label` elements) with your content.


## Dependencies
Label, CheckBox