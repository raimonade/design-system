"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = Avatar;
exports.sizes = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = require("@emotion/react");

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _animation = require("../../shared/animation");

var _Icon = require("../Icon/Icon");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["loading", "username", "src", "size"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var sizes = {
  large: 40,
  medium: 28,
  small: 20,
  tiny: 16
};
exports.sizes = sizes;

var Image = _styled.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  background: ", ";\n  border-radius: 50%;\n  display: inline-block;\n  vertical-align: top;\n  overflow: hidden;\n  text-transform: uppercase;\n\n  height: ", "px;\n  width: ", "px;\n  line-height: ", "px;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  img {\n    width: 100%;\n    height: auto;\n    display: block;\n  }\n\n  svg {\n    position: relative;\n    bottom: -2px;\n    height: 100%;\n    width: 100%;\n    vertical-align: top;\n  }\n\n  path {\n    fill: ", ";\n    animation: ", " 1.5s ease-in-out infinite;\n  }\n"])), function (p) {
  return !p.$loading ? 'transparent' : p.theme.palette.monochrome.light;
}, sizes.medium, sizes.medium, sizes.medium, function (p) {
  return p.size === 'tiny' && (0, _react.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n      height: ", "px;\n      width: ", "px;\n      line-height: ", "px;\n    "])), sizes.tiny, sizes.tiny, sizes.tiny);
}, function (p) {
  return p.size === 'small' && (0, _react.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n      height: ", "px;\n      width: ", "px;\n      line-height: ", "px;\n    "])), sizes.small, sizes.small, sizes.small);
}, function (p) {
  return p.size === 'large' && (0, _react.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n      height: ", "px;\n      width: ", "px;\n      line-height: ", "px;\n    "])), sizes.large, sizes.large, sizes.large);
}, function (p) {
  return !p.src && (0, _react.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n      background: ", ";\n    "])), !p.$loading && '#37D5D3');
}, function (p) {
  return p.theme.palette ? p.theme.palette.monochrome.medium : '#DDDDDD';
}, _animation.glow); // prettier-ignore


var Initial = _styled.default.div(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n  color: ", ";\n  text-align: center;\n\n  font-size: ", "px;\n  line-height: ", "px;\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (p) {
  return p.theme.palette.monochrome.lightest;
}, function (p) {
  return p.theme.typography.size.s2;
}, sizes.medium, function (p) {
  return p.size === 'tiny' && (0, _react.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2.default)(["\n    font-size: ", "px;\n    line-height: ", "px;\n  "])), Number(p.theme.typography.size.s1) - 2, sizes.tiny);
}, function (p) {
  return p.size === 'small' && (0, _react.css)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2.default)(["\n    font-size: ", "px;\n    line-height: ", "px;\n  "])), p.theme.typography.size.s1, sizes.small);
}, function (p) {
  return p.size === 'large' && (0, _react.css)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2.default)(["\n    font-size: ", "px;\n    line-height: ", "px;\n  "])), p.theme.typography.size.s3, sizes.large);
});

/**
 * Use an avatar for attributing actions or content to specific users.
 *   The user’s name should always be present when using Avatar – either printed beside
 *   the avatar or in a tooltip.
 **/
function Avatar(_ref) {
  var loading = _ref.loading,
      username = _ref.username,
      src = _ref.src,
      size = _ref.size,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var avatarFigure = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
    icon: "useralt"
  });
  var a11yProps = {};

  if (loading) {
    a11yProps['aria-busy'] = true;
    a11yProps['aria-label'] = 'Loading avatar ...';
  } else if (src) {
    avatarFigure = /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      src: src,
      alt: username
    });
  } else {
    a11yProps['aria-label'] = username;
    avatarFigure = /*#__PURE__*/(0, _jsxRuntime.jsx)(Initial, {
      size: size,
      "aria-hidden": "true",
      children: username.substring(0, 1)
    });
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Image, _objectSpread(_objectSpread(_objectSpread({
    size: size,
    $loading: loading,
    src: src
  }, a11yProps), props), {}, {
    children: avatarFigure
  }));
}

Avatar.propTypes = {
  /**
   Use the loading state to indicate that the data Avatar needs is still loading. 
  */
  loading: _propTypes.default.bool,

  /**
   Avatar falls back to the user’s initial when no image is provided. Supply a `username` and omit `src` to see what this looks like.
  */
  username: _propTypes.default.string,

  /**
   The URL of the Avatar's image.
  */
  src: _propTypes.default.string,

  /**
   Avatar comes in four sizes. In most cases, you’ll be fine with `medium`. 
  */
  size: _propTypes.default.oneOf(Object.keys(sizes))
};
Avatar.defaultProps = {
  loading: false,
  username: 'loading',
  src: null,
  size: 'medium'
};