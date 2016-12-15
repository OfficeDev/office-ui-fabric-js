var data = {
  componentName: "List",
  overview: `<p>List provides a base component for rendering large sets of items. It is agnostic of layout, the tile component used, and selection management. These concerns can be layered separately.</p>
  <p>Performance is important, and DOM content is expensive. Therefore limit what you render. Unlike a simple for loop that renders all items in a set, a List uses ui virtualization. It only renders a subset of items, and as you scroll around, the subset of rendered content is shifted to what you're looking at. This gives a much better experience for large sets, especially when the per-item components are complex/render intensive/network intensive.</p>
  <p>Lists break down the set of items passed in into pages. Only pages within a "materialized window" are actually rendered. As that window changes due to scroll events, pages that fall outside that window are removed, and their layout space is remembered and pushed into spacer elements. This gives the user the experience of browsing massive amounts of content but only using a small number of actual elements. This gives the browser much less layout to resolve, and gives React DOM diffing much less content to worry about.</p>`,
  availableReact: true,
  variants: [
    {
      name: "Default List",
      templateFile: "ListElem",
      model: "ListModels"
    }
  ],
  jsFile: "ListJS"
}

module.exports = data;