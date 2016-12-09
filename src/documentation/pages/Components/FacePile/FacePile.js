var data = {
   componentName: "FacePile",
   overview: "<p>Displays several people with the option to add additional people or view the details of a person. Although not baked into the component, adding new people to a FacePile (the listing of faces horizontally) should occur through a panel using the FacePile PeoplePicker variant.</p>",
   variants: [
      {
         name: "Default FacePile",
         templateFile: "FacePileElem",
         model: "FacePileModels"
      }
   ],
   jsFile: "FacePileJS"
}

module.exports = data;