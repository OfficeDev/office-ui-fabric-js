var data = {
  componentName: "Dialog",
  overview: `<p>Dialogs are temporary, modal UI overlay that generally provide contextual app information or require user confirmation/input. In most cases, Dialogs block interactions with the web page or application until being explicitly dismissed, and often request action from the user. They are primarily used for lightweight creation or edit tasks, and simple management tasks.</p>`,
  availableReact: true,
  variants: [
    {
      name: "Default Dialog",
      templateFile: "DialogExample",
      model: "DialogExampleModel"
    }
  ],
  methods: [
    {
      name: "open()",
      parameters: [],
      description: "Opens the component"
    },
    {
      name: "close()",
      parameters: [],
      description: "Closes the component"
    }
  ],
  jsFile: "DialogDocAllElementsJS"
}

module.exports = data;