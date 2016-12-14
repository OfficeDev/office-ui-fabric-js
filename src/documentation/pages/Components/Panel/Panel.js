var data = {
  componentName: "Panel",
  overview: "<p>Presents content by sliding over the rest of the application, which is covered by a partially-transparent overlay. Best used for experiences that do not require explicit context for heavy-weight creation/edit/management tasks such as settings, multi-field forms, and permissions. For containers used for complex tasks that requires context, use a separate Pane alongside the existing experience such as a List/Details layout.</p>",
  availableReact: true,
  variants: [
    {
      name: "Default Panel",
      templateFile: "PanelExample",
      model: "PanelDefaultExampleModel"
    },
    {
      name: "Medium Panel",
      templateFile: "PanelExample",
      model: "PanelMediumExampleModel"
    },
    {
      name: "Large Panel",
      templateFile: "PanelExample",
      model: "PanelLargeExampleModel"
    },
    {
      name: "Large Fixed Panel",
      templateFile: "PanelExample",
      model: "PanelLargeFixedExampleModel"
    },
    {
      name: "Extra Large Panel",
      templateFile: "PanelExample",
      model: "PanelExtraLargeExampleModel"
    },
    {
      name: "Extra Extra Large Panel",
      templateFile: "PanelExample",
      model: "PanelExtraExtraLargeExampleModel"
    },
    {
      name: "Left Panel",
      templateFile: "PanelExample",
      model: "PanelLeftExampleModel"
    }
  ],
  states: [
    {
      name: ".is-open",
      applied: ".ms-Panel",
      result: "The panel is closed by default. Apply this class to open it."
    }
  ],
  methods: [
    {
      name: "dismiss(callback)",
      parameters: [
        {
          name: "callback",
          type: "{Function} Optional callback function", 
        }
      ],
      description: "Dismisses the component and executes callback function"
    }
  ],
  jsFile: "PanelDocExampleJS"
}

module.exports = data;