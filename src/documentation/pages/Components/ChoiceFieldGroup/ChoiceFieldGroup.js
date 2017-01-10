var data = {
   componentName: "ChoiceFieldGroup",
   overview: "<p>Used to indicate a single choice from multiple options.</p>",
   availableReact: true,
   reactComponent: 'ChoiceGroup',
   variants: [
      {
         name: "Default ChoiceFieldGroup",
         templateFile: "ChoiceFieldGroupElem",
         model: "ChoiceFieldGroupModel"
      }
   ],
   methods: [
      {
         name: "removeListeners()",
         parameters: [
         ],
         description: "Remove all event listeners from component"
      }
   ],
   jsFile: "ChoiceFieldGroupJS"
}

module.exports = data;