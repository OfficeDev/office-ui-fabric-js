var CommandBarDropdownExampleModel = {
  "transientComponent": {
    "component": "CommandButton",
    "props":  {
      "icon": "GlobalNavButton",
      "modifier": "actionButton",
      "tag": "button",
      "iconColor": "themePrimary"
    }
  },
  "overflow": {
    "component": "CommandButton",
    "props":  {
      "icon": "More",
      "customClasses": "ms-CommandBar-overflowButton",
      "tag": "button",
      "modifier": "noLabel",
      "dropdown": {
        "component": "ContextualMenu",
        "props":  {
          "state": "is-opened",
          "modifier": "hasIcons",
          "items": [
            {
              "title": "Folder",
              "state": "",
              "icon": "folder"
            },
            {
              "modifier": "divider",
              "title": ""
            },
            {
              "title": "Plain Text Document",
              "icon": "document"
            },
            {
              "title": "A Dog",
              "icon": "dogAlt"
            },
            {
              "title": "Picture",
              "state": "",
              "icon": "sun"
            },
            {
              "title": "Money",
              "icon": "Money"
            }
          ]
        }
      }
    }
  },
  "commands": [
    {
      "component": "CommandButton",
      "props":  {
        "label": "Command",
        "icon": "Search",
        "tag": "button",
        "iconColor": "themePrimary",
        "modifier": "noLabel"
      }
    },
    {
      "component": "CommandButton",
      "props":  {
        "label": "Command",
        "icon": "CircleRing",
        "tag": "button",
        "iconColor": "themePrimary"
      }
    },
    {
      "component": "CommandButton",
      "props":  {
        "label": "Reply",
        "icon": "CircleRing",
        "splitIcon": "ChevronDown",
        "iconColor": "themePrimary",
        "tag": "button",
        "dropdown": {
          "component": "ContextualMenu",
          "props":  {
            "state": "is-opened",
            "items": [
              {
                "title": "Reply",
                "state": ""
              },
              {
                "title": "Reply all",
                "state": ""
              },
              {
                "title": "Forward",
                "state": "is-selected"
              },
              {
                "title": "Flag",
                "state": ""
              },
              {
                "title": "Delete",
                "state": "is-disabled"
              }
            ]
          }
        }  
      }
    },
    {
      "component": "CommandButton",
      "props":  {
        "label": "Command",
        "icon": "CircleRing",
        "tag": "button",
        "iconColor": "themePrimary"
      }
    },
    {
      "component": "CommandButton",
      "props":  {
        "label": "Command",
        "icon": "CircleRing",
        "tag": "button",
        "iconColor": "themePrimary"
      }
    }
  ]
}

module.exports = CommandBarDropdownExampleModel;