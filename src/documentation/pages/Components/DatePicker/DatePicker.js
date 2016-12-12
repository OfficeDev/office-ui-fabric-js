var data = {
  componentName: "DatePicker",
  overview: "<p>Allows for the selection of a date into a text field.</p>",
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