var data = {
   componentName: "Table",
   overview: "<p>Presents tabular data with multiple rows and columns. The table&#39;s width is flexible, but it does not have any advanced responsive behaviors.</p>",
   variants: [
      {
         name: "Default Table",
         templateFile: "TableExample",
         model: "TableExampleModel"
      },
      {
         name: "Fixed Table",
         templateFile: "TableExample",
         model: "TableFixedExampleModel"
      },
      {
         name: "Selectable Table",
         templateFile: "TableExample",
         model: "TableSelectableExampleModel"
      }
   ],
   jsFile: "TableExampleJS"
}

module.exports = data;