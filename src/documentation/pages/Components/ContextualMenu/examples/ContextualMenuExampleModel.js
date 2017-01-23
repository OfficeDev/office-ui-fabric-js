var ContexualMenuExampleModel = {
  "button": {
    "label": "Open Example",
    "modifier": "primary",
    "tag": "button"
  },
  "state": "is-hidden",
  "items": [
    {
      "title": "Animals",
      "state": ""
    },
    {
      "title": "Books",
      "state": ""
    },
    {
      "title": "Education",
      "state": "is-selected"
    },
    {
      "title": "Music",
      "state": ""
    },
    {
      "title": "Sports",
      "state": "is-disabled"
    }
  ],
  "contextualHostProps":  {
    "state": "is-open"
  }
}

module.exports = ContexualMenuExampleModel;