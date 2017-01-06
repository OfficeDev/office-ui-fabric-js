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
      "state": "",
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