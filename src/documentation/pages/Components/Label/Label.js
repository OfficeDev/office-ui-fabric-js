var data = {
  componentName: "Label",
  overview: "<p>Used to label form elements such as TextField and Dropdown.</p>",
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