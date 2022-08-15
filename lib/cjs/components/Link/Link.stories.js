"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.All = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _addonActions = require("@storybook/addon-actions");

var _Icon = require("../Icon/Icon");

var _Link = require("./Link");

var _StoryLinkWrapper = require("./StoryLinkWrapper");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

var CustomLink = (0, _styled.default)(_Link.Link)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  && {\n    color: red;\n  }\n"])));
var onLinkClick = (0, _addonActions.action)('onLinkClick');
var _default = {
  title: 'Design System/Link',
  component: _Link.Link
};
exports.default = _default;

var All = function All() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.Link, {
      href: "https://learnstorybook.com",
      children: "Default"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.Link, {
      secondary: true,
      href: "https://learnstorybook.com",
      children: "Secondary"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.Link, {
      nochrome: true,
      href: "https://learnstorybook.com",
      children: "nochrome"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Link.Link, {
      href: "https://learnstorybook.com",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
        icon: "discord",
        "aria-hidden": true
      }), "With icon in front"]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.Link, {
      containsIcon: true,
      href: "https://learnstorybook.com",
      "aria-label": "Toggle side bar",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
        icon: "sidebar",
        "aria-hidden": true
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.Link, {
      containsIcon: true,
      withArrow: true,
      href: "https://learnstorybook.com",
      children: "With arrow behind"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: {
        background: '#333'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.Link, {
        inverse: true,
        href: "https://learnstorybook.com",
        children: "Inverted colors"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.Link, {
      isButton: true,
      onClick: onLinkClick,
      children: "is actually a button"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.Link, {
      to: "",
      LinkWrapper: _StoryLinkWrapper.StoryLinkWrapper,
      href: "http://storybook.js.org",
      children: "has a LinkWrapper like GatsbyLink or NextLink"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(CustomLink, {
      tertiary: true,
      LinkWrapper: _StoryLinkWrapper.StoryLinkWrapper,
      href: "http://storybook.js.org",
      children: "has a LinkWrapper like GatsbyLink or NextLink with custom styling"
    })]
  });
};

exports.All = All;