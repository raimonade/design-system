"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NoLabels = exports.Labels = exports.Inline = exports.Block = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = require("@emotion/react");

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _react2 = require("react");

var _icons = require("../../shared/icons");

var _Icon = require("./Icon");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Meta = _styled.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  color: #666;\n  font-size: 12px;\n"])));

var Item = _styled.default.li(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  flex: 0 1 20%;\n  min-width: 120px;\n\n  padding: 0px 7.5px 20px;\n\n  svg {\n    margin-right: 10px;\n    width: 24px;\n    height: 24px;\n  }\n\n  ", ";\n"])), function (p) {
  return p.minimal && (0, _react.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n      flex: none;\n      min-width: auto;\n      padding: 0;\n      background: ", ";\n      border: 1px solid #666;\n\n      svg {\n        display: block;\n        margin-right: 0;\n        width: 48px;\n        height: 48px;\n      }\n    "])), p.theme.palette.panelBackgroundColor);
});

var List = _styled.default.ul(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-flow: row wrap;\n  list-style: none;\n"])));

var _default = {
  title: 'Design System/Icon',
  component: _Icon.Icon
};
exports.default = _default;

var Labels = function Labels() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react2.Fragment, {
    children: ["There are ", Object.keys(_icons.icons).length, " icons", /*#__PURE__*/(0, _jsxRuntime.jsx)(List, {
      children: Object.keys(_icons.icons).map(function (key) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Item, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
            icon: key,
            "aria-hidden": true
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Meta, {
            children: key
          })]
        }, key);
      })
    })]
  });
};

exports.Labels = Labels;

var NoLabels = function NoLabels() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(List, {
    children: Object.keys(_icons.icons).map(function (key) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(Item, {
        minimal: true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
          icon: key,
          "aria-label": key
        })
      }, key);
    })
  });
};

exports.NoLabels = NoLabels;
NoLabels.storyName = 'no labels';

var Inline = function Inline(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react2.Fragment, {
    children: ["this is an inline ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, _objectSpread({}, args)), " icon (default)"]
  });
};

exports.Inline = Inline;
Inline.args = {
  icon: 'facehappy',
  'aria-label': 'Happy face'
};

var Block = function Block(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react2.Fragment, {
    children: ["this is a block ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, _objectSpread({}, args)), " icon"]
  });
};

exports.Block = Block;
Block.args = {
  icon: 'facehappy',
  'aria-label': 'Happy face',
  block: true
};