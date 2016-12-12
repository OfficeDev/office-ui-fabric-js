var data = {
   componentName: "Dropdown",
   overview: "<p>Allows for the selection of one option from a list.</p>",
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