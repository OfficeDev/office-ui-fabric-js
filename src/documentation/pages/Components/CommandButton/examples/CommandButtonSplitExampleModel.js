var CommandButtonExampleModel = {
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

module.exports = CommandButtonExampleModel;