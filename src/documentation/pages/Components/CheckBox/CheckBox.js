var data = {
   componentName: "CheckBox",
   overview: "<p>Used to indicate a simple yes or no choice, typically as part of a form.</p>",
   variants: [
      {
         name: "Default CheckBox",
         templateFile: "CheckBoxElem",
         model: "CheckBoxBasicModel"
      },
      {
         name: "Selected CheckBox",
         templateFile: "CheckBoxElem",
         model: "CheckBoxSelectedModel"
      },
      {
         name: "Disabled CheckBox",
         templateFile: "CheckBoxElem",
         model: "CheckBoxDisabledModel"
      }
   ],
   jsFile: "CheckBoxJS"
}

module.exports = data;