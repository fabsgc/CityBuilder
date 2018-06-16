/**
 * @description Class Player
 * @author Hikma <contact@hikma.io>
 * @licence MIT
 * @class App.Player
 * @constructor
 */
App.Player = function(){

    /**
     * Scene instance
     * @type {BABYLON.Scene}
     * @private
     */
    var _scene = null;
    
    /**
     * @method App.Player#Init
     * @param {BABYLON.Scene}
     * @public
     * @return {void}
     */
    this.Init = function(scene) {
        _scene = scene;
    }
}