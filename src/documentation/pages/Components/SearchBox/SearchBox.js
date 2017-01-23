var data = {
  componentName: "SearchBox",
  overview: `<p>SearchBoxes provide an input field for searching through content, allowing users to locate specific items within the website or app.</p>
  <h2 class="ms-font-xl">Zero input state </h2>
  <p>When the user has clicked into the SearchBox, but has not entered any text, there is an opportunity to display "hint text" within the input field, explaining what a user can do next. This could prompt a user to search for specific type content, or explain the scope of the search. Examples include "type to search", "try searching for &lt;x&gt;", "search for a place" or "type to search in &lt;x location&gt;".</p>
  <h2 class="ms-font-xl">Autocomplete suggestions</h2>
  <p>As the user enters a query string, they are provided with a dropdown of autocomplete suggestions or disambiguation options. This will help them expedite the input process and formulate an effective query. Recent search history, trending searches, contextual search suggestions, hints and tips are all good candidates for autocomplete content. In general, autocomplete suggestions have the user's input highlighted in some way (generally bolded) to indicate why it's being displayed. As the user enters more keystrokes, the suggestions update continuously/in real time. To see autocomplete suggestions, the user does not need to hit enter (execute a full search), as it is a lightweight way to get quick suggestions or results. If there are mixed result types within the autocomplete suggestions, provide visual indicators or grouping to help organize the information, making it easier to parse.</p>
  <h2 class="ms-font-xl>Full search</h2>
  <p>If a user hits "enter" after entering input, a full search is executed. Full searches often go to another "results" page, or change/filter the content of the current page to show only applicable content. The results can appear in any form that best communicates the content.</p>
  <p>As a general guideline, results should be displayed in context with the query that was typed, with immediate access to edit the query or enter a new one. One method to enable efficient access to both edit the previous query and enter a new query is to highlight the previous query when the field is reactivated. This way, any keystroke will replace the previous string, but the string is maintained so that the user can position a cursor to edit or append the previous string.</p>
  <h2 class="ms-font-xl">Search scopes</h2>
  <p>Although search entry points tend to be similarly visualized, they can provide access to results that range from broad to narrow. By effectively communicating the scope of a search, you can help to ensure that the user expectation will be met by the capabilities of the search you are performing, which will reduce the possibility of frustration. The search entry point should be juxtaposed with the content being searched.</p>
  <p>Some common search scopes include:</p>
  <ul>
    <li>
      <strong>Global:</strong><span> Search across multiple sources of cloud and local content. Varied results include URLs, documents, media, actions, apps, and more.</span>
    </li>
    <li>
      <strong>Web:</strong><span> Search a web index. Results include pages, entities, and answers.</span>
    </li>
    <li>
      <strong>My stuff:</strong><span> Search across device(s), cloud, social graphs, and more. Results are varied, but are constrained by the connection to user account(s).</span>
    </li>
  </ul>
  <h2 class="ms-font-xl">SearchBox with no parent container</h2>
  <p>Use a SearchBox without a parent container when it is not restricted to a certain width to accommodate other content. This search box will span the entire width of the space it's in.</p>`,
  availableReact: true,
  variants: [
    {
      name: "Default SearchBox",
      templateFile: "SearchBoxExample",
      model: "SearchBoxExampleModel"
    },
    {
      name: "Collapsed SearchBox",
      templateFile: "SearchBoxExample",
      model: "SearchBoxCollapsedExampleModel"
    },
    {
      name: "CommandBar SearchBox",
      templateFile: "SearchBoxExample",
      model: "SearchBoxCommandbarExampleModel"
    }
  ],
  jsFile: "SearchBoxExampleJS"
}

module.exports = data;