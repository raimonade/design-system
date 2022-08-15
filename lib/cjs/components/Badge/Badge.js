"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = Badge;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = require("@emotion/react");

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var BadgeWrapper = _styled.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  vertical-align: top;\n  font-size: 11px;\n  line-height: 12px;\n  padding: 4px 12px;\n  border-radius: 3em;\n  font-weight: ", ";\n\n  svg {\n    height: 12px;\n    width: 12px;\n    margin-right: 4px;\n    margin-top: -2px;\n  }\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"])), function (p) {
  return p.theme.typography.fontWeightBold;
}, function (p) {
  return p.status === 'success' && (0, _react.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n      color: ", ";\n      background: ", ";\n    "])), p.theme.palette.success.main, p.theme.palette.successBackground);
}, function (p) {
  return p.status === 'error' && (0, _react.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n      color: ", ";\n      background: ", ";\n    "])), p.theme.palette.error.main, p.theme.palette.errorBackground);
}, function (p) {
  return p.status === 'warning' && (0, _react.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n      color: ", ";\n      background: ", ";\n    "])), p.theme.palette.warning.main, p.theme.palette.warningBackground);
}, function (p) {
  return p.status === 'info' && (0, _react.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n      color: ", ";\n      background: ", ";\n    "])), p.theme.palette.info.main, p.theme.palette.infoBackground);
});

/**
 * **Badges?!** We don't need no stinkin' badges!!
 */
function Badge(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(BadgeWrapper, _objectSpread({}, props));
}

Badge.propTypes = {
  status: _propTypes.default.oneOf(['success', 'error', 'warning', 'info'])
};
Badge.defaultProps = {
  status: 'neutral'
};