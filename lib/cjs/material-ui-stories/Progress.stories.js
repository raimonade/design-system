"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LinearWithValueLabel = exports.LinearIndeterminate = exports.LinearDeterminate = exports.LinearBuffer = exports.CircularWithLabel = exports.CircularIntegration = exports.CircularIndeterminate = exports.CircularDeterminate = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _Button = _interopRequireDefault(require("@mui/material/Button"));

var _CircularProgress = _interopRequireDefault(require("@mui/material/CircularProgress"));

var _colors = require("@mui/material/colors");

var _Fab = _interopRequireDefault(require("@mui/material/Fab"));

var _LinearProgress = _interopRequireDefault(require("@mui/material/LinearProgress"));

var _styles = require("@mui/material/styles");

var _Typography = _interopRequireDefault(require("@mui/material/Typography"));

var _Check = _interopRequireDefault(require("@mui/icons-material/Check"));

var _Save = _interopRequireDefault(require("@mui/icons-material/Save"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return (0, _styles.createStyles)({
    root: {
      display: 'flex',
      alignItems: 'center',
      '& > * + *': {
        marginLeft: theme.spacing(2)
      }
    },
    linearRoot: {
      width: '100%',
      marginTop: theme.spacing(2),
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative'
    },
    buttonSuccess: {
      backgroundColor: _colors.green[500],
      '&:hover': {
        backgroundColor: _colors.green[700]
      }
    },
    fabProgress: {
      color: _colors.green[500],
      position: 'absolute',
      top: -6,
      left: -6,
      zIndex: 1
    },
    buttonProgress: {
      color: _colors.green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12
    }
  });
});
var _default = {
  title: 'Material UI/Progress',
  component: _CircularProgress.default
};
exports.default = _default;

var CircularIndeterminateInternal = function CircularIndeterminateInternal() {
  var classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress.default, {
      color: "secondary"
    })]
  });
};

var CircularIndeterminate = function CircularIndeterminate() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(CircularIndeterminateInternal, {});
};

exports.CircularIndeterminate = CircularIndeterminate;

var CircularDeterminateInternal = function CircularDeterminateInternal() {
  var classes = useStyles();

  var _React$useState = _react.default.useState(0),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      progress = _React$useState2[0],
      setProgress = _React$useState2[1];

  _react.default.useEffect(function () {
    var timer = setInterval(function () {
      setProgress(function (prevProgress) {
        return prevProgress >= 100 ? 0 : prevProgress + 10;
      });
    }, 800);
    return function () {
      clearInterval(timer);
    };
  }, []);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress.default, {
      variant: "determinate",
      value: 25
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress.default, {
      variant: "determinate",
      value: 50
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress.default, {
      variant: "determinate",
      value: 75
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress.default, {
      variant: "determinate",
      value: 100
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress.default, {
      variant: "determinate",
      value: progress
    })]
  });
};

var CircularDeterminate = function CircularDeterminate() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(CircularDeterminateInternal, {});
};

exports.CircularDeterminate = CircularDeterminate;

var CircularIntegrationInternal = function CircularIntegrationInternal() {
  var classes = useStyles();

  var _React$useState3 = _react.default.useState(false),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      loading = _React$useState4[0],
      setLoading = _React$useState4[1];

  var _React$useState5 = _react.default.useState(false),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      success = _React$useState6[0],
      setSuccess = _React$useState6[1];

  var timer = _react.default.useRef();

  var buttonClassname = (0, _clsx2.default)((0, _defineProperty2.default)({}, classes.buttonSuccess, success));

  _react.default.useEffect(function () {
    return function () {
      clearTimeout(timer.current);
    };
  }, []);

  var handleButtonClick = function handleButtonClick() {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(function () {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Fab.default, {
        "aria-label": "save",
        color: "primary",
        className: buttonClassname,
        onClick: handleButtonClick,
        children: success ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Check.default, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Save.default, {})
      }), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress.default, {
        size: 68,
        className: classes.fabProgress
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        variant: "contained",
        color: "primary",
        className: buttonClassname,
        disabled: loading,
        onClick: handleButtonClick,
        children: "Accept terms"
      }), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress.default, {
        size: 24,
        className: classes.buttonProgress
      })]
    })]
  });
};

var CircularIntegration = function CircularIntegration() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(CircularIntegrationInternal, {});
};

exports.CircularIntegration = CircularIntegration;

var CircularProgressWithLabel = function CircularProgressWithLabel(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    position: "relative",
    display: "inline-flex",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress.default, _objectSpread({
      variant: "determinate"
    }, props)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "caption",
        component: "div",
        color: "textSecondary",
        children: "".concat(Math.round(props.value), "%")
      })
    })]
  });
};

var CircularWithLabelInternal = function CircularWithLabelInternal() {
  var _React$useState7 = _react.default.useState(10),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      progress = _React$useState8[0],
      setProgress = _React$useState8[1];

  _react.default.useEffect(function () {
    var timer = setInterval(function () {
      setProgress(function (prevProgress) {
        return prevProgress >= 100 ? 0 : prevProgress + 10;
      });
    }, 800);
    return function () {
      clearInterval(timer);
    };
  }, []);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(CircularProgressWithLabel, {
    value: progress
  });
};

var CircularWithLabel = function CircularWithLabel() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(CircularWithLabelInternal, {});
};

exports.CircularWithLabel = CircularWithLabel;

var LinearIndeterminateInternal = function LinearIndeterminateInternal() {
  var classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes.linearRoot,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_LinearProgress.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinearProgress.default, {
      color: "secondary"
    })]
  });
};

var LinearIndeterminate = function LinearIndeterminate() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(LinearIndeterminateInternal, {});
};

exports.LinearIndeterminate = LinearIndeterminate;

var LinearDeterminateInternal = function LinearDeterminateInternal() {
  var classes = useStyles();

  var _React$useState9 = _react.default.useState(0),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      progress = _React$useState10[0],
      setProgress = _React$useState10[1];

  _react.default.useEffect(function () {
    var timer = setInterval(function () {
      setProgress(function (oldProgress) {
        if (oldProgress === 100) {
          return 0;
        }

        var diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
    return function () {
      clearInterval(timer);
    };
  }, []);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: classes.linearRoot,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinearProgress.default, {
      variant: "determinate",
      value: progress
    })
  });
};

var LinearDeterminate = function LinearDeterminate() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(LinearDeterminateInternal, {});
};

exports.LinearDeterminate = LinearDeterminate;
LinearDeterminate.parameters = {
  chromatic: {
    disable: true
  }
};

var LinearBufferInternal = function LinearBufferInternal() {
  var classes = useStyles();

  var _React$useState11 = _react.default.useState(0),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      progress = _React$useState12[0],
      setProgress = _React$useState12[1];

  var _React$useState13 = _react.default.useState(10),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      buffer = _React$useState14[0],
      setBuffer = _React$useState14[1];

  var progressRef = _react.default.useRef(function () {
    return true;
  });

  _react.default.useEffect(function () {
    progressRef.current = function () {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        var diff = Math.random() * 10;
        var diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }

      return true;
    };
  });

  _react.default.useEffect(function () {
    var timer = setInterval(function () {
      progressRef.current();
    }, 500);
    return function () {
      clearInterval(timer);
    };
  }, []);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: classes.linearRoot,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinearProgress.default, {
      variant: "buffer",
      value: progress,
      valueBuffer: buffer
    })
  });
};

var LinearBuffer = function LinearBuffer() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(LinearBufferInternal, {});
};

exports.LinearBuffer = LinearBuffer;
LinearBuffer.parameters = {
  chromatic: {
    disable: true
  }
};

function LinearProgressWithLabel(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    display: "flex",
    alignItems: "center",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      width: "100%",
      mr: 1,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinearProgress.default, _objectSpread({
        variant: "determinate"
      }, props))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      minWidth: 35,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "body2",
        color: "textSecondary",
        children: "".concat(Math.round(props.value), "%")
      })
    })]
  });
}

var LinearWithValueLabelInternal = function LinearWithValueLabelInternal() {
  var classes = useStyles();

  var _React$useState15 = _react.default.useState(10),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      progress = _React$useState16[0],
      setProgress = _React$useState16[1];

  _react.default.useEffect(function () {
    var timer = setInterval(function () {
      setProgress(function (prevProgress) {
        return prevProgress >= 100 ? 10 : prevProgress + 10;
      });
    }, 800);
    return function () {
      clearInterval(timer);
    };
  }, []);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: classes.linearRoot,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(LinearProgressWithLabel, {
      value: progress
    })
  });
};

var LinearWithValueLabel = function LinearWithValueLabel() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(LinearWithValueLabelInternal, {});
};

exports.LinearWithValueLabel = LinearWithValueLabel;