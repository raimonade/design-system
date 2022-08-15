"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = require("@emotion/react");

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _material = require("@mui/material");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = _interopRequireWildcard(require("react"));

var _animation = require("../../shared/animation");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["containsIcon", "isLoading", "isUnclickable"],
    _excluded2 = ["isDisabled", "isLoading", "loadingText", "isLink", "children", "ButtonWrapper"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Text = _styled.default.span(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  vertical-align: top;\n"])));

var Loading = _styled.default.span(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  opacity: 0;\n"])));

var APPEARANCES = {
  PRIMARY: 'primary',
  PRIMARY_OUTLINE: 'primaryOutline',
  SECONDARY: 'secondary',
  SECONDARY_OUTLINE: 'secondaryOutline'
};
var SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium'
};

var StyledButton = _styled.default.button(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  border: 0;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  padding: ", ";\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  transition: all 150ms ease-out;\n  transform: translate3d(0, 0, 0);\n  vertical-align: top;\n  white-space: nowrap;\n  user-select: none;\n  opacity: 1;\n  background: transparent;\n\n  font-size: ", "px;\n  font-weight: ", ";\n  line-height: 1;\n\n  ", "\n\n  [data-text] {\n    transform: scale3d(1, 1, 1) translate3d(0, 0, 0);\n    transition: transform 700ms ", ";\n    opacity: 1;\n  }\n\n  [data-loading] {\n    transform: translate3d(0, 100%, 0);\n  }\n\n  svg {\n    height: ", "px;\n    width: ", "px;\n    vertical-align: top;\n    margin-right: ", "px;\n    margin-top: ", "px;\n    margin-bottom: ", "px;\n\n    /* Necessary for js mouse events to not glitch out when hovering on svgs */\n    pointer-events: none;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", ";\n\n  ", ";\n"])), function (props) {
  return props.size === SIZES.SMALL ? '8px 16px' : '13px 20px';
}, function (p) {
  return p.size === SIZES.SMALL ? p.theme.typography.size.s1 : p.theme.typography.size.s2;
}, function (p) {
  return p.theme.typography.fontWeightBold;
}, function (p) {
  return !p.isLoading && (0, _react.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n      &:hover {\n        transform: translate3d(0, -2px, 0);\n        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;\n      }\n\n      &:active {\n        transform: translate3d(0, 0, 0);\n      }\n\n      &:focus {\n        box-shadow: ", " 0 1px 9px 2px;\n      }\n\n      &:focus:hover {\n        box-shadow: ", " 0 8px 18px 0px;\n      }\n    "])), (0, _material.alpha)(p.theme.palette.primary.main, 0.4), (0, _material.alpha)(p.theme.palette.primary.main, 0.2));
}, _animation.easing.rubber, function (props) {
  return props.size === SIZES.SMALL ? '14' : '16';
}, function (props) {
  return props.size === SIZES.SMALL ? '14' : '16';
}, function (props) {
  return props.size === SIZES.SMALL ? '4' : '6';
}, function (props) {
  return props.size === SIZES.SMALL ? '-1' : '-2';
}, function (props) {
  return props.size === SIZES.SMALL ? '-1' : '-2';
}, function (props) {
  return props.disabled && (0, _react.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n      cursor: not-allowed !important;\n      opacity: 0.5;\n      &:hover {\n        transform: none;\n      }\n    "])));
}, function (props) {
  return props.isUnclickable && (0, _react.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n      cursor: default !important;\n      pointer-events: none;\n      &:hover {\n        transform: none;\n      }\n    "])));
}, function (props) {
  return props.isLoading && (0, _react.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2.default)(["\n      cursor: progress !important;\n      opacity: 0.7;\n\n      [data-loading] {\n        transform: translate3d(0, -50%, 0);\n        opacity: 1;\n      }\n\n      [data-text] {\n        transform: scale3d(0, 0, 1) translate3d(0, -100%, 0);\n        opacity: 0;\n      }\n\n      transition: none;\n      transform: none;\n    "])));
}, function (p) {
  return p.containsIcon && (0, _react.css)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2.default)(["\n      svg {\n        display: block;\n        margin: 0;\n      }\n      padding: ", "px;\n    "])), p.size === SIZES.SMALL ? '7' : '12');
}, function (p) {
  return p.appearance === APPEARANCES.PRIMARY && (0, _react.css)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2.default)(["\n      background: ", ";\n      color: ", ";\n\n      ", "\n    "])), p.theme.palette.primary.main, p.theme.palette.monochrome.lightest, !p.isLoading && (0, _react.css)(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2.default)(["\n        &:hover {\n          background: ", ";\n        }\n        &:active {\n          box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;\n        }\n        &:focus {\n          box-shadow: ", " 0 1px 9px 2px;\n        }\n        &:focus:hover {\n          box-shadow: ", " 0 8px 18px 0px;\n        }\n      "])), (0, _material.darken)(p.theme.palette.primary.main, 0.05), (0, _material.alpha)(p.theme.palette.primary.main, 0.4), (0, _material.alpha)(p.theme.palette.primary.main, 0.2)));
}, function (p) {
  return p.appearance === APPEARANCES.SECONDARY && (0, _react.css)(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2.default)(["\n      background: ", ";\n      color: ", ";\n\n      ", "\n    "])), p.theme.palette.secondary.main, p.theme.palette.monochrome.lightest, !p.isLoading && (0, _react.css)(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteral2.default)(["\n        &:hover {\n          background: ", ";\n        }\n        &:active {\n          box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;\n        }\n        &:focus {\n          box-shadow: ", " 0 1px 9px 2px;\n        }\n        &:focus:hover {\n          box-shadow: ", " 0 8px 18px 0px;\n        }\n      "])), (0, _material.darken)(p.theme.palette.secondary.main, 0.05), (0, _material.alpha)(p.theme.palette.secondary.main, 0.4), (0, _material.alpha)(p.theme.palette.secondary.main, 0.2)));
}, function (p) {
  return p.appearance === APPEARANCES.PRIMARY_OUTLINE && (0, _react.css)(_templateObject13 || (_templateObject13 = (0, _taggedTemplateLiteral2.default)(["\n      box-shadow: ", " 0 0 0 1px inset;\n      color: ", ";\n\n      &:hover {\n        box-shadow: ", " 0 0 0 1px inset;\n        background: transparent;\n      }\n\n      &:active {\n        background: ", ";\n        box-shadow: ", " 0 0 0 1px inset;\n        color: ", ";\n      }\n      &:focus {\n        box-shadow: ", " 0 0 0 1px inset,\n          ", " 0 1px 9px 2px;\n      }\n      &:focus:hover {\n        box-shadow: ", " 0 0 0 1px inset,\n          ", " 0 8px 18px 0px;\n      }\n    "])), p.theme.palette.primary.main, p.theme.palette.primary.main, p.theme.palette.primary.main, p.theme.palette.primary.main, p.theme.palette.primary.main, p.theme.palette.monochrome.lightest, p.theme.palette.primary.main, (0, _material.alpha)(p.theme.palette.primary.main, 0.4), p.theme.palette.primary.main, (0, _material.alpha)(p.theme.palette.primary.main, 0.2));
}, function (p) {
  return p.appearance === APPEARANCES.SECONDARY_OUTLINE && (0, _react.css)(_templateObject14 || (_templateObject14 = (0, _taggedTemplateLiteral2.default)(["\n      box-shadow: ", " 0 0 0 1px inset;\n      color: ", ";\n\n      &:hover {\n        box-shadow: ", " 0 0 0 1px inset;\n        background: transparent;\n      }\n\n      &:active {\n        background: ", ";\n        box-shadow: ", " 0 0 0 1px inset;\n        color: ", ";\n      }\n      &:focus {\n        box-shadow: ", " 0 0 0 1px inset,\n          ", " 0 1px 9px 2px;\n      }\n      &:focus:hover {\n        box-shadow: ", " 0 0 0 1px inset,\n          ", " 0 8px 18px 0px;\n      }\n    "])), p.theme.palette.secondary.main, p.theme.palette.secondary.main, p.theme.palette.secondary.main, p.theme.palette.secondary.main, p.theme.palette.secondary.main, p.theme.palette.monochrome.lightest, p.theme.palette.secondary.main, (0, _material.alpha)(p.theme.palette.secondary.main, 0.4), p.theme.palette.secondary.main, (0, _material.alpha)(p.theme.palette.secondary.main, 0.2));
});

var ButtonLink = StyledButton.withComponent('a');

var applyStyle = function applyStyle(ButtonWrapper) {
  return ButtonWrapper && StyledButton.withComponent( // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function (_ref) {
    var containsIcon = _ref.containsIcon,
        isLoading = _ref.isLoading,
        isUnclickable = _ref.isUnclickable,
        rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(ButtonWrapper, _objectSpread({}, rest));
  });
};

function Button(_ref2) {
  var isDisabled = _ref2.isDisabled,
      isLoading = _ref2.isLoading,
      loadingText = _ref2.loadingText,
      isLink = _ref2.isLink,
      children = _ref2.children,
      ButtonWrapper = _ref2.ButtonWrapper,
      props = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
  var buttonInner = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react2.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Text, {
      "data-text": true,
      children: children
    }), isLoading && /*#__PURE__*/(0, _jsxRuntime.jsx)(Loading, {
      "data-loading": true,
      children: loadingText || 'LOADING...'
    })]
  });

  var StyledButtonWrapper = _react2.default.useMemo(function () {
    return applyStyle(ButtonWrapper);
  }, [ButtonWrapper]); // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var SelectedButton = StyledButton;

  if (ButtonWrapper) {
    SelectedButton = StyledButtonWrapper;
  } else if (isLink) {
    SelectedButton = ButtonLink;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SelectedButton, _objectSpread(_objectSpread({
    isLoading: isLoading,
    disabled: isDisabled
  }, props), {}, {
    children: buttonInner
  }));
}

Button.propTypes = {
  isLoading: _propTypes.default.bool,

  /**
   When a button is in the loading state you can supply custom text
  */
  loadingText: _propTypes.default.node,

  /**
   Buttons that have hrefs should use <a> instead of <button>
  */
  isLink: _propTypes.default.bool,
  children: _propTypes.default.node.isRequired,
  appearance: _propTypes.default.oneOf(Object.values(APPEARANCES)),
  isDisabled: _propTypes.default.bool,

  /**
   Prevents users from clicking on a button multiple times (for things like payment forms)
  */
  isUnclickable: _propTypes.default.bool,

  /**
   Buttons with icons by themselves have a circular shape
  */
  containsIcon: _propTypes.default.bool,
  size: _propTypes.default.oneOf(Object.values(SIZES)),
  ButtonWrapper: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
};
Button.defaultProps = {
  isLoading: false,
  loadingText: null,
  isLink: false,
  appearance: APPEARANCES.PRIMARY,
  isDisabled: false,
  isUnclickable: false,
  containsIcon: false,
  size: SIZES.MEDIUM,
  ButtonWrapper: undefined
};