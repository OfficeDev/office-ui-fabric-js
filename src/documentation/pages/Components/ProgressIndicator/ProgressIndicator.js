var data = {
  componentName: "ProgressIndicator",
  overview: `<p>Progress Indicators are used to show the completion status of an operation lasting more than 2 seconds. If the state of progress cannot be determined, use a Spinner instead. Progress Indicators can appear in a new panel, a flyout, under the UI initiating the operation, or even replacing the initiating UI, as long as the UI can return if the operation is canceled or is stopped.</p>
  <p>Progress Indicators feature a bar showing total units to completion, and total units finished. The description of the operation appears above the bar, and the status in text appears below. The description should tell someone exactly what the operation is doing. Examples of formatting include:</p>
  <p><strong>[Object]</strong> is being <strong>[operation name]</strong>, or<br/><strong>[Object]</strong> is being <strong>[operation name]</strong> to <strong>[destination name]</strong> or<br/><strong>[Object]</strong> is being <strong>[operation name]</strong> from <strong>[source name]</strong> to <strong>[destination name]</strong> </p>
  <p>Status text is generally in units elapsed and total units. If the operation can be canceled, an “X” glyph is used and should be placed in the upper right, aligned with the baseline of the operation name. When an error occurs, replace the status text with the error description using ms-fontColor-redDark.</p>
  <p>Real-world examples include copying files to a storage location, saving edits to a file, and more. Use units that are informative and relevant to give the best idea to users of how long the operation will take to complete. Avoid time units as they arerarely accurate enough to be trustworthy. Also combine steps of a complex operation into one total bar to avoid “rewinding” the bar. Instead change the operation description to reflect the change if necessary. Bars moving backwards reduce confidence in the service.</p>`,
  availableReact: true,
  variants: [
    {
      name: "Default ProgressIndicator",
      templateFile: "ProgressIndicatorExample",
      model: "ProgressIndicatorExampleModel"
    }
  ],
  methods: [
    {
      name: "setProgressPercent(percent)",
      parameters: [
        {
          name: "percent",
          type: "{Number} Floating point number from 0 to 1"
        }
      ],
      description: "Starts or restarts the animation sequence."
    },
    {
      name: "setProgress(progress)",
      parameters: [
        {
          name: "progress",
          type: "{Number} Sets the progress, must be between 0 and total"
        }
      ],
      description: "Sets the progress for a determinate operation. Use this in combination with setTotal."
    },
    {
      name: "setTotal(total)",
      parameters: [
        {
          name: "total",
          type: "{Number} Total size of component progress"
        }
      ],
      description: "Sets the total file size, etc. for a determinate operation. Use this in combination with setProgress."
    },
    {
      name: "setName(name)",
      parameters: [
        {
          name: "name",
          type: "{String} Name of title or label"
        }
      ],
      description: "Sets the text for the title or label."
    },
    {
      name: "setDescription(description)",
      parameters: [
        {
          name: "description",
          type: "{String} Text for description"
        }
      ],
      description: "Sets the text for the description."
    },
    {
      name: "cacheDOM()",
      parameters: [],
      description: "Caches elements and values of the component."
    }
  ],
  jsFile: "ProgressIndicatorExampleJS"
}

module.exports = data;