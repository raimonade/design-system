"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RadioButtonsGroup = exports.RadioButtons = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _RadioGroup = _interopRequireDefault(require("@mui/material/RadioGroup"));

var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));

var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));

var _FormLabel = _interopRequireDefault(require("@mui/material/FormLabel"));

var _styles = require("@mui/material/styles");

var _colors = require("@mui/material/colors");

var _Radio = _interopRequireDefault(require("@mui/material/Radio"));

var _jsxRuntime = require("react/jsx-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  title: 'Material UI/Radio',
  component: _Radio.default
};
exports.default = _default;
var GreenRadio = (0, _styles.withStyles)({
  root: {
    color: _colors.green[400],
    '&$checked': {
      color: _colors.green[600]
    }
  },
  checked: {}
})(function (props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Radio.default, _objectSpread({
    color: "default"
  }, props));
});

var RadioButtonsInternal = function RadioButtonsInternal() {
  var _React$useState = _react.default.useState('a'),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      selectedValue = _React$useState2[0],
      setSelectedValue = _React$useState2[1];

  var handleChange = function handleChange(event) {
    setSelectedValue(event.target.value);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Radio.default, {
      checked: selectedValue === 'a',
      onChange: handleChange,
      value: "a",
      name: "radio-button-demo",
      inputProps: {
        'aria-label': 'A'
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Radio.default, {
      checked: selectedValue === 'b',
      onChange: handleChange,
      value: "b",
      name: "radio-button-demo",
      inputProps: {
        'aria-label': 'B'
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(GreenRadio, {
      checked: selectedValue === 'c',
      onChange: handleChange,
      value: "c",
      name: "radio-button-demo",
      inputProps: {
        'aria-label': 'C'
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Radio.default, {
      checked: selectedValue === 'd',
      onChange: handleChange,
      value: "d",
      color: "default",
      name: "radio-button-demo",
      inputProps: {
        'aria-label': 'D'
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Radio.default, {
      checked: selectedValue === 'e',
      onChange: handleChange,
      value: "e",
      color: "default",
      name: "radio-button-demo",
      inputProps: {
        'aria-label': 'E'
      },
      size: "small"
    })]
  });
};

var RadioButtons = function RadioButtons() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(RadioButtonsInternal, {});
};

exports.RadioButtons = RadioButtons;

var RadioButtonsGroupInternal = function RadioButtonsGroupInternal() {
  var _React$useState3 = _react.default.useState('female'),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1];

  var handleChange = function handleChange(event) {
    setValue(event.target.value);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
    component: "fieldset",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FormLabel.default, {
      component: "legend",
      children: "Gender"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_RadioGroup.default, {
      "aria-label": "gender",
      name: "gender1",
      value: value,
      onChange: handleChange,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
        value: "female",
        control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Radio.default, {}),
        label: "Female"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
        value: "male",
        control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Radio.default, {}),
        label: "Male"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
        value: "other",
        control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Radio.default, {}),
        label: "Other"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
        value: "disabled",
        disabled: true,
        control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Radio.default, {}),
        label: "(Disabled option)"
      })]
    })]
  });
};

var RadioButtonsGroup = function RadioButtonsGroup() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(RadioButtonsGroupInternal, {});
};

exports.RadioButtonsGroup = RadioButtonsGroup;