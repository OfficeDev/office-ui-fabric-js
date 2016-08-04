var CommandButtonExampleModel = {
  "props": { 
    "label": "Command",
    "icon": "CircleFill",
    "tag": "button",
    "iconColor": "themePrimary"
  },
  "propsDropdown": {
    "label": "New",
    "icon": "CircleFill",
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
    "icon": "CircleFill",
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
    "icon": "CircleFill",
    "modifier": "noLabel",
    "tag": "button",
    "iconColor": "themePrimary"
  },
  "propsNoLabelSplit": {
    "icon": "CircleFill",
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
    "icon": "CircleFill",
    "tag": "button",
    "modifier": "inline",
    "iconColor": "green"
  },
  "propsDisabled": {
    "label": "Command",
    "icon": "CircleFill",
    "tag": "button",
    "iconColor": "themePrimary",
    "disabled": true
  },
  "propsActionButton": {
    "icon": "CircleFill",
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
    "icon": "CircleFill",
    "tag": "button",
    "dropdownIcon": "ChevronDown",
    "iconColor": "themePrimary",
    "state": "is-active",
    "modifier": "pivot"
  }
}

module.exports = CommandButtonExampleModel;