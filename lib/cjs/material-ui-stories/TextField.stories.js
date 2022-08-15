"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithIcon = exports.Sizes = exports.Select = exports.Multiline = exports.Color = exports.BasicTextFields = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("@mui/material/styles");

var _TextField = _interopRequireDefault(require("@mui/material/TextField"));

var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));

var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));

var _Input = _interopRequireDefault(require("@mui/material/Input"));

var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));

var _InputAdornment = _interopRequireDefault(require("@mui/material/InputAdornment"));

var _Grid = _interopRequireDefault(require("@mui/material/Grid"));

var _AccountCircle = _interopRequireDefault(require("@mui/icons-material/AccountCircle"));

var _jsxRuntime = require("react/jsx-runtime");

var currencies = [{
  value: 'USD',
  label: '$'
}, {
  value: 'EUR',
  label: '€'
}, {
  value: 'BTC',
  label: '฿'
}, {
  value: 'JPY',
  label: '¥'
}];
var _default = {
  title: 'Material UI/TextField',
  component: _TextField.default
};
exports.default = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return (0, _styles.createStyles)({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch'
      },
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    },
    wrapper: {
      display: 'flex',
      width: '100%'
    },
    margin: {
      margin: theme.spacing(1)
    }
  });
});

var BasicTextFieldsInternal = function BasicTextFieldsInternal() {
  var classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
      id: "standard-basic",
      label: "Standard"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
      id: "filled-basic",
      label: "Filled",
      variant: "filled"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
      id: "outlined-basic",
      label: "Outlined",
      variant: "outlined"
    })]
  });
};

var BasicTextFields = function BasicTextFields() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(BasicTextFieldsInternal, {});
};

exports.BasicTextFields = BasicTextFields;

var SizesInternal = function SizesInternal() {
  var classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        label: "Size",
        id: "standard-size-small",
        defaultValue: "Small",
        size: "small"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        label: "Size",
        id: "standard-size-normal",
        defaultValue: "Normal"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        label: "Size",
        id: "filled-size-small",
        defaultValue: "Small",
        variant: "filled",
        size: "small"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        label: "Size",
        id: "filled-size-normal",
        defaultValue: "Normal",
        variant: "filled"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        label: "Size",
        id: "outlined-size-small",
        defaultValue: "Small",
        variant: "outlined",
        size: "small"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        label: "Size",
        id: "outlined-size-normal",
        defaultValue: "Normal",
        variant: "outlined"
      })]
    })]
  });
};

var Sizes = function Sizes() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SizesInternal, {});
};

exports.Sizes = Sizes;

var ColorInternal = function ColorInternal() {
  var classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        id: "standard-primary",
        label: "Standard primary",
        color: "primary"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        id: "filled-primary",
        label: "Filled primary",
        variant: "filled",
        color: "primary"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        id: "outlined-primary",
        label: "Outlined primary",
        variant: "outlined",
        color: "primary"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        id: "standard-secondary",
        label: "Standard secondary",
        color: "secondary"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        id: "filled-secondary",
        label: "Filled secondary",
        variant: "filled",
        color: "secondary"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        id: "outlined-secondary",
        label: "Outlined secondary",
        variant: "outlined",
        color: "secondary"
      })]
    })]
  });
};

var Color = function Color() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ColorInternal, {});
};

exports.Color = Color;

var WithIconInternal = function WithIconInternal() {
  var classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
      className: classes.margin,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputLabel.default, {
        htmlFor: "input-with-icon-adornment",
        children: "With a start adornment"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.default, {
        id: "input-with-icon-adornment",
        startAdornment: /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputAdornment.default, {
          position: "start",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AccountCircle.default, {})
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
      className: classes.margin,
      id: "input-with-icon-textfield",
      label: "TextField",
      InputProps: {
        startAdornment: /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputAdornment.default, {
          position: "start",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AccountCircle.default, {})
        })
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: classes.margin,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
        container: true,
        spacing: 1,
        alignItems: "flex-end",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
          item: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AccountCircle.default, {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
          item: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
            id: "input-with-icon-grid",
            label: "With a grid"
          })
        })]
      })
    })]
  });
};

var WithIcon = function WithIcon() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(WithIconInternal, {});
};

exports.WithIcon = WithIcon;

var SelectInternal = function SelectInternal() {
  var classes = useStyles();

  var _React$useState = _react.default.useState('EUR'),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      currency = _React$useState2[0],
      setCurrency = _React$useState2[1];

  var handleChange = function handleChange(event) {
    setCurrency(event.target.value);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        id: "standard-select-currency",
        select: true,
        label: "Select",
        value: currency,
        onChange: handleChange,
        helperText: "Please select your currency",
        children: currencies.map(function (option) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: option.value,
            children: option.label
          }, option.value);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        id: "standard-select-currency-native",
        select: true,
        label: "Native select",
        value: currency,
        onChange: handleChange,
        SelectProps: {
          native: true
        },
        helperText: "Please select your currency",
        children: currencies.map(function (option) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
            value: option.value,
            children: option.label
          }, option.value);
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        id: "filled-select-currency",
        select: true,
        label: "Select",
        value: currency,
        onChange: handleChange,
        helperText: "Please select your currency",
        variant: "filled",
        children: currencies.map(function (option) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: option.value,
            children: option.label
          }, option.value);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        id: "filled-select-currency-native",
        select: true,
        label: "Native select",
        value: currency,
        onChange: handleChange,
        SelectProps: {
          native: true
        },
        helperText: "Please select your currency",
        variant: "filled",
        children: currencies.map(function (option) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
            value: option.value,
            children: option.label
          }, option.value);
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        id: "outlined-select-currency",
        select: true,
        label: "Select",
        value: currency,
        onChange: handleChange,
        helperText: "Please select your currency",
        variant: "outlined",
        children: currencies.map(function (option) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: option.value,
            children: option.label
          }, option.value);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        id: "outlined-select-currency-native",
        select: true,
        label: "Native select",
        value: currency,
        onChange: handleChange,
        SelectProps: {
          native: true
        },
        helperText: "Please select your currency",
        variant: "outlined",
        children: currencies.map(function (option) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
            value: option.value,
            children: option.label
          }, option.value);
        })
      })]
    })]
  });
};

var Select = function Select() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SelectInternal, {});
};

exports.Select = Select;

var MultilineInternal = function MultilineInternal() {
  var classes = useStyles();

  var _React$useState3 = _react.default.useState('Controlled'),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1];

  var handleChange = function handleChange(event) {
    setValue(event.target.value);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        id: "standard-multiline-flexible",
        label: "Multiline",
        multiline: true,
        maxRows: 4,
        value: value,
        onChange: handleChange
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        id: "standard-textarea",
        label: "Multiline Placeholder",
        placeholder: "Placeholder",
        multiline: true
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        id: "standard-multiline-static",
        label: "Multiline",
        multiline: true,
        rows: 4,
        defaultValue: "Default Value"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        id: "filled-multiline-flexible",
        label: "Multiline",
        multiline: true,
        maxRows: 4,
        value: value,
        onChange: handleChange,
        variant: "filled"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        id: "filled-textarea",
        label: "Multiline Placeholder",
        placeholder: "Placeholder",
        multiline: true,
        variant: "filled"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        id: "filled-multiline-static",
        label: "Multiline",
        multiline: true,
        rows: 4,
        defaultValue: "Default Value",
        variant: "filled"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        id: "outlined-multiline-flexible",
        label: "Multiline",
        multiline: true,
        maxRows: 4,
        value: value,
        onChange: handleChange,
        variant: "outlined"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        id: "outlined-textarea",
        label: "Multiline Placeholder",
        placeholder: "Placeholder",
        multiline: true,
        variant: "outlined"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        id: "outlined-multiline-static",
        label: "Multiline",
        multiline: true,
        rows: 4,
        defaultValue: "Default Value",
        variant: "outlined"
      })]
    })]
  });
};

var Multiline = function Multiline() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(MultilineInternal, {});
};

exports.Multiline = Multiline;