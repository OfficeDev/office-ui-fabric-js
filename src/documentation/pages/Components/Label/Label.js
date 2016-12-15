var data = {
  componentName: "Label",
  overview: "<p>Labels give a name or title to a component or group of components. Labels should be in close proximity to the component or group they are paired with. Some components, such as TextField, Dropdown, or Toggle, already have Labels incorporated, but other components may optionally add a Label if it helps inform the user of the component’s purpose.</p>",
  availableReact: true,
  variants: [
    {
      name: "Default Label",
      templateFile: "LabelExample",
      model: "LabelExampleModel"
    },
    {
      name: "Disabled Label",
      templateFile: "LabelExample",
      model: "LabelExampleDisabledModel"
    },
    {
      name: "Required Label",
      templateFile: "LabelExample",
      model: "LabelExampleRequiredModel"
    }
   ],
   states: [
    {
      name: ".is-required",
      applied: ".ms-Label",
      result: "Marks the form element as required."
    },
    {
      name: ".is-disabled",
      applied: ".ms-Label",
      result: "Marks the form element as disabled."
    }
  ]
}

module.exports = data;