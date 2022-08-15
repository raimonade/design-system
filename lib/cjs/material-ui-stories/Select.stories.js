"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SimpleSelect = exports.MultipleSelect = exports.GroupedSelect = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@mui/material/styles");

var _FormHelperText = _interopRequireDefault(require("@mui/material/FormHelperText"));

var _ListSubheader = _interopRequireDefault(require("@mui/material/ListSubheader"));

var _Input = _interopRequireDefault(require("@mui/material/Input"));

var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));

var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));

var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));

var _ListItemText = _interopRequireDefault(require("@mui/material/ListItemText"));

var _Select = _interopRequireDefault(require("@mui/material/Select"));

var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));

var _Chip = _interopRequireDefault(require("@mui/material/Chip"));

var _jsxRuntime = require("react/jsx-runtime");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return (0, _styles.createStyles)({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    chip: {
      margin: 2
    },
    noLabel: {
      marginTop: theme.spacing(3)
    },
    wrapper: {
      display: 'flex',
      width: '100%'
    }
  });
});
var ITEM_HEIGHT = 48;
var ITEM_PADDING_TOP = 8;
var MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
var names = ['Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard', 'Omar Alexander', 'Carlos Abbott', 'Miriam Wagner', 'Bradley Wilkerson', 'Virginia Andrews', 'Kelly Snyder'];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
  };
}

var _default = {
  title: 'Material UI/Select',
  component: _Select.default
};
exports.default = _default;

var SimpleSelectInternal = function SimpleSelectInternal() {
  var classes = useStyles();

  var _React$useState = _react.default.useState(''),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      age = _React$useState2[0],
      setAge = _React$useState2[1];

  var handleChange = function handleChange(event) {
    setAge(event.target.value);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
        className: classes.formControl,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputLabel.default, {
          id: "demo-simple-select-label",
          children: "Age"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Select.default, {
          labelId: "demo-simple-select-label",
          id: "demo-simple-select",
          value: age,
          onChange: handleChange,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 10,
            children: "Ten"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 20,
            children: "Twenty"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 30,
            children: "Thirty"
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
        className: classes.formControl,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputLabel.default, {
          id: "demo-simple-select-helper-label",
          children: "Age"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Select.default, {
          labelId: "demo-simple-select-helper-label",
          id: "demo-simple-select-helper",
          value: age,
          onChange: handleChange,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: "",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("em", {
              children: "None"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 10,
            children: "Ten"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 20,
            children: "Twenty"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 30,
            children: "Thirty"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormHelperText.default, {
          children: "Some important helper text"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
        className: classes.formControl,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Select.default, {
          value: age,
          onChange: handleChange,
          displayEmpty: true,
          className: classes.selectEmpty,
          inputProps: {
            'aria-label': 'Without label'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: "",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("em", {
              children: "None"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 10,
            children: "Ten"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 20,
            children: "Twenty"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 30,
            children: "Thirty"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormHelperText.default, {
          children: "Without label"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
        className: classes.formControl,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputLabel.default, {
          shrink: true,
          id: "demo-simple-select-placeholder-label-label",
          children: "Age"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Select.default, {
          labelId: "demo-simple-select-placeholder-label-label",
          id: "demo-simple-select-placeholder-label",
          value: age,
          onChange: handleChange,
          displayEmpty: true,
          className: classes.selectEmpty,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: "",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("em", {
              children: "None"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 10,
            children: "Ten"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 20,
            children: "Twenty"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 30,
            children: "Thirty"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormHelperText.default, {
          children: "Label + placeholder"
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
        className: classes.formControl,
        disabled: true,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputLabel.default, {
          id: "demo-simple-select-disabled-label",
          children: "Name"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Select.default, {
          labelId: "demo-simple-select-disabled-label",
          id: "demo-simple-select-disabled",
          value: age,
          onChange: handleChange,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: "",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("em", {
              children: "None"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 10,
            children: "Ten"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 20,
            children: "Twenty"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 30,
            children: "Thirty"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormHelperText.default, {
          children: "Disabled"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
        className: classes.formControl,
        error: true,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputLabel.default, {
          id: "demo-simple-select-error-label",
          children: "Name"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Select.default, {
          labelId: "demo-simple-select-error-label",
          id: "demo-simple-select-error",
          value: age,
          onChange: handleChange,
          renderValue: function renderValue(value) {
            return "\u26A0\uFE0F  - ".concat(value);
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: "",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("em", {
              children: "None"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 10,
            children: "Ten"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 20,
            children: "Twenty"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 30,
            children: "Thirty"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormHelperText.default, {
          children: "Error"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
        className: classes.formControl,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputLabel.default, {
          id: "demo-simple-select-readonly-label",
          children: "Name"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Select.default, {
          labelId: "demo-simple-select-readonly-label",
          id: "demo-simple-select-readonly",
          value: age,
          onChange: handleChange,
          inputProps: {
            readOnly: true
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: "",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("em", {
              children: "None"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 10,
            children: "Ten"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 20,
            children: "Twenty"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 30,
            children: "Thirty"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormHelperText.default, {
          children: "Read only"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
        className: classes.formControl,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputLabel.default, {
          id: "demo-simple-select-autowidth-label",
          children: "Age"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Select.default, {
          labelId: "demo-simple-select-autowidth-label",
          id: "demo-simple-select-autowidth",
          value: age,
          onChange: handleChange,
          autoWidth: true,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: "",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("em", {
              children: "None"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 10,
            children: "Ten"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 20,
            children: "Twenty"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: 30,
            children: "Thirty"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormHelperText.default, {
          children: "Auto width"
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
      className: classes.formControl,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Select.default, {
        value: age,
        onChange: handleChange,
        displayEmpty: true,
        className: classes.selectEmpty,
        inputProps: {
          'aria-label': 'Without label'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: "",
          disabled: true,
          children: "Placeholder"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: 30,
          children: "Thirty"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormHelperText.default, {
        children: "Placeholder"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
      required: true,
      className: classes.formControl,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputLabel.default, {
        id: "demo-simple-select-required-label",
        children: "Age"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Select.default, {
        labelId: "demo-simple-select-required-label",
        id: "demo-simple-select-required",
        value: age,
        onChange: handleChange,
        className: classes.selectEmpty,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: "",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("em", {
            children: "None"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: 30,
          children: "Thirty"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormHelperText.default, {
        children: "Required"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
      variant: "outlined",
      className: classes.formControl,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputLabel.default, {
        id: "demo-simple-select-outlined-label",
        children: "Age"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Select.default, {
        labelId: "demo-simple-select-outlined-label",
        id: "demo-simple-select-outlined",
        value: age,
        onChange: handleChange,
        label: "Age",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: "",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("em", {
            children: "None"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: 30,
          children: "Thirty"
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
      variant: "filled",
      className: classes.formControl,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputLabel.default, {
        id: "demo-simple-select-filled-label",
        children: "Age"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Select.default, {
        labelId: "demo-simple-select-filled-label",
        id: "demo-simple-select-filled",
        value: age,
        onChange: handleChange,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: "",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("em", {
            children: "None"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: 30,
          children: "Thirty"
        })]
      })]
    })]
  });
};

var SimpleSelect = function SimpleSelect() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SimpleSelectInternal, {});
};

exports.SimpleSelect = SimpleSelect;

var MultipleSelectInternal = function MultipleSelectInternal() {
  var classes = useStyles();
  var theme = (0, _styles.useTheme)();

  var _React$useState3 = _react.default.useState([]),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      personName = _React$useState4[0],
      setPersonName = _React$useState4[1];

  var handleChange = function handleChange(event) {
    setPersonName(event.target.value);
  };

  var handleChangeMultiple = function handleChangeMultiple(event) {
    var _ref = event.target,
        options = _ref.options;
    var value = [];

    for (var i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    setPersonName(value);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
        className: classes.formControl,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputLabel.default, {
          id: "demo-mutiple-name-label",
          children: "Name"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.default, {
          labelId: "demo-mutiple-name-label",
          id: "demo-mutiple-name",
          multiple: true,
          value: personName,
          onChange: handleChange,
          input: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.default, {}),
          MenuProps: MenuProps,
          children: names.map(function (name) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
              value: name,
              style: getStyles(name, personName, theme),
              children: name
            }, name);
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
        className: classes.formControl,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputLabel.default, {
          id: "demo-mutiple-checkbox-label",
          children: "Tag"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.default, {
          labelId: "demo-mutiple-checkbox-label",
          id: "demo-mutiple-checkbox",
          multiple: true,
          value: personName,
          onChange: handleChange,
          input: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.default, {}),
          renderValue: function renderValue(selected) {
            return selected.join(', ');
          },
          MenuProps: MenuProps,
          children: names.map(function (name) {
            return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuItem.default, {
              value: name,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
                checked: personName.indexOf(name) > -1
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItemText.default, {
                primary: name
              })]
            }, name);
          })
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
      className: classes.formControl,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputLabel.default, {
        id: "demo-mutiple-chip-label",
        children: "Chip"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.default, {
        labelId: "demo-mutiple-chip-label",
        id: "demo-mutiple-chip",
        multiple: true,
        value: personName,
        onChange: handleChange,
        input: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.default, {
          id: "select-multiple-chip"
        }),
        renderValue: function renderValue(selected) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: classes.chips,
            children: selected.map(function (value) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
                label: value,
                className: classes.chip
              }, value);
            })
          });
        },
        MenuProps: MenuProps,
        children: names.map(function (name) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: name,
            style: getStyles(name, personName, theme),
            children: name
          }, name);
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControl.default, {
      className: (0, _clsx.default)(classes.formControl, classes.noLabel),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Select.default, {
        multiple: true,
        displayEmpty: true,
        value: personName,
        onChange: handleChange,
        input: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.default, {}),
        renderValue: function renderValue(selected) {
          if (selected.length === 0) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("em", {
              children: "Placeholder"
            });
          }

          return selected.join(', ');
        },
        MenuProps: MenuProps,
        inputProps: {
          'aria-label': 'Without label'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          disabled: true,
          value: "",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("em", {
            children: "Placeholder"
          })
        }), names.map(function (name) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
            value: name,
            style: getStyles(name, personName, theme),
            children: name
          }, name);
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: classes.wrapper,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
        className: classes.formControl,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputLabel.default, {
          shrink: true,
          htmlFor: "select-multiple-native",
          children: "Native"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.default, {
          multiple: true,
          native: true,
          value: personName,
          onChange: handleChangeMultiple,
          inputProps: {
            id: 'select-multiple-native'
          },
          children: names.map(function (name) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: name,
              children: name
            }, name);
          })
        })]
      })
    })]
  });
};

var MultipleSelect = function MultipleSelect() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(MultipleSelectInternal, {});
};

exports.MultipleSelect = MultipleSelect;

var GroupedSelectInternal = function GroupedSelectInternal() {
  var classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
      className: classes.formControl,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputLabel.default, {
        htmlFor: "grouped-native-select",
        children: "Grouping"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Select.default, {
        native: true,
        defaultValue: "",
        id: "grouped-native-select",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
          "aria-label": "None",
          value: ""
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("optgroup", {
          label: "Category 1",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
            value: 1,
            children: "Option 1"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
            value: 2,
            children: "Option 2"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("optgroup", {
          label: "Category 2",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
            value: 3,
            children: "Option 3"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
            value: 4,
            children: "Option 4"
          })]
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
      className: classes.formControl,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputLabel.default, {
        htmlFor: "grouped-select",
        children: "Grouping"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Select.default, {
        defaultValue: "",
        id: "grouped-select",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: "",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("em", {
            children: "None"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListSubheader.default, {
          children: "Category 1"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: 1,
          children: "Option 1"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: 2,
          children: "Option 2"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListSubheader.default, {
          children: "Category 2"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: 3,
          children: "Option 3"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: 4,
          children: "Option 4"
        })]
      })]
    })]
  });
};

var GroupedSelect = function GroupedSelect() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(GroupedSelectInternal, {});
};

exports.GroupedSelect = GroupedSelect;