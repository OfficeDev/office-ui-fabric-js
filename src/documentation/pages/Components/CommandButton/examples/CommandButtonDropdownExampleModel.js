var CommandButtonExampleModel = {
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
}

module.exports = CommandButtonExampleModel;