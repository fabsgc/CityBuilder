/**
 * @description Class Hud
 * @author Hikma <contact@hikma.io>
 * @licence MIT
 * @class App.Hud
 * @constructor
 */
App.Hud = function(player){

    /**
     * Hud state
     * @type {HudState}
     * @private
     */
    var _hudState = HudState.Visible;

    /**
     * Player instance
     * @type {App.Player}
     * @private
     */
    var _player = player;

    /**
     * Gui elements
     * @type {Object}
     * @private
     */
    var _elements = {
        skills: null,
        temperature: null,
        temperatureLogo: null,
        money: null,
        moneyLogo: null
    };

    /**
     * @method App.Hud#Init
     * @public
     * @return {void}
     */
    this.Init = function() {
        console.log("GUI hud loaded");

        _elements.moneyLogo = new BABYLON.GUI.Image("money-logo", "asset/gui/money_64.png");
        _elements.moneyLogo.width = "64px";
        _elements.moneyLogo.height = "64px";
        _elements.moneyLogo.stretch = BABYLON.GUI.Image.STRETCH_EXTEND;
        _elements.moneyLogo.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        _elements.moneyLogo.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        _elements.moneyLogo.left  = "-10px";
        _elements.moneyLogo.top  = "10px";
        GUI.addControl(_elements.moneyLogo);

        _elements.money = new BABYLON.GUI.TextBlock("money");
        _elements.money.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        _elements.money.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        _elements.money.left  = "-90px";
        _elements.money.top  = "22px";
        _elements.money.width = "100%";
        _elements.money.fontSize = 45;
        _elements.money.color = "white";
        _elements.money.text = "0 M";
        GUI.addControl(_elements.money);

        _elements.temperatureLogo = new BABYLON.GUI.Image("temperature-logo", "asset/gui/thermometer_64.png");
        _elements.temperatureLogo.width = "64px";
        _elements.temperatureLogo.height = "64px";
        _elements.temperatureLogo.stretch = BABYLON.GUI.Image.STRETCH_EXTEND;
        _elements.temperatureLogo.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        _elements.temperatureLogo.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        _elements.temperatureLogo.left  = "-10px";
        _elements.temperatureLogo.top  = "90px";
        GUI.addControl(_elements.temperatureLogo);

        _elements.temperature = new BABYLON.GUI.TextBlock("temperature");
        _elements.temperature.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        _elements.temperature.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        _elements.temperature.left  = "-90px";
        _elements.temperature.top  = "96px";
        _elements.temperature.fontSize = 45;
        _elements.temperature.color = "white";
        _elements.temperature.text = "+0°c";
        GUI.addControl(_elements.temperature);

        _elements.skills = new BABYLON.GUI.Image("skills", "asset/gui/search_128.png");
        _elements.skills.width = "128px";
        _elements.skills.height = "128px";
        _elements.skills.stretch = BABYLON.GUI.Image.STRETCH_EXTEND;
        _elements.skills.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        _elements.skills.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        _elements.skills.onPointerClickObservable.add(function() {
            ChangeMenuIcon();

            if(_hudState == HudState.Visible) {
                var event = new CustomEvent("openMenu", {});
                window.dispatchEvent(event);
            }
            else {
                var event = new CustomEvent("closeMenu", {});
                window.dispatchEvent(event);
            }
        });
        GUI.addControl(_elements.skills);
    }

    /**
     * @method App.Hud#Update
     * @public
     * @return {void}
     */
    this.Update = function() {
        var money = _player.GetMoney().toFixed(1).toString();
        var temperature = _player.GetTemperature().toFixed(1).toString();

        _elements.money.text = money + " M";
        _elements.temperature.text = "+" + temperature + "°c";
    }

    /**
     * @method App.Hud#Draw
     * @public
     * @return {void}
     */
    this.Draw = function() {
    }

    /**
     * @method App.Hud#Clear
     * @public
     * @return {void}
     */
    this.Clear = function() {
        for (var k in _elements){
            if (_elements.hasOwnProperty(k)) {
                _elements[k].isVisible = false;
            }
        }
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

    /**
     * @method App.Hud#ChngeMenuIcon
     * @private
     * @return {void}
     */
    function ChangeMenuIcon() {
        if(_hudState == HudState.Visible) {
            _elements.skills.source = "asset/gui/close.png";
        }
        else {
            _elements.skills.source = "asset/gui/search_128.png";
        }
    }
}