// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.

/// <reference path="../PanelHost/PanelHost.ts"/>

namespace fabric {
  /**
   * Panel Host
   *
   * A host for the panel control
   *
   */
  const ANIMATE_IN_STATE = "animate-in";
  const ANIMATE_OUT_STATE = "animate-out";
  const ANIMATION_END = 400;

  export class Panel {

    public panelHost: PanelHost;
    private _panel: Element;
    private _direction: string;
    private _animateOverlay: boolean;
    private _closeButton: Element;
    private _clickHandler: EventListener;

    /**
     *
     * @param {HTMLElement} container - the target container for an instance of Panel
     * @constructor
     */
    constructor(panel: Element,  direction?: string, animateOverlay?: boolean) {
      this._panel = panel;
      this._direction = direction || "right";
      this._animateOverlay = animateOverlay || true;
      this.panelHost = new fabric.PanelHost(this._panel, this._animateInPanel);
      this._closeButton = this._panel.querySelector(".ms-PanelAction-close");
      this._clickHandler = this.dismiss.bind(this, null);
      this._setEvents();

      // Set body height to 100% and overflow hidden while panel is open
      document.body.setAttribute("style", "height: 100%; overflow: hidden;");
    }

    public dismiss(callBack?: Function) {
      this._panel.classList.add(ANIMATE_OUT_STATE);
      setTimeout(() => {
        this._panel.classList.remove(ANIMATE_OUT_STATE);
        this._panel.classList.remove("is-open");
        this.panelHost.dismiss();
        if (callBack) {
          callBack();
        }
        // Remove temporary body styles
        document.body.setAttribute("style", "");
      }, ANIMATION_END);
      if (this._closeButton !== null) {
        this._closeButton.removeEventListener("click", this._clickHandler);
      }
    }

    private _setEvents() {
      this.panelHost.overlay.overlayElement.addEventListener("click", this._clickHandler);
      if (this._closeButton !== null) {
        this._closeButton.addEventListener("click", this._clickHandler);
      }
    }

    private _animateInPanel(layer: Element) {
      layer.classList.add(ANIMATE_IN_STATE);
      layer.classList.add("is-open");
      setTimeout(() => {
        layer.classList.remove(ANIMATE_IN_STATE);
      }, ANIMATION_END);
    }
  }
}
