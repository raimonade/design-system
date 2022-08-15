"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DateTimePicker = exports.DatePicker = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@mui/material/styles");

var _TextField = _interopRequireDefault(require("@mui/material/TextField"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Material UI/DatePicker',
  component: _TextField.default
};
exports.default = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return (0, _styles.createStyles)({
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    }
  });
});

var DatePickerInternal = function DatePickerInternal() {
  var classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
    className: classes.container,
    noValidate: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
      id: "date",
      label: "Birthday",
      type: "date",
      defaultValue: "2017-05-24",
      className: classes.textField,
      InputLabelProps: {
        shrink: true
      }
    })
  });
};

var DatePicker = function DatePicker() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(DatePickerInternal, {});
};

exports.DatePicker = DatePicker;

var DateTimePickerInternal = function DateTimePickerInternal() {
  var classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
    className: classes.container,
    noValidate: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
      id: "datetime-local",
      label: "Next appointment",
      type: "datetime-local",
      defaultValue: "2017-05-24T10:30",
      className: classes.textField,
      InputLabelProps: {
        shrink: true
      }
    })
  });
};

var DateTimePicker = function DateTimePicker() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(DateTimePickerInternal, {});
};

exports.DateTimePicker = DateTimePicker;