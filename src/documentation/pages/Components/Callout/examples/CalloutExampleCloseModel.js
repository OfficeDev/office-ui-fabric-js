var CalloutExampleCloseModel = {
 "state": "is-hidden",
 "title": "All of your favorite people",
 "subText": "Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.",
 "modifier": "close",
 "closeIcon": "Clear",
 "arrowPosition": "arrowLeft",
 "actions": [
   {
     "component": "Link",
     "props": {
       "title": "Learn More",
       "modifier": "hero",
       "label": "Learn More",
       "tabIndex": 0
     }
   }
 ],
 "contextualHostProps": {
   "arrowPosition": "arrowLeft",
   "state": "is-open"
 },
 "button": {
   "label": "Open Callout",
   "tag": "button"
 }
}

module.exports = CalloutExampleCloseModel;