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
     * Objects list
     * @type {BABYLON.Mesh}
     * @private
     */
    var _objects = [];

    /**
     * Canvas instance
     * @type {GameState}
     * @private
     */
    var _gameState = GameState.InGame;

    /**
     * Player instance
     * @type {App.Player}
     * @private
     */
    var _player = null;

    /**
     * Player instance
     * @type {App.Hud}
     * @private
     */
    var _hud = null;

    /**
     * Player instance
     * @type {App.Menu}
     * @private
     */
    var _menu = null;

    /**
     * Player instance
     * @type {App.LooseScreen}
     * @private
     */
    var _loose = null;

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
        GUI = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

        CreateScene();

        _player = new App.Player(_scene, _assetsManager);
        _player.Init();

        _hud = new App.Hud(_player);
        _hud.Init();

        _menu = new App.Menu(_player);
        _menu.Init();

        _loose = new App.LooseScreen();
        _loose.Init();

        window.addEventListener("openMenu", OpenMenuHandler);
        window.addEventListener("closeMenu", CloseMenuHandler);

        _assetsManager.onFinish = function (tasks) {
            _assetsManager.useDefaultLoadingScreen = false;
            _engine.runRenderLoop(RenderLoop);
        };

        window.addEventListener("resize", ResizeHandler);
        var music = new BABYLON.Sound("Music", "asset/sound/music.mp3", _scene, null, { loop: true, autoplay: true });
    }

    function CreateScene() {
        _scene.clearColor = new BABYLON.Color3(0.64, 0.77, 0.99);

        _camera = new App.Camera(_scene);
        _camera.Init();

        var ssao = new BABYLON.SSAORenderingPipeline('ssaopipeline', _scene, 0.75);
        _scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline("ssaopipeline", [_camera.GetCamera()]);

        var ambient = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(1, -2, -0.5), _scene);
        ambient.color = new BABYLON.Color3(0.98, 0.95, 0.7)
        ambient.shadowEnabled = true;
        ambient.intensity = 3;

        var light = new BABYLON.DirectionalLight("light", new BABYLON.Vector3(-1, -2, 1), _scene);
        light.position = new BABYLON.Vector3(20, 40, -20);
        light.color = new BABYLON.Color3(0.98, 0.95, 0.7)
        light.shadowEnabled = true;
        light.intensity = 1;

        _mapConfig.forEach(function(element) {
            var obj = new App.Object(element, _scene, _assetsManager);
            obj.Init();
            _objects.push(obj);
        });

        _assetsManager.load();
    }

    function RenderLoop() {
        switch(_gameState) {
            case GameState.InGame:
                if(_player.IsAlive()) {
                    _player.Update();

                    _hud.Update();
                    _hud.Draw();

                    _menu.Clear();
                }
                else {
                    _hud.Clear();
                    _menu.Clear();
                    _gameState = GameState.Lose;
                }
            break;

            case GameState.InMenu:
                _hud.Update();
                _hud.Draw();

                _menu.Update();
                _menu.Draw();
            break;

            case GameState.Lose:
                _loose.Draw();
                _hud.Clear();
                _menu.Clear();
            break;
        }

        _scene.render();
    }

    /**
     * @method App.Game#ResizeHandler
     * @param {Event} e
     * @private
     * @return {void}
     */
    function ResizeHandler() {
        _engine.resize();
    }

    /**
     * @method App.Game#OpenMenuHandler
     * @param {CustomEvent} e
     * @private
     * @return {void}
     */
    function OpenMenuHandler(e) {
        console.log("Open menu handler");
        _hud.SetState(HudState.Hidden);
        _menu.SetState(MenuState.Visible);
        _gameState = GameState.InMenu;
    }

    /**
     * @method App.Game#CloseMenuHandle
     * @param {CustomEvent} e
     * @private
     * @return {void}
     */
    function CloseMenuHandler(e) {
        console.log("Close menu handler");
        _hud.SetState(HudState.Visible);
        _menu.SetState(MenuState.hidden);
        _gameState = GameState.InGame;
    }
}