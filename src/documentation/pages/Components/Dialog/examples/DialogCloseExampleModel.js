var DialogExampleModel = {
  "modifier": "close",
  "closeIcon": "Cancel",
  "title": "All emails together",
  "subtext": "Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.",
  "components": [
    {
      "component": "CheckBox",
      "props":  {
        "label": "Option1",
        "modifier": "",
        "name": "checkboxa",
        "id": "checkboxa",
        "checked": false,
        "disabled": false,
        "type": "checkbox"
      }
    },
    {
      "component": "CheckBox",
      "props":  {
        "label": "Option2",
        "modifier": "",
        "name": "checkboxa",
        "id": "checkboxa",
        "checked": false,
        "disabled": false,
        "type": "checkbox"
      }
    }
  ],
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