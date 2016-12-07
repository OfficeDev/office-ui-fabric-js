var CalloutExampleModel = {
  "state": "is-hidden",
  "title": "All of your favorite people",
  "subText": "Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.",
  "actions": [
    {
      "component": "Link",
      "props": {
        "label": "Learn more",
        "linkText": "Learn More",
        "customClassses": "ms-Callout-link",
        "tabIndex": 0,
        "hasHref": false
      }
    }
  ],
  "button": {
    "label": "Open Callout",
    "tag": "button"
  }
}

module.exports = CalloutExampleModel;