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
   states: [
      {
         name: ".is-hidden",
         applied: ".ms-CommandBarItem",
         result: "Hides a Command Bar item from view."
      },
      {
         name: ".is-active",
         applied: ".ms-CommandBarSearch",
         result: "Expands the search field for use."
      }
   ],
   jsFile: "CommandBarExampleJS"
}

module.exports = data;