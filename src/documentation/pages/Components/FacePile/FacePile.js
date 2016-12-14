var data = {
  componentName: "FacePile",
  overview: "<p>Displays several people with the option to add additional people or view the details of a person. Although not baked into the component, adding new people to a FacePile (the listing of faces horizontally) should occur through a panel using the FacePile PeoplePicker variant.</p>",
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