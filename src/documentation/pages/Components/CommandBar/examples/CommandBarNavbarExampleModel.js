var CommandBarNavbarExampleModel = {
  "modifier": "navBar",
  "transientComponent": {
    "component": "SearchBox",
    "props":  {
      "label": "Search photos",
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
              "icon": "Document"
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
  "commands": [
    {
      "component": "CommandButton",
      "props":  {
        "label": "All Photos",
        "tag": "button",
        "dropdownIcon": "ChevronDown",
        "iconColor": "themePrimary",
        "modifier": "pivot",
        "state": "is-active",
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
                "icon": "Document"
              },
              {
                "title": "Coffee",
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
        "label": "Albums",
        "tag": "a",
        "modifier": "pivot",
        "iconColor": "themePrimary"
      }
    },
    {
      "component": "CommandButton",
      "props":  {
        "label": "Tags",
        "tag": "a",
        "modifier": "pivot",
        "iconColor": "themePrimary"
      }
    },
    {
      "component": "CommandButton",
      "props":  {
        "label": "Places",
        "tag": "a",
        "modifier": "pivot",
        "iconColor": "themePrimary"
      }
    },
    {
      "component": "CommandButton",
      "props":  {
        "label": "People",
        "tag": "a",
        "modifier": "pivot",
        "iconColor": "themePrimary"
      }
    }
  ],
  "sideCommands": [
    {
      "component": "CommandButton",
      "props":  {
        "label": "Show photos from",
        "icon": "Settings",
        "tag": "button",
        "modifier": "dropdown",
        "iconColor": "themePrimary",
        "dropdownIcon": "ChevronDown",
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
                "icon": "Document"
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
        "icon": "Info",
        "tag": "button",
        "modifier": "noLabel",
        "iconColor": "themePrimary"
      }
    }
  ]
}

module.exports = CommandBarNavbarExampleModel;