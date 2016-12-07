var SearchBoxExampleProps = {
  "label": "Search",
  "defaultValue": "",
  "icon": "Search",
  "modifier": "commandBar",
  "clearButton": {
    "component": "CommandButton",
    "props": {
      "icon": "Clear",
      "modifier": "noLabel",
      "tag": "button",
      "customClasses": "ms-SearchBox-clear"
    }
  },
  "filterButton": {
    "component": "CommandButton",
    "props": {
      "icon": "Filter",
      "modifier": "noLabel",
      "tag": "button",
      "customClasses": "ms-SearchBox-filter"
    }
  },
  "exitButton": {
    "component": "CommandButton",
    "props": {
      "icon": "ChromeBack",
      "modifier": "noLabel",
      "tag": "button",
      "customClasses": "ms-SearchBox-exit"
    }
  }
}

module.exports = SearchBoxExampleProps;
