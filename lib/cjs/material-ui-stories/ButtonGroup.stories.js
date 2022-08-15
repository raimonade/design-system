"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VerticalGroup = exports.SplitButton = exports.SizesAndColors = exports.BasicButtonGroup = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _Grid = _interopRequireDefault(require("@mui/material/Grid"));

var _Button = _interopRequireDefault(require("@mui/material/Button"));

var _ButtonGroup = _interopRequireDefault(require("@mui/material/ButtonGroup"));

var _ArrowDropDown = _interopRequireDefault(require("@mui/icons-material/ArrowDropDown"));

var _ClickAwayListener = _interopRequireDefault(require("@mui/material/ClickAwayListener"));

var _Grow = _interopRequireDefault(require("@mui/material/Grow"));

var _Paper = _interopRequireDefault(require("@mui/material/Paper"));

var _Popper = _interopRequireDefault(require("@mui/material/Popper"));

var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));

var _MenuList = _interopRequireDefault(require("@mui/material/MenuList"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];
var _default = {
  title: 'Material UI/ButtonGroup',
  component: _ButtonGroup.default
};
exports.default = _default;

var BasicButtonGroupInternal = function BasicButtonGroupInternal() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(ButtonsWrapper, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_ButtonGroup.default, {
      color: "primary",
      "aria-label": "outlined primary button group",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "One"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "Two"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "Three"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ButtonGroup.default, {
      variant: "contained",
      color: "primary",
      "aria-label": "contained primary button group",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "One"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "Two"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "Three"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ButtonGroup.default, {
      variant: "text",
      color: "primary",
      "aria-label": "text primary button group",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "One"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "Two"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "Three"
      })]
    })]
  });
};

var BasicButtonGroup = function BasicButtonGroup() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(BasicButtonGroupInternal, {});
};

exports.BasicButtonGroup = BasicButtonGroup;

var SizesAndColorsInternal = function SizesAndColorsInternal() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(ButtonsWrapper, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_ButtonGroup.default, {
      size: "small",
      "aria-label": "small outlined button group",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "One"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "Two"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "Three"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ButtonGroup.default, {
      color: "secondary",
      "aria-label": "outlined secondary button group",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "One"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "Two"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "Three"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ButtonGroup.default, {
      size: "large",
      color: "primary",
      "aria-label": "large outlined primary button group",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "One"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "Two"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "Three"
      })]
    })]
  });
};

var SizesAndColors = function SizesAndColors() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SizesAndColorsInternal, {});
};

exports.SizesAndColors = SizesAndColors;

var VerticalGroupInternal = function VerticalGroupInternal() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(ButtonsWrapper, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_ButtonGroup.default, {
      orientation: "vertical",
      color: "primary",
      "aria-label": "vertical outlined primary button group",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "One"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "Two"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "Three"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ButtonGroup.default, {
      orientation: "vertical",
      color: "primary",
      "aria-label": "vertical contained primary button group",
      variant: "contained",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "One"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "Two"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "Three"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ButtonGroup.default, {
      orientation: "vertical",
      color: "primary",
      "aria-label": "vertical contained primary button group",
      variant: "text",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "One"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "Two"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        children: "Three"
      })]
    })]
  });
};

var VerticalGroup = function VerticalGroup() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(VerticalGroupInternal, {});
};

exports.VerticalGroup = VerticalGroup;

var SplitButtonInternal = function SplitButtonInternal() {
  var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var anchorRef = _react.default.useRef(null);

  var _React$useState3 = _react.default.useState(1),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      selectedIndex = _React$useState4[0],
      setSelectedIndex = _React$useState4[1];

  var handleClick = function handleClick() {
    console.info("You clicked ".concat(options[selectedIndex]));
  };

  var handleMenuItemClick = function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
    setOpen(false);
  };

  var handleToggle = function handleToggle() {
    setOpen(function (prevOpen) {
      return !prevOpen;
    });
  };

  var handleClose = function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
    container: true,
    direction: "column",
    alignItems: "flex-start",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
      item: true,
      xs: 12,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_ButtonGroup.default, {
        variant: "contained",
        color: "primary",
        ref: anchorRef,
        "aria-label": "split button",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
          onClick: handleClick,
          children: options[selectedIndex]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
          color: "primary",
          size: "small",
          "aria-controls": open ? 'split-button-menu' : undefined,
          "aria-expanded": open ? 'true' : undefined,
          "aria-label": "select merge strategy",
          "aria-haspopup": "menu",
          onClick: handleToggle,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ArrowDropDown.default, {})
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popper.default, {
        open: open,
        anchorEl: anchorRef.current,
        role: undefined,
        transition: true,
        disablePortal: true,
        children: function children(_ref) {
          var TransitionProps = _ref.TransitionProps,
              placement = _ref.placement;
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grow.default, _objectSpread(_objectSpread({}, TransitionProps), {}, {
            style: {
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Paper.default, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ClickAwayListener.default, {
                onClickAway: handleClose,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuList.default, {
                  id: "split-button-menu",
                  children: options.map(function (option, index) {
                    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
                      disabled: index === 2,
                      selected: index === selectedIndex,
                      onClick: function onClick(event) {
                        return handleMenuItemClick(event, index);
                      },
                      children: option
                    }, option);
                  })
                })
              })
            })
          }));
        }
      })]
    })
  });
};

var SplitButton = function SplitButton() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SplitButtonInternal, {});
};

exports.SplitButton = SplitButton;

var ButtonsWrapper = _styled.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: 'flex';\n  flex-direction: 'column';\n  align-items: 'center';\n  & > * {\n    margin: ", ";\n  }\n"])), function (p) {
  return p.theme.spacing(1);
});