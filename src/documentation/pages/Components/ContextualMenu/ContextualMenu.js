var data = {
  componentName: "ContextualMenu",
  overview: "<p>Allows for the selection of one option from a list.</p>",
  availableReact: true,
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
  states: [
    {
      name: ".is-open",
      applied: ".ms-ContextualMenu",
      result: "The ContextualMenu is hidden by default. Toggle this class to show or hide it."
    },
    {
      name: ".is-selected",
      applied: ".ms-ContextualMenu-link",
      result: "Marks that item as selected. Only available for the multiselect variant."
    },
    {
      name: ".is-disabled",
      applied: ".ms-ContextualMenu-link",
      result: "Disables that item in the menu."
    }
  ],
  jsFile: "ContextualMenuExampleJS"
}

module.exports = data;