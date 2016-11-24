/// <reference path="../Panel/Panel.ts"/>

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
"use strict";

namespace fabric {

  interface DropdownItems {
    oldOption: HTMLOptionElement;
    newItem: HTMLLIElement;
  }

  interface WindowSize {
    x: number;
    y: number;
  }

  const DROPDOWN_CLASS = "ms-Dropdown";
  const DROPDOWN_TITLE_CLASS = "ms-Dropdown-title";
  const DROPDOWN_LABEL_HELPER = "ms-Dropdown-truncator";
  const DROPDOWN_ITEMS_CLASS = "ms-Dropdown-items";
  const DROPDOWN_ITEM_CLASS = "ms-Dropdown-item";
  const DROPDOWN_SELECT_CLASS_SELECTOR = ".ms-Dropdown-select";
  const PANEL_CLASS = "ms-Panel";
  const IS_OPEN_CLASS = "is-open";
  const IS_DISABLED_CLASS = "is-disabled";
  const IS_SELECTED_CLASS = "is-selected";
  const ANIMATE_IN_CLASS = "animate-in";
  const SMALL_MAX_WIDTH: number = 479;

  /**
   * Dropdown Plugin
   *
   * Given .ms-Dropdown containers with generic <select> elements inside, this plugin hides the original
   * dropdown and creates a new "fake" dropdown that can more easily be styled across browsers.
   *
   */
  export class Dropdown {

    private _container: HTMLElement;
    private _originalDropdown: HTMLSelectElement;
    private _newDropdownLabel: HTMLSpanElement;
    private _dropdownLabelHelper: HTMLSpanElement;
    private _newDropdown: HTMLUListElement;
    private _dropdownItems: Array<DropdownItems>;
    private _panelContainer: HTMLElement;
    private _panel: fabric.Panel;

    /**
     *
     * @param {HTMLElement} container - the target container for an instance of Dropdown
     * @constructor
     */
    constructor(container: HTMLElement) {
      this._container = container;
      this._dropdownLabelHelper = document.createElement("span");
      this._dropdownLabelHelper.classList.add(DROPDOWN_LABEL_HELPER);
      this._dropdownLabelHelper.classList.add(DROPDOWN_TITLE_CLASS);
      this._newDropdownLabel = document.createElement("span");
      this._newDropdownLabel.classList.add(DROPDOWN_TITLE_CLASS);

      this._newDropdown = document.createElement("ul");
      this._newDropdown.classList.add(DROPDOWN_ITEMS_CLASS);
      this._dropdownItems = [];

      this._originalDropdown = <HTMLSelectElement>container.querySelector(DROPDOWN_SELECT_CLASS_SELECTOR);
      let _originalOptions = this._originalDropdown.querySelectorAll("option");

      /** Bind the callbacks to retain their context */
      this._onCloseDropdown = this._onCloseDropdown.bind(this);
      this._onItemSelection = this._onItemSelection.bind(this);
      this._onOpenDropdown = this._onOpenDropdown.bind(this);

      /** Create a new option as a list item, and add it to the replacement dropdown */
      for (let i = 0; i < _originalOptions.length; ++i) {
        let option = <HTMLOptionElement>_originalOptions[i];
        if (option.selected) {
          this._newDropdownLabel.innerHTML = option.text;
        }

        let newItem = document.createElement("li");
        newItem.classList.add(DROPDOWN_ITEM_CLASS);
        if (option.disabled) {
          newItem.classList.add(IS_DISABLED_CLASS);
        }
        newItem.innerHTML = option.text;
        newItem.addEventListener("click", this._onItemSelection);
        this._newDropdown.appendChild(newItem);

        this._dropdownItems.push( {
          oldOption: option,
          newItem: newItem
        });
      }

      /** Add the new replacement dropdown */
      container.appendChild(this._newDropdownLabel);
      container.appendChild(this._newDropdown);

      /** Add dropdown label helper for truncation */
      container.appendChild(this._dropdownLabelHelper);

      /** Toggle open/closed state of the dropdown when clicking its title. */
      this._newDropdownLabel.addEventListener("click", this._onOpenDropdown );
      this._checkTruncation();
      this._setWindowEvent();
    }

    private _setWindowEvent() {
      window.addEventListener("resize", () => {
        this._doResize();
        this._checkTruncation();
      }, false);
    }

    private _checkTruncation(): void {
      let selected = this._newDropdown.querySelector(`.${IS_SELECTED_CLASS}`);
      let origText = (selected ?
                    selected.textContent :
                    this._newDropdown.querySelectorAll(`.${DROPDOWN_ITEM_CLASS}`)[0].textContent);
      this._dropdownLabelHelper.textContent = origText;
      if (this._dropdownLabelHelper.offsetHeight > this._newDropdownLabel.offsetHeight) {
        let i = 0;
        let ellipsis = "...";
        let newText;
        do {
          i--;
          newText = origText.slice(0, i);
          this._dropdownLabelHelper.textContent = newText + ellipsis;
        } while (this._dropdownLabelHelper.offsetHeight > this._newDropdownLabel.offsetHeight);
      }
      this._newDropdownLabel.textContent = this._dropdownLabelHelper.textContent;
    }

    private _getScreenSize(): WindowSize {
      let w = window;
      let wSize = {
        x: 0,
        y: 0
      };
      let d = document,
          e = d.documentElement,
          g = d.getElementsByTagName("body")[0];

      wSize.x = w.innerWidth || e.clientWidth || g.clientWidth;
      wSize.y = w.innerHeight || e.clientHeight || g.clientHeight;

      return wSize;
    }

    private _doResize() {
      let isOpen = this._container.classList.contains(IS_OPEN_CLASS);
      if (!isOpen) {
        return;
      }

      let screenSize = this._getScreenSize().x;
      if (screenSize <= SMALL_MAX_WIDTH) {
        this._openDropdownAsPanel();
      } else {
        this._removeDropdownAsPanel();
      }
    }

    private _openDropdownAsPanel() {
      if (this._panel === undefined) {
        this._panelContainer = document.createElement("div");
        this._panelContainer.classList.add(PANEL_CLASS);
        this._panelContainer.classList.add(DROPDOWN_CLASS);
        this._panelContainer.classList.add(IS_OPEN_CLASS);
        this._panelContainer.classList.add(ANIMATE_IN_CLASS);

        this._panelContainer.appendChild(this._newDropdown);

        /** Assign the script to the new panel, which creates a panel host, overlay, and attaches it to the DOM */
        this._panel = new fabric.Panel(this._panelContainer);
      }
    }
    private _removeDropdownAsPanel(evt?: Event) {
      if (this._panel !== undefined) {
          /** destroy panel and move dropdown back to outside the panel */
          /* if event target is overlay element, only append dropdown to prevent */
          /* double dismiss bug, otherwise, dismiss and append */
          if (evt && evt.target === this._panel.panelHost.overlay.overlayElement) {
            this._container.appendChild(this._newDropdown);
          } else {
            this._panel.dismiss(() => {
              this._container.appendChild(this._newDropdown);
            });
          }
          this._panel = undefined;
        }
    }

    private _onOpenDropdown(evt: Event) {
      let isDisabled = this._container.classList.contains(IS_DISABLED_CLASS);
      let isOpen = this._container.classList.contains(IS_OPEN_CLASS);
      if (!isDisabled && !isOpen) {
        /** Stop the click event from propagating, which would just close the dropdown immediately. */
        evt.stopPropagation();
        this._closeOtherDropdowns();

        /** Go ahead and open that dropdown. */
        this._container.classList.add(IS_OPEN_CLASS);

        /** Temporarily bind an event to the document that will close this dropdown when clicking anywhere. */
        document.addEventListener("click", this._onCloseDropdown);

        let screenSize = this._getScreenSize().x;
        if (screenSize <= SMALL_MAX_WIDTH) {
          this._openDropdownAsPanel();
        }
      }
    }

    private _closeOtherDropdowns() {
      let dropdowns = document.querySelectorAll(`.${DROPDOWN_CLASS}.${IS_OPEN_CLASS}`);
      for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove(IS_OPEN_CLASS);
      }
    }

    private _onCloseDropdown(evt: Event) {
      this._removeDropdownAsPanel(evt);
      this._container.classList.remove(IS_OPEN_CLASS);
      document.removeEventListener("click", this._onCloseDropdown);
    }

    private _onItemSelection(evt: any) {
      let item = <HTMLLIElement>evt.target;
      let isDropdownDisabled = this._container.classList.contains(IS_DISABLED_CLASS);
      let isOptionDisabled = item.classList.contains(IS_DISABLED_CLASS);
      if (!isDropdownDisabled && !isOptionDisabled) {
          /** Deselect all items and select this one. */
          /** Update the original dropdown. */
          for (let i = 0; i < this._dropdownItems.length; ++i) {
            if (this._dropdownItems[i].newItem === item) {
              this._dropdownItems[i].newItem.classList.add(IS_SELECTED_CLASS);
              this._dropdownItems[i].oldOption.selected = true;
            } else {
              this._dropdownItems[i].newItem.classList.remove(IS_SELECTED_CLASS);
              this._dropdownItems[i].oldOption.selected = false;
            }
          }

          /** Update the replacement dropdown's title. */
          this._newDropdownLabel.innerHTML = item.textContent;
          this._checkTruncation();

          /** Trigger any change event tied to the original dropdown. */
          let changeEvent = document.createEvent("HTMLEvents");
          changeEvent.initEvent("change", false, true);
          this._originalDropdown.dispatchEvent(changeEvent);
      }
    }
  }

}
