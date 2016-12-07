var data = {
   componentName: "MessageBar",
   overview: "<p>Lowest level of caution. Use when you want to present timely, concise information that accelerates a workflow, or to provide key information or actions that avoid a dead end in the experience.</p>",
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