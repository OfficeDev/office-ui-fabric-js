var data = {
  componentName: "Dropdown",
  overview: `<p>A Dropdown is a list in which the selected item is always visible, and the others are visible on demand by clicking a drop-down button. They are used to simplify the design and make a choice within the UI. When closed, only the selected item is visible. When users click the drop-down button, all the options become visible. To change the value, users open the list and click another value or use the arrow keys (up and down) to select a new value.</p>`,
  availableReact: true,
  variants: [
    {
      name: "Default Dropdown",
      templateFile: "DropdownExample",
      model: "DropdownExampleModel"
    },
    {
      name: "Disabled Dropdown",
      templateFile: "DropdownExample",
      model: "DropdownDisabledExampleModel"
    }
  ],
  states: [
    {
      name: ".is-disabled",
      applied: ".ms-Dropdown",
      result: "Disables the dropdown."
    }
  ],
  jsFile: "DropdownExampleJS"
}

module.exports = data;