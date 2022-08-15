"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Standard = exports.Sizes = exports.Loading = exports.Large = exports.Initials = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Avatar = require("./Avatar");

var _jsxRuntime = require("react/jsx-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  title: 'Design System/Avatar',
  component: _Avatar.Avatar
};
exports.default = _default;

var Standard = function Standard(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.Avatar, _objectSpread({}, args));
};

exports.Standard = Standard;
Standard.args = {
  size: 'large',
  username: 'Tom Coleman',
  src: 'https://avatars2.githubusercontent.com/u/132554'
};

var Sizes = function Sizes(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.Avatar, _objectSpread(_objectSpread({}, args), {}, {
      size: "large"
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.Avatar, _objectSpread(_objectSpread({}, args), {}, {
      size: "medium"
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.Avatar, _objectSpread(_objectSpread({}, args), {}, {
      size: "small"
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.Avatar, _objectSpread(_objectSpread({}, args), {}, {
      size: "tiny"
    }))]
  });
};

exports.Sizes = Sizes;
Sizes.args = {
  username: 'Tom Coleman',
  src: 'https://avatars2.githubusercontent.com/u/132554'
};

var Initials = function Initials(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.Avatar, _objectSpread(_objectSpread({}, args), {}, {
      username: "Tom Coleman"
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.Avatar, _objectSpread(_objectSpread({}, args), {}, {
      username: "Dominic Nguyen"
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.Avatar, _objectSpread(_objectSpread({}, args), {}, {
      username: "Kyle Suss"
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.Avatar, _objectSpread(_objectSpread({}, args), {}, {
      username: "Michael Shilman"
    }))]
  });
};

exports.Initials = Initials;

var Loading = function Loading(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.Avatar, _objectSpread(_objectSpread({}, args), {}, {
      size: "large"
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.Avatar, _objectSpread(_objectSpread({}, args), {}, {
      size: "medium"
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.Avatar, _objectSpread(_objectSpread({}, args), {}, {
      size: "small"
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.Avatar, _objectSpread(_objectSpread({}, args), {}, {
      size: "tiny"
    }))]
  });
};

exports.Loading = Loading;
Loading.args = {
  loading: true
};

var Large = function Large(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.Avatar, _objectSpread(_objectSpread({}, args), {}, {
      loading: true,
      size: "large"
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.Avatar, _objectSpread(_objectSpread({}, args), {}, {
      size: "large",
      username: "Tom Coleman"
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.Avatar, _objectSpread(_objectSpread({}, args), {}, {
      size: "large",
      username: "Tom Coleman",
      src: "https://avatars2.githubusercontent.com/u/132554"
    }))]
  });
};

exports.Large = Large;