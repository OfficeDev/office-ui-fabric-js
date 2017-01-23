var DialogExampleModel = {
  "modifier": "blocking",
  "title": "Unsaved changes",
  "subText": "Are you sure you want to discard these changes?.",
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
        "label": "Delete",
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