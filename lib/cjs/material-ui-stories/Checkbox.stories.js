"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormControlLabelPosition = exports.CheckboxesGroup = exports.CheckboxWithFormControlLabel = exports.BasicCheckboxes = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("@mui/material/styles");

var _colors = require("@mui/material/colors");

var _FormLabel = _interopRequireDefault(require("@mui/material/FormLabel"));

var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));

var _FormGroup = _interopRequireDefault(require("@mui/material/FormGroup"));

var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));

var _FormHelperText = _interopRequireDefault(require("@mui/material/FormHelperText"));

var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));

var _CheckBoxOutlineBlank = _interopRequireDefault(require("@mui/icons-material/CheckBoxOutlineBlank"));

var _CheckBox = _interopRequireDefault(require("@mui/icons-material/CheckBox"));

var _Favorite = _interopRequireDefault(require("@mui/icons-material/Favorite"));

var _FavoriteBorder = _interopRequireDefault(require("@mui/icons-material/FavoriteBorder"));

var _jsxRuntime = require("react/jsx-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  title: 'Material UI/Checkbox',
  component: _Checkbox.default
};
exports.default = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return (0, _styles.createStyles)({
    root: {
      display: 'flex'
    },
    formControl: {
      margin: theme.spacing(3)
    }
  });
});
var GreenCheckbox = (0, _styles.withStyles)({
  root: {
    color: _colors.green[400],
    '&$checked': {
      color: _colors.green[600]
    }
  },
  checked: {}
})(function (props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, _objectSpread({
    color: "default"
  }, props));
});

var BasicCheckboxesInternal = function BasicCheckboxesInternal() {
  var _React$useState = _react.default.useState(true),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  var handleChange = function handleChange(event) {
    setChecked(event.target.checked);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
      checked: checked,
      onChange: handleChange,
      inputProps: {
        'aria-label': 'primary checkbox'
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
      defaultChecked: true,
      color: "primary",
      inputProps: {
        'aria-label': 'secondary checkbox'
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
      inputProps: {
        'aria-label': 'uncontrolled-checkbox'
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
      disabled: true,
      inputProps: {
        'aria-label': 'disabled checkbox'
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
      disabled: true,
      checked: true,
      inputProps: {
        'aria-label': 'disabled checked checkbox'
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
      defaultChecked: true,
      indeterminate: true,
      inputProps: {
        'aria-label': 'indeterminate checkbox'
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
      defaultChecked: true,
      color: "default",
      inputProps: {
        'aria-label': 'checkbox with default color'
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
      defaultChecked: true,
      size: "small",
      inputProps: {
        'aria-label': 'checkbox with small size'
      }
    })]
  });
};

var BasicCheckboxes = function BasicCheckboxes() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(BasicCheckboxesInternal, {});
};

exports.BasicCheckboxes = BasicCheckboxes;

var CheckboxWithFormControlLabelInternal = function CheckboxWithFormControlLabelInternal() {
  var _React$useState3 = _react.default.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true
  }),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      state = _React$useState4[0],
      setState = _React$useState4[1];

  var handleChange = function handleChange(event) {
    setState(_objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2.default)({}, event.target.name, event.target.checked)));
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormGroup.default, {
      row: true,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
        control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
          checked: state.checkedA,
          onChange: handleChange,
          name: "checkedA"
        }),
        label: "Secondary"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
        control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
          checked: state.checkedB,
          onChange: handleChange,
          name: "checkedB",
          color: "primary"
        }),
        label: "Primary"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
        control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
          name: "checkedC"
        }),
        label: "Uncontrolled"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
        disabled: true,
        control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
          name: "checkedD"
        }),
        label: "Disabled"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
        disabled: true,
        control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
          checked: true,
          name: "checkedE"
        }),
        label: "Disabled"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
        control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
          checked: state.checkedF,
          onChange: handleChange,
          name: "checkedF",
          indeterminate: true
        }),
        label: "Indeterminate"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
        control: /*#__PURE__*/(0, _jsxRuntime.jsx)(GreenCheckbox, {
          checked: state.checkedG,
          onChange: handleChange,
          name: "checkedG"
        }),
        label: "Custom color"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
        control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
          icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FavoriteBorder.default, {}),
          checkedIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Favorite.default, {}),
          name: "checkedH"
        }),
        label: "Custom icon"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
        control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
          icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CheckBoxOutlineBlank.default, {
            fontSize: "small"
          }),
          checkedIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CheckBox.default, {
            fontSize: "small"
          }),
          name: "checkedI"
        }),
        label: "Custom size"
      })]
    })
  });
};

var CheckboxWithFormControlLabel = function CheckboxWithFormControlLabel() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(CheckboxWithFormControlLabelInternal, {});
};

exports.CheckboxWithFormControlLabel = CheckboxWithFormControlLabel;

var CheckboxesGrouplInternal = function CheckboxesGrouplInternal() {
  var classes = useStyles();

  var _React$useState5 = _react.default.useState({
    gilad: true,
    jason: false,
    antoine: false
  }),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      state = _React$useState6[0],
      setState = _React$useState6[1];

  var handleChange = function handleChange(event) {
    setState(_objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2.default)({}, event.target.name, event.target.checked)));
  };

  var gilad = state.gilad,
      jason = state.jason,
      antoine = state.antoine;
  var error = [gilad, jason, antoine].filter(function (v) {
    return v;
  }).length !== 2;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
      component: "fieldset",
      className: classes.formControl,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FormLabel.default, {
        component: "legend",
        children: "Assign responsibility"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormGroup.default, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
          control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
            checked: gilad,
            onChange: handleChange,
            name: "gilad"
          }),
          label: "Gilad Gray"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
          control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
            checked: jason,
            onChange: handleChange,
            name: "jason"
          }),
          label: "Jason Killian"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
          control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
            checked: antoine,
            onChange: handleChange,
            name: "antoine"
          }),
          label: "Antoine Llorca"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormHelperText.default, {
        children: "Be careful"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
      required: true,
      error: error,
      component: "fieldset",
      className: classes.formControl,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FormLabel.default, {
        component: "legend",
        children: "Pick two"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormGroup.default, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
          control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
            checked: gilad,
            onChange: handleChange,
            name: "gilad"
          }),
          label: "Gilad Gray"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
          control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
            checked: jason,
            onChange: handleChange,
            name: "jason"
          }),
          label: "Jason Killian"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
          control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
            checked: antoine,
            onChange: handleChange,
            name: "antoine"
          }),
          label: "Antoine Llorca"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormHelperText.default, {
        children: "You can display an error"
      })]
    })]
  });
};

var CheckboxesGroup = function CheckboxesGroup() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(CheckboxesGrouplInternal, {});
};

exports.CheckboxesGroup = CheckboxesGroup;

var FormControlLabelPositionInternal = function FormControlLabelPositionInternal() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
    component: "fieldset",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FormLabel.default, {
      component: "legend",
      children: "Label Placement"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormGroup.default, {
      "aria-label": "position",
      row: true,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
        value: "top",
        control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
          color: "primary"
        }),
        label: "Top",
        labelPlacement: "top"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
        value: "start",
        control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
          color: "primary"
        }),
        label: "Start",
        labelPlacement: "start"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
        value: "bottom",
        control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
          color: "primary"
        }),
        label: "Bottom",
        labelPlacement: "bottom"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
        value: "end",
        control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
          color: "primary"
        }),
        label: "End",
        labelPlacement: "end"
      })]
    })]
  });
};

var FormControlLabelPosition = function FormControlLabelPosition() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(FormControlLabelPositionInternal, {});
};

exports.FormControlLabelPosition = FormControlLabelPosition;