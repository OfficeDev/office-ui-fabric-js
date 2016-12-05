var data = {
   componentName: "Breadcrumb",
   overview: "<p>Breadcrumbs should be used as a navigational aid in your app or site. They indicate the current page’s location within a hierarchy and help the user understand where they are in relation to the rest of that hierarchy. They also afford one-click access to higher levels of that hierarchy.</p><p>Breadcrumbs are typically placed, in horizontal form, under the masthead or navigation of an experience, above the primary content area.</p>",
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
         modelName: "BreadcrumbExample",
         props: "BreadcrumbExampleModel"
      }
   ],
   states: [
      {
         name: ".is-overflow",
         applied: ".ms-Breadcrumb",
         result: "Use this class to show an ellipsis, which opens a Contextual Menu of additional breadcrumbs. Without this class items that do not fit will be unavailable."
      },
      {
         name: ".is-open",
         applied: ".ms-Breadcrumb-overflowMenu",
         result: "Displays the overflow menu."
      }
   ]
}

module.exports = data;