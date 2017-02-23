var PersonaExampleProps = {
  "initials": "AL",
  "initialsColor": "blue",
  "image": "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/images/persona.person.png",
  "modifiers": [
    {
      "name": "facePile"
    }
  ],
  "personaCardProps":  {
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
      "image": "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/images/persona.person.png",
      "primaryText": "Alton Lafferty",
      "secondaryText": "Accountant",
      "tertiaryText": "In a meeting",
      "optionalText": "Available at 4:00pm",
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
                "image": "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/images/persona.person.png",
                "primaryText": "Russel Miller",
                "secondaryText": "Sales"
              }
            },
            {
              "component": "Persona",
              "props": {
                "initials": "RM",
                "initialsColor": "blue",
                "image": "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/images/persona.person.png",
                "primaryText": "Douglas Fielder",
                "secondaryText": "Public Relations"
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
                "image": "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/images/persona.person.png",
                "primaryText": "Grant Steel",
                "secondaryText": "Sales"
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
                "image": "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/images/persona.person.png",
                "primaryText": "Harvey Wallin",
                "secondaryText": "Public Relations"
              }
            },
            {
              "component": "Persona",
              "props": {
                "initials": "RM",
                "initialsColor": "blue",
                "image": "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/images/persona.person.png",
                "primaryText": "Marcus Lauer",
                "secondaryText": "Technical Support"
              }
            },
            {
              "component": "Persona",
              "props": {
                "initials": "RM",
                "initialsColor": "blue",
                "image": "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/images/persona.person.png",
                "primaryText": "Marcel Groce",
                "secondaryText": "Delivery"
              }
            },
            {
              "component": "Persona",
              "props": {
                "initials": "RM",
                "initialsColor": "blue",
                "image": "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/images/persona.person.png",
                "primaryText": "Jessica Fischer",
                "secondaryText": "Marketing"
              }
            }
          ]
        }
      ]
    }
  }
}

module.exports = PersonaExampleProps;
