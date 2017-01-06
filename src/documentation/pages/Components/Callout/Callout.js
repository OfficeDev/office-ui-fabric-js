var data = {
   componentName: "Callout",
   overview: `<p>Callouts are a powerful way to simplify a user interface. They host tips and other information users need when they need it, with minimal effort on their part. Callouts can help you use screen space more effectively and reduce screen clutter. However, poorly designed Callouts can be annoying, distracting, unhelpful, overwhelming, or in the way. </p>
   <p>Use a Callout for displaying additional contextual information about an item on the screen. Unlike Tooltips, Callouts also have a tail that identifies their source. A common use for Callout is the introduction of a new feature or capability of an app or site. Alternate usages include pairing the Callout with a button or clickable element for on-demand presentation of additional or supporting content.</p>
   <p>Real-world examples of this implementation can be seen in administrative interfaces where a particularly difficult-to-understand concept is paired with the ms-Icon--info &quot;i&quot; icon. In this example, Callout - with its tip text - is opened when the user clicks on or hovers over the icon.</p>`,
   availableReact: true,
   variants: [
      {
         name: "Default Callout",
         templateFile: "CalloutExample",
         model: "CalloutExampleModel"
      },
      {
         name: "Close Callout",
         templateFile: "CalloutExample",
         model: "CalloutExampleCloseModel"
      },
      {
         name: "Action Callout",
         templateFile: "CalloutExample",
         model: "CalloutExampleActionModel"
      },
      {
         name: "OOBE (Out of the Box Experience)",
         templateFile: "CalloutExample",
         model: "CalloutExampleOOBEModel"
      },
      {
         name: "Peek Callout",
         templateFile: "CalloutExample",
         model: "CalloutExamplePeekModel"
      }
   ],
   jsFile: "CalloutExampleJS"
}

module.exports = data;