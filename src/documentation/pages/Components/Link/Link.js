var data = {
  componentName: "Link",
  overview: `<p>With a Link, users can navigate to another page, window, or Help topic; display a definition; initiate a command; or choose an option. A Link indicates that it can be clicked, typically by being displayed using the visited or unvisited link system colors. Traditionally, Links are underlined as well, but that approach is often unnecessary and falling out of favor to reduce visual clutter.</p>
  <p>A Link is the lightest weight clickable control, and is often used to reduce the visual complexity of a design.</p>`,
  availableReact: true,
  variants: [
    {
      name: "Default Link",
      templateFile: "LinkExample",
      model: "LinkModels"
    }
  ]
}

module.exports = data;