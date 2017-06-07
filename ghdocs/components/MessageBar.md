# Message Bar

## Variants

### Default
Lowest level of caution. Use when you want to present timely, concise information that accelerates a workflow, or to provide key information or actions that avoid a dead end in the experience.



![MessageBar example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/MessageBar-default.png)


### Warning
Use in exceptional situations where the use should be mindful of some sort of temporary condition.  Notably, yellow is the most visible color to the human eye.



![MessageBar example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/MessageBar-warning.png)


### Severe Warning
Use for a situation that is not harmful or destructive yet but could easily turn into one. (e.g. You're about to run out of storage space).



![MessageBar example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/MessageBar-severewarning.png)


### Error
Use when a serious failure or error has occured and information may have been lost or some actions are impossible.



![MessageBar example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/MessageBar-error.png)


### Blocked
Use when the user is explicitly forbidden from a particular action not because of an error, but because of security restrictions or policy enforcements.



![MessageBar example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/MessageBar-blocked.png)


### Success
Use sparingly when there's an exceptional need to tell the use that something went right. The preferred way to show success is to show, not tell (e.g. by navigating to show the result of the user action and letting users continue working on it or elsewhere).



![MessageBar example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/MessageBar-success.png)


## Using this component
1. Confirm that you have references to Fabric's CSS on your page:

    ```
    <head>
        <link rel="stylesheet" href="fabric.min.css">
        <link rel="stylesheet" href="fabric.components.min.css">
    </head>
    ```
2. Copy the HTML from one of the samples above into your page. For example:

	```
    <div class="ms-MessageBar">
        <div class="ms-MessageBar-content">
            <div class="ms-MessageBar-icon">
                <i class="ms-Icon ms-Icon--Info"></i>
            </div>
            <div class="ms-MessageBar-text">
                Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.<br>
                <a href="" class="ms-Link">Hyperlink string</a>
            </div>
        </div>
    </div>
	```

3. Verify that the component is working the same as in the sample above.
4. Replace the sample HTML content (such as the content of `.ms-MessageBar-text`) with your content.

## Dependencies
Link
