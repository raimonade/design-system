"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoryLinkWrapper = StoryLinkWrapper;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _addonActions = require("@storybook/addon-actions");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["children", "className", "href", "onClick", "to"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var fireClickAction = (0, _addonActions.action)('onLinkClick');

function StoryLinkWrapper(_ref) {
  var children = _ref.children,
      className = _ref.className,
      href = _ref.href,
      onClick = _ref.onClick,
      to = _ref.to,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var modifiedOnClick = function modifiedOnClick(event) {
    event.preventDefault();
    onClick(event);
    fireClickAction(href || to);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", _objectSpread(_objectSpread({
    className: className,
    href: href || to,
    onClick: modifiedOnClick
  }, rest), {}, {
    children: children
  }));
}

StoryLinkWrapper.propTypes = {
  children: _propTypes.default.any.isRequired,
  className: _propTypes.default.string,
  href: _propTypes.default.string,
  onClick: _propTypes.default.func,
  to: _propTypes.default.string
};
StoryLinkWrapper.defaultProps = {
  className: '',
  href: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: function onClick() {},
  to: null
};