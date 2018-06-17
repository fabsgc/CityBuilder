/**
 * @description Class Player
 * @author Hikma <contact@hikma.io>
 * @licence MIT
 * @class App.Player
 * @constructor
 */
App.Player = function(scene, assetsManager){

    /**
     * Scene instance
     * @type {BABYLON.Scene}
     * @private
     */
    var _scene = scene;

    /**
     * AssetsManager instance
     * @type {BABYLON.AssetManager}
     * @private
     */
    var _assetsManager = assetsManager;

    /**
     * Money amount
     * @type {number}
     * @private
     */
    var _money = 9;

    /**
     * Temperature raising
     * @type {number}
     * @private
     */
    var _temperature = 0;

    /**
     * Skills bought
     * @type {Object[]}
     * @private
     */
    var _skills = []

    /**
     * Effects to execute
     * @type {Object[]}
     * @private
     */
    var _effectsToExecute = []

    /**
     * Temperature raising rate
     * @type {number}
     * @private
     */
    var _temperatureRaiseRate = 0.00333;

    /**
     * Elapsed time in millisecond
     * @type {number}
     * @private
     */
    var _elapsedTime = 0;

    /**
     * Last updated time in millisecond
     * @type {number}
     * @private
     */
    var _lastTime = 0;

    /**
     * Last executed effect
     * @type {number}
     * @private
     */
    var _lastExecutedEffect = 0;

    /**
     * Free space for new objects
     * @type {Object[]}
     * @private
     */
    var _freeSpace = [
        {x: 16, y: 18},
        {x: 19, y: 22}
    ];
    
    /**
     * @method App.Player#Init
     * @public
     * @return {void}
     */
    this.Init = function() {
        _lastTime = Date.now();
    }

    /**
     * @method App.Player#IsAlive
     * @public
     * @return {boolean}
     */
    this.IsAlive = function() {
        return _temperature < 2;
    }
    
    /**
     * @method App.Player#SpeedDownRaisingRate
     * @param {number} value
     * @public
     * @return {boolean}
     */
    this.SpeedDownRaisingRate = function(value) {
        _temperatureRaiseRate *= (1 - value);
    }

    /**
     * @method App.Player#GetMoney
     * @public
     * @return {number}
     */
    this.GetMoney = function() {
        return _money;
    }

    /**
     * @method App.Player#GetTemperature
     * @public
     * @return {number}
     */
    this.GetTemperature = function() {
        return _temperature;
    }

    /**
     * @method App.Player#GetSkills
     * @public
     * @return {Object[]}
     */
    this.GetSkills = function() {
        return _skills;
    }

    /**
     * @method App.Player#Update
     * @public
     * @return {void}
     */
    this.Update = function() {
        var time = Date.now();
        var deltaTime = time - _lastTime;

        _elapsedTime += deltaTime;
        _lastTime = time;

        _temperature += (deltaTime/1000) * _temperatureRaiseRate;
        _money += (deltaTime/25) * _temperatureRaiseRate

        if(_lastTime - _lastExecutedEffect > 5000) {
            if(_effectsToExecute.length > 0) {
                _lastExecutedEffect = _lastTime;

                var effect = _effectsToExecute.pop();
                
                switch(effect) {
                    case EffectType.Unicorn:
                        DrawUnicorn();
                    break;

                    case EffectType.WindTurbine:
                        DrawWindTurbine();
                    break;
                }
            }
        }
    }

    /**
     * @method App.Player#AddSkill
     * @param {Object} skill
     * @public
     * @return {void}
     */
    this.AddSkill = function(skill) {
        _skills.push(skill);
        _money -= skill.price;

        skill.effects.forEach(function(effect) {
            _effectsToExecute.push(effect);
        });
        
        _lastExecutedEffect = _lastTime;
        _temperatureRaiseRate -= (skill.bonus * 0.05);
    }

    /**
     * @method App.Player#DrawUnicorn
     * @private
     * @return {void}
     */
    function DrawUnicorn() {
        if(_freeSpace.length > 0) {
            var config = App.Config.Game.stuff.Windturbine;
            config.position = _freeSpace.pop();

            var obj = new App.Object(config, _scene, _assetsManager);
            obj.Init();

            _assetsManager.load();
        }
    }

    /**
     * @method App.Player#DrawWindTurbine
     * @private
     * @return {void}
     */
    function DrawWindTurbine () {
        if(_freeSpace.length > 0) {
            var config = App.Config.Game.stuff.Windturbine;
            config.position = _freeSpace.pop();
            
            var obj = new App.Object(config, _scene, _assetsManager);
            obj.Init();

            _assetsManager.load();
        }
    }
}