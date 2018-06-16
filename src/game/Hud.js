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
     * GUI instance
     * @type {BABYLON.GUI.AdvancedDynamicTexture}
     * @private
     */
    var _gui = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    /**
     * Gui elements
     * @type {Objcet}
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
        var gui = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

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
        gui.addControl(_elements.skills);        

        _elements.moneyLogo = new BABYLON.GUI.Image("money logo", "asset/gui/money_64.png");
        _elements.moneyLogo.width = "64px";
        _elements.moneyLogo.height = "64px";
        _elements.moneyLogo.stretch = BABYLON.GUI.Image.STRETCH_EXTEND;
        _elements.moneyLogo.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        _elements.moneyLogo.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        _elements.moneyLogo.left  = "-10px";
        _elements.moneyLogo.top  = "10px";
        _gui.addControl(_elements.moneyLogo);

        _elements.money = new BABYLON.GUI.TextBlock("money");
        _elements.money.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        _elements.money.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        _elements.money.left  = "-90px";
        _elements.money.top  = "22px";
        _elements.money.fontSize = 45;
        _elements.money.color = "white";
        _elements.money.text = "0 M";
        _gui.addControl(_elements.money);

        _elements.temperatureLogo = new BABYLON.GUI.Image("temperature", "asset/gui/thermometer_64.png");
        _elements.temperatureLogo.width = "64px";
        _elements.temperatureLogo.height = "64px";
        _elements.temperatureLogo.stretch = BABYLON.GUI.Image.STRETCH_EXTEND;
        _elements.temperatureLogo.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        _elements.temperatureLogo.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        _elements.temperatureLogo.left  = "-10px";
        _elements.temperatureLogo.top  = "90px";
        _gui.addControl(_elements.temperatureLogo);

        _elements.temperature = new BABYLON.GUI.TextBlock("temperature logo");
        _elements.temperature.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        _elements.temperature.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        _elements.temperature.left  = "-90px";
        _elements.temperature.top  = "96px";
        _elements.temperature.fontSize = 45;
        _elements.temperature.color = "white";
        _elements.temperature.text = "+0°c";
        _gui.addControl(_elements.temperature);
    }

    /**
     * @method App.Hud#Update
     * @param {App.Player} player
     * @public
     * @return {void}
     */
    this.Update = function(player) {
        var money = player.GetMoney().toFixed(1).toString();
        var temperature = player.GetTemperature().toFixed(1).toString();

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