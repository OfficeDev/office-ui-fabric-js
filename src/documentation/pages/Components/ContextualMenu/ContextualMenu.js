var data = {
  componentName: "ContextualMenu",
  overview: `<p>ContextualMenus are lists of commands that are based on the context of selection, mouse hover or keyboard focus. They are one of the most effective and highly used command surfaces, and can be used in a variety of places.</p>
<p>There are variants that originate from a command bar, or from cursor or focus. Those that come from CommandBars use a beak that is horizontally centered on the button. Ones that come from right click and menu button do not have a beak, but appear to the right and below the cursor. ContextualMenus can have submenus from commands, show selection checks, and icons.</p>
<p>Organize commands in groups divided by rules. This helps users remember command locations, or find less used commands based on proximity to others. One should also group sets of mutually exclusive or multiple selectable options. Use icons sparingly, for high value commands, and don’t mix icons with selection checks, as it makes parsing commands difficult. Avoid submenus of submenus as they can be difficult to invoke or remember.</p>`,
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