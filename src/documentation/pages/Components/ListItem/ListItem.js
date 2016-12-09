var data = {
   componentName: "ListItem",
   overview: "<p>Suitable for presenting a summary of an item with associated actions. Most often used within a List component. It was designed to represent an email message on desktop computers and is not currently touch friendly.</p>",
   variants: [
      {
         name: "Default List",
         templateFile: "ListItemElem",
         model: "ListItemDefaultExampleModel"
      },
      {
         name: "Image ListItem",
         templateFile: "ListItemElem",
         model: "ListItemImageExampleModel"
      },
      {
         name: "Document ListItem",
         templateFile: "ListItemElem",
         model: "ListItemDocumentExampleModel"
      },
      {
         name: "Selectable ListItem",
         templateFile: "ListItemElem",
         model: "ListItemSelectableExampleModel"
      },
      {
         name: "Selected ListItem",
         templateFile: "ListItemElem",
         model: "ListItemSelectedExampleModel"
      },
      {
         name: "Unseen ListItem",
         templateFile: "ListItemElem",
         model: "ListItemUnseenExampleModel"
      },
      {
         name: "Unread ListItem",
         templateFile: "ListItemElem",
         model: "ListItemUnreadExampleModel"
      }
   ],
   jsFile: "ListItemJS"
}

module.exports = data;