var data = {
  componentName: "Persona",
  overview: "<p>Represents a person, complete with a profile image and additional details. Where a profile image is not available, the user&#39;s initials can be shown instead.</p>",
  availableReact: true,
  variants: [
    {
      name: "Tiny Persona",
      templateFile: "PersonaExample",
      model: "PersonaTinyExampleModel"
    },
    {
      name: "Extra Small Persona",
      templateFile: "PersonaExample",
      model: "PersonaExtraSmallExampleModel"
    },
    {
      name: "Small Persona",
      templateFile: "PersonaExample",
      model: "PersonaSmallExampleModel"
    },
    {
      name: "Default Persona",
      templateFile: "PersonaExample",
      model: "PersonaDefaultExampleModel"
    },
    {
      name: "Large Persona",
      templateFile: "PersonaExample",
      model: "PersonaLargeExampleModel"
    },
    {
      name: "Extra Large Persona",
      templateFile: "PersonaExample",
      model: "PersonaExtraLargeExampleModel"
    },
    {
      name: "Initials Persona",
      templateFile: "PersonaExample",
      model: "PersonaInitialsExampleModel"
    },
    {
      name: "Available Persona",
      templateFile: "PersonaExample",
      model: "PersonaPresenceAvailableExampleModel"
    },
    {
      name: "Away Persona",
      templateFile: "PersonaExample",
      model: "PersonaPresenceAwayExampleModel"
    },
    {
      name: "Blocked Persona",
      templateFile: "PersonaExample",
      model: "PersonaPresenceBlockedExampleModel"
    },
    {
      name: "Busy Persona",
      templateFile: "PersonaExample",
      model: "PersonaPresenceBusyExampleModel"
    },
    {
      name: "DND Persona",
      templateFile: "PersonaExample",
      model: "PersonaPresenceDNDExampleModel"
    },
    {
      name: "Offline Persona",
      templateFile: "PersonaExample",
      model: "PersonaPresenceOfflineExampleModel"
    },
    {
      name: "FacePile Persona",
      templateFile: "PersonaExample",
      model: "PersonaFacePileExampleModel"
    }
  ],
  jsFile: "PersonaExampleJS"
}

module.exports = data;