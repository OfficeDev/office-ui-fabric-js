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
      name: "changeHighlightedDate(dateArr)",
      parameters: [
        {
          name: "dateArr",
          type: "{Array} The new date in [YEAR, MONTH, DATE] format", 
        }
      ],
      description: "Highlights a new date in the component"
    }
  ],
  jsFile: "DatePickerExampleJS",
  isDatePicker: true
}

module.exports = data;