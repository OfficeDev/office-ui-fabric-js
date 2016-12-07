var data = {
   componentName: "ContextualMenu",
   overview: "<p>Allows for the selection of one option from a list.</p>",
   variants: [
      {
         name: "Default ContextualMenu",
         templateFile: "ContextualMenuExample",
         model: "ContextualMenuExampleModel"
      },
      {
         name: "Multiselect ContextualMenu",
         templateFile: "ContextualMenuExample",
         model: "ContextualMenuMultiselectExampleModel"
      },
      {
         name: "Submenu ContextualMenu",
         templateFile: "ContextualMenuExample",
         model: "ContextualMenuSubmenuExampleModel"
      },
      {
         name: "Dividers ContextualMenu",
         templateFile: "ContextualMenuExample",
         model: "ContextualMenuDividersExampleModel"
      }
   ],
   jsFile: "ContextualMenuExampleJS"
}

module.exports = data;