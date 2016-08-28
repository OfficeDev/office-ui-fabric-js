var CommandButtonExampleModel = {
  "props": { 
    "label": "Command",
    "icon": "CircleRing",
    "tag": "button",
    "iconColor": "themePrimary"
  },
  "propsDropdown": {
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
            "icon": "Document"
          },
          {
            "title": "Smile",
            "icon": "Emoji2"
          },
          {
            "title": "Globe",
            "state": "",
            "icon": "Globe"
          },
          {
            "title": "Money",
            "icon": "Money"
          }
        ]
      }
    }
  },
  "propsSplit": {
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
  },
  "propsNoLabel": {
    "icon": "CircleRing",
    "modifier": "noLabel",
    "tag": "button",
    "iconColor": "themePrimary"
  },
  "propsNoLabelSplit": {
    "icon": "CircleRing",
    "modifier": "noLabel",
    "tag": "button",
    "splitIcon": "ChevronDown",
    "iconColor": "themePrimary",
    "dropdown": {
      "component": "ContextualMenu",
      "props":  {
        "state": "",
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
  },
  "propsInline": {
    "label": "Command",
    "icon": "CircleRing",
    "tag": "button",
    "modifier": "inline",
    "iconColor": "green"
  },
  "propsDisabled": {
    "label": "Command",
    "icon": "CircleRing",
    "tag": "button",
    "iconColor": "themePrimary",
    "disabled": true
  },
  "propsActionButton": {
    "icon": "CircleRing",
    "modifier": "actionButton",
    "tag": "button",
    "iconColor": "themePrimary"
  },
  "propsTextOnly": {
    "modifier": "TextOnly",
    "label": "Command",
    "tag": "button"
  },
  "propsPivot": {
    "label": "New",
    "icon": "CircleRing",
    "tag": "button",
    "dropdownIcon": "ChevronDown",
    "iconColor": "themePrimary",
    "state": "is-active",
    "modifier": "pivot"
  }
}

module.exports = CommandButtonExampleModel;