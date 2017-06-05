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
      name: "showBanner()",
      parameters: [],
      description: "Shows MessageBanner if hidden, now use show()"
    },
      {
      name: "show()",
      parameters: [],
      description: "Shows MessageBanner if hidden"
    },
    {
      name: "hide()",
      parameters: [],
      description: "Hides MessageBanner if visible"
    }
  ],
  jsFile: "MessageBannerExampleJS"
}

module.exports = data;