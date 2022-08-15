"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithLabels = exports.Sizes = exports.BasicSwitches = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _Switch = _interopRequireDefault(require("@mui/material/Switch"));

var _FormGroup = _interopRequireDefault(require("@mui/material/FormGroup"));

var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));

var _jsxRuntime = require("react/jsx-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  title: 'Material UI/Switch',
  component: _Switch.default
};
exports.default = _default;

var BasicSwitchesInternal = function BasicSwitchesInternal() {
  var _React$useState = _react.default.useState({
    checkedA: true,
    checkedB: true
  }),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var handleChange = function handleChange(event) {
    setState(_objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2.default)({}, event.target.name, event.target.checked)));
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.default, {
      checked: state.checkedA,
      onChange: handleChange,
      name: "checkedA",
      inputProps: {
        'aria-label': 'secondary checkbox'
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.default, {
      checked: state.checkedB,
      onChange: handleChange,
      color: "primary",
      name: "checkedB",
      inputProps: {
        'aria-label': 'primary checkbox'
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.default, {
      inputProps: {
        'aria-label': 'primary checkbox'
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.default, {
      disabled: true,
      inputProps: {
        'aria-label': 'disabled checkbox'
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.default, {
      disabled: true,
      checked: true,
      inputProps: {
        'aria-label': 'primary checkbox'
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.default, {
      defaultChecked: true,
      color: "default",
      inputProps: {
        'aria-label': 'checkbox with default color'
      }
    })]
  });
};

var BasicSwitches = function BasicSwitches() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(BasicSwitchesInternal, {});
};

exports.BasicSwitches = BasicSwitches;

var WithLabelsInternal = function WithLabelsInternal() {
  var _React$useState3 = _react.default.useState({
    checkedA: true,
    checkedB: true
  }),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      state = _React$useState4[0],
      setState = _React$useState4[1];

  var handleChange = function handleChange(event) {
    setState(_objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2.default)({}, event.target.name, event.target.checked)));
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormGroup.default, {
    row: true,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
      control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.default, {
        checked: state.checkedA,
        onChange: handleChange,
        name: "checkedA"
      }),
      label: "Secondary"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
      control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.default, {
        checked: state.checkedB,
        onChange: handleChange,
        name: "checkedB",
        color: "primary"
      }),
      label: "Primary"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
      control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.default, {}),
      label: "Uncontrolled"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
      disabled: true,
      control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.default, {}),
      label: "Disabled"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
      disabled: true,
      control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.default, {
        checked: true
      }),
      label: "Disabled"
    })]
  });
};

var WithLabels = function WithLabels() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(WithLabelsInternal, {});
};

exports.WithLabels = WithLabels;

var SizesInternal = function SizesInternal() {
  var _React$useState5 = _react.default.useState(false),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      checked = _React$useState6[0],
      setChecked = _React$useState6[1];

  var toggleChecked = function toggleChecked() {
    setChecked(function (prev) {
      return !prev;
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormGroup.default, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
      control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.default, {
        size: "small",
        checked: checked,
        onChange: toggleChecked
      }),
      label: "Small"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
      control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.default, {
        checked: checked,
        onChange: toggleChecked
      }),
      label: "Normal"
    })]
  });
};

var Sizes = function Sizes() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SizesInternal, {});
};

exports.Sizes = Sizes;