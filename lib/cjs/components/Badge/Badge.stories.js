"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithIcon = exports.Warning = exports.Success = exports.Info = exports.Error = exports.AllBadges = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _Icon = require("../Icon/Icon");

var _Badge = require("./Badge");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  title: 'Design System/Badge',
  component: _Badge.Badge
};
exports.default = _default;

var AllBadges = function AllBadges() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(AllBadgesWrapper, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.Badge, {
      status: "success",
      children: "Success"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.Badge, {
      status: "error",
      children: "Error"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.Badge, {
      status: "warning",
      children: "Warning"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.Badge, {
      status: "info",
      children: "Info"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Badge.Badge, {
      status: "success",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
        icon: "facehappy"
      }), "with icon"]
    })]
  });
};

exports.AllBadges = AllBadges;

var Success = function Success() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.Badge, {
    status: "success",
    children: "Success"
  });
};

exports.Success = Success;

var Warning = function Warning() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.Badge, {
    status: "warning",
    children: "Warning"
  });
};

exports.Warning = Warning;

var Info = function Info() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.Badge, {
    status: "info",
    children: "Info"
  });
};

exports.Info = Info;

var Error = function Error() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.Badge, {
    status: "error",
    children: "Error"
  });
};

exports.Error = Error;

var WithIcon = function WithIcon(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Badge.Badge, _objectSpread(_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, _objectSpread({}, args)), "with icon"]
  }));
};

exports.WithIcon = WithIcon;
WithIcon.args = {
  status: 'warning',
  icon: 'check',
  inline: true
};

var AllBadgesWrapper = _styled.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  & > * {\n    margin-right: ", ";\n  }\n"])), function (p) {
  return p.theme.spacing(1);
});