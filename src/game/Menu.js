/**
 * @description Class Menu
 * @author Hikma <contact@hikma.io>
 * @licence MIT
 * @class App.Menu
 * @constructor
 */
App.Menu = function(player){

    /**
     * Menu state
     * @type {MenuState}
     * @private
     */
    var _menuState = MenuState.Hidden;

    /**
     * GUI instance
     * @type {BABYLON.GUI.AdvancedDynamicTexture}
     * @private
     */
    var _gui = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true);

    /**
     * Player instance
     * @type {App.Player}
     * @private
     */
    var _player = player;

    /**
     * Gui elements
     * @type {Objcet}
     * @private
     */
    var _elements = {
        container: null,
        header: null,
        headerCitizen: null,
        headerCitizenText: null,
        headerEconomy: null,
        headerEconomyText: null,
        headerGovernance: null,
        headerGovernanceText: null,
        body: null,
        footer: null,
        footerText: null
    }

    /**
     * Dynamic gui elements
     * @type {Objcet}
     * @private
     */
    var _dynamicElements = []

    /**
     * @method App.Menu#Init
     * @public
     * @return {void}
     */
    this.Init = function() {
        console.log("GUI menu loaded");

        _elements.container = new BABYLON.GUI.Rectangle("container");
        _elements.container.adaptWidthToChildren = false;
        _elements.container.width = "75%";
        _elements.container.height = "85%";
        _elements.container.background = "black";
        _elements.container.alpha = 0.7;
        _elements.container.cornerRadius = 10;
        _elements.container.tickness = 5;
        _elements.container.color = "white";
        _gui.addControl(_elements.container);

        _elements.header = new BABYLON.GUI.Grid("header");
        _elements.header.background = "black";
        _elements.header.alpha = 0.5;
        _elements.header.addColumnDefinition(30);
        _elements.header.addColumnDefinition(30);
        _elements.header.addColumnDefinition(30);
        _elements.header.height = "75px";
        _elements.header.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        _elements.header.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        _elements.container.addControl(_elements.header);

        _elements.headerCitizen = new BABYLON.GUI.Rectangle("headerCitizen");
        _elements.headerCitizen.adaptWidthToChildren = false;
        _elements.headerCitizen.width = "100%";
        _elements.headerCitizen.height = "75px";
        _elements.headerCitizen.background = "black";
        _elements.headerCitizen.alpha = 0.9;
        _elements.headerCitizen.tickness = 0;
        _elements.header.addControl(_elements.headerCitizen, 0, 0);

        _elements.headerCitizenText = new BABYLON.GUI.TextBlock("headerCitizenText");
        _elements.headerCitizenText.text = "Citoyen";
        _elements.headerCitizenText.color = "white";
        _elements.headerCitizenText.fontSize = 45;
        _elements.headerCitizen.addControl(_elements.headerCitizenText);

        _elements.headerGovernance = new BABYLON.GUI.Rectangle("headerGovernance");
        _elements.headerGovernance.adaptWidthToChildren = false;
        _elements.headerGovernance.width = "100%";
        _elements.headerGovernance.height = "75px";
        _elements.headerGovernance.background = "#005c83";
        _elements.headerGovernance.alpha = 0.9;
        _elements.header.addControl(_elements.headerGovernance, 0, 1);

        _elements.headerGovernanceText = new BABYLON.GUI.TextBlock("headerGovernanceText");
        _elements.headerGovernanceText.text = "Gouvernance";
        _elements.headerGovernanceText.color = "white";
        _elements.headerGovernanceText.fontSize = 45;
        _elements.headerGovernance.addControl(_elements.headerGovernanceText);

        _elements.headerEconomy = new BABYLON.GUI.Rectangle("headerEconomy");
        _elements.headerEconomy.adaptWidthToChildren = false;
        _elements.headerEconomy.width = "100%";
        _elements.headerEconomy.height = "75px";
        _elements.headerEconomy.background = "black";
        _elements.headerEconomy.alpha = 0.9;
        _elements.header.addControl(_elements.headerEconomy, 0, 2);

        _elements.headerEconomyText = new BABYLON.GUI.TextBlock("headerEconomyText");
        _elements.headerEconomyText.text = "Economie";
        _elements.headerEconomyText.color = "white";
        _elements.headerEconomyText.fontSize = 45;
        _elements.headerEconomy.addControl(_elements.headerEconomyText);

        _elements.body = new BABYLON.GUI.Grid("body");
        _elements.body.width = "98%";
        _elements.body.height = "360px";
        _elements.body.top = "95px";
        _elements.body.addColumnDefinition(33);
        _elements.body.addColumnDefinition(34);
        _elements.body.addColumnDefinition(33);
        _elements.body.addRowDefinition(0.33);
        _elements.body.addRowDefinition(0.33);
        _elements.body.addRowDefinition(0.33);
        _elements.body.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        _elements.body.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        _elements.container.addControl(_elements.body);

        _elements.footer = new BABYLON.GUI.Grid("footer");
        _elements.footer.background = "black";
        _elements.footer.alpha = 0.5;
        _elements.footer.addColumnDefinition(30, true);
        _elements.footer.addColumnDefinition(30, true);
        _elements.footer.addColumnDefinition(30, true);
        _elements.footer.height = "150px";
        _elements.footer.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        _elements.footer.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        _elements.container.addControl(_elements.footer);

        var skills = App.Config.Game.skills;
        var col = 0;
        var row = 0;
        
        skills.forEach(function(skill) {
            if(CheckIsPurchased(skill) || CheckIsAvailable(skill)) {
                var skillElement = CreateSkillElement(skill);

                _elements.body.addControl(skillElement, row, col);

                col = ++col % 3;
                row = (col == 0) ? ++row : row;
            }
        });

        //_elements.container.isVisible = false;
    }

    /**
     * @method App.Menu#Update
     * @public
     * @return {void}
     */
    this.Update = function() {
        _elements.isVisible = true;
        _elements.isForeground = true;
    }

    /**
     * @method App.Menu#Draw
     * @public
     * @return {void}
     */
    this.Draw = function() {
        //_elements.container.isVisible = true;
    }

    /**
     * @method App.Menu#Clear
     * @public
     * @return {void}
     */
    this.Clear = function() {
        //_elements.container.isVisible = false;
    }

    /**
     * @method App.Menu#SetState
     * @param {MenuState} state
     * @public
     * @return {void}
     */
    this.SetState = function(state) {
        _menuState = state;
    }

    /**
     * @method App.Menu#GetState
     * @public
     * @return {MenuState}
     */
    this.GetState = function() {
        return _menuState;
    }

    /**
     * @method App.Menu#CheckIsPurchased
     * @param {Object} skill
     * @private
     * @return {boolean}
     */
    function CheckIsPurchased(skill) {
        _player.GetSkills().forEach(function(s) {
            if(s.id == skill.id) {
                return true;
            }
        });

        return false;
    }

    /**
     * @method App.Menu#CheckIsPurchasable
     * @param {Object} skill
     * @private
     * @return {boolean}
     */
    function CheckIsPurchasable(skill) {
        if(skill.price <= _player.GetMoney()) {
            return true;
        }

        return false;
    }

    /**
     * @method App.Menu#CheckIsAvailable
     * @param {Object} skill
     * @private
     * @return {boolean}
     */
    function CheckIsAvailable(skill) {
        if(skill.parents.length == 0) {
            return true;
        }

        var parentsNeeded = skill.parents;
        var currentParents = [];

        _player.GetSkills().forEach(function(s) {
            var currentParents = [];

            if(parentsNeeded.indexOf(s.id) >= 0 && currentParents.indexOf(s.id) == -1) {
                currentParents.push(s.id);
            }
        });

        if(currentParents.length == parentsNeeded.length) {
            return true;
        }

        return false;
    }

    /**
     * @method App.Menu#CreateSkillElemnt
     * @param {Object} skill
     * @private
     * @return {BABLON.GUI.Rectangle}
     */
    function CreateSkillElement(skill) {
        var element = new BABYLON.GUI.Grid("skill-" + skill.id);
        element.color = "black";
        element.alpha = 1;
        element.addColumnDefinition(30);
        element.addColumnDefinition(40);
        element.addColumnDefinition(30);
        element.width = "90%";
        element.height = "100px";
        element.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        element.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;

        if(CheckIsPurchased(skill)) {
            element.background = "#c9d7ef";
        }
        else {
            element.background = "#8da7d3";
        }

        var elementLogo = new BABYLON.GUI.Image("skill-" + skill.id + "-logo", skill.logo);
        elementLogo.width = "64px";
        elementLogo.height = "64px";
        elementLogo.stretch = BABYLON.GUI.Image.STRETCH_NONE;
        elementLogo.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        elementLogo.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
        element.addControl(elementLogo, 0, 0);

        var elementName = new BABYLON.GUI.TextBlock("skill-" + skill.id + "-name");
        elementName.text = skill.name;
        elementName.color = "white";
        elementName.fontSize = 25;
        elementName.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        elementName.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
        element.addControl(elementName, 0, 1);

        var elementPrice = new BABYLON.GUI.TextBlock("skill-" + skill.id + "-price");
        elementPrice.text = skill.price.toString() + "M $";
        elementPrice.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        elementPrice.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
        elementPrice.fontSize = 35;
        
        if(CheckIsPurchased(skill)) {
            elementPrice.color = "black";
            elementPrice.text = "-";
        }
        else if(CheckIsPurchasable(skill)) {
            elementPrice.color = "#2a5634";
        }
        else {
            elementPrice.color = "#721d0a";
        }

        element.addControl(elementPrice, 0, 2);

        return element;
    }

    /**
     * @method App.Menu#CreateSkillDescriptionElement
     * @param {Object} skill
     * @private
     * @return {BABLON.GUI.Rectangle}
     */
    function CreateSkillDescriptionElement(skill) {
        return null;
    }

    /**
     * @method App.Menu#CreateSkillElemnt
     * @param {CustomEvent} e
     * @private
     * @return {void}
     */
    function DrawDescriptionHandler(e) {
        console.log(e.detail.skill);
    }
}