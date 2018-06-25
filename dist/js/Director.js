"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Director = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //导演类，控制游戏的逻辑


var _DataStore = require("./base/DataStore.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Director = exports.Director = function () {
    _createClass(Director, null, [{
        key: "getInstance",
        value: function getInstance() {
            if (!Director.instance) {
                Director.instance = new Director();
            }
            return Director.instance;
        }
    }]);

    function Director() {
        _classCallCheck(this, Director);

        this.dataStore = _DataStore.DataStore.getInstance();
    }

    _createClass(Director, [{
        key: "run",
        value: function run() {
            var backgroundSprite = this.dataStore.get('background');
            backgroundSprite.draw();
        }
    }]);

    return Director;
}();
//# sourceMappingURL=Director.js.map