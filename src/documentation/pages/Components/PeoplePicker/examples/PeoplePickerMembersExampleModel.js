var PeoplePickerMembersExampleModel = {
  "modifiers": [
    {
      "name": "membersList"
    }
  ],
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
                "name": "xs"
              }
            ]
          },
          "state": "is-selected"
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
                "name": "xs"
              }
            ]
          }
        }
      ]
    }
  ],
  "searchMoreText": "Search my groups"
}

module.exports = PeoplePickerMembersExampleModel;