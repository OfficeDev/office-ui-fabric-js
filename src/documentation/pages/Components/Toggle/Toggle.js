var data = {
  componentName: "Toggle",
  overview: `<p>Toggles represent a physical switch that allows users to turn things on or off. Use Toggles to present users with two mutually exclusive options (like on/off), where choosing an option results in an immediate action. Use a Toggle for binary operations that take effect right after the user flips the Toggle. For example, use a Toggle to turn services or hardware components on or off. In other words, if a physical switch would work for the action, a Toggle is probably the best control to use.</p>`,
  availableReact: true,
  variants: [
    {
      name: "Default Toggle",
      templateFile: "ToggleElem",
      model: "ToggleBasicModel"
    },
    {
      name: "Disabled Toggle",
      templateFile: "ToggleElem",
      model: "ToggleDisabledModel"
    },
    {
      name: "Text Left Toggle",
      templateFile: "ToggleElem",
      model: "ToggleTextLeftModel"
    }
  ],
  jsFile: "ToggleJS"
}

module.exports = data;