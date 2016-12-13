var data = {
  componentName: "Dialog",
  overview: "<p>Displays content that temporarily blocks interactions with the application. It is primarily used for confirmation tasks, light-weight creation or edit tasks, and simple management tasks.</p>",
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