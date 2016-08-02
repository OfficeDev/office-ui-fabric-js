var PersonaCardExampleProps = {
  "default": {
    "button": {
      "label": "Open Example",
      "modifier": "primary",
      "tag": "button"
    },
    "contextualHostProps": {
      "state": "is-open"
    },
    "personaProps": {
      "initials": "AL",
      "initialsColor": "blue",
      "image": "../persona/Persona.Person2.png",
      "primaryText": "Alton Lafferty",
      "secondaryText": "Accountant",
      "tertiaryText": "In a meeting",
      "optionalText": "Available at 4:00pm",
      "icon": "SkypeCheck",
      "modifiers":  [
        {
          "name": "lg"
        }
      ]
    },
    "orgChartProps": {
      "groups": [
        {
          "personas": [
            {
              "component": "Persona",
              "props": {
                "initials": "RM",
                "initialsColor": "blue",
                "image": "../persona/Persona.Person2.png",
                "primaryText": "Russel Miller",
                "secondaryText": "Sales",
                "icon": "SkypeCheck"
              }
            },
            {
              "component": "Persona",
              "props": {
                "initials": "RM",
                "initialsColor": "blue",
                "image": "../persona/Persona.Person2.png",
                "primaryText": "Douglas Fielder",
                "secondaryText": "Public Relations",
                "icon": "SkypeCheck"
              }
            }
          ]
        },
        {
          "title": "Manager",
          "personas": [
            {
              "component": "Persona",
              "props": {
                "initials": "RM",
                "initialsColor": "blue",
                "image": "../persona/Persona.Person2.png",
                "primaryText": "Grant Steel",
                "secondaryText": "Sales",
                "icon": "SkypeCheck"
              }
            }
          ]
        },
        {
          "title": "Staff",
          "personas": [
            {
              "component": "Persona",
              "props": {
                "initials": "RM",
                "initialsColor": "blue",
                "image": "../persona/Persona.Person2.png",
                "primaryText": "Harvey Wallin",
                "secondaryText": "Public Relations",
                "icon": "SkypeCheck"
              }
            },
            {
              "component": "Persona",
              "props": {
                "initials": "RM",
                "initialsColor": "blue",
                "image": "../persona/Persona.Person2.png",
                "primaryText": "Marcus Lauer",
                "secondaryText": "Technical Support",
                "icon": "SkypeCheck"
              }
            },
            {
              "component": "Persona",
              "props": {
                "initials": "RM",
                "initialsColor": "blue",
                "image": "../persona/Persona.Person2.png",
                "primaryText": "Marcel Groce",
                "secondaryText": "Delivery",
                "icon": "SkypeCheck"
              }
            },
            {
              "component": "Persona",
              "props": {
                "initials": "RM",
                "initialsColor": "blue",
                "image": "../persona/Persona.Person2.png",
                "primaryText": "Jessica Fischer",
                "secondaryText": "Marketing",
                "icon": "SkypeCheck"
              }
            }
          ]
        }
      ]
    }
  }
}

module.exports = PersonaCardExampleProps;
