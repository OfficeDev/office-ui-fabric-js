var ContexualMenuExampleModel = {
  "button": {
    "label": "Open Example",
    "modifier": "primary",
    "tag": "button"
  },
  "state": "is-hidden",
  "items": [
    {
      "title": "Delete",
      "state": ""
    },
    {
      "title": "Flag",
      "state": ""
    },
    {
      "modifier": "divider",
      "title": ""
    },
    {
      "title": "Important",
      "state": "is-selected"
    },
    {
      "title": "Move",
      "state": ""
    },
    {
      "modifier": "divider",
      "title": ""
    },
    {
      "title": "Move",
      "subMenuItems": [
        {
          "title": "Fiction",
          "state": ""
        },
        {
          "title": "Humor",
          "state": ""
        },
        {
          "title": "Magazines",
          "state": "is-selected"
        },
        {
          "title": "Non-fiction",
          "state": ""
        },
        {
          "title": "Textbooks",
          "state": ""
        }
      ]
    },
    {
      "title": "Create Rule...",
      "state": "is-selected"
    },
    {
      "title": "Verdana",
      "state": "is-disabled"
    }
  ],
  "contextualHostProps":  {
    "state": "is-open"
  }
}

module.exports = ContexualMenuExampleModel;