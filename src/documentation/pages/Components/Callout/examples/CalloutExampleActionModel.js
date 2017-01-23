var CalloutExampleActionModel = {
  "state": "is-hidden",
  "title": "All of your favorite people",
  "subText": "Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.",
  "modifier": "actionText",
  "actions": [
    {
      "component": "CommandButton",
      "props": {
        "label": "Command",
        "icon": "CheckMark",
        "tag": "button",
        "modifier": "inline",
        "iconColor": "green"
      }
    },
    {
      "component": "CommandButton",
      "props": {
        "label": "Command",
        "icon": "Clear",
        "tag": "button",
        "modifier": "inline",
        "iconColor": "red"
      }
    }
  ],
  "contextualHostProps": {
    "arrowPosition": "arrowLeft",
      "state": "is-open"
  },
  "button": {
    "label": "Open Callout Action Text",
    "tag": "button"
  }
}

module.exports = CalloutExampleActionModel;