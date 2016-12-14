var data = {
  componentName: "CommandBar",
  overview: "<p>Commanding surface for panels, pages, and applications. When planning to use the surface for navigation only, consider the NavBar variant.</p>",
  availableReact: true,
  variants: [
    {
      name: "Default CommandBar",
      templateFile: "CommandBarExample",
      model: "CommandBarExampleModel"
    },
    {
      name: "Dropdown CommandBar",
      templateFile: "CommandBarExample",
      model: "CommandBarDropdownExampleModel"
    },
    {
      name: "Navbar CommandBar",
      templateFile: "CommandBarExample",
      model: "CommandBarNavbarExampleModel"
    }
  ],
  states: [
    {
      name: "<code>.is-hidden</code>",
      applied: "<code>.ms-CommandBarItem</code>",
      result: "Hides a Command Bar item from view."
    },
    {
     name: "<code>.is-active</code>",
     applied: "<code>.ms-CommandBarSearch</code>",
     result: "Expands the search field for use."
    }
  ],
  jsFile: "CommandBarExampleJS"
}

module.exports = data;