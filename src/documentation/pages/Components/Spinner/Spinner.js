var data = {
  componentName: "Spinner",
  overview: "<p>A Spinner is an outline of a circle which animates around itself indicating to the user that things are processing. A Spinner is shown when it's unsure how long a task will take making it the indeterminate version of a ProgressIndicator. They can be various sizes, located inline with content or centered. They generally appear after an action is being processed or committed. They are subtle and generally do not take up much space, but are transitions from the completed task.</p>",
  availableReact: true,
  variants: [
    {
      name: "Default Spinner",
      templateFile: "SpinnerExample",
      model: "SpinnerExampleModel"
    },
    {
      name: "Large Spinner",
      templateFile: "SpinnerExample",
      model: "SpinnerLargeExampleModel"
    },
    {
      name: "Spinner with Label",
      templateFile: "SpinnerExample",
      model: "SpinnerWithLabelExampleModel"
    },
    {
      name: "Large Spinner with Label",
      templateFile: "SpinnerExample",
      model: "SpinnerLargeWithLabelExampleModel"
    }
  ],
  methods: [
    {
      name: "start()",
      parameters: [],
      description: "Starts or restarts the animation sequence"
    },
    {
      name: "stop()",
      parameters: [],
      description: "Stops the animation sequence"
    }
  ],
  jsFile: "SpinnerExampleJS"
}

module.exports = data;