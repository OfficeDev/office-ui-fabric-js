var data = {
  componentName: "Pivot",
  overview: "<p>A layout component that allows a user to switch between different sets of content or filters on the content currently visible. This is in contrast to a purely navigational UI element such as NavBar or a commanding element such as CommandBar. An example would be Read vs. Unread items in the Outlook Web App.</p>",
  availableReact: true,
  variants: [
    {
      name: "Default Pivot",
      templateFile: "PivotExample",
      model: "PivotDefaultExampleModel"
    },
    {
      name: "Large Pivot",
      templateFile: "PivotExample",
      model: "PivotLargeExampleModel"
    },
    {
      name: "Tabs Pivot",
      templateFile: "PivotExample",
      model: "PivotTabsExampleModel"
    },
    {
      name: "Large Tabs Pivot",
      templateFile: "PivotExample",
      model: "PivotLargeTabsExampleModel"
    }
  ],
  jsFile: "PivotExampleJS"
}

module.exports = data;