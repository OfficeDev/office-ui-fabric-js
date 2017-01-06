var data = {
  componentName: "PeoplePicker",
  overview: "<p>A form input that allows for the choice of one or more people.</p>",
  availableReact: true,
  variants: [
    {
      name: "Default PeoplePicker",
      templateFile: "PeoplePickerExample",
      model: "PeoplePickerExampleModel"
    },
    {
      name: "Compact PeoplePicker",
      templateFile: "PeoplePickerExample",
      model: "PeoplePickerCompactExampleModel"
    },
    {
      name: "FacePile PeoplePicker",
      templateFile: "PeoplePickerExample",
      model: "PeoplePickerFacePileExampleModel"
    }
  ],
  jsFile: "PeoplePickerExampleJS"
}

module.exports = data;