"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Main = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //初始化整个游戏的精灵，作为游戏开始的入口

var _ResourceLoader = require("./js/base/ResourceLoader.js");

var _Director = require("./js/Director.js");

var _BackGround = require("./js/runtime/BackGround.js");

var _Land = require("./js/runtime/Land.js");

var _DataStore = require("./js/base/DataStore.js");

var _Birds = require("./js/player/Birds.js");

var _StartButton = require("./js/player/StartButton.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = exports.Main = function () {
    function Main() {
        var _this = this;

        _classCallCheck(this, Main);

        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = _DataStore.DataStore.getInstance();
        this.director = _Director.Director.getInstance();
        var loader = _ResourceLoader.ResourceLoader.create();
        loader.onLoaded(function (map) {
            return _this.onResourceFirstLoaded(map);
        });
    }

    _createClass(Main, [{
        key: "onResourceFirstLoaded",
        value: function onResourceFirstLoaded(map) {
            this.dataStore.ctx = this.ctx;
            this.dataStore.res = map;
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            //首先重置游戏是没有结束的
            this.director.isGameOver = false;
            this.dataStore.put('pencils', []).put('background', _BackGround.BackGround).put('land', _Land.Land).put('birds', _Birds.Birds).put('startButton', _StartButton.StartButton);
            this.registerEvent();
            //要在游戏逻辑运行之前
            this.director.createPencil();
            this.director.run();
        }
    }, {
        key: "registerEvent",
        value: function registerEvent() {
            var _this2 = this;

            this.canvas.addEventListener('touchstart', function (e) {
                //屏蔽掉JS的事件冒泡
                e.preventDefault();
                if (_this2.director.isGameOver) {
                    _this2.init();
                    console.log('游戏开始');
                } else {
                    _this2.director.birdsEvent();
                }
            });
        }
    }]);

    return Main;
}();
//# sourceMappingURL=Main.js.map