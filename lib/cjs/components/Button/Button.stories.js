"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AnchorWrapper = exports.AllButtons = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _StoryLinkWrapper = require("../Link/StoryLinkWrapper");

var _Button = require("./Button");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

var _default = {
  title: 'Design System/Button',
  component: _Button.Button
};
exports.default = _default;

var AllButtons = function AllButtons() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(ButtonsWrapper, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      appearance: "primary",
      children: "PRIMARY"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      appearance: "secondary",
      children: "SECONDARY"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      appearance: "primaryOutline",
      children: "OUTLINE PRIMARY"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      appearance: "secondaryOutline",
      children: "OUTLINE SECONDARY"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      appearance: "primary",
      isDisabled: true,
      children: "DISABLED"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      appearance: "primary",
      isLoading: true,
      children: "PRIMARY"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      appearance: "secondary",
      isLoading: true,
      children: "SECONDARY"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      appearance: "primaryOutline",
      isLoading: true,
      children: "OUTLINE PRIMARY"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      appearance: "secondaryOutline",
      isLoading: true,
      children: "OUTLINE SECONDARY"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      appearance: "primary",
      size: "small",
      children: "PRIMARY"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      appearance: "secondary",
      size: "small",
      children: "SECONDARY"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      appearance: "primaryOutline",
      size: "small",
      children: "OUTLINE PRIMARY"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      appearance: "secondaryOutline",
      size: "small",
      children: "OUTLINE SECONDARY"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      appearance: "primary",
      isDisabled: true,
      size: "small",
      children: "DISABLED"
    })]
  });
};

exports.AllButtons = AllButtons;
AllButtons.storyName = 'All Buttons';

var AnchorWrapper = function AnchorWrapper() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(ButtonsWrapper, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_StoryLinkWrapper.StoryLinkWrapper, {
      to: "http://28stone.com",
      children: "Original Link Wrapper"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
      appearance: "primary",
      to: "",
      href: "http://storybook.js.org",
      children: "Primary"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
      appearance: "secondary",
      to: "",
      href: "http://storybook.js.org",
      children: "Secondary"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
      appearance: "primaryOutline",
      to: "",
      href: "http://storybook.js.org",
      children: "Outline primary"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
      appearance: "secondaryOutline",
      to: "",
      href: "http://storybook.js.org",
      children: "Outline secondary"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
      appearance: "primary",
      to: "",
      isDisabled: true,
      href: "http://storybook.js.org",
      children: "Disabled"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
      appearance: "primary",
      to: "",
      isLoading: true,
      href: "http://storybook.js.org",
      children: "Primary"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
      appearance: "secondary",
      to: "",
      isLoading: true,
      href: "http://storybook.js.org",
      children: "Secondary"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
      appearance: "primary",
      size: "small",
      to: "",
      href: "http://storybook.js.org",
      children: "Primary"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
      appearance: "secondary",
      size: "small",
      to: "",
      href: "http://storybook.js.org",
      children: "Secondary"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      ButtonWrapper: _StoryLinkWrapper.StoryLinkWrapper,
      appearance: "primary",
      isDisabled: true,
      size: "small",
      to: "",
      href: "http://storybook.js.org",
      children: "Disabled"
    })]
  });
};

exports.AnchorWrapper = AnchorWrapper;
AnchorWrapper.storyName = 'Anchor Wrapper';

var ButtonsWrapper = _styled.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  & > * {\n    margin-right: ", ";\n    margin-bottom: ", ";\n  }\n"])), function (p) {
  return p.theme.spacing(1);
}, function (p) {
  return p.theme.spacing(1);
});