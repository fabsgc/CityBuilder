/**
 * @description Class LooseScreen
 * @author Hikma <contact@hikma.io>
 * @licence MIT
 * @class App.LooseScreen
 * @constructor
 */
App.LooseScreen = function(){

    /**
     * Gui elements
     * @type {Object}
     * @private
     */
    var _elements = {
        container: null,
        text: null
    };

    /**
     * @method App.LooseScreen#Init
     * @public
     * @return {void}
     */
    this.Init = function() {
        console.log("GUI loose loaded");

        _elements.container = new BABYLON.GUI.Rectangle("container-loose");
        _elements.container.adaptWidthToChildren = false;
        _elements.container.width = "100%";
        _elements.container.height = "100%";
        _elements.container.background = "black";
        GUI.addControl(_elements.container);

        _elements.text = new BABYLON.GUI.TextBlock("text-loose");
        _elements.text.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        _elements.text.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
        _elements.text.fontSize = 75;
        _elements.text.color = "white";
        _elements.text.text = "You lose !";
        _elements.container.addControl(_elements.text);

        _elements.container.isVisible = false;
    }

    /**
     * @method App.LooseScreen#Draw
     * @public
     * @return {void}
     */
    this.Draw = function() {
        _elements.container.isVisible = true;
    }

    /**
     * @method App.LooseScreen#Clear
     * @public
     * @return {void}
     */
    this.Clear = function() {
        _elements.container.isVisible = false;
    }
}