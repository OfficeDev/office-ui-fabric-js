//Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/**
 * Office UI Fabric JS 1.5.0
 * The JavaScript front-end framework for building experiences for Office 365.
 **/
declare namespace fabric {
    class Animate {
        private static _transformProps;
        private static _filters;
        private static _timeProps;
        private static _callbackProps;
        private static _animationObjects;
        /**
        * @param {HTMLElement} element
        * @param {object} props Transition properties
        * @param {number} props.duration The duration of the transition in seconds
        * @param {number} props.delay A delay in seconds that occurs before the transition starts
        * @param {string} props.ease An easing equation applied to the transition
        * @param {function} props.onEnd A function that is called when the transition ends
        * @param {array} props.onEndArgs An array of parameters applied to the onEnd function
        * @param {number} props.x props.y props.left, props.opacity etc... CSS values to transition to
         */
        static transition(element: HTMLElement, props: any): void;
        /**
         * @param {HTMLElement} element
         * @param {string} keyframes A name of a keyframe animation
         * @param {object} props Animation properties
         * @param {number} props.duration The duration of the animation in seconds
         * @param {number} props.delay A delay in seconds that occurs before the animation starts
         * @param {string} props.ease An easing equation applied to the animation
         * @param {function} props.onEnd A function that is called when the animation ends
         * @param {array} props.onEndArgs An array of parameters applied to the onEnd function
        */
        static animation(element: HTMLElement, keyframes: string, props: any): void;
        /**
         * @param {HTMLElement} element
         * @param {object} props Scroll animation properties
         * @param {number} props.duration The duration of the transition in seconds
         * @param {number} props.top The end scroll position of the element
         * @param {number} props.delay A delay in seconds that occurs before the scroll starts
         * @param {function} props.onEnd A function that is called when the scrolling animation ends
         * @param {array} props.onEndArgs An array of parameters applied to the onEnd function
        */
        static scrollTo(element: HTMLElement, props: any): void;
        private static _setScrollProperties(obj);
        private static _parseProperties(obj);
        private static _animateScroll(obj);
        private static _createTransition(obj);
        private static _createAnimation(obj);
        private static _getTransitionProperties(obj);
        private static _setProperties(obj);
        private static _setRegularValues(obj, key);
        private static _setFilterValues(obj, key);
        private static _setTransformValues(obj, key);
        private static _setTransformations(obj);
        private static _setCallback(obj);
        private static _complete(event);
        private static _getAnimationObjByElement(element);
        private static _removeAnimationObject(obj);
        private static _executeCallback(obj);
        private static _contains(array, value);
        private static _camelCaseToDash(value);
        private static _easeOutExpo(time, begin, change, duration);
    }
}

declare namespace fabric {
    class Ease {
        static QUAD_EASE_IN: string;
        static CUBIC_EASE_IN: string;
        static QUART_EASE_IN: string;
        static QUINT_EASE_IN: string;
        static SINE_EASE_IN: string;
        static EXPO_EASE_IN: string;
        static CIRC_EASE_IN: string;
        static BACK_EASE_IN: string;
        static QUAD_EASE_OUT: string;
        static CUBIC_EASE_OUT: string;
        static QUART_EASE_OUT: string;
        static QUINT_EASE_OUT: string;
        static SINE_EASE_OUT: string;
        static EXPO_EASE_OUT: string;
        static CIRC_EASE_OUT: string;
        static BACK_EASE_OUT: string;
        static QUAD_EASE_IN_OUT: string;
        static CUBIC_EASE_IN_OUT: string;
        static QUART_EASE_IN_OUT: string;
        static QUINT_EASE_IN_OUT: string;
        static SINE_EASE_IN_OUT: string;
        static EXPO_EASE_IN_OUT: string;
        static CIRC_EASE_IN_OUT: string;
        static BACK_EASE_IN_OUT: string;
        private static CB;
    }
}

interface Window {
    CustomEvent: Object;
}

/**
 * @namespace fabric
 */
declare namespace fabric {
    /**
     * Breadcrumb component
     *
     * Shows the user"s current location in a hierarchy and provides a means of navigating upward.
     *
     */
    class Breadcrumb {
        private static MEDIUM;
        container: HTMLElement;
        private _breadcrumb;
        private _listItems;
        private _contextMenu;
        private _overflowButton;
        private _overflowMenu;
        private _breadcrumbList;
        private _currentMaxItems;
        private _itemCollection;
        private _tabIndex;
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of Breadcrumb
         * @constructor
         *
         * If dynamically populating a list run the constructor after the list has been populated
         * in the DOM.
        */
        constructor(container: HTMLElement);
        /**
         *  removes focus outlines so they don"t linger after click
        */
        removeOutlinesOnClick(): void;
        /**
         * Adds a breadcrumb item to a breadcrumb
         * @param itemLabel {String} the item's text label
         * @param itemLink {String} the item's href link
        */
        addItem(itemLabel: string, itemLink: string): void;
        /**
         * Removes a breadcrumb item by item label in the breadcrumbs list
         * @param itemLabel {String} the item's text label
        */
        removeItemByLabel(itemLabel: string): void;
        /**
         * removes a breadcrumb item by position in the breadcrumb's list
         * index starts at 0
         * @param value {number} the item's index
        */
        removeItemByPosition(value: number): void;
        /**
         * initializes component
        */
        init(): void;
        /**
         * create internal model of list items from DOM
        */
        private _createItemCollection();
        /**
         * Re-render lists on resize
         *
        */
        private _onResize();
        /**
         * render breadcrumbs and overflow menus
        */
        private _renderList();
        /**
         * updates the breadcrumbs and overflow menu
        */
        private _updateBreadcrumbs();
        /**
         * creates the overflow menu
        */
        private _addItemsToOverflow(maxItems);
        /**
         * creates the breadcrumbs
        */
        private _addBreadcrumbItems(maxItems);
        /**
         * resets a list by removing its children
        */
        private _resetList(list);
        /**
         * opens the overflow menu
        */
        private _openOverflow(event);
        private _overflowKeyPress(event);
        /**
         * closes the overflow menu
        */
        private _closeOverflow(event);
        /**
         * caches elements and values of the component
        */
        private _cacheDOM();
        /**
        * sets handlers for resize and button click events
        */
        private _setListeners();
    }
}

/**
 * Button
 *
 * Mostly just a click handler
 *
 */
declare namespace fabric {
    class Button {
        private _container;
        private _clickHandler;
        constructor(container: Element, clickHandler?: EventListener);
        disposeEvents(): void;
        private _setClick();
    }
}

interface IButton {
    container?: Element;
    label?: string;
    icon?: string;
    modifier?: string;
    tag?: string;
}

/**
 * ContextualHost
 *
 * Hosts contextual menus and callouts
 * NOTE: Position bottom only works if html is set to max-height 100%, overflow hidden
 * and body is set to overflow scroll, body is set to height 100%
 *
 */
/**
 * @namespace fabric
 */
declare namespace fabric {
    class ContextualHost {
        static hosts: Array<ContextualHost>;
        private _contextualHost;
        private _modalWidth;
        private _modalHeight;
        private _teWidth;
        private _teHeight;
        private _direction;
        private _container;
        private _disposalCallback;
        private _targetElement;
        private _matchTargetWidth;
        private _contextualHostMain;
        private _children;
        private _hasArrow;
        private _arrow;
        constructor(content: HTMLElement, direction: string, targetElement: Element, hasArrow?: boolean, modifiers?: Array<string>, matchTargetWidth?: boolean, disposalCallback?: Function);
        disposeModal(): void;
        setChildren(value: ContextualHost): void;
        contains(value: HTMLElement): boolean;
        private createContainer();
        private _openModal();
        private _findAvailablePosition();
        private _showModal();
        private _positionOk(pos1, pos2, pos3?, pos4?);
        private _calcLeft(mWidth, teWidth, teLeft);
        private _calcTop(mHeight, teHeight, teTop);
        private _setPosition(curDirection?);
        private _tryPosModalLeft();
        private _tryPosModalRight();
        private _tryPosModalBottom();
        private _tryPosModalTop();
        private _copyModalToBody();
        private _saveModalSize();
        private _dismissAction(e);
        private _setDismissClick();
        private _handleKeyUpDismiss(e);
        private _resizeAction();
        private _setResizeDisposal();
    }
}

/// <reference path="../Button/Button.d.ts" />
/// <reference path="../Button/IButton.d.ts" />
/// <reference path="../ContextualHost/ContextualHost.d.ts" />
/**
 * Callout
 *
 * Add callouts to things and stuff
 *
 */
declare const STATE_HIDDEN: string;
declare const CLOSE_BUTTON_CLASS: string;
declare const MODIFIER_OOBE_CLASS: string;
declare namespace fabric {
    class Callout {
        private _container;
        private _addTarget;
        private _closeButton;
        private _position;
        private _contextualHost;
        constructor(container: Element, addTarget: Element, position: string);
        private _setOpener();
        private _openContextMenu();
        private _hasModifier(modifierClass);
        private _closeHandler(e);
        private _clickHandler(e);
        private _keyupHandler(event);
    }
}

declare namespace fabric {
    /**
     * CheckBox Plugin
     *
     * Adds basic demonstration functionality to .ms-CheckBox components.
     *
     */
    class CheckBox {
        protected _choiceField: HTMLElement;
        protected _choiceInput: HTMLInputElement;
        private _container;
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of CheckBox
         * @constructor
         */
        constructor(container: HTMLElement);
        getValue(): boolean;
        toggle(): void;
        check(): void;
        unCheck(): void;
        removeListeners(): void;
        protected _addListeners(events?: any): void;
        private _FocusHandler();
        private _BlurHandler();
        private _ClickHandler(event);
        private _KeydownHandler(event);
    }
}

/// <reference path="../CheckBox/CheckBox.d.ts" />
declare namespace fabric {
    /**
     * RadioButton Plugin
     *
     * Adds basic demonstration functionality to .ms-RadioButton components.
     *
     */
    class RadioButton {
        protected _choiceField: HTMLElement;
        protected _choiceInput: HTMLInputElement;
        private _container;
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of RadioButton
         * @constructor
         */
        constructor(container: HTMLElement);
        getValue(): boolean;
        toggle(): void;
        check(): void;
        unCheck(): void;
        removeListeners(): void;
        protected _addListeners(): void;
        private _RadioClickHandler(event);
        private _dispatchSelectEvent();
        private _RadioKeydownHandler(event);
        private _FocusHandler();
        private _BlurHandler();
    }
}

/// <reference path="../RadioButton/RadioButton.d.ts" />
declare namespace fabric {
    /**
     * ChoiceFieldGroup Plugin
     *
     * Adds basic demonstration functionality to .ms-ChoiceFieldGroup components.
     *
    */
    class ChoiceFieldGroup {
        private _choiceFieldGroup;
        private _choiceFieldComponents;
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of ChoiceFieldGroup
         * @constructor
         */
        constructor(container: HTMLElement);
        removeListeners(): void;
        private _initalSetup();
        private _addListeners();
        private _ChoiceFieldHandler(event);
    }
}

/**
 * SearchBox component
 *
 * Allows you to search the world.
 *
 */
/**
 * @namespace fabric
 */
declare namespace fabric {
    class SearchBox {
        private _searchBoxField;
        private _searchBox;
        private _searchBoxClearButton;
        private _searchBoxExitButton;
        private _container;
        private _boundExpandSearchHandler;
        private _boundEnableClose;
        private _boundCollapseSearchBox;
        private _boundClearSearchBox;
        private _boundHandleBlur;
        private _boundExitSearchBox;
        private _clearOnly;
        constructor(container: HTMLElement);
        setCollapsedListeners(): void;
        getInputField(): Element;
        private _saveDOMRefs(context);
        private _disposeListeners();
        private _exitSearchBox(event);
        private _collapseSearchBox();
        private _expandSearchHandler();
        private _enableClose();
        private _setHasText();
        private _setFocusAction(context);
        private _clearSearchBox(event?);
        private _setClearButtonAction();
        private _handleBlur(event);
        private _setBlurAction();
        private _checkState();
        private _addAnimation();
    }
}

/// <reference path="../ContextualHost/ContextualHost.d.ts" />
/**
 * CommandButton
 *
 * Buttons used primarily in the command bar
 *
 */
/**
 * @namespace fabric
 */
declare namespace fabric {
    class CommandButton {
        private _command;
        private _commandButton;
        private _splitButton;
        private _modalHostView;
        private _container;
        private _contextualMenu;
        constructor(container: HTMLElement, contextMenu?: HTMLElement);
        private _createModalHostView();
        private _setClick();
        private _checkForMenu();
    }
}

/// <reference path="../SearchBox/SearchBox.d.ts" />
/// <reference path="../CommandButton/CommandButton.d.ts" />
/// <reference path="../ContextualHost/ContextualHost.d.ts" />
/**
 * CommandBar
 *
 * Commanding and navigational surface
 *
 */
declare namespace fabric {
    class CommandBar {
        private responsiveSizes;
        private visibleCommands;
        private commandWidths;
        private overflowCommands;
        private itemCollection;
        private _sideAreaCollection;
        private contextualItemContainerRef;
        private contextualItemLink;
        private contextualItemIcon;
        private breakpoint;
        private _elements;
        private activeCommand;
        private searchBoxInstance;
        private _container;
        private _commandButtonInstance;
        constructor(container: Element);
        private _runsSearchBox(state?);
        private _runOverflow();
        private _initOverflow();
        private _hasClass(element, cls);
        private _onSearchExpand();
        private _onSearchCollapse();
        private _getScreenSize();
        private _setBreakpoint();
        private _createSearchInstance();
        private _changeSearchState(state, action);
        private _setElements();
        private _createItemCollection(iCollection, areaClass);
        private _createContextualRef();
        private _getElementWidth(element);
        private _saveCommandWidths();
        private _updateCommands();
        private _drawCommands();
        private _setWindowEvent();
        private _processCollapsedClasses(type);
        private _setUIState();
        private _checkOverflow();
        private _redrawMenu();
        private _drawOverflowMenu(left);
        private _doResize();
    }
}

/// <reference path="../ContextualHost/ContextualHost.d.ts" />
/// <reference path="../Button/Button.d.ts" />
declare namespace fabric {
    class ContextualMenu {
        private _container;
        private _hostTarget;
        private _position;
        private _host;
        private _isOpen;
        constructor(container: Element, hostTarget: Element, position?: string);
        getHost(): ContextualHost;
        private _init();
        private _onDocumentClick(event);
        private _onContextualMenuClick(event);
        private _multiSelect(target);
        private _singleSelect(target);
        private _toggleMenu(event);
        private _setOpener(hostTarget);
        private _openContextMenu(event);
        private _checkForSubmenus(container);
        private _createModalHostView(container, position, hostTarget);
    }
}

export interface IContextualMenuItem {
    title: string;
    state: string;
}
export interface IContextualMenu {
    items: Array<IContextualMenuItem>;
    state?: string;
}

/// <reference path="../../../typings/jquery.d.ts" />
/// <reference path="../../../typings/pickadate.d.ts" />
declare namespace fabric {
    /**
     * DatePicker Plugin
     */
    class DatePicker {
        private picker;
        constructor(container: any, options: any);
        /**
         * After the Pickadate plugin starts, this function
         * adds additional controls to the picker view.
         */
        initCustomView($datePicker: any): void;
        /** Change the highlighted date. */
        changeHighlightedDate(dateArr: any): void;
        /** Whenever the picker renders, do our own rendering on the custom controls. */
        updateCustomView($datePicker: any): void;
        private setDateAttributes(dateArr);
    }
}

declare namespace fabric {
    class Overlay {
        overlayElement: HTMLElement;
        constructor(overlayElement?: HTMLElement);
        remove(): void;
        show(): void;
        hide(): void;
    }
}

/// <reference path="../Overlay/Overlay.d.ts" />
declare namespace fabric {
    class Dialog {
        private _dialog;
        private _overlay;
        private _closeButtonElement;
        private _actionButtonElements;
        constructor(dialog: HTMLElement);
        close(): void;
        open(): void;
    }
}

declare namespace fabric {
    /**
     * DialogHost class
     */
    class DialogHost {
    }
}

/// <reference path="../Overlay/Overlay.d.ts" />
declare namespace fabric {
    class PanelHost {
        panelHost: Element;
        overlay: Overlay;
        private _layer;
        private _callBack;
        private _overlayContainer;
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of Panel
         * @constructor
         */
        constructor(layer: Node, callBack?: Function);
        dismiss(): void;
        update(layer: Node, callBack?: Function): void;
        private _renderElements();
        private _createElements();
    }
}

/// <reference path="../PanelHost/PanelHost.d.ts" />
declare namespace fabric {
    class Panel {
        panelHost: PanelHost;
        private _panel;
        private _direction;
        private _animateOverlay;
        private _closeButton;
        private _clickHandler;
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of Panel
         * @constructor
         */
        constructor(panel: Element, direction?: string, animateOverlay?: boolean);
        dismiss(callBack?: Function): void;
        private _setEvents();
        private _animateInPanel(layer);
    }
}

/// <reference path="../Panel/Panel.d.ts" />
declare namespace fabric {
    /**
     * Dropdown Plugin
     *
     * Given .ms-Dropdown containers with generic <select> elements inside, this plugin hides the original
     * dropdown and creates a new "fake" dropdown that can more easily be styled across browsers.
     *
     */
    class Dropdown {
        private _container;
        private _originalDropdown;
        private _newDropdownLabel;
        private _dropdownLabelHelper;
        private _newDropdown;
        private _dropdownItems;
        private _panelContainer;
        private _panel;
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of Dropdown
         * @constructor
         */
        constructor(container: HTMLElement);
        private _setWindowEvent();
        private _checkTruncation();
        private _getScreenSize();
        private _doResize();
        private _openDropdownAsPanel();
        private _removeDropdownAsPanel(evt?);
        private _onOpenDropdown(evt);
        private _closeOtherDropdowns();
        private _onCloseDropdown(evt);
        private _onItemSelection(evt);
    }
}

/// <reference path="../../utilities/Animate.d.ts" />
/// <reference path="../../utilities/Ease.d.ts" />
declare namespace fabric {
    /**
     *
     * Adds basic demonstration functionality to .ms-PersonaCard components.
     *
     */
    class PersonaCard {
        private _container;
        private _actions;
        private _expander;
        private _actionDetailBox;
        private _boundOnActionClick;
        private _boundOnExpanderClick;
        private _boundOnTab;
        /**
         *
         * @param {Element} container - the target container for an instance of PersonaCard
         * @constructor
         */
        constructor(container: Element);
        removeListeners(): void;
        private _addListeners();
        private _onTab(event);
        private _onExpanderClick(event);
        private _onActionClick(event);
        private _setAction(target);
        private _setDetail(activeId);
        private _animateDetail(height);
    }
}

/// <reference path="../ContextualHost/ContextualHost.d.ts" />
/// <reference path="../PersonaCard/PersonaCard.d.ts" />
/**
 * FacePile
 *
 * A host for FacePile
 *
 */
declare namespace fabric {
    class Persona {
        private _persona;
        private _personaCard;
        private _contextualHostInstance;
        private _personaCardInstance;
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of FacePile
         * @constructor
         */
        constructor(container: Element);
        private _createPersonaCard();
        private _createContextualHostInstance();
        private _personaEventHandler();
        private _assignEvents();
    }
}

/// <reference path="../Persona/Persona.d.ts" />
declare namespace fabric {
    class FacePile {
        private _personaCollection;
        private _facePile;
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of FacePile
         * @constructor
         */
        constructor(container: Element);
        private _createPersonaCollection();
    }
}

declare namespace fabric {
    /**
     * List Item Plugin
     *
     * Adds basic demonstration functionality to .ms-ListItem components.
     *
     */
    class ListItem {
        private _container;
        private _toggleElement;
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of ListItem
         * @constructor
         */
        constructor(container: HTMLElement);
        removeListeners(): void;
        private _addListeners();
        private _toggleHandler();
    }
}

/// <reference path="../ListItem/ListItem.d.ts" />
declare namespace fabric {
    /**
     * List Item Plugin
     *
     * Adds basic demonstration functionality to .ms-List components.
     *
     */
    class List {
        private _container;
        private _listItemComponents;
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of List
         * @constructor
         */
        constructor(container: HTMLElement);
    }
}

/**
 * @namespace fabric
 */
declare namespace fabric {
    /**
     * MessageBanner component
     *
     * A component to display error messages
     *
     */
    class MessageBanner {
        container: HTMLElement;
        private _clipper;
        private _bufferSize;
        private _textContainerMaxWidth;
        private _clientWidth;
        private _textWidth;
        private _initTextWidth;
        private _chevronButton;
        private _errorBanner;
        private _actionButton;
        private _closeButton;
        private _bufferElementsWidth;
        private _bufferElementsWidthSmall;
        private SMALL_BREAK_POINT;
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of MessageBanner
         * @constructor
         */
        constructor(container: HTMLElement);
        /**
         * initializes component
         */
        init(): void;
        /**
         * shows banner if the banner is hidden
         */
        show(): void;
        /**
       * shows banner if the banner is hidden (deprecated)
       */
        showBanner(): void;
        /**
         * hides banner when close button is clicked
         */
        hide(): void;
        private _hideMessageBanner();
        /**
         * sets styles on resize
         */
        private _onResize();
        /**
         * resize above 480 pixel breakpoint
         */
        private _resizeRegular();
        /**
         * resize below 480 pixel breakpoint
         */
        private _resizeSmall();
        /**
         * caches elements and values of the component
         */
        private _cacheDOM();
        /**
         * expands component to show full error message
         */
        private _expand();
        /**
         * collapses component to only show truncated message
         */
        private _collapse();
        private _toggleExpansion();
        /**
         * sets handlers for resize and button click events
         */
        private _setListeners();
    }
}

/// <reference path="../Overlay/Overlay.d.ts" />
/// <reference path="../ContextualHost/ContextualHost.d.ts" />
declare namespace fabric {
    class PeoplePicker {
        private _container;
        private _contextualHostView;
        private _peoplePickerMenu;
        private _peoplePickerSearch;
        private _peoplePickerSearchBox;
        private _peoplePickerResults;
        private _isContextualMenuOpen;
        private _selectedPeople;
        private _selectedCount;
        private _selectedPlural;
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of People Picker
         * @constructor
         */
        constructor(container: Element);
        private _createModalHost(e);
        private _clickHandler(e);
        private _selectResult(e);
        private _findElement(childObj, className);
        private _addRemoveBtn(persona, token?);
        private _removeToken(e);
        private _removeResult(e);
        private _removeItem(e);
        private _updateCount();
        private _tokenizeResult(tokenResult);
        private _addResultToMembers(persona);
        private _assignClicks();
        private _assignRemoveHandler();
        private _contextHostCallBack();
    }
}

declare namespace fabric {
    /**
     * Pivot Plugin
     *
     * Adds basic demonstration functionality to .ms-Pivot components.
     *
     */
    class Pivot {
        private _container;
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of Pivot
         * @constructor
         */
        constructor(container: HTMLElement);
        removeListeners(): void;
        private _addListeners();
        private _selectTab(selectedTab);
        private _selectTabMouse(event);
        private _selectTabKeyboard(event);
    }
}

/**
 * @namespace fabric
 */
declare namespace fabric {
    /**
     * ProgressIndicator component
     *
     * A component for outputting determinate progress
     *
     */
    class ProgressIndicator {
        container: HTMLElement;
        private _progress;
        private _width;
        private _itemName;
        private _total;
        private _itemDescription;
        private _progressBar;
        /**
         *
         * @param {HTMLDivElement} container - the target container for an instance of ProgressIndicator
         * @constructor
         */
        constructor(container: HTMLElement);
        /**
         * Sets the progress percentage for a determinate
         * operation. Either use this or setProgress
         * and setTotal as setProgressPercent assumes
         * you've done a percentage calculation before
         * injecting it into the function
         * @param {number} percent - a floating point number from 0 to 1
         */
        setProgressPercent(percent: number): void;
        /**
         * Sets the progress for a determinate operation.
         * Use this in combination with setTotal.
         * @param {number} progress
         */
        setProgress(progress: number): void;
        /**
         * Sets the total file size, etc. for a
         * determinate operation. Use this in
         * combination with setProgress
         * @param {number} total
         */
        setTotal(total: number): void;
        /**
         * Sets the text for the title or label
         * of an instance
         * @param {string} name
         */
        setName(name: string): void;
        /**
         * Sets the text for a description
         * of an instance
         * @param {string} name
         */
        setDescription(description: string): void;
        /**
         * caches elements and values of the component
         *
         */
        cacheDOM(): void;
    }
}

/**
 * @namespace fabric
 */
declare namespace fabric {
    /**
     * Spinner Component
     *
     * An animating activity indicator.
     *
     */
    class Spinner {
        eightSize: number;
        animationSpeed: number;
        interval: number;
        spinner: HTMLElement;
        numCircles: number;
        offsetSize: number;
        parentSize: number;
        fadeIncrement: number;
        private circleObjects;
        private _target;
        /**
         * @param {HTMLDOMElement} target - The element the Spinner will attach itself to.
         */
        constructor(container: HTMLElement);
        /**
         * @function start - starts or restarts the animation sequence
         * @memberOf fabric.Spinner
         */
        start(): void;
        /**
         * @function stop - stops the animation sequence
         * @memberOf fabric.Spinner
         */
        stop(): void;
        private _init();
        private _setPropertiesForSize();
        private _setTargetElement();
        private _initializeOpacities();
        private _fade(circleObject);
        private _getOpacity(element);
        private _setOpacity(element, opacity);
        private _createCircle();
        private _createCirclesAndArrange();
    }
}

/**
 * @namespace fabric
 */
declare namespace fabric {
    class Table {
        container: HTMLElement;
        constructor(container: HTMLElement);
        /**
         * Add event listeners
         */
        private _addListeners();
        /**
         * Select or deselect a row
         */
        private _toggleRowSelection(event);
    }
}

declare namespace fabric {
    /**
     * Text Field Plugin
     *
     * Adds basic demonstration functionality to .ms-TextField components.
     */
    class TextField {
        private _container;
        private _textField;
        private _textFieldLabel;
        private _type;
        /**
         *
         * @param {HTMLDivElement} container - the target container for an instance of TextField
         * @constructor
         */
        constructor(container: HTMLElement);
        /** Populate _type with various kinds of text fields */
        private _setTextFieldType();
        /** Add event listeners according to the type(s) of text field */
        private _addListeners();
    }
}

declare namespace fabric {
    /**
     * Toggle Plugin
     *
     * Adds basic demonstration functionality to .ms-Toggle components.
     *
     */
    class Toggle {
        private _container;
        private _toggleField;
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of Toggle
         * @constructor
         */
        constructor(container: HTMLElement);
        removeListeners(): void;
        private _addListeners();
        private _toggleHandler();
    }
}
