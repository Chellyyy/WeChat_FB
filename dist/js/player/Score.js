'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Score = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //计分器类


var _DataStore = require('../base/DataStore.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Score = exports.Score = function () {
    function Score() {
        _classCallCheck(this, Score);

        this.ctx = _DataStore.DataStore.getInstance().ctx;
        this.scoreNumber = 0;
        //因为Canvas刷新很快，所以需要一个变量控制加分，只加一次
        this.isScore = true;
    }

    _createClass(Score, [{
        key: 'draw',
        value: function draw() {
            this.ctx.font = '25px Arial';
            this.ctx.fillStyle = '#543847';
            this.ctx.fillText(this.scoreNumber, window.innerWidth / 2, window.innerHeight / 18, 1000);
        }
    }]);

    return Score;
}();
//# sourceMappingURL=Score.js.map