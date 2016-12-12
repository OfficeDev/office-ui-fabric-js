var data = {
   componentName: "TextField",
   overview: "<p>Allows for the input of text. Can be a single line or multiple lines. Typically used to accept user input within a form.</p>",
   variants: [
      {
         name: "Default TextField",
         templateFile: "TextFieldExample",
         model: "TextFieldExampleModel"
      },
      {
         name: "Multiline TextField",
         templateFile: "TextFieldExample",
         model: "TextFieldMultilineExampleModel"
      },
      {
         name: "Placeholder TextField",
         templateFile: "TextFieldExample",
         model: "TextFieldPlaceholderExampleModel"
      },
      {
         name: "Underlined TextField",
         templateFile: "TextFieldExample",
         model: "TextFieldUnderlinedExampleModel"
      },
      {
         name: "Disabled TextField",
         templateFile: "TextFieldExample",
         model: "TextFieldDisabledExampleModel"
      }
   ],
   states: [
      {
         name: ".is-disabled",
         applied: ".ms-TextField",
         result: "Disables user input on TextField"
      }
   ],
   jsFile: "TextFieldExampleJS"
}

module.exports = data;