// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
// "use strict";

interface Window {
    CustomEvent: Object;
}

// CustomEvent Polyfill to support IE
(function () {
    function CustomEvent ( event, params ) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        let evt: CustomEvent = document.createEvent("CustomEvent");
        evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
        return evt;
    };
    CustomEvent.prototype = Event.prototype;
    window.CustomEvent = <Object>CustomEvent;
})();
