var CommandButtonExampleModel = {
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
}

module.exports = CommandButtonExampleModel;