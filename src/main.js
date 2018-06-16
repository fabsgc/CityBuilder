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
    'game/World',
    'game/Object'
], function () {
    var game = new App.Game();
    game.Init();
});