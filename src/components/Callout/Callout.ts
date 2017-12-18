// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.

/// <reference path="../Button/Button.ts"/>
/// <reference path="../Button/IButton.ts"/>

/**
 * Callout
 *
 * Add callouts to things and stuff
 *
 */

/// <reference path="../ContextualHost/ContextualHost.ts"/>
const STATE_HIDDEN = "is-hidden";
const CLOSE_BUTTON_CLASS = ".ms-Callout-close";
const MODIFIER_OOBE_CLASS = "ms-Callout--OOBE";

namespace fabric {
  "use strict";

  export class Callout {

    private _container: Element;
    private _addTarget: Element;
    private _closeButton: Element;
    private _position: string;
    private _contextualHost: ContextualHost;

    constructor(container: Element, addTarget: Element, position: string) {
      this._container = container;
      this._addTarget = addTarget;
      this._position = position;
      this._closeButton = document.querySelector(CLOSE_BUTTON_CLASS);
      this._setOpener();
    }

    private _setOpener() {
      this._addTarget.addEventListener("click", this._clickHandler.bind(this), true);
      this._addTarget.addEventListener("keyup", this._keyupHandler.bind(this), true);
    }

    private _openContextMenu() {
      let modifiers = [];
      if (this._hasModifier(MODIFIER_OOBE_CLASS)) {
        modifiers.push("primaryArrow");
      }

      this._container.classList.remove(STATE_HIDDEN);
      this._contextualHost = new fabric.ContextualHost(
        <HTMLElement>this._container,
        this._position,
        this._addTarget,
        true,
        modifiers
      );

      if (this._closeButton) {
        this._closeButton.addEventListener("click", this._closeHandler.bind(this), false);
      }
    }

    private _hasModifier(modifierClass) {
      return this._container.classList.contains(modifierClass);
    }

    private _closeHandler(e) {
      if (this._contextualHost != null) {
        this._contextualHost.disposeModal();
      }
      this._closeButton.removeEventListener("click", this._closeHandler.bind(this), false);
      this._addTarget.removeEventListener("click", this._clickHandler.bind(this), true);
      this._addTarget.removeEventListener("keyup", this._keyupHandler.bind(this), true);
    }

    private _clickHandler(e) {
      this._openContextMenu();
    }

    private _keyupHandler(event: KeyboardEvent): void {
      if (event.keyCode === 32) {
        event.stopPropagation();
        event.preventDefault();
        this._openContextMenu();
      } else {
        this._closeHandler(event);
      }
    }
  }
}
