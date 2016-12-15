var data = {
  componentName: "FacePile",
  overview: `<p>The Facepile shows a list of faces or initials in a horizontal lockup. Each circle represents a person. Many times this component is used when sharing who has access to a specific view or file or when assigning a user to a task within a workflow.</p>`,
  availableReact: true,
  variants: [
    {
      name: "Default FacePile",
      templateFile: "FacePileElem",
      model: "FacePileModels"
    }
  ],
  states: [
    {
      name: ".is-active",
      applied: ".ms-PersonaCard",
      result: "Makes the PersonaCard for a person visible."
    },
    {
      name: ".is-active",
      applied: ".ms-FacePile-itemBtn--overflow",
      result: "Makes the overflow item for additional people visible."
    }
  ],
  jsFile: "FacePileJS"
}

module.exports = data;