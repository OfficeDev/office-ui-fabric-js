var data = {
  componentName: "Overlay",
  overview: "<p>Overlays are used to render a semi-transparent layer on top of existing UI. Overlays help focus the user on the content that sits above the added layer and are often used to help designate a modal or blocking experience. Overlays can be seen used in conjunction with Panels and Dialogs.</p>",
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