var data = {
   componentName: "CommandButton",
   overview: `<p>Allows users to take action, such as submitting a form or dismissing a message. Primary use is in command bar or in Callout.</p>`,
   variants: [
      {
         name: "Default CommandButton",
         templateFile: "CommandButtonExample",
         model: "CommandButtonExampleModel"
      },
      {
         name: "Action CommandButton",
         templateFile: "CommandButtonExample",
         model: "CommandButtonActionExampleModel"
      },
      {
         name: "Disabled CommandButton",
         templateFile: "CommandButtonExample",
         model: "CommandButtonDisabledExampleModel"
      },
      {
         name: "Dropdown CommandButton",
         templateFile: "CommandButtonExample",
         model: "CommandButtonDropdownExampleModel"
      },
      {
         name: "Inline CommandButton",
         templateFile: "CommandButtonExample",
         model: "CommandButtonInlineExampleModel"
      },
      {
         name: "No Label Split CommandButton",
         templateFile: "CommandButtonExample",
         model: "CommandButtonNoLabelSplitExampleModel"
      },
      {
         name: "Pivot CommandButton",
         templateFile: "CommandButtonExample",
         model: "CommandButtonPivotExampleModel"
      },
      {
         name: "Split CommandButton",
         templateFile: "CommandButtonExample",
         model: "CommandButtonSplitExampleModel"
      },
      {
         name: "Text Only CommandButton",
         templateFile: "CommandButtonExample",
         model: "CommandButtonTextOnlyExampleModel"
      }
   ],
   states: [
      {
         name: "<code>.is-disabled</code>",
         applied: "<code>.ms-Button</code>",
         result: "When using an <code>&lt;a&gt;</code> element, apply this class to disable the button. When using a <code>&lt;button&gt;</code>, the <code>disabled</code> attribute can be used instead."
      }
   ],
   jsFile: "CommandButtonExampleJS"
}

module.exports = data;