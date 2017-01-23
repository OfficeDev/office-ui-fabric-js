var data = {
   componentName: "Breadcrumb",
   overview: `<p>Breadcrumbs should be used as a navigational aid in your app or site. They indicate the current page’s location within a hierarchy and help the user understand where they are in relation to the rest of that hierarchy. They also afford one-click access to higher levels of that hierarchy.</p>
   <p>Breadcrumbs are typically placed, in horizontal form, under the masthead or navigation of an experience, above the primary content area.</p>`,
   availableReact: true,
   bestPractices: {
      dos: [
         {
            "item": "Place Breadcrumbs at the top of a page, above a list of items, or above the main content of a page.",
            "item": "Place Breadcrumbs at the top of a page, above a list of items, or above the main content of a page."
         }
      ],
      donts: [
         {
            "item": "Don't use Breadcrumbs as a primary way to navigate an app or site.",
            "item": "Place Breadcrumbs at the top of a page, above a list of items, or above the main content of a page."
         }
      ]
   },
   variants: [
      {
         name: "Default Breadcrumb",
         templateFile: "BreadcrumbExample",
         model: "BreadcrumbExampleModel"
      }
   ],
   states: [
      {
         name: "<code>.is-overflow</code>",
         applied: ".ms-Breadcrumb",
         result: "Use this class to show an ellipsis, which opens a Contextual Menu of additional breadcrumbs. Without this class items that do not fit will be unavailable."
      },
      {
         name: "<code>.is-open</code>",
         applied: ".ms-Breadcrumb-overflowMenu",
         result: "Displays the overflow menu."
      }
   ],
   methods: [
      {
         name: "removeOutlinesOnClick()",
         parameters: [
         ],
         description: "Removes focus outlines so they don't linger after click"
      },
      {
         name: "addItem(itemLabel, itemLink)",
         parameters: [
            {
               name: "itemLabel",
               type: "{String} the item's text label"
            },
            {
               name: "itemLink",
               type: "{String} the item's href link"
            }
         ],
         description: "Adds a breadcrumb item to a breadcrumb"
      },
      {
         name: "removeItemByLabel(itemLabel)",
         parameters: [
            {
               name: "itemLabel",
               type: "{String} the item's text label"
            }
         ],
         description: "Removes a breadcrumb item by item label in the breadcrumbs list"
      },
      {
         name: "removeItemByPosition(value)",
         parameters: [
            {
               name: "value",
               type: "{number} the item's index"
            }
         ],
         description: "Removes a breadcrumb item by position in the breadcrumb's list. Index starts at 0"
      },
      {
         name: "init()",
         parameters: [
         ],
         description: "Initializes component"
      }
   ],
   jsFile: "BreadcrumbExampleJS"
}

module.exports = data;