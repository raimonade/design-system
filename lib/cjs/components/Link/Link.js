"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = Link;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = require("@emotion/react");

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _material = require("@mui/material");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("react");

var _Icon = require("../Icon/Icon");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["containsIcon", "inverse", "nochrome", "secondary", "tertiary"],
    _excluded2 = ["isButton", "withArrow", "LinkWrapper", "children"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var linkStyles = function linkStyles(p) {
  return (0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  transition: transform 150ms ease-out, color 150ms ease-out;\n  text-decoration: none;\n\n  color: ", ";\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    transform: translateY(-1px);\n    color: ", ";\n  }\n  &:active {\n    transform: translateY(0);\n    color: ", ";\n  }\n\n  svg {\n    display: inline-block;\n    height: 1em;\n    width: 1em;\n    vertical-align: text-top;\n    position: relative;\n    bottom: -0.125em;\n    margin-right: 0.4em;\n  }\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"])), p.theme.palette.primary.main, (0, _material.darken)(p.theme.palette.primary.main, 0.07), (0, _material.darken)(p.theme.palette.primary.main, 0.1), p.containsIcon && (0, _react.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n    svg {\n      height: 1em;\n      width: 1em;\n      vertical-align: middle;\n      position: relative;\n      bottom: 0;\n      margin-right: 0;\n    }\n  "]))), p.secondary && (0, _react.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n    color: ", ";\n\n    &:hover {\n      color: ", ";\n    }\n\n    &:active {\n      color: ", ";\n    }\n  "])), p.theme.palette.secondary.main, (0, _material.darken)(p.theme.palette.secondary.main, 0.07), (0, _material.darken)(p.theme.palette.secondary.main, 0.1)), p.nochrome && (0, _react.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n    color: inherit;\n\n    &:hover,\n    &:active {\n      color: inherit;\n      text-decoration: underline;\n    }\n  "]))), p.inverse && (0, _react.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n    color: ", ";\n\n    &:hover {\n      color: ", ";\n    }\n\n    &:active {\n      color: ", ";\n    }\n  "])), p.theme.palette.monochrome.lightest, p.theme.palette.monochrome.lighter, p.theme.palette.monochrome.light), p.isButton && (0, _react.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n    border: 0;\n    border-radius: 0;\n    background: none;\n    padding: 0;\n    font-size: inherit;\n  "]))));
};

var LinkInner = _styled.default.span(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n"])), function (props) {
  return props.withArrow && (0, _react.css)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2.default)(["\n      > svg:last-of-type {\n        height: 0.7em;\n        width: 0.7em;\n        margin-right: 0;\n        margin-left: 0.25em;\n        bottom: auto;\n        vertical-align: inherit;\n      }\n    "])));
});

var LinkA = _styled.default.a(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n"])), linkStyles);

var LinkButton = _styled.default.button(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2.default)(["\n  /* reset button styles */\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n\n  ", ";\n"])), linkStyles);

var applyStyle = function applyStyle(LinkWrapper) {
  return LinkWrapper && (0, _styled.default)(function (_ref) {
    var containsIcon = _ref.containsIcon,
        inverse = _ref.inverse,
        nochrome = _ref.nochrome,
        secondary = _ref.secondary,
        tertiary = _ref.tertiary,
        linkWrapperRest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(LinkWrapper, _objectSpread({}, linkWrapperRest));
  })(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2.default)(["\n      ", ";\n    "])), linkStyles);
};
/**
 * Links can contains text and/or icons. Be careful using only icons, you must provide a text alternative via aria-label for accessibility.
 */


function Link(_ref2) {
  var isButton = _ref2.isButton,
      withArrow = _ref2.withArrow,
      LinkWrapper = _ref2.LinkWrapper,
      children = _ref2.children,
      rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
  var content = /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(LinkInner, {
      withArrow: withArrow,
      children: [children, withArrow && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
        icon: "arrowright"
      })]
    })
  });
  var StyledLinkWrapper = applyStyle(LinkWrapper); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var SelectedLink = LinkA;

  if (LinkWrapper) {
    SelectedLink = StyledLinkWrapper;
  } else if (isButton) {
    SelectedLink = LinkButton;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SelectedLink, _objectSpread(_objectSpread({}, rest), {}, {
    children: content
  }));
}

Link.propTypes = {
  isButton: _propTypes.default.bool,
  children: _propTypes.default.node,
  withArrow: _propTypes.default.bool,
  containsIcon: _propTypes.default.bool,
  inverse: _propTypes.default.bool,
  nochrome: _propTypes.default.bool,
  secondary: _propTypes.default.bool,
  tertiary: _propTypes.default.bool
};
Link.defaultProps = {
  isButton: false,
  children: null,
  withArrow: false,
  containsIcon: false,
  LinkWrapper: undefined,
  inverse: false,
  nochrome: false,
  secondary: false,
  tertiary: false
};