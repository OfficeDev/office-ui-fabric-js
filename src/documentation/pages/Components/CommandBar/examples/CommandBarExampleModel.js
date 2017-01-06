var CommandBarExampleModel = {
  "transientComponent": {
    "component": "SearchBox",
    "props":  {
      "label": "Search",
      "icon": "Search",
      "defaultValue": "",
      "modifier": "commandBar",
      "clearButton": {
        "component": "CommandButton",
        "props": {
          "icon": "Cancel",
          "modifier": "noLabel",
          "tag": "button",
          "customClasses": "ms-SearchBox-clear"
        }
      },
      "filterButton": {
        "component": "CommandButton",
        "props": {
          "icon": "Filter",
          "modifier": "noLabel",
          "tag": "button",
          "customClasses": "ms-SearchBox-filter"
        }
      },
      "exitButton": {
        "component": "CommandButton",
        "props": {
          "icon": "ChromeBack",
          "modifier": "noLabel",
          "tag": "button",
          "customClasses": "ms-SearchBox-exit"
        }
      }
    }
  },
  "commands": [
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
        "label": "New",
        "icon": "CircleRing",
        "tag": "button",
        "dropdownIcon": "ChevronDown",
        "iconColor": "themePrimary",
        "dropdown": {
          "component": "ContextualMenu",
          "props":  {
            "state": "is-opened",
            "modifier": "hasIcons",
            "items": [
              {
                "title": "Folder",
                "state": "",
                "icon": "Folder"
              },
              {
                "modifier": "divider",
                "title": ""
              },
              {
                "title": "Plain Text Document",
                "icon": "Page"
              },
              {
                "title": "A Coffee",
                "icon": "Coffee"
              },
              {
                "title": "Picture",
                "state": "",
                "icon": "Picture"
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
  ],
  "sideCommands": [
    {
      "component": "CommandButton",
      "props":  {
        "icon": "CircleRing",
        "tag": "button",
        "modifier": "noLabel",
        "iconColor": "themePrimary"
      }
    }
  ],
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
              "icon": "Folder"
            },
            {
              "modifier": "divider",
              "title": ""
            },
            {
              "title": "Plain Text Document",
              "icon": "Page"
            },
            {
              "title": "A Coffee",
              "icon": "Coffee"
            },
            {
              "title": "Picture",
              "state": "",
              "icon": "Picture"
            },
            {
              "title": "Money",
              "icon": "Money"
            }
          ]
        }
      }
    }
  }
}

module.exports = CommandBarExampleModel;