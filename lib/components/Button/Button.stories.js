import styled from '@emotion/styled';
import { StoryLinkWrapper } from '../Link/StoryLinkWrapper';
import { Button } from './Button';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default {
  title: 'Design System/Button',
  component: Button
};
export const AllButtons = () => /*#__PURE__*/_jsxs(ButtonsWrapper, {
  children: [/*#__PURE__*/_jsx(Button, {
    appearance: "primary",
    children: "PRIMARY"
  }), /*#__PURE__*/_jsx(Button, {
    appearance: "secondary",
    children: "SECONDARY"
  }), /*#__PURE__*/_jsx(Button, {
    appearance: "primaryOutline",
    children: "OUTLINE PRIMARY"
  }), /*#__PURE__*/_jsx(Button, {
    appearance: "secondaryOutline",
    children: "OUTLINE SECONDARY"
  }), /*#__PURE__*/_jsx(Button, {
    appearance: "primary",
    isDisabled: true,
    children: "DISABLED"
  }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(Button, {
    appearance: "primary",
    isLoading: true,
    children: "PRIMARY"
  }), /*#__PURE__*/_jsx(Button, {
    appearance: "secondary",
    isLoading: true,
    children: "SECONDARY"
  }), /*#__PURE__*/_jsx(Button, {
    appearance: "primaryOutline",
    isLoading: true,
    children: "OUTLINE PRIMARY"
  }), /*#__PURE__*/_jsx(Button, {
    appearance: "secondaryOutline",
    isLoading: true,
    children: "OUTLINE SECONDARY"
  }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(Button, {
    appearance: "primary",
    size: "small",
    children: "PRIMARY"
  }), /*#__PURE__*/_jsx(Button, {
    appearance: "secondary",
    size: "small",
    children: "SECONDARY"
  }), /*#__PURE__*/_jsx(Button, {
    appearance: "primaryOutline",
    size: "small",
    children: "OUTLINE PRIMARY"
  }), /*#__PURE__*/_jsx(Button, {
    appearance: "secondaryOutline",
    size: "small",
    children: "OUTLINE SECONDARY"
  }), /*#__PURE__*/_jsx(Button, {
    appearance: "primary",
    isDisabled: true,
    size: "small",
    children: "DISABLED"
  })]
});
AllButtons.storyName = 'All Buttons';
export const AnchorWrapper = () => /*#__PURE__*/_jsxs(ButtonsWrapper, {
  children: [/*#__PURE__*/_jsx(StoryLinkWrapper, {
    to: "http://28stone.com",
    children: "Original Link Wrapper"
  }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "primary",
    to: "",
    href: "http://storybook.js.org",
    children: "Primary"
  }), /*#__PURE__*/_jsx(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "secondary",
    to: "",
    href: "http://storybook.js.org",
    children: "Secondary"
  }), /*#__PURE__*/_jsx(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "primaryOutline",
    to: "",
    href: "http://storybook.js.org",
    children: "Outline primary"
  }), /*#__PURE__*/_jsx(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "secondaryOutline",
    to: "",
    href: "http://storybook.js.org",
    children: "Outline secondary"
  }), /*#__PURE__*/_jsx(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "primary",
    to: "",
    isDisabled: true,
    href: "http://storybook.js.org",
    children: "Disabled"
  }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "primary",
    to: "",
    isLoading: true,
    href: "http://storybook.js.org",
    children: "Primary"
  }), /*#__PURE__*/_jsx(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "secondary",
    to: "",
    isLoading: true,
    href: "http://storybook.js.org",
    children: "Secondary"
  }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "primary",
    size: "small",
    to: "",
    href: "http://storybook.js.org",
    children: "Primary"
  }), /*#__PURE__*/_jsx(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "secondary",
    size: "small",
    to: "",
    href: "http://storybook.js.org",
    children: "Secondary"
  }), /*#__PURE__*/_jsx(Button, {
    ButtonWrapper: StoryLinkWrapper,
    appearance: "primary",
    isDisabled: true,
    size: "small",
    to: "",
    href: "http://storybook.js.org",
    children: "Disabled"
  })]
});
AnchorWrapper.storyName = 'Anchor Wrapper';
const ButtonsWrapper = styled.div`
  & > * {
    margin-right: ${p => p.theme.spacing(1)};
    margin-bottom: ${p => p.theme.spacing(1)};
  }
`;