/**
 * @description Class Menu
 * @author Hikma <contact@hikma.io>
 * @licence MIT
 * @class App.Menu
 * @constructor
 */
App.Menu = function(){

    /**
     * Menu state
     * @type {MenuState}
     * @private
     */
    var _menuState = MenuState.Hidden;

    /**
     * GUI instance
     * @type {BABYLON.GUI.AdvancedDynamicTexture}
     * @private
     */
    var _gui = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    /**
     * Gui elements
     * @type {Objcet}
     * @private
     */
    var _elements = {
        container: null,
        header: null,
        headrGrid: null,
        body: null,
        bodyGrid: null
    }

    /**
     * Dynamic gui elements
     * @type {Objcet}
     * @private
     */
    var _dynamicElements = []

    /**
     * @method App.Menu#Init
     * @public
     * @return {void}
     */
    this.Init = function() {
        console.log("GUI menu loaded");

        _elements.container = new BABYLON.GUI.Rectangle("container");
        _elements.container.adaptWidthToChildren = true;
        _elements.container.background = "black";
        _elements.container.alpha = 0.7;
        _gui.addControl(_elements.container);

        /*container: null,
        header: null,
        headrGrid: null,
        body: null,
        bodyGrid: null*/
    }

    /**
     * @method App.Menu#Update
     * @param {App.Player} player
     * @public
     * @return {void}
     */
    this.Update = function(player) {
        _elements.isVisible = true;
    }

    /**
     * @method App.Menu#Draw
     * @public
     * @return {void}
     */
    this.Draw = function() {
        _elements.isVisible = false;
    }

    /**
     * @method App.Menu#Clear
     * @public
     * @return {void}
     */
    this.Clear = function() {
    }

    /**
     * @method App.Menu#SetState
     * @param {MenuState} state
     * @public
     * @return {void}
     */
    this.SetState = function(state) {
        _menuState = state;
    }

    /**
     * @method App.Menu#GetState
     * @public
     * @return {MenuState}
     */
    this.GetState = function() {
        return _menuState;
    }
}