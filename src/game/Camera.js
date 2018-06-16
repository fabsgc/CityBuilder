/**
 * @description Class Camera
 * @author Hikma <contact@hikma.io>
 * @licence MIT
 * @class App.Camera
 * @constructor
 */
App.Camera = function(scene){
    /**
     * Canvas instance
     * @type {Object}
     * @private
     */
    var _canvas = null;

    /**
     * Scene instance
     * @type {BABYLON.Scene}
     * @private
     */
    var _scene = scene;

    /**
     * Scene instance
     * @type {BABYLON.ArcRotateCamera}
     * @private
     */
    var _camera = null;

    /**
     * @method App.Game#Init
     * @param {BABYLON.Scene} scene
     * @public
     * @return {void}
     */
    this.Init = function() {
        _canvas = document.getElementById("render");

        _camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI/6, Math.PI/4, 300, new BABYLON.Vector3(100, 0, 150), _scene);
        
	    _camera.lowerRadiusLimit = 50;
        _camera.upperRadiusLimit = 500;
        
        _camera.inputs.clear();
        _camera.inputs.addMouseWheel();
        _camera.attachControl(_canvas, true);
        _camera.inputs.add(new App.CameraKeyboardMoveInput(_camera));
    }

    /**
     * @method App.Object#GetCamera
     * @public
     * @return {BABYLON.ArcRotateCamera}
     */
    this.GetCamera = function() {
        return _camera;
    }
}

App.CameraKeyboardMoveInput = function (camera) {
    this._camera = camera;
    this._keys = [];
    this.keysLeft = [37];
    this.keysRight = [39];
    this.keysUp = [38];
    this.keysDown = [40];
    this.sensibility = 2;
};

App.CameraKeyboardMoveInput.prototype.getTypeName = function () {
    return "CameraKeyboardMoveInput";
}

App.CameraKeyboardMoveInput.prototype.getSimpleName = function () {
    return "keyboardMove";
};

App.CameraKeyboardMoveInput.prototype.attachControl = function (element, noPreventDefault) {
    var _this = this;

    if (!this._onKeyDown) {
        element.tabIndex = 1;
        this._onKeyDown = function (evt) {
            if (_this.keysLeft.indexOf(evt.keyCode) !== -1 ||
                _this.keysRight.indexOf(evt.keyCode) !== -1 ||
                _this.keysUp.indexOf(evt.keyCode) !== -1 ||
                _this.keysDown.indexOf(evt.keyCode) !== -1) {

                var index = _this._keys.indexOf(evt.keyCode);
                if (index === -1) {
                    _this._keys.push(evt.keyCode);
                }
                if (!noPreventDefault) {
                    evt.preventDefault();
                }
            }
        };
        this._onKeyUp = function (evt) {
            if (_this.keysLeft.indexOf(evt.keyCode) !== -1 ||
                _this.keysRight.indexOf(evt.keyCode) !== -1 ||
                _this.keysUp.indexOf(evt.keyCode) !== -1 ||
                _this.keysDown.indexOf(evt.keyCode) !== -1) {

                var index = _this._keys.indexOf(evt.keyCode);
                if (index >= 0) {
                    _this._keys.splice(index, 1);
                }
                if (!noPreventDefault) {
                    evt.preventDefault();
                }
            }
        };

        element.addEventListener("keydown", this._onKeyDown, false);
        element.addEventListener("keyup", this._onKeyUp, false);
        BABYLON.Tools.RegisterTopRootEvents([
            { name: "blur", handler: this._onLostFocus }
        ]);
    }
};
    
App.CameraKeyboardMoveInput.prototype.detachControl = function (element) {
    if (this._onKeyDown) {
        element.removeEventListener("keydown", this._onKeyDown);
        element.removeEventListener("keyup", this._onKeyUp);
        BABYLON.Tools.UnregisterTopRootEvents([
            { name: "blur", handler: this._onLostFocus }
        ]);
        this._keys = [];
        this._onKeyDown = null;
        this._onKeyUp = null;
    }
}

App.CameraKeyboardMoveInput.prototype.checkInputs = function () {
    if (this._onKeyDown) {
        var camera = this._camera;
        var target = camera.getTarget();
        // Keyboard
        for (var index = 0; index < this._keys.length; index++) {
            var keyCode = this._keys[index];
            if (this.keysLeft.indexOf(keyCode) !== -1) {
                target.z -= this.sensibility;
                target.x -= this.sensibility * 0.58;
                camera.setTarget(target);
            }
            else if (this.keysRight.indexOf(keyCode) !== -1) {
                target.z += this.sensibility;
                target.x += this.sensibility * 0.58;
                camera.setTarget(target);
            }
            else if (this.keysUp.indexOf(keyCode) !== -1) {
                target.x -= this.sensibility;
                target.z += this.sensibility * 0.58;
                camera.setTarget(target);
            }
            else if (this.keysDown.indexOf(keyCode) !== -1) {
                target.x += this.sensibility;
                target.z -= this.sensibility * 0.58;
                camera.setTarget(target);
            }
        }
    }
}

App.CameraKeyboardMoveInput.prototype._onLostFocus = function (e) {
    this._keys = [];
}