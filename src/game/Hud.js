/**
 * @description Class Hud
 * @author Hikma <contact@hikma.io>
 * @licence MIT
 * @class App.Hud
 * @constructor
 */
App.Hud = function(){

    /**
     * Hud state
     * @type {HudState}
     * @private
     */
    var _hudState = HudState.Visible;

    /**
     * @method App.Hud#Init
     * @public
     * @return {void}
     */
    this.Init = function() {
    }

    /**
     * @method App.Hud#Update
     * @public
     * @return {void}
     */
    this.Update = function() {
    }

    /**
     * @method App.Hud#Draw
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
     * @method App.Hud#SetState
     * @param {HudState} state
     * @public
     * @return {void}
     */
    this.SetState = function(state) {
        _hudState = state;
    }

    /**
     * @method App.Hud#GetState
     * @public
     * @return {HudState}
     */
    this.GetState = function() {
        return _hudState;
    }
}