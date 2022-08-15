"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VerticalTabs = exports.SimpleTabs = exports.ScrollableTabs = exports.IconTabs = exports.IconLabelTabs = exports.DisabledTabs = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _AppBar = _interopRequireDefault(require("@mui/material/AppBar"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _Paper = _interopRequireDefault(require("@mui/material/Paper"));

var _styles = require("@mui/material/styles");

var _Tab = _interopRequireDefault(require("@mui/material/Tab"));

var _Tabs = _interopRequireDefault(require("@mui/material/Tabs"));

var _Typography = _interopRequireDefault(require("@mui/material/Typography"));

var _Favorite = _interopRequireDefault(require("@mui/icons-material/Favorite"));

var _PersonPin = _interopRequireDefault(require("@mui/icons-material/PersonPin"));

var _Phone = _interopRequireDefault(require("@mui/icons-material/Phone"));

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["children", "value", "index"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  title: 'Material UI/Tabs',
  component: _Tabs.default
};
exports.default = _default;

function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = (0, _objectWithoutProperties2.default)(props, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({
    role: "tabpanel",
    hidden: value !== index,
    id: "simple-tabpanel-".concat(index),
    "aria-labelledby": "simple-tab-".concat(index)
  }, other), {}, {
    children: value === index && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      p: 3,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        children: children
      })
    })
  }));
}

function a11yProps(index) {
  return {
    id: "simple-tab-".concat(index),
    'aria-controls': "simple-tabpanel-".concat(index)
  };
}

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper
    },
    iconRoot: {
      flexGrow: 1,
      maxWidth: 500
    },
    verticalRoot: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224
    },
    tabs: {
      borderRight: "1px solid ".concat(theme.palette.divider)
    }
  };
});

var SimpleTabsInternal = function SimpleTabsInternal() {
  var classes = useStyles();

  var _React$useState = _react.default.useState(0),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_AppBar.default, {
      position: "static",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Tabs.default, {
        value: value,
        onChange: handleChange,
        "aria-label": "simple tabs example",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, _objectSpread({
          label: "Item One"
        }, a11yProps(0))), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, _objectSpread({
          label: "Item Two"
        }, a11yProps(1))), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, _objectSpread({
          label: "Item Three"
        }, a11yProps(2)))]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TabPanel, {
      value: value,
      index: 0,
      children: "Item One"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TabPanel, {
      value: value,
      index: 1,
      children: "Item Two"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TabPanel, {
      value: value,
      index: 2,
      children: "Item Three"
    })]
  });
};

var SimpleTabs = function SimpleTabs() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SimpleTabsInternal, {});
};

exports.SimpleTabs = SimpleTabs;

var DisabledTabsInternal = function DisabledTabsInternal() {
  var _React$useState3 = _react.default.useState(2),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Paper.default, {
    square: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Tabs.default, {
      value: value,
      indicatorColor: "primary",
      textColor: "primary",
      onChange: handleChange,
      "aria-label": "disabled tabs example",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
        label: "Active"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
        label: "Disabled",
        disabled: true
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
        label: "Active"
      })]
    })
  });
};

var DisabledTabs = function DisabledTabs() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(DisabledTabsInternal, {});
};

exports.DisabledTabs = DisabledTabs;

var ScrollableTabsInternal = function ScrollableTabsInternal() {
  var classes = useStyles();

  var _React$useState5 = _react.default.useState(0),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      value = _React$useState6[0],
      setValue = _React$useState6[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_AppBar.default, {
      position: "static",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Tabs.default, {
        value: value,
        onChange: handleChange,
        variant: "scrollable",
        scrollButtons: "auto",
        "aria-label": "scrollable auto tabs example",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, _objectSpread({
          label: "Item One"
        }, a11yProps(0))), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, _objectSpread({
          label: "Item Two"
        }, a11yProps(1))), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, _objectSpread({
          label: "Item Three"
        }, a11yProps(2))), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, _objectSpread({
          label: "Item Four"
        }, a11yProps(3))), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, _objectSpread({
          label: "Item Five"
        }, a11yProps(4))), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, _objectSpread({
          label: "Item Six"
        }, a11yProps(5))), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, _objectSpread({
          label: "Item Seven"
        }, a11yProps(6)))]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TabPanel, {
      value: value,
      index: 0,
      children: "Item One"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TabPanel, {
      value: value,
      index: 1,
      children: "Item Two"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TabPanel, {
      value: value,
      index: 2,
      children: "Item Three"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TabPanel, {
      value: value,
      index: 3,
      children: "Item Four"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TabPanel, {
      value: value,
      index: 4,
      children: "Item Five"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TabPanel, {
      value: value,
      index: 5,
      children: "Item Six"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TabPanel, {
      value: value,
      index: 6,
      children: "Item Seven"
    })]
  });
};

var ScrollableTabs = function ScrollableTabs() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ScrollableTabsInternal, {});
};

exports.ScrollableTabs = ScrollableTabs;

var IconTabsInternal = function IconTabsInternal() {
  var classes = useStyles();

  var _React$useState7 = _react.default.useState(0),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      value = _React$useState8[0],
      setValue = _React$useState8[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Paper.default, {
    square: true,
    className: classes.iconRoot,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Tabs.default, {
      value: value,
      onChange: handleChange,
      variant: "fullWidth",
      indicatorColor: "primary",
      textColor: "primary",
      "aria-label": "icon tabs example",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Phone.default, {}),
        "aria-label": "phone"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Favorite.default, {}),
        "aria-label": "favorite"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PersonPin.default, {}),
        "aria-label": "person"
      })]
    })
  });
};

var IconTabs = function IconTabs() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(IconTabsInternal, {});
};

exports.IconTabs = IconTabs;

var IconLabelTabsInternal = function IconLabelTabsInternal() {
  var classes = useStyles();

  var _React$useState9 = _react.default.useState(0),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      value = _React$useState10[0],
      setValue = _React$useState10[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Paper.default, {
    square: true,
    className: classes.iconRoot,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Tabs.default, {
      value: value,
      onChange: handleChange,
      variant: "fullWidth",
      indicatorColor: "secondary",
      textColor: "secondary",
      "aria-label": "icon label tabs example",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Phone.default, {}),
        label: "RECENTS"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Favorite.default, {}),
        label: "FAVORITES"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PersonPin.default, {}),
        label: "NEARBY"
      })]
    })
  });
};

var IconLabelTabs = function IconLabelTabs() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(IconLabelTabsInternal, {});
};

exports.IconLabelTabs = IconLabelTabs;

var VerticalTabsInternal = function VerticalTabsInternal() {
  var classes = useStyles();

  var _React$useState11 = _react.default.useState(0),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      value = _React$useState12[0],
      setValue = _React$useState12[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes.verticalRoot,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Tabs.default, {
      orientation: "vertical",
      variant: "scrollable",
      value: value,
      onChange: handleChange,
      "aria-label": "Vertical tabs example",
      className: classes.tabs,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, _objectSpread({
        label: "Item One"
      }, a11yProps(0))), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, _objectSpread({
        label: "Item Two"
      }, a11yProps(1))), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, _objectSpread({
        label: "Item Three"
      }, a11yProps(2))), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, _objectSpread({
        label: "Item Four"
      }, a11yProps(3))), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, _objectSpread({
        label: "Item Five"
      }, a11yProps(4))), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, _objectSpread({
        label: "Item Six"
      }, a11yProps(5))), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, _objectSpread({
        label: "Item Seven"
      }, a11yProps(6)))]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TabPanel, {
      value: value,
      index: 0,
      children: "Item One"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TabPanel, {
      value: value,
      index: 1,
      children: "Item Two"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TabPanel, {
      value: value,
      index: 2,
      children: "Item Three"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TabPanel, {
      value: value,
      index: 3,
      children: "Item Four"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TabPanel, {
      value: value,
      index: 4,
      children: "Item Five"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TabPanel, {
      value: value,
      index: 5,
      children: "Item Six"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TabPanel, {
      value: value,
      index: 6,
      children: "Item Seven"
    })]
  });
};

var VerticalTabs = function VerticalTabs() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(VerticalTabsInternal, {});
};

exports.VerticalTabs = VerticalTabs;