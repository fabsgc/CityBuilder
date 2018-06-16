/**
 * @description Class Object
 * @author Hikma <contact@hikma.io>
 * @licence MIT
 * @class App.Object
 * @constructor
 */
App.Object = function(config, scene, assetsManager){

    /**
     * Scene instance
     * @type {Object}
     * @private
     */
    var _config = config;

    /**
     * Scene instance
     * @type {BABYLON.Scene}
     * @private
     */
    var _scene = scene;

    /**
     * Mesh instance
     * @type {BABYLON.Mesh}
     * @private
     */
    var _mesh = null;

    /**
     * AssetsManager instance
     * @type {BABYLON.AssetManager}
     * @private
     */
    var _assetsManager = assetsManager;

    /**
     * Position
     * @type {BABYLON.ShadowGenerator}
     * @private
     */
    var _position = {x: 0, y:0};
    
    /**
     * @method App.Object#Init
     * @param {Object} config
     * @param {BABYLON.Scene} scene
     * @param {BABYLON.AssetsManager} assetsManager
     * @public
     * @return {void}
     */
    this.Init = function() {
        var meshTask = _assetsManager.addMeshTask(_config.token, "", _config.modelDirectory, _config.model + ".obj");
        
        meshTask.onSuccess = OnLoader;
        meshTask.OnError = OnError;
        
        console.log(_config.modelDirectory + _config.model + '.obj');
    }

    /**
     * @method App.Object#GetMeshInit
     * @public
     * @return {Mesh}
     */
    this.GetMesh = function() {
        return _mesh;
    }

    /**
     * @method App.Object#GetPosition
     * @public
     * @return {Object}
     */
    this.GetPosition = function() {
        return _position;
    }

    /**
     * @method App.Object#OnLoader
     * @param {BABYLON.MeshTask} task
     * @public
     * @return {void}
     */
    function OnLoader(task) {
        console.log("mesh loaded");
        
        var rotation = (_config.rotation + 90) * Math.PI / 180;

        _mesh = task.loadedMeshes[0];
        _mesh.position = new BABYLON.Vector3(_config.position.y * 4, 0, _config.position.x * 4);
        _mesh.rotate(BABYLON.Axis.Y, rotation, BABYLON.Space.WORLD);

        _position = {
            x: _config.position.y,
            y: config.position.x
        }
    }

    /**
     * @method App.Object#OnErrorOnError
     * @param {BABYLON.MeshTask} task
     * @param {String} message
     * @param {Exception} exception
     * @public
     * @return {void}
     */
    function OnError(task, message, exception) {
        console.log(message, exception);
    }
}