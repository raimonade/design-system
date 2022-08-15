"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Sizes = exports.FloatingActionButtons = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@mui/material/styles");

var _Fab = _interopRequireDefault(require("@mui/material/Fab"));

var _Add = _interopRequireDefault(require("@mui/icons-material/Add"));

var _Edit = _interopRequireDefault(require("@mui/icons-material/Edit"));

var _Favorite = _interopRequireDefault(require("@mui/icons-material/Favorite"));

var _Navigation = _interopRequireDefault(require("@mui/icons-material/Navigation"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Material UI/FloatingActionButton',
  component: _Fab.default
};
exports.default = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return (0, _styles.createStyles)({
    root: {
      '& > *': {
        margin: theme.spacing(1)
      }
    },
    extendedIcon: {
      marginRight: theme.spacing(1)
    },
    margin: {
      margin: theme.spacing(1)
    }
  });
});

var FloatingActionButtonsInternal = function FloatingActionButtonsInternal() {
  var classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Fab.default, {
      color: "primary",
      "aria-label": "add",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Add.default, {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Fab.default, {
      color: "secondary",
      "aria-label": "edit",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Edit.default, {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Fab.default, {
      variant: "extended",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Navigation.default, {
        className: classes.extendedIcon
      }), "Navigate"]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Fab.default, {
      disabled: true,
      "aria-label": "like",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Favorite.default, {})
    })]
  });
};

var FloatingActionButtons = function FloatingActionButtons() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(FloatingActionButtonsInternal, {});
};

exports.FloatingActionButtons = FloatingActionButtons;

var SizesInternal = function SizesInternal() {
  var classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Fab.default, {
        size: "small",
        color: "secondary",
        "aria-label": "add",
        className: classes.margin,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Add.default, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Fab.default, {
        size: "medium",
        color: "secondary",
        "aria-label": "add",
        className: classes.margin,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Add.default, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Fab.default, {
        color: "secondary",
        "aria-label": "add",
        className: classes.margin,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Add.default, {})
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Fab.default, {
        variant: "extended",
        size: "small",
        color: "primary",
        "aria-label": "add",
        className: classes.margin,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Navigation.default, {
          className: classes.extendedIcon
        }), "Extended"]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Fab.default, {
        variant: "extended",
        size: "medium",
        color: "primary",
        "aria-label": "add",
        className: classes.margin,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Navigation.default, {
          className: classes.extendedIcon
        }), "Extended"]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Fab.default, {
        variant: "extended",
        color: "primary",
        "aria-label": "add",
        className: classes.margin,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Navigation.default, {
          className: classes.extendedIcon
        }), "Extended"]
      })]
    })]
  });
};

var Sizes = function Sizes() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SizesInternal, {});
};

exports.Sizes = Sizes;