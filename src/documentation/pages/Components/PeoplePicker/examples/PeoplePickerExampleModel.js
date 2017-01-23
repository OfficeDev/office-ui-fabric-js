var PeoplePickerExampleModel = {
  "textFieldProps": {
    "textfield": true,
    "modifier": "textFieldUnderlined",
    "placeholder": "Select or enter an option"
  },
  "groups": [
    {
      "title": "Contacts",
      "personas": [
        {
          "component": "Persona",
          "props": {
            "initials": "RM",
            "initialsColor": "blue",
            "primaryText": "Russel Miller",
            "secondaryText": "Sales",
              "modifiers":  [
              {
                "name": "sm"
              }
            ]
          }
        },
        {
          "component": "Persona",
          "props": {
            "initials": "DF",
            "initialsColor": "purple",
            "primaryText": "Douglas Fielder",
            "secondaryText": "Public Relations",
            "modifiers":  [
              {
                "name": "sm"
              }
            ]
          }
        },
        {
          "component": "Persona",
          "props": {
            "initials": "GS",
            "initialsColor": "black",
            "primaryText": "Grant Steel",
            "secondaryText": "Sales",
              "modifiers":  [
              {
                "name": "sm"
              }
            ]
          }
        },
        {
          "component": "Persona",
          "props": {
            "initials": "HW",
            "initialsColor": "green",
            "primaryText": "Harvey Wallin",
            "secondaryText": "Public Relations",
            "modifiers":  [
              {
                "name": "sm"
              }
            ]
          }
        }
      ]
    }
  ],
  "searchMoreText": "Search my groups"
}

module.exports = PeoplePickerExampleModel;