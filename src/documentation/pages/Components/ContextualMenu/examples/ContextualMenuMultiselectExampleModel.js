var ContexualMenuExampleModel = {
  "button": {
    "label": "Open Example",
    "modifier": "primary",
    "tag": "button"
  },
  "state": "is-hidden",
  "modifier": "multiselect",
  "items": [
    {
      "title": "SORT BY",
      "state": "",
      "modifier": "header"
    },
    {
      "title": "Date",
      "state": ""
    },
    {
      "title": "Sender",
      "state": "is-selected"
    },
    {
      "modifier": "divider",
      "title": ""
    },
    {
      "title": "ORDER",
      "state": "",
      "modifier": "header"
    },
    {
      "title": "Newest on top",
      "state": ""
    },
    {
      "title": "Oldest on top",
      "state": ""
    },
    {
      "modifier": "divider",
      "title": ""
    },
    {
      "title": "CONVERSATIONS",
      "modifier": "header"
    },
    {
      "title": "On",
      "state": ""
    },
    {
      "title": "Off",
      "state": ""
    }
  ],
  "contextualHostProps":  {
    "state": "is-open"
  }
}

module.exports = ContexualMenuExampleModel;