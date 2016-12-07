var data = {
   componentName: "CommandBar",
   overview: "<p>Commanding surface for panels, pages, and applications. When planning to use the surface for navigation only, consider the NavBar variant.</p>",
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
   jsFile: "CommandBarExampleJS"
}

module.exports = data;