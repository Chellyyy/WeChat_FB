"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DownPencil = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Pencil2 = require("./Pencil.js");

var _Sprite = require("../base/Sprite.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //下半部分铅笔


var DownPencil = exports.DownPencil = function (_Pencil) {
    _inherits(DownPencil, _Pencil);

    function DownPencil(top) {
        _classCallCheck(this, DownPencil);

        var image = _Sprite.Sprite.getImage('pencilDown');
        return _possibleConstructorReturn(this, (DownPencil.__proto__ || Object.getPrototypeOf(DownPencil)).call(this, image, top));
    }

    _createClass(DownPencil, [{
        key: "draw",
        value: function draw() {
            var gap = window.innerHeight / 5;
            this.y = this.top + gap;
            _get(DownPencil.prototype.__proto__ || Object.getPrototypeOf(DownPencil.prototype), "draw", this).call(this);
        }
    }]);

    return DownPencil;
}(_Pencil2.Pencil);
//# sourceMappingURL=DownPencil.js.map