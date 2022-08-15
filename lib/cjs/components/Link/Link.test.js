"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("@emotion/react");

var _reactDom = _interopRequireDefault(require("react-dom"));

var _theme = require("../../shared/theme");

var _Link = require("./Link");

var _jsxRuntime = require("react/jsx-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// A straightforward link wrapper that renders an <a> with the passed props. What we are testing
// here is that the Link component passes the right props to the wrapper and itself.
var LinkWrapper = function LinkWrapper(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", _objectSpread({}, props));
};

it('has a href attribute when rendering with linkWrapper', function () {
  var div = document.createElement('div');

  _reactDom.default.render( /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.ThemeProvider, {
    theme: _theme.lightTheme,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.Link, {
      href: "https://learnstorybook.com",
      LinkWrapper: LinkWrapper,
      children: "Link Text"
    })
  }), div);

  expect(div.querySelector('a[href="https://learnstorybook.com"]')).not.toBeNull();
  expect(div.textContent).toEqual('Link Text');

  _reactDom.default.unmountComponentAtNode(div);
});