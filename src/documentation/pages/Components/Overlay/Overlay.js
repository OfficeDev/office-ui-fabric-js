var data = {
   componentName: "Overlay",
   overview: "<p>Partially obscures the page to create a modal experience and focus the user&#39;s attention. Typically used with a Dialog or Panel.</p>",
   variants: [
      {
         name: "Default Overlay",
         templateFile: "OverlayExample",
         model: "OverlayDefaultExampleModel"
      },
      {
         name: "Dark Overlay",
         templateFile: "OverlayExample",
         model: "OverlayDarkExampleModel"
      }
   ],
   jsFile: "OverlayExampleJS"
}

module.exports = data;