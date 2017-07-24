var data = {
  componentName: "DatePicker",
  overview: `<p>The DatePicker component enables a user to pick a date value.</p>`,
  availableReact: true,
  variants: [
    {
      name: "Default DatePicker",
      templateFile: "DatePickerExample",
      model: null
    }
  ],
  methods: [
    {
      name: "picker.set('select', dateArr);",
      parameters: [
        {
          name: "dateArr",
          type: "{Array} The new date in [YEAR, MONTH, DATE] format", 
        }
      ],
      description: "Selects a new date in the component. Must be used on component's picker property  (DatePicker.picker)."
    },
    {
      name: "picker.set('highlight', dateArr);",
      parameters: [
        {
          name: "dateArr",
          type: "{Array} The new date in [YEAR, MONTH, DATE] format", 
        }
      ],
      description: "Highlights a new date in the component. Must be used on component's picker property (DatePicker.picker)."
    }
  ],
  jsFile: "DatePickerExampleJS",
  isDatePicker: true
}

module.exports = data;