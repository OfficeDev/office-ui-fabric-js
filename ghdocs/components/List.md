# List
Presents a number of related items, either as a vertical list or in a grid.

## Variants

### Default
A standard vertical list of items.



![List example](https://raw.githubusercontent.com/OfficeDev/office-ui-fabric-js/master/ghdocs/component_images/List-default.png)


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
    <ul class="ms-List">
        <li class="ms-ListItem is-unread is-selectable" tabindex="0">
            <span class="ms-ListItem-primaryText">Alton Lafferty</span>
            <span class="ms-ListItem-secondaryText">Meeting notes</span>
            <span class="ms-ListItem-tertiaryText">Today we discussed the importance of a, b, and c in regards to d.</span>
            <span class="ms-ListItem-metaText">2:42p</span>
            <div class="ms-ListItem-selectionTarget"></div>
            <div class="ms-ListItem-actions">
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Mail"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Delete"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Flag"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Pinned"></i></div>
            </div>
        </li>

        <li class="ms-ListItem is-unread is-selectable" tabindex="0">
            <span class="ms-ListItem-primaryText">Alton Lafferty</span>
            <span class="ms-ListItem-secondaryText">Meeting notes</span>
            <span class="ms-ListItem-tertiaryText">Today we discussed the importance of a, b, and c in regards to d.</span>
            <span class="ms-ListItem-metaText">2:42p</span>
            <div class="ms-ListItem-selectionTarget"></div>
            <div class="ms-ListItem-actions">
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Mail"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Delete"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Flag"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Pinned"></i></div>
            </div>
        </li>

        <li class="ms-ListItem is-unread is-selectable" tabindex="0">
            <span class="ms-ListItem-primaryText">Alton Lafferty</span>
            <span class="ms-ListItem-secondaryText">Meeting notes</span>
            <span class="ms-ListItem-tertiaryText">Today we discussed the importance of a, b, and c in regards to d.</span>
            <span class="ms-ListItem-metaText">2:42p</span>
            <div class="ms-ListItem-selectionTarget"></div>
            <div class="ms-ListItem-actions">
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Mail"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Delete"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Flag"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Pinned"></i></div>
            </div>
        </li>

        <li class="ms-ListItem is-unread is-selectable" tabindex="0">
            <span class="ms-ListItem-primaryText">Alton Lafferty</span>
            <span class="ms-ListItem-secondaryText">Meeting notes</span>
            <span class="ms-ListItem-tertiaryText">Today we discussed the importance of a, b, and c in regards to d.</span>
            <span class="ms-ListItem-metaText">2:42p</span>
            <div class="ms-ListItem-selectionTarget"></div>
            <div class="ms-ListItem-actions">
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Mail"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Delete"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Flag"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Pinned"></i></div>
            </div>
        </li>

        <li class="ms-ListItem is-unread is-selectable" tabindex="0">
            <span class="ms-ListItem-primaryText">Alton Lafferty</span>
            <span class="ms-ListItem-secondaryText">Meeting notes</span>
            <span class="ms-ListItem-tertiaryText">Today we discussed the importance of a, b, and c in regards to d.</span>
            <span class="ms-ListItem-metaText">2:42p</span>
            <div class="ms-ListItem-selectionTarget"></div>
            <div class="ms-ListItem-actions">
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Mail"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Delete"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Flag"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Pinned"></i></div>
            </div>
        </li>

        <li class="ms-ListItem is-selectable" tabindex="0">
            <span class="ms-ListItem-primaryText">Alton Lafferty</span>
            <span class="ms-ListItem-secondaryText">Meeting notes</span>
            <span class="ms-ListItem-tertiaryText">Today we discussed the importance of a, b, and c in regards to d.</span>
            <span class="ms-ListItem-metaText">2:42p</span>
            <div class="ms-ListItem-selectionTarget"></div>
            <div class="ms-ListItem-actions">
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Mail"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Delete"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Flag"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Pinned"></i></div>
            </div>
        </li>

        <li class="ms-ListItem is-selectable" tabindex="0">
            <span class="ms-ListItem-primaryText">Alton Lafferty</span>
            <span class="ms-ListItem-secondaryText">Meeting notes</span>
            <span class="ms-ListItem-tertiaryText">Today we discussed the importance of a, b, and c in regards to d.</span>
            <span class="ms-ListItem-metaText">2:42p</span>
            <div class="ms-ListItem-selectionTarget"></div>
            <div class="ms-ListItem-actions">
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Mail"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Delete"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Flag"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Pinned"></i></div>
            </div>
        </li>

        <li class="ms-ListItem is-selectable" tabindex="0">
            <span class="ms-ListItem-primaryText">Alton Lafferty</span>
            <span class="ms-ListItem-secondaryText">Meeting notes</span>
            <span class="ms-ListItem-tertiaryText">Today we discussed the importance of a, b, and c in regards to d.</span>
            <span class="ms-ListItem-metaText">2:42p</span>
            <div class="ms-ListItem-selectionTarget"></div>
            <div class="ms-ListItem-actions">
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Mail"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Delete"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Flag"></i></div>
                <div class="ms-ListItem-action"><i class="ms-Icon ms-Icon--Pinned"></i></div>
            </div>
        </li>
    </ul>
	```

3. Add the following `<script>` tag to your page, below the references to Fabric's JS, to instantiate all ListItem components on the page:

	```
   <script type="text/javascript">
        var ListElements = document.querySelectorAll(".ms-List");
        for (var i = 0; i < ListElements.length; i++) {
            new fabric['List'](ListElements[i]);
        }
    </script>
	```

4. Replace the content with whatever you'd like to display as a list. The samples use `.ms-ListItem` components, but you can place any content within `.ms-List`.

## Dependencies
This component has no dependencies on other components, although it does often contain ListItem components.

## Accessibility
You can use a `ul` element if your content is unordered, or `ol` if the order of the content is important.
