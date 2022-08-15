"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ThemeProvider;

var _react = require("@emotion/react");

function ThemeProvider(_ref) {
  var children = _ref.children;
  var theme = (0, _react.useTheme)();
  return children({
    theme: theme
  });
}