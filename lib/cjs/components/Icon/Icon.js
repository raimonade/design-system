"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = Icon;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _icons = require("../../shared/icons");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["icon", "block"];

var _templateObject, _templateObject2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Svg = _styled.default.svg(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: ", ";\n  vertical-align: middle;\n\n  shape-rendering: inherit;\n  transform: translate3d(0, 0, 0);\n"])), function (props) {
  return props.block ? 'block' : 'inline-block';
});

var Path = _styled.default.path(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  fill: currentColor;\n"])));

/**
 * An Icon is a piece of visual element, but we must ensure its accessibility while using it.
 * It can have 2 purposes:
 *
 * - *decorative only*: for example, it illustrates a label next to it. We must ensure that it is ignored by screen readers, by setting `aria-hidden` attribute (ex: `<Icon icon="check" aria-hidden />`)
 * - *non-decorative*: it means that it delivers information. For example, an icon as only child in a button. The meaning can be obvious visually, but it must have a proper text alternative via `aria-label` for screen readers. (ex: `<Icon icon="print" aria-label="Print this document" />`)
 */
function Icon(_ref) {
  var icon = _ref.icon,
      block = _ref.block,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Svg, _objectSpread(_objectSpread({
    viewBox: "0 0 1024 1024",
    width: "20px",
    height: "20px",
    block: block
  }, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Path, {
      d: _icons.icons[icon]
    })
  }));
}

Icon.defaultProps = {
  block: false
};