var data = {
   componentName: "Persona",
   overview: "<p>Represents a person, complete with a profile image and additional details. Where a profile image is not available, the user&#39;s initials can be shown instead.</p>",
   variants: [
      {
         name: "Default Persona",
         templateFile: "PersonaExample",
         model: "PersonaExampleProps"
      },
      {
         name: "Fixed Table",
         templateFile: "PersonaExample",
         model: "PersonaExampleProps"
      },
      {
         name: "Selectable Table",
         templateFile: "PersonaExample",
         model: "PersonaExampleProps"
      }
   ],
   jsFile: "PersonaExampleJS"
}

module.exports = data;