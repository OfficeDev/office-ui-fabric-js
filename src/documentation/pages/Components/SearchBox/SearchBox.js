var data = {
  componentName: "SearchBox",
  overview: "<p>A special form field that allows for the input of search text.</p>",
  variants: [
    {
      name: "Default SearchBox",
      templateFile: "SearchBoxExample",
      model: "SearchBoxExampleModel"
    },
    {
      name: "Collapsed SearchBox",
      templateFile: "SearchBoxExample",
      model: "SearchBoxCollapsedExampleModel"
    },
    {
      name: "CommandBar SearchBox",
      templateFile: "SearchBoxExample",
      model: "SearchBoxCommandbarExampleModel"
    }
  ],
  jsFile: "SearchBoxExampleJS"
}

module.exports = data;