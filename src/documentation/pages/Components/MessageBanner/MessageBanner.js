var data = {
  componentName: "MessageBanner",
  overview: "<p>Presents a message to the user, with an optional call to action. The message is typically an error, update, or alert.</p>",
  variants: [
    {
      name: "Default MessageBanner",
      templateFile: "MessageBannerExampleElem",
      model: "MessageBannerExampleModel"
    }
  ],
  methods: [
    {
      name: "init()",
      parameters: [],
      description: "Initializes component"
    },
    {
      name: "show()",
      parameters: [],
      description: "Shows MessageBanner if hidden"
    },
    {
      name: "showBanner()",
      parameters: [],
      description: "Shows MessageBanner if hidden, (deprecated) now use show()"
    }
  ],
  jsFile: "MessageBannerExampleJS"
}

module.exports = data;