var data = {
  componentName: "CheckBox",
  overview: `<p>A Checkbox is a UI element that allows users to switch between two mutually exclusive options (checked or unchecked, on or off) through a single click or tap. It can also be used to indicate a subordinate setting or preference when paired with another control.</p>
    <p>A Checkbox is used to select or deselect action items. It can be used for a single item or for a list of multiple items that a user can choose from. The control has two selection states: unselected and selected.</p>
    <p>Use a single Checkbox for a subordinate setting, such as with a "Remember me?" login scenario or with a terms of service agreement.</p>
    <p>For a binary choice, the main difference between a Checkbox and a toggle switch is that the Checkbox is for status and the toggle switch is for action. You can delay committing a Checkbox interaction (as part of a form submit, for example), while you should immediately commit a toggle switch interaction. Also, only Checkboxes allow for multi-selection.</p>
    <p>Use multiple Checkboxes for multi-select scenarios in which a user chooses one or more items from a group of choices that are not mutually exclusive.</p>`,
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