import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import { Icon } from '../Icon/Icon';
import { Link } from './Link';
import { StoryLinkWrapper } from './StoryLinkWrapper';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const CustomLink = styled(Link)`
  && {
    color: red;
  }
`;
const onLinkClick = action('onLinkClick');
export default {
  title: 'Design System/Link',
  component: Link
};
export const All = () => /*#__PURE__*/_jsxs("div", {
  children: [/*#__PURE__*/_jsx(Link, {
    href: "https://learnstorybook.com",
    children: "Default"
  }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(Link, {
    secondary: true,
    href: "https://learnstorybook.com",
    children: "Secondary"
  }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(Link, {
    nochrome: true,
    href: "https://learnstorybook.com",
    children: "nochrome"
  }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsxs(Link, {
    href: "https://learnstorybook.com",
    children: [/*#__PURE__*/_jsx(Icon, {
      icon: "discord",
      "aria-hidden": true
    }), "With icon in front"]
  }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(Link, {
    containsIcon: true,
    href: "https://learnstorybook.com",
    "aria-label": "Toggle side bar",
    children: /*#__PURE__*/_jsx(Icon, {
      icon: "sidebar",
      "aria-hidden": true
    })
  }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(Link, {
    containsIcon: true,
    withArrow: true,
    href: "https://learnstorybook.com",
    children: "With arrow behind"
  }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("span", {
    style: {
      background: '#333'
    },
    children: /*#__PURE__*/_jsx(Link, {
      inverse: true,
      href: "https://learnstorybook.com",
      children: "Inverted colors"
    })
  }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(Link, {
    isButton: true,
    onClick: onLinkClick,
    children: "is actually a button"
  }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(Link, {
    to: "",
    LinkWrapper: StoryLinkWrapper,
    href: "http://storybook.js.org",
    children: "has a LinkWrapper like GatsbyLink or NextLink"
  }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(CustomLink, {
    tertiary: true,
    LinkWrapper: StoryLinkWrapper,
    href: "http://storybook.js.org",
    children: "has a LinkWrapper like GatsbyLink or NextLink with custom styling"
  })]
});