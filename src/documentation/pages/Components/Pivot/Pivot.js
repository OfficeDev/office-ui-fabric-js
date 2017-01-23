var data = {
  componentName: "Pivot",
  overview: `<p>The Pivot control and related tabs pattern are used for navigating frequently accessed, distinct content categories. Pivots allow for navigation between two or more content views and relies on text headers to articulate the different sections of content.</p>
  <ul>
    <li>Tapping on a pivot item header navigates to that header's section content.</li>
    <li>Swiping left or right on a pivot item header navigates to the adjacent section.</li>
    <li>Swiping left or right on section content navigates to the adjacent section. </li>
    <li>Pivots are stationary when all pivot headers fit within the allowed space.</li>
    <li>Pivots carousel when all pivot headers don't fit within the allowed space.</li>
  </ul>
  <p>Tabs are a visual variant of Pivot that use a combination of icons and text or just icons to articulate section content.</p>`,
  availableReact: true,
  variants: [
    {
      name: "Default Pivot",
      templateFile: "PivotExample",
      model: "PivotDefaultExampleModel"
    },
    {
      name: "Large Pivot",
      templateFile: "PivotExample",
      model: "PivotLargeExampleModel"
    },
    {
      name: "Tabs Pivot",
      templateFile: "PivotExample",
      model: "PivotTabsExampleModel"
    },
    {
      name: "Large Tabs Pivot",
      templateFile: "PivotExample",
      model: "PivotLargeTabsExampleModel"
    }
  ],
  jsFile: "PivotExampleJS"
}

module.exports = data;