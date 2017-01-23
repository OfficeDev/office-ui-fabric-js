var data = {
  componentName: "Panel",
  overview: `<p>Panels are modal UI overlays that provide contextual app information. They often request some kind of creation or management action from the user. Panels are paired with the Overlay component, also known as a Light Dismiss. The Overlay blocks interactions with the app view until dismissed either through clicking or tapping on the Overlay or by selecting a close or completion action within the Panel.</p>
  <h2 class="ms-font-xl">Examples of experiences that use Panels</h2>
  <ul>
    <li>Member or group list creation or management</li>
    <li>Document list creation or management</li>
    <li>Permissions creation or management</li>
    <li>Settings creation or management</li>
    <li>Multi-field forms</li>
  </ul>`,
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