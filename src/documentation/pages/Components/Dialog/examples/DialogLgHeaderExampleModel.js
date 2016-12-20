var DialogExampleModel = {
  "modifier": "lgHeader",
  "title": "All emails together",
  "subText": "Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.",
  "actions": [
    {
      "component": "Button",
      "props": {
        "label": "Save",
        "tag": "button",
        "modifier": "primary",
        "customClasses": "ms-Dialog-action"
      }
    },
    {
      "component": "Button",
      "props": {
        "label": "Cancel",
        "tag": "button",
        "customClasses": "ms-Dialog-action"
      }
    }
  ],
  "contextualHostProps":  {
    "state": "is-open"
  }
}

module.exports = DialogExampleModel;