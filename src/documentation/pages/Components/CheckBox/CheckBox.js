var data = {
  componentName: "CheckBox",
  overview: "<p>Used to indicate a simple yes or no choice, typically as part of a form.</p>",
  availableReact: true,
  variants: [
    {
      name: "Default CheckBox",
      templateFile: "CheckBoxElem",
      model: "CheckBoxBasicModel"
    },
    {
      name: "Disabled CheckBox",
      templateFile: "CheckBoxElem",
      model: "CheckBoxDisabledModel"
    },
    {
      name: "Selected CheckBox",
      templateFile: "CheckBoxElem",
      model: "CheckBoxSelectedModel"
    }
  ],
  states: [
    {
      name: "<code>disabled</code> attribute",
      applied: "<code>.ms-CheckBox-input</code>",
      result: "Disables the input."
    },
    {
      name: "<code>checked</code> attribute",
      applied: "<code>.ms-CheckBox-input</code>",
      result: "Fills in the checkbox or radio button."
    }
  ],
  methods: [
    {
      name: "getValue()",
      parameters: [],
      description: "Returns <code>true</code> or <code>false</code> whether the component is checked or not"
    },
    {
      name: "toggle()",
      parameters: [],
      description: "Toggles the component"
    },
    {
      name: "check()",
      parameters: [],
      description: "Sets component to checked"
    },
    {
      name: "unCheck()",
      parameters: [],
      description: "Sets component to unchecked"
    },
    {
      name: "removeListeners()",
      parameters: [],
      description: "Remove all event listeners from component"
    }
  ],
  jsFile: "CheckBoxJS"
}

module.exports = data;