var DialogExampleModel = {
  "modifier": "multiline",
  "title": "All emails together",
  "components": [
    {
      "component": "Button",
      "props":  {
        "label": "Create Account",
        "description": "Description of this action this button takes",
        "icon": "Add",
        "modifier": "compound",
        "tag": "button",
        "customClasses": "ms-Dialog-action"
      }
    },
     {
      "component": "Button",
      "props":  {
        "label": "Sign in",
        "description": "Description of this action this button takes",
        "icon": "Add",
        "modifier": "compound",
        "tag": "button",
        "customClasses": "ms-Dialog-action"
      }
    },
     {
      "component": "Button",
      "props":  {
        "label": "Settings",
        "description": "Description of this action this button takes",
        "icon": "Add",
        "modifier": "compound",
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