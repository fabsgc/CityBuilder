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
    var _gui = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");;

    /**
     * @method App.Menu#Init
     * @public
     * @return {void}
     */
    this.Init = function() {
        console.log("GUI menu loaded");
    }

    /**
     * @method App.Menu#Update
     * @param {App.Player} player
     * @public
     * @return {void}
     */
    this.Update = function(player) {
    }

    /**
     * @method App.Menu#Draw
     * @public
     * @return {void}
     */
    this.Draw = function() {
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