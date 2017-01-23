var data = {
  componentName: "TextField",
  overview: `<p>The TextField component enables a user to type text into an app. It's typically used to capture a single line of text, but can be configured to capture multiple lines of text. The text displays on the screen in a simple, uniform format.</p>`,
  availableReact: true,
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