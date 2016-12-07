var data = {
   componentName: "Button",
   overview: "<p>Buttons are best used to enable a user to commit a change or complete steps in a task. They are typically found inside forms, dialogs, panels or pages. An example of their usage is confirming the deletion of a file in a confirmation dialog.</p><p>When considering their place in a layout, contemplate the order in which a user will flow through the UI. As an example, in a form, the individual will need to read and interact with the form fields before submiting the form. Therefore, as a general rule, the button should be placed at the bottom of the UI container (a dialog, panel, or page) which holds the related UI elements.</p><p>While buttons can technically be used to navigate a user to another part of the experience, this is not recommended - unless that navigation is part of an action or their flow.</p>",
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
         name: "Normal Button",
         templateFile: "ButtonExample",
         model: "ButtonExampleModel"
      },
      {
         name: "Primary Button",
         templateFile: "ButtonExample",
         model: "ButtonExamplePrimaryModel"
      },
      {
         name: "Hero Button",
         templateFile: "ButtonExample",
         model: "ButtonExampleHeroModel"
      },
      {
         name: "Compound Button",
         templateFile: "ButtonExample",
         model: "ButtonExampleCompoundModel"
      }
   ],
   states: [
      {
         name: ".is-disabled",
         applied: ".ms-Button",
         result: "When using an <code>&lt;a&gt;</code> element, apply this class to disable the button. When using a <code>&lt;button&gt;</code>, the <code>disabled</code> attribute can be used instead."
      }
   ],
   jsFile: "ButtonExampleJS"
}

module.exports = data;