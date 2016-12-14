var data = {
  componentName: "Overlay",
  overview: "<p>Partially obscures the page to create a modal experience and focus the user&#39;s attention. Typically used with a Dialog or Panel.</p>",
  availableReact: true,
  variants: [
    {
      name: "Default Overlay",
      templateFile: "OverlayExample",
      model: "OverlayDefaultExampleModel"
    },
    {
      name: "Dark Overlay",
      templateFile: "OverlayExample",
      model: "OverlayDarkExampleModel"
    }
  ],
  methods: [
    {
      name: "remove()",
      parameters: [],
      description: "Removes the component from page"
    },
    {
      name: "show()",
      parameters: [],
      description: "Shows the component"
    },
    {
      name: "hide()",
      parameters: [],
      description: "Hides the component"
    }
  ],
  jsFile: "OverlayExampleJS"
}

module.exports = data;