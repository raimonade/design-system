"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UploadButton = exports.TextButtons = exports.Sizes = exports.OutlinedButtons = exports.ContainedButtons = exports.ButtonsWithIconsAndLabel = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _Button = _interopRequireDefault(require("@mui/material/Button"));

var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));

var _styles = require("@mui/material/styles");

var _ArrowDownward = _interopRequireDefault(require("@mui/icons-material/ArrowDownward"));

var _CloudUpload = _interopRequireDefault(require("@mui/icons-material/CloudUpload"));

var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));

var _KeyboardVoice = _interopRequireDefault(require("@mui/icons-material/KeyboardVoice"));

var _PhotoCamera = _interopRequireDefault(require("@mui/icons-material/PhotoCamera"));

var _Save = _interopRequireDefault(require("@mui/icons-material/Save"));

var _Send = _interopRequireDefault(require("@mui/icons-material/Send"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return (0, _styles.createStyles)({
    root: {
      '& > *': {
        margin: theme.spacing(1)
      }
    },
    input: {
      display: 'none'
    },
    margin: {
      margin: theme.spacing(1)
    },
    extendedIcon: {
      marginRight: theme.spacing(1)
    },
    button: {
      margin: theme.spacing(1)
    }
  });
});
var _default = {
  title: 'Material UI/Button',
  component: _Button.default
};
exports.default = _default;

var ContainedButtonsInternal = function ContainedButtonsInternal() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(ButtonsWrapper, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      variant: "contained",
      children: "Default"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      variant: "contained",
      color: "primary",
      children: "Primary"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      variant: "contained",
      color: "secondary",
      children: "Secondary"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      variant: "contained",
      disabled: true,
      children: "Disabled"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      variant: "contained",
      color: "primary",
      href: "#contained-buttons",
      children: "Link"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {})]
  });
};

var ContainedButtons = function ContainedButtons() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ContainedButtonsInternal, {});
};

exports.ContainedButtons = ContainedButtons;

var OutlinedButtonsInternal = function OutlinedButtonsInternal() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(ButtonsWrapper, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      variant: "outlined",
      children: "Default"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      variant: "outlined",
      color: "primary",
      children: "Primary"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      variant: "outlined",
      color: "secondary",
      children: "Secondary"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      variant: "outlined",
      disabled: true,
      children: "Disabled"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      variant: "outlined",
      color: "primary",
      href: "#outlined-buttons",
      children: "Link"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {})]
  });
};

var OutlinedButtons = function OutlinedButtons() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(OutlinedButtonsInternal, {});
};

exports.OutlinedButtons = OutlinedButtons;

var TextButtonsInternal = function TextButtonsInternal() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(ButtonsWrapper, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      children: "Default"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      color: "primary",
      children: "Primary"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      color: "secondary",
      children: "Secondary"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      disabled: true,
      children: "Disabled"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      href: "#text-buttons",
      color: "primary",
      children: "Link"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {})]
  });
};

var TextButtons = function TextButtons() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TextButtonsInternal, {});
};

exports.TextButtons = TextButtons;

var SizesInternal = function SizesInternal() {
  var classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(ButtonsWrapper, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        size: "small",
        className: classes.margin,
        children: "Small"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        size: "medium",
        className: classes.margin,
        children: "Medium"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        size: "large",
        className: classes.margin,
        children: "Large"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        variant: "outlined",
        size: "small",
        color: "primary",
        className: classes.margin,
        children: "Small"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        variant: "outlined",
        size: "medium",
        color: "primary",
        className: classes.margin,
        children: "Medium"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        variant: "outlined",
        size: "large",
        color: "primary",
        className: classes.margin,
        children: "Large"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        variant: "contained",
        size: "small",
        color: "primary",
        className: classes.margin,
        children: "Small"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        variant: "contained",
        size: "medium",
        color: "primary",
        className: classes.margin,
        children: "Medium"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        variant: "contained",
        size: "large",
        color: "primary",
        className: classes.margin,
        children: "Large"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.default, {
        "aria-label": "delete",
        className: classes.margin,
        size: "small",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ArrowDownward.default, {
          fontSize: "inherit"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.default, {
        "aria-label": "delete",
        className: classes.margin,
        size: "large",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Delete.default, {
          fontSize: "small"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.default, {
        "aria-label": "delete",
        className: classes.margin,
        size: "large",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Delete.default, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.default, {
        "aria-label": "delete",
        className: classes.margin,
        size: "large",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Delete.default, {
          fontSize: "large"
        })
      })]
    })]
  });
};

var Sizes = function Sizes() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SizesInternal, {});
};

exports.Sizes = Sizes;

var UploadButtonInternal = function UploadButtonInternal() {
  var classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(ButtonsWrapper, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      accept: "image/*",
      className: classes.input,
      id: "contained-button-file",
      multiple: true,
      type: "file"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      htmlFor: "contained-button-file",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        variant: "contained",
        color: "primary",
        component: "span",
        children: "Upload"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      accept: "image/*",
      className: classes.input,
      id: "icon-button-file",
      type: "file"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      htmlFor: "icon-button-file",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.default, {
        color: "primary",
        "aria-label": "upload picture",
        component: "span",
        size: "large",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PhotoCamera.default, {})
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {})]
  });
};

var UploadButton = function UploadButton() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(UploadButtonInternal, {});
};

exports.UploadButton = UploadButton;

var ButtonsWithIconsAndLabelInternal = function ButtonsWithIconsAndLabelInternal() {
  var classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(ButtonsWrapper, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      variant: "contained",
      color: "secondary",
      className: classes.button,
      startIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Delete.default, {}),
      children: "Delete"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      variant: "contained",
      color: "primary",
      className: classes.button,
      endIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Send.default, {}),
      children: "Send"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      variant: "contained",
      className: classes.button,
      startIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CloudUpload.default, {}),
      children: "Upload"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      variant: "contained",
      disabled: true,
      color: "secondary",
      className: classes.button,
      startIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_KeyboardVoice.default, {}),
      children: "Talk"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      variant: "contained",
      color: "primary",
      size: "small",
      className: classes.button,
      startIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Save.default, {}),
      children: "Save"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      variant: "contained",
      color: "primary",
      size: "large",
      className: classes.button,
      startIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Save.default, {}),
      children: "Save"
    })]
  });
};

var ButtonsWithIconsAndLabel = function ButtonsWithIconsAndLabel() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ButtonsWithIconsAndLabelInternal, {});
};

exports.ButtonsWithIconsAndLabel = ButtonsWithIconsAndLabel;

var ButtonsWrapper = _styled.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  & > * {\n    margin-right: ", ";\n    margin-bottom: ", ";\n  }\n"])), function (p) {
  return p.theme.spacing(1);
}, function (p) {
  return p.theme.spacing(1);
});