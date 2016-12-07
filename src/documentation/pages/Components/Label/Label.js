var data = {
   componentName: "Label",
   overview: "<p>Used to label form elements such as TextField and Dropdown.</p>",
   variants: [
      {
         name: "Default Label",
         templateFile: "LabelExample",
         model: "LabelExampleModel"
      },
      {
         name: "Disabled Label",
         templateFile: "LabelExample",
         model: "LabelExampleDisabledModel"
      },
      {
         name: "Required Label",
         templateFile: "LabelExample",
         model: "LabelExampleRequiredModel"
      }
   ]
}

module.exports = data;