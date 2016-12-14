var data = {
  componentName: "Toggle",
  overview: "<p>Allows for turning on or off a setting. This is best suited for simple, singular configuration (e.g. application level settings) whereas the ChoiceField is better suited when there is a longer list of individual choices or in a form (e.g. signing up for different newsletters during registration for an event).</p>",
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