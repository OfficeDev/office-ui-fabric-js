var data = {
  componentName: "MessageBar",
  overview: "<p>A MessageBar is an area at the top of a primary view that displays relevant status information. You can use a MessageBar to tell the user about a situation that does not require their immediate attention and therefore does not need to block other activities.</p>",
  availableReact: true,
  variants: [
    {
      name: "Default MessageBar",
      templateFile: "MessageBarExample",
      model: "MessageBarDefaultModel"
    },
    {
      name: "Success MessageBar",
      templateFile: "MessageBarExample",
      model: "MessageBarSuccessModel"
    },
    {
      name: "Error MessageBar",
      templateFile: "MessageBarExample",
      model: "MessageBarErrorModel"
    },
    {
      name: "Blocked MessageBar",
      templateFile: "MessageBarExample",
      model: "MessageBarBlockedModel"
    },
    {
      name: "Warning MessageBar",
      templateFile: "MessageBarExample",
      model: "MessageBarWarningModel"
    },
    {
      name: "Severe Warning MessageBar",
      templateFile: "MessageBarExample",
      model: "MessageBarSevereWarningModel"
    }
  ]
}

module.exports = data;