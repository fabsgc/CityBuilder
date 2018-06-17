/**
 * @description Class Player
 * @author Hikma <contact@hikma.io>
 * @licence MIT
 * @class App.Player
 * @constructor
 */
App.Player = function(){

    /**
     * Money amount
     * @type {number}
     * @private
     */
    var _money = 100;

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
    }

    this.AddSkill = function(skill) {
        _skills.push(skill);
    }
}