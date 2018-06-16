/**
 * @description Class Game
 * @author Hikma <contact@hikma.io>
 * @licence MIT
 * @class App.Game
 * @constructor
 */
App.Game = function(){
    /**
     * Config instance
     * @type {Object}
     * @private
     */
    var _config = null;

    /**
     * Map Config instance
     * @type {Object[]}
     * @private
     */
    var _mapConfig = null;

    /**
     * Map instance
     * @type {Object}
     * @private
     */
    var _map = null;

    /**
     * Canvas instance
     * @type {Object}
     * @private
     */
    var _canvas = null;

    /**
     * Engine instance
     * @type {BABYLON.Engine}
     * @private
     */
    var _engine = null;

    /**
     * Scene instance
     * @type {BABYLON.Scene}
     * @private
     */
    var _scene = null;

    /**
     * AssetsManager instance
     * @type {BABYLON.AssetManager}
     * @private
     */
    var _assetsManager = null;

    /**
     * Camera instance
     * @type {App.Camera}
     * @private
     */
    var _camera = null;

    /**
     * Camera instance
     * @type {BABYLON.Mesh}
     * @private
     */
    var _objects = [];

    /**
     * Shadow generator instance
     * @type {BABYLON.ShadowGenerator}
     * @private
     */
    var _shadowGenerator = null;

    /**
     * @method App.Game#Init
     * @public
     * @return {void}
     */
    this.Init = function() {
        BABYLON.OBJFileLoader.OPTIMIZE_WITH_UV = true;

        _config = App.Config.Game;
        _mapConfig = App.Config.Map;
        _canvas = document.getElementById("render");
        _engine = new BABYLON.Engine(_canvas, true);
        _scene = new BABYLON.Scene(_engine);
        _assetsManager = new BABYLON.AssetsManager(_scene);

        CreateScene();

        _assetsManager.onFinish = function (tasks) {
            _assetsManager.useDefaultLoadingScreen = false;
            _engine.runRenderLoop(RenderLoop);
        };

        window.addEventListener("resize", ResizeHandler);
    }

    function CreateScene() {
        _scene.clearColor = new BABYLON.Color3(0.64, 0.77, 0.99);

        _camera = new App.Camera(_scene);
        _camera.Init();

        var ssao = new BABYLON.SSAORenderingPipeline('ssaopipeline', _scene, 0.75);
        _scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline("ssaopipeline", [_camera.GetCamera()]);

        var ambient = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(1, -2, -1), _scene);
        ambient.color = new BABYLON.Color3(0.98, 0.95, 0.8)
        ambient.shadowEnabled = true;
        ambient.intensity = 2.5;

        var light = new BABYLON.DirectionalLight("light", new BABYLON.Vector3(1, -2, -1), _scene);
        light.position = new BABYLON.Vector3(20, 40, -20);
        light.color = new BABYLON.Color3(0.98, 0.95, 0.8)
        light.shadowEnabled = true;
        light.intensity = 1;

        /*_shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
        _shadowGenerator.useBlurExponentialShadowMap = true;
        _shadowGenerator.useKernelBlur = true;
        _shadowGenerator.blurKernel = 64;*/

        _mapConfig.forEach(function(element) {
            var obj = new App.Object(element, _scene, _assetsManager, _shadowGenerator);
            obj.Init();
            _objects.push(obj);
        });

        _assetsManager.load();
    }

    function RenderLoop() {
        _scene.render();
    }

    function ResizeHandler() {
        _engine.resize();
    }
}