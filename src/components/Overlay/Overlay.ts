// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.

namespace fabric {

  export class Overlay {
    public overlayElement: HTMLElement;

    constructor(overlayElement?: HTMLElement) {
      if (overlayElement) {
        this.overlayElement = overlayElement;
      } else {
        let overlayContainer = document.createElement("div");
        overlayContainer.setAttribute("class", "ms-Overlay");
        this.overlayElement = overlayContainer;
      }
      this.overlayElement.addEventListener("click", this.hide.bind(this), false);
    }

    public remove() {
      this.overlayElement.parentElement.removeChild(this.overlayElement);
    }

    public show(): void {
      this.overlayElement.classList.add("is-visible");
      document.body.classList.add("ms-u-overflowHidden");
    }

    public hide(): void {
      this.overlayElement.classList.remove("is-visible");
      document.body.classList.remove("ms-u-overflowHidden");
    }
  }
}
