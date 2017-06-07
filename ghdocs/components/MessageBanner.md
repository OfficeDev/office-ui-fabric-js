# Message Banner
Presents a message to the user, with an optional call to action. The message is typically an error, update, or alert.

## Variants

### Default


![MessageBanner example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/MessageBanner-default.png)


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

	```
    <div class="docs-MessageBannerExample">
        <div class="ms-MessageBanner">
            <div class="ms-MessageBanner-content">
                <div class="ms-MessageBanner-text">
                    <div class="ms-MessageBanner-clipper">
                        You&#x27;ve reached your total storage on OneDrive. Please upgrade your storage plan if you need more storage.
                    </div>
                </div>
                <button class="ms-MessageBanner-expand">
                    <i class="ms-Icon ms-Icon--ChevronDown"></i>
                </button>
                <div class="ms-MessageBanner-action">
                    <button class="ms-Button ms-Button--primary">
                        <span class="ms-Button-label">Get More Storage</span>
                    </button>
                </div>
            </div>
            <button class="ms-MessageBanner-close">
                <i class="ms-Icon ms-Icon--Clear"></i>
            </button>
        </div>
        <button class="ms-Button docs-MessageBannerExample-button is-hidden">Show the banner</button>
    </div>
	```

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate a MessageBanner component on the page:

	```
    <script type="text/javascript">
        var MessageBannerExample = document.querySelector('.docs-MessageBannerExample');
        var MessageBanner = new fabric['MessageBanner'](MessageBannerExample.querySelector('.ms-MessageBanner'));
        var MessageBannerButton = MessageBannerExample.querySelector('.docs-MessageBannerExample-button');
        var MessageBannerCloseButton = MessageBannerExample.querySelector('.ms-MessageBanner-close');

        // When clicking the button, open the MessageBanner
        MessageBannerButton.onclick = function () {
            MessageBanner.show();
            this.classList.add("is-hidden");
        };

        // Hide "Show the Banner Button" when banner is active
        MessageBannerCloseButton.addEventListener("click", function () {
            setTimeout(function () {
                MessageBannerButton.classList.remove("is-hidden");
            }, 500);
        });
    </script>
	```

4. Verify that the component is working the same as in the sample above.
5. Replace the sample HTML content (such as the text in `.ms-MessageBanner-action`) with your content.

## Dependencies
This component has a dependency on Button.

