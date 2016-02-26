(function() {

/**
 * bundled by apack.
 */

var global = window;
var __dirname = '';
var process = (function() {
	var process = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {
	  NODE_ENV: ''
	};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };

	return process;
})();

return (function (modules) {
  // The module cache
  var installedModules = {};

  // The require function
  function __apack_require__(moduleId) {

    // Check if module is in cache
    if (installedModules[moduleId])
      return installedModules[moduleId].exports;

    // Create a new module (and put it into the cache)
    var module = installedModules[moduleId] = {
      exports: {},
      id: moduleId,
      loaded: false
    };

    // Execute the module function
    modules[moduleId].call(module.exports, module, module.exports, __apack_require__);

    // Flag the module as loaded
    module.loaded = true;

    // Return the exports of the module
    return module.exports;
  }


  // expose the modules object (__webpack_modules__)
  __apack_require__.m = modules;

  // expose the module cache
  __apack_require__.c = installedModules;

  // __webpack_public_path__
  __apack_require__.p = "";

  // Load entry module and return exports
  return __apack_require__(8);
})([

/*
 * @file:  /Users/xiaoge/air-design/gentle-material/src/button/FlatButton.jsx
 * @index: 0
 */
function(module, exports, __apack_require__) {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__apack_require__(4);

var _react = __apack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _util = __apack_require__(7);

var _ColorPalette = __apack_require__(6);

var _base = __apack_require__(3);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlatButton = function (_React$Component) {
  _inherits(FlatButton, _React$Component);

  function FlatButton() {
    _classCallCheck(this, FlatButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FlatButton).call(this));

    _base2.default.constructor.call(_this);
    return _this;
  }

  _createClass(FlatButton, [{
    key: 'render',
    value: function render() {
      var sty = {
        color: this.props.color,
        backgroundColor: this.state.hover ? (0, _util.getOpacityColor)(this.props.color, 0.12) : this.props.background
      };
      return this._render(sty, 'md-flat-btn md-wave');
    }
  }]);

  return FlatButton;
}(_react2.default.Component);

FlatButton.defaultProps = {
  color: _ColorPalette.blue500,
  background: _ColorPalette.transparent
};

(0, _util.extendProto)(FlatButton, _base2.default);

exports.default = FlatButton;

},
/*
 * @file:  /Users/xiaoge/air-design/gentle-material/src/button/FloatingButton.jsx
 * @index: 1
 */
function(module, exports, __apack_require__) {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__apack_require__(4);

var _react = __apack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _util = __apack_require__(7);

var _ColorPalette = __apack_require__(6);

var _base = __apack_require__(3);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FloatingButton = function (_React$Component) {
  _inherits(FloatingButton, _React$Component);

  function FloatingButton() {
    _classCallCheck(this, FloatingButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FloatingButton).call(this));

    _base2.default.constructor.call(_this, true);
    return _this;
  }

  _createClass(FloatingButton, [{
    key: 'render',
    value: function render() {
      var clsDepth = this.state.press ? '12' : this.state.hover ? '8' : '6';
      var sty = {
        color: this.props.color,
        backgroundColor: this.props.background
      };
      return this._render(sty, 'md-floating-btn md-shadow-elevation-' + clsDepth + ' md-wave');
    }
  }]);

  return FloatingButton;
}(_react2.default.Component);

FloatingButton.propTypes = {
  icon: _react2.default.PropTypes.string.isRequired
};

FloatingButton.defaultProps = {
  color: _ColorPalette.darkWhite,
  background: _ColorPalette.pinkA200
};

(0, _util.extendProto)(FloatingButton, _base2.default);

exports.default = FloatingButton;

},
/*
 * @file:  /Users/xiaoge/air-design/gentle-material/src/button/RaisedButton.jsx
 * @index: 2
 */
function(module, exports, __apack_require__) {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__apack_require__(4);

var _react = __apack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _util = __apack_require__(7);

var _ColorPalette = __apack_require__(6);

var _base = __apack_require__(3);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RaisedButton = function (_React$Component) {
  _inherits(RaisedButton, _React$Component);

  function RaisedButton() {
    _classCallCheck(this, RaisedButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RaisedButton).call(this));

    _base2.default.constructor.call(_this);
    return _this;
  }

  _createClass(RaisedButton, [{
    key: 'render',
    value: function render() {
      var clsDepth = this.state.press ? '4' : this.state.hover ? '3' : '2';
      var sty = {
        color: this.props.color,
        backgroundColor: this.props.background
      };
      return this._render(sty, 'md-raised-btn md-shadow-elevation-' + clsDepth + ' md-wave');
    }
  }]);

  return RaisedButton;
}(_react2.default.Component);

(0, _util.extendProto)(RaisedButton, _base2.default);

exports.default = RaisedButton;

},
/*
 * @file:  /Users/xiaoge/air-design/gentle-material/src/button/_base.js
 * @index: 3
 */
function(module, exports, __apack_require__) {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __apack_require__(7);

var _react = __apack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _ColorPalette = __apack_require__(6);

var _icon = __apack_require__(9);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  constructor: function constructor() {
    var isFloating = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

    this.state = {
      hover: false,
      focus: false,
      press: false,
      waters: []
    };
    this._handlers = {
      md: this.handleMouseDown.bind(this),
      mu: this.handleMouseUp.bind(this),
      me: this.handleMouseEnter.bind(this),
      ml: this.handleMouseLeave.bind(this)
    };
    this._isFloating = isFloating;
  },

  defaultProps: {
    color: _ColorPalette.darkWhite,
    background: _ColorPalette.blue500,
    onMouseDown: _util.noop,
    onMouseUp: _util.noop,
    onMouseEnter: _util.noop,
    onMouseLeave: _util.noop
  },
  propTypes: {
    color: _react2.default.PropTypes.string,
    background: _react2.default.PropTypes.string,
    onMouseDown: _react2.default.PropTypes.func,
    onMouseUp: _react2.default.PropTypes.func,
    onMouseEnter: _react2.default.PropTypes.func,
    onMouseLeave: _react2.default.PropTypes.func
  },
  handleMouseDown: function handleMouseDown(evt) {
    var waters = this.state.waters;
    var pos = (0, _util.getEventOffsetPosition)(evt, this.refs.container);
    var w = this.refs.container.offsetWidth;
    var h = this.refs.container.offsetHeight;
    var radius = undefined;
    if (this._isFloating) {
      var dx = w / 2 - pos.x;
      var dy = w / 2 - pos.y;
      radius = Math.ceil(w / 2 + Math.sqrt(dx * dx + dy * dy));
    } else {
      var mx = Math.max(pos.x, w - pos.x);
      var my = Math.max(pos.y, h - pos.y);
      radius = Math.ceil(Math.sqrt(mx * mx + my * my));
    }

    var water = {
      key: Date.now() + '-' + Math.round(Math.random() * 10000),
      style: {
        left: pos.x - radius,
        top: pos.y - radius,
        width: radius * 2,
        height: radius * 2
      }
    };
    waters.push(water);
    this.setState({
      press: true,
      waters: waters
    });
    setTimeout(this.handleAnimationEnd.bind(this, water), 400);
  },
  handleAnimationEnd: function handleAnimationEnd(water) {
    var waters = this.state.waters;
    var idx = waters.indexOf(water);
    waters.splice(idx, 1);
    this.setState({
      waters: waters
    });
  },
  handleMouseUp: function handleMouseUp() {
    this.setState({
      press: false
    });
  },
  handleMouseEnter: function handleMouseEnter() {
    this.setState({
      hover: true
    });
  },
  handleMouseLeave: function handleMouseLeave() {
    this.setState({
      hover: false
    });
  },
  _render: function _render(sty, clsName) {
    clsName = clsName + (this.props.className ? ' ' + this.props.className : '');
    return _react2.default.createElement(
      'span',
      { ref: 'container',
        style: sty,
        className: clsName },
      _react2.default.createElement(
        'span',
        { className: 'md-btn-back md-wave-back' },
        this.state.waters.map(function (water) {
          return _react2.default.createElement('span', { key: water.key,
            style: water.style,
            className: 'md-wave-water' });
        })
      ),
      _react2.default.createElement(
        'span',
        { onMouseDown: this._handlers.md, onMouseUp: this._handlers.mu,
          onMouseEnter: this._handlers.me, onMouseLeave: this._handlers.ml,
          className: 'md-btn-front md-wave-front' },
        this.props.icon ? _react2.default.createElement(_icon2.default, { type: this.props.icon }) : undefined,
        this._isFloating ? undefined : this.props.children
      )
    );
  }
};

},
/*
 * @file:  /Users/xiaoge/air-design/gentle-material/src/button/button.less
 * @index: 4
 */
function(module, exports, __apack_require__) {

// none js module

},
/*
 * @file:  /Users/xiaoge/air-design/gentle-material/src/button/index.js
 * @index: 5
 */
function(module, exports, __apack_require__) {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlatButton = exports.FloatingButton = exports.RaisedButton = undefined;

var _RaisedButton = __apack_require__(2);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FloatingButton = __apack_require__(1);

var _FloatingButton2 = _interopRequireDefault(_FloatingButton);

var _FlatButton = __apack_require__(0);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RaisedButton = _RaisedButton2.default;
exports.FloatingButton = _FloatingButton2.default;
exports.FlatButton = _FlatButton2.default;

},
/*
 * @file:  /Users/xiaoge/air-design/gentle-material/src/common/ColorPalette.js
 * @index: 6
 */
function(module, exports, __apack_require__) {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var red50 = exports.red50 = '#ffebee',
    red100 = exports.red100 = '#ffcdd2',
    red200 = exports.red200 = '#ef9a9a',
    red300 = exports.red300 = '#e57373',
    red400 = exports.red400 = '#ef5350',
    red500 = exports.red500 = '#f44336',
    red600 = exports.red600 = '#e53935',
    red700 = exports.red700 = '#d32f2f',
    red800 = exports.red800 = '#c62828',
    red900 = exports.red900 = '#b71c1c',
    redA100 = exports.redA100 = '#ff8a80',
    redA200 = exports.redA200 = '#ff5252',
    redA400 = exports.redA400 = '#ff1744',
    redA700 = exports.redA700 = '#d50000',
    pink50 = exports.pink50 = '#fce4ec',
    pink100 = exports.pink100 = '#f8bbd0',
    pink200 = exports.pink200 = '#f48fb1',
    pink300 = exports.pink300 = '#f06292',
    pink400 = exports.pink400 = '#ec407a',
    pink500 = exports.pink500 = '#e91e63',
    pink600 = exports.pink600 = '#d81b60',
    pink700 = exports.pink700 = '#c2185b',
    pink800 = exports.pink800 = '#ad1457',
    pink900 = exports.pink900 = '#880e4f',
    pinkA100 = exports.pinkA100 = '#ff80ab',
    pinkA200 = exports.pinkA200 = '#ff4081',
    pinkA400 = exports.pinkA400 = '#f50057',
    pinkA700 = exports.pinkA700 = '#c51162',
    purple50 = exports.purple50 = '#f3e5f5',
    purple100 = exports.purple100 = '#e1bee7',
    purple200 = exports.purple200 = '#ce93d8',
    purple300 = exports.purple300 = '#ba68c8',
    purple400 = exports.purple400 = '#ab47bc',
    purple500 = exports.purple500 = '#9c27b0',
    purple600 = exports.purple600 = '#8e24aa',
    purple700 = exports.purple700 = '#7b1fa2',
    purple800 = exports.purple800 = '#6a1b9a',
    purple900 = exports.purple900 = '#4a148c',
    purpleA100 = exports.purpleA100 = '#ea80fc',
    purpleA200 = exports.purpleA200 = '#e040fb',
    purpleA400 = exports.purpleA400 = '#d500f9',
    purpleA700 = exports.purpleA700 = '#aa00ff',
    deepPurple50 = exports.deepPurple50 = '#ede7f6',
    deepPurple100 = exports.deepPurple100 = '#d1c4e9',
    deepPurple200 = exports.deepPurple200 = '#b39ddb',
    deepPurple300 = exports.deepPurple300 = '#9575cd',
    deepPurple400 = exports.deepPurple400 = '#7e57c2',
    deepPurple500 = exports.deepPurple500 = '#673ab7',
    deepPurple600 = exports.deepPurple600 = '#5e35b1',
    deepPurple700 = exports.deepPurple700 = '#512da8',
    deepPurple800 = exports.deepPurple800 = '#4527a0',
    deepPurple900 = exports.deepPurple900 = '#311b92',
    deepPurpleA100 = exports.deepPurpleA100 = '#b388ff',
    deepPurpleA200 = exports.deepPurpleA200 = '#7c4dff',
    deepPurpleA400 = exports.deepPurpleA400 = '#651fff',
    deepPurpleA700 = exports.deepPurpleA700 = '#6200ea',
    indigo50 = exports.indigo50 = '#e8eaf6',
    indigo100 = exports.indigo100 = '#c5cae9',
    indigo200 = exports.indigo200 = '#9fa8da',
    indigo300 = exports.indigo300 = '#7986cb',
    indigo400 = exports.indigo400 = '#5c6bc0',
    indigo500 = exports.indigo500 = '#3f51b5',
    indigo600 = exports.indigo600 = '#3949ab',
    indigo700 = exports.indigo700 = '#303f9f',
    indigo800 = exports.indigo800 = '#283593',
    indigo900 = exports.indigo900 = '#1a237e',
    indigoA100 = exports.indigoA100 = '#8c9eff',
    indigoA200 = exports.indigoA200 = '#536dfe',
    indigoA400 = exports.indigoA400 = '#3d5afe',
    indigoA700 = exports.indigoA700 = '#304ffe',
    blue50 = exports.blue50 = '#e3f2fd',
    blue100 = exports.blue100 = '#bbdefb',
    blue200 = exports.blue200 = '#90caf9',
    blue300 = exports.blue300 = '#64b5f6',
    blue400 = exports.blue400 = '#42a5f5',
    blue500 = exports.blue500 = '#2196f3',
    blue600 = exports.blue600 = '#1e88e5',
    blue700 = exports.blue700 = '#1976d2',
    blue800 = exports.blue800 = '#1565c0',
    blue900 = exports.blue900 = '#0d47a1',
    blueA100 = exports.blueA100 = '#82b1ff',
    blueA200 = exports.blueA200 = '#448aff',
    blueA400 = exports.blueA400 = '#2979ff',
    blueA700 = exports.blueA700 = '#2962ff',
    lightBlue50 = exports.lightBlue50 = '#e1f5fe',
    lightBlue100 = exports.lightBlue100 = '#b3e5fc',
    lightBlue200 = exports.lightBlue200 = '#81d4fa',
    lightBlue300 = exports.lightBlue300 = '#4fc3f7',
    lightBlue400 = exports.lightBlue400 = '#29b6f6',
    lightBlue500 = exports.lightBlue500 = '#03a9f4',
    lightBlue600 = exports.lightBlue600 = '#039be5',
    lightBlue700 = exports.lightBlue700 = '#0288d1',
    lightBlue800 = exports.lightBlue800 = '#0277bd',
    lightBlue900 = exports.lightBlue900 = '#01579b',
    lightBlueA100 = exports.lightBlueA100 = '#80d8ff',
    lightBlueA200 = exports.lightBlueA200 = '#40c4ff',
    lightBlueA400 = exports.lightBlueA400 = '#00b0ff',
    lightBlueA700 = exports.lightBlueA700 = '#0091ea',
    cyan50 = exports.cyan50 = '#e0f7fa',
    cyan100 = exports.cyan100 = '#b2ebf2',
    cyan200 = exports.cyan200 = '#80deea',
    cyan300 = exports.cyan300 = '#4dd0e1',
    cyan400 = exports.cyan400 = '#26c6da',
    cyan500 = exports.cyan500 = '#00bcd4',
    cyan600 = exports.cyan600 = '#00acc1',
    cyan700 = exports.cyan700 = '#0097a7',
    cyan800 = exports.cyan800 = '#00838f',
    cyan900 = exports.cyan900 = '#006064',
    cyanA100 = exports.cyanA100 = '#84ffff',
    cyanA200 = exports.cyanA200 = '#18ffff',
    cyanA400 = exports.cyanA400 = '#00e5ff',
    cyanA700 = exports.cyanA700 = '#00b8d4',
    teal50 = exports.teal50 = '#e0f2f1',
    teal100 = exports.teal100 = '#b2dfdb',
    teal200 = exports.teal200 = '#80cbc4',
    teal300 = exports.teal300 = '#4db6ac',
    teal400 = exports.teal400 = '#26a69a',
    teal500 = exports.teal500 = '#009688',
    teal600 = exports.teal600 = '#00897b',
    teal700 = exports.teal700 = '#00796b',
    teal800 = exports.teal800 = '#00695c',
    teal900 = exports.teal900 = '#004d40',
    tealA100 = exports.tealA100 = '#a7ffeb',
    tealA200 = exports.tealA200 = '#64ffda',
    tealA400 = exports.tealA400 = '#1de9b6',
    tealA700 = exports.tealA700 = '#00bfa5',
    green50 = exports.green50 = '#e8f5e9',
    green100 = exports.green100 = '#c8e6c9',
    green200 = exports.green200 = '#a5d6a7',
    green300 = exports.green300 = '#81c784',
    green400 = exports.green400 = '#66bb6a',
    green500 = exports.green500 = '#4caf50',
    green600 = exports.green600 = '#43a047',
    green700 = exports.green700 = '#388e3c',
    green800 = exports.green800 = '#2e7d32',
    green900 = exports.green900 = '#1b5e20',
    greenA100 = exports.greenA100 = '#b9f6ca',
    greenA200 = exports.greenA200 = '#69f0ae',
    greenA400 = exports.greenA400 = '#00e676',
    greenA700 = exports.greenA700 = '#00c853',
    lightGreen50 = exports.lightGreen50 = '#f1f8e9',
    lightGreen100 = exports.lightGreen100 = '#dcedc8',
    lightGreen200 = exports.lightGreen200 = '#c5e1a5',
    lightGreen300 = exports.lightGreen300 = '#aed581',
    lightGreen400 = exports.lightGreen400 = '#9ccc65',
    lightGreen500 = exports.lightGreen500 = '#8bc34a',
    lightGreen600 = exports.lightGreen600 = '#7cb342',
    lightGreen700 = exports.lightGreen700 = '#689f38',
    lightGreen800 = exports.lightGreen800 = '#558b2f',
    lightGreen900 = exports.lightGreen900 = '#33691e',
    lightGreenA100 = exports.lightGreenA100 = '#ccff90',
    lightGreenA200 = exports.lightGreenA200 = '#b2ff59',
    lightGreenA400 = exports.lightGreenA400 = '#76ff03',
    lightGreenA700 = exports.lightGreenA700 = '#64dd17',
    lime50 = exports.lime50 = '#f9fbe7',
    lime100 = exports.lime100 = '#f0f4c3',
    lime200 = exports.lime200 = '#e6ee9c',
    lime300 = exports.lime300 = '#dce775',
    lime400 = exports.lime400 = '#d4e157',
    lime500 = exports.lime500 = '#cddc39',
    lime600 = exports.lime600 = '#c0ca33',
    lime700 = exports.lime700 = '#afb42b',
    lime800 = exports.lime800 = '#9e9d24',
    lime900 = exports.lime900 = '#827717',
    limeA100 = exports.limeA100 = '#f4ff81',
    limeA200 = exports.limeA200 = '#eeff41',
    limeA400 = exports.limeA400 = '#c6ff00',
    limeA700 = exports.limeA700 = '#aeea00',
    yellow50 = exports.yellow50 = '#fffde7',
    yellow100 = exports.yellow100 = '#fff9c4',
    yellow200 = exports.yellow200 = '#fff59d',
    yellow300 = exports.yellow300 = '#fff176',
    yellow400 = exports.yellow400 = '#ffee58',
    yellow500 = exports.yellow500 = '#ffeb3b',
    yellow600 = exports.yellow600 = '#fdd835',
    yellow700 = exports.yellow700 = '#fbc02d',
    yellow800 = exports.yellow800 = '#f9a825',
    yellow900 = exports.yellow900 = '#f57f17',
    yellowA100 = exports.yellowA100 = '#ffff8d',
    yellowA200 = exports.yellowA200 = '#ffff00',
    yellowA400 = exports.yellowA400 = '#ffea00',
    yellowA700 = exports.yellowA700 = '#ffd600',
    amber50 = exports.amber50 = '#fff8e1',
    amber100 = exports.amber100 = '#ffecb3',
    amber200 = exports.amber200 = '#ffe082',
    amber300 = exports.amber300 = '#ffd54f',
    amber400 = exports.amber400 = '#ffca28',
    amber500 = exports.amber500 = '#ffc107',
    amber600 = exports.amber600 = '#ffb300',
    amber700 = exports.amber700 = '#ffa000',
    amber800 = exports.amber800 = '#ff8f00',
    amber900 = exports.amber900 = '#ff6f00',
    amberA100 = exports.amberA100 = '#ffe57f',
    amberA200 = exports.amberA200 = '#ffd740',
    amberA400 = exports.amberA400 = '#ffc400',
    amberA700 = exports.amberA700 = '#ffab00',
    orange50 = exports.orange50 = '#fff3e0',
    orange100 = exports.orange100 = '#ffe0b2',
    orange200 = exports.orange200 = '#ffcc80',
    orange300 = exports.orange300 = '#ffb74d',
    orange400 = exports.orange400 = '#ffa726',
    orange500 = exports.orange500 = '#ff9800',
    orange600 = exports.orange600 = '#fb8c00',
    orange700 = exports.orange700 = '#f57c00',
    orange800 = exports.orange800 = '#ef6c00',
    orange900 = exports.orange900 = '#e65100',
    orangeA100 = exports.orangeA100 = '#ffd180',
    orangeA200 = exports.orangeA200 = '#ffab40',
    orangeA400 = exports.orangeA400 = '#ff9100',
    orangeA700 = exports.orangeA700 = '#ff6d00',
    deepOrange50 = exports.deepOrange50 = '#fbe9e7',
    deepOrange100 = exports.deepOrange100 = '#ffccbc',
    deepOrange200 = exports.deepOrange200 = '#ffab91',
    deepOrange300 = exports.deepOrange300 = '#ff8a65',
    deepOrange400 = exports.deepOrange400 = '#ff7043',
    deepOrange500 = exports.deepOrange500 = '#ff5722',
    deepOrange600 = exports.deepOrange600 = '#f4511e',
    deepOrange700 = exports.deepOrange700 = '#e64a19',
    deepOrange800 = exports.deepOrange800 = '#d84315',
    deepOrange900 = exports.deepOrange900 = '#bf360c',
    deepOrangeA100 = exports.deepOrangeA100 = '#ff9e80',
    deepOrangeA200 = exports.deepOrangeA200 = '#ff6e40',
    deepOrangeA400 = exports.deepOrangeA400 = '#ff3d00',
    deepOrangeA700 = exports.deepOrangeA700 = '#dd2c00',
    brown50 = exports.brown50 = '#efebe9',
    brown100 = exports.brown100 = '#d7ccc8',
    brown200 = exports.brown200 = '#bcaaa4',
    brown300 = exports.brown300 = '#a1887f',
    brown400 = exports.brown400 = '#8d6e63',
    brown500 = exports.brown500 = '#795548',
    brown600 = exports.brown600 = '#6d4c41',
    brown700 = exports.brown700 = '#5d4037',
    brown800 = exports.brown800 = '#4e342e',
    brown900 = exports.brown900 = '#3e2723',
    blueGrey50 = exports.blueGrey50 = '#eceff1',
    blueGrey100 = exports.blueGrey100 = '#cfd8dc',
    blueGrey200 = exports.blueGrey200 = '#b0bec5',
    blueGrey300 = exports.blueGrey300 = '#90a4ae',
    blueGrey400 = exports.blueGrey400 = '#78909c',
    blueGrey500 = exports.blueGrey500 = '#607d8b',
    blueGrey600 = exports.blueGrey600 = '#546e7a',
    blueGrey700 = exports.blueGrey700 = '#455a64',
    blueGrey800 = exports.blueGrey800 = '#37474f',
    blueGrey900 = exports.blueGrey900 = '#263238',
    grey50 = exports.grey50 = '#fafafa',
    grey100 = exports.grey100 = '#f5f5f5',
    grey200 = exports.grey200 = '#eeeeee',
    grey300 = exports.grey300 = '#e0e0e0',
    grey400 = exports.grey400 = '#bdbdbd',
    grey500 = exports.grey500 = '#9e9e9e',
    grey600 = exports.grey600 = '#757575',
    grey700 = exports.grey700 = '#616161',
    grey800 = exports.grey800 = '#424242',
    grey900 = exports.grey900 = '#212121',
    black = exports.black = '#000000',
    white = exports.white = '#ffffff',
    transparent = exports.transparent = 'rgba(0, 0, 0, 0)',
    fullBlack = exports.fullBlack = 'rgba(0, 0, 0, 1)',
    darkBlack = exports.darkBlack = 'rgba(0, 0, 0, 0.87)',
    lightBlack = exports.lightBlack = 'rgba(0, 0, 0, 0.54)',
    minBlack = exports.minBlack = 'rgba(0, 0, 0, 0.26)',
    faintBlack = exports.faintBlack = 'rgba(0, 0, 0, 0.12)',
    fullWhite = exports.fullWhite = 'rgba(255, 255, 255, 1)',
    darkWhite = exports.darkWhite = 'rgba(255, 255, 255, 0.87)',
    lightWhite = exports.lightWhite = 'rgba(255, 255, 255, 0.54)';

},
/*
 * @file:  /Users/xiaoge/air-design/gentle-material/src/common/util.js
 * @index: 7
 */
function(module, exports, __apack_require__) {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.noop = noop;
exports.getOpacityColor = getOpacityColor;
exports.extendProto = extendProto;
exports.getEventOffsetPosition = getEventOffsetPosition;
function str2rgba(clr_str) {
  clr_str = clr_str.toLowerCase();
  var r = 0,
      g = 0,
      b = 0,
      a = 1.0,
      m;
  if (/^#[0-9a-f]{3}$/i.test(clr_str)) {
    r = parseInt(clr_str.substr(1, 1) + clr_str.substr(1, 1), 16);
    g = parseInt(clr_str.substr(2, 1) + clr_str.substr(2, 1), 16);
    b = parseInt(clr_str.substr(3, 1) + clr_str.substr(3, 1), 16);
    a = 1.0;
  } else if (/^#[0-9a-f]{6}$/i.test(clr_str)) {
    r = parseInt(clr_str.substr(1, 2), 16);
    g = parseInt(clr_str.substr(3, 2), 16);
    b = parseInt(clr_str.substr(5, 2), 16);
    a = 1.0;
  } else if ((m = clr_str.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i)) != null) {
    r = parseInt(m[1]);
    g = parseInt(m[2]);
    b = parseInt(m[3]);
    a = 1.0;
  } else if ((m = clr_str.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d(\.\d+)?)\s*\)$/i)) != null) {
    r = parseInt(m[1]);
    g = parseInt(m[2]);
    b = parseInt(m[3]);
    a = parseFloat(m[4]);
  } else {
    throw new Error('bad color format');
  }
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
}
function rgba2str(rgba) {
  return 'rgba(' + rgba.r + ', ' + rgba.g + ', ' + rgba.b + ', ' + rgba.a.toFixed(2) + ')';
}
function extendNoOverride(target, src) {
  var exclude = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

  for (var n in src) {
    if (exclude.indexOf(n) < 0 && !target.hasOwnProperty(n)) {
      target[n] = src[n];
    }
  }
  return target;
}

function noop() {}

function getOpacityColor(color, opacity) {
  var rgba = str2rgba(color);
  rgba.a = opacity;
  return rgba2str(rgba);
}

function extendProto(Clazz, Proto) {
  var tp = Clazz.prototype;
  extendNoOverride(tp, Proto, ['constructor', 'defaultProps', 'propTypes']);
  if (Proto.defaultProps) {
    Clazz.defaultProps = extendNoOverride(Clazz.defaultProps || {}, Proto.defaultProps);
  }
  if (Proto.propTypes) {
    Clazz.propTypes = extendNoOverride(Clazz.propTypes || {}, Proto.propTypes);
  }
}

function _isType(type, obj) {
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === type;
}

var isFunction = exports.isFunction = _isType.bind(null, 'function'),
    isObject = exports.isObject = _isType.bind(null, 'object'),
    isNumber = exports.isNumber = _isType.bind(null, 'number'),
    isString = exports.isString = _isType.bind(null, 'string'),
    isBoolean = exports.isBoolean = _isType.bind(null, 'boolean'),
    isUndefined = exports.isUndefined = _isType.bind(null, 'undefined');

var isArray = exports.isArray = Array.isArray || function (obj) {
  return obj instanceof Array;
};
var isDefined = exports.isDefined = function isDefined(obj) {
  return !isUndefined(obj);
};

function getEventOffsetPosition(evt, element) {
  evt = evt.nativeEvent ? evt.nativeEvent : evt;
  var px = evt.pageX;
  var py = evt.pageY;
  var left = element.offsetLeft;
  var top = element.offsetTop;
  while (element = element.offsetParent) {
    left += element.offsetLeft;
    top += element.offsetTop;
  }
  return {
    x: px - left,
    y: py - top
  };
}

},
/*
 * @file:  /Users/xiaoge/air-design/gentle-material/src/entry.js
 * @index: 8
 */
function(module, exports, __apack_require__) {

'use strict';

__apack_require__(10);

var _button = __apack_require__(5);

exports['default'] = {
  RaisedButton: _button.RaisedButton,
  FloatingButton: _button.FloatingButton,
  FlatButton: _button.FlatButton
};

if (typeof window !== 'undefined') {
  window.GentleMaterial = exports['default'];
}
module.exports = exports['default'];

},
/*
 * @file:  /Users/xiaoge/air-design/gentle-material/src/icon/index.jsx
 * @index: 9
 */
function(module, exports, __apack_require__) {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __apack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Icon).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        { className: 'material-icons' },
        this.props.type
      );
    }
  }]);

  return Icon;
}(_react2.default.Component);

Icon.propTypes = {
  type: _react2.default.PropTypes.string.isRequired
};

exports.default = Icon;

},
/*
 * @file:  /Users/xiaoge/air-design/gentle-material/src/style/index.less
 * @index: 10
 */
function(module, exports, __apack_require__) {

// none js module

},
/*
 * @external:  react
 * @index: 11
 */
function(module, exports, __apack_require__) {

module.exports = React

}

]);

})();