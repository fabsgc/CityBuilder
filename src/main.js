/**
 * @description Entry point of the application
 * @author Hikma <contact@hikma.io>
 * @licence MIT
 * @constructor
 */

App = {};
App.Config = {};

requirejs.config({baseUrl: 'src/'});

requirejs([
    'config/Config',
    'config/Map',
    'game/Game',
    'game/Camera',
    'game/Player',
    'game/Object',
    'game/Hud',
    'game/Menu',
    'game/LooseScreen',
    'game/State'
], function () {
    var game = new App.Game();
    game.Init();
});