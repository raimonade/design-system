import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Fragment } from 'react';
import { icons } from '../../shared/icons';
import { Icon } from './Icon';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const Meta = styled.div`
  color: #666;
  font-size: 12px;
`;
const Item = styled.li`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 20%;
  min-width: 120px;

  padding: 0px 7.5px 20px;

  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }

  ${p => p.minimal && css`
      flex: none;
      min-width: auto;
      padding: 0;
      background: ${p.theme.palette.panelBackgroundColor};
      border: 1px solid #666;

      svg {
        display: block;
        margin-right: 0;
        width: 48px;
        height: 48px;
      }
    `};
`;
const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`;
export default {
  title: 'Design System/Icon',
  component: Icon
};
export const Labels = () => /*#__PURE__*/_jsxs(Fragment, {
  children: ["There are ", Object.keys(icons).length, " icons", /*#__PURE__*/_jsx(List, {
    children: Object.keys(icons).map(key => /*#__PURE__*/_jsxs(Item, {
      children: [/*#__PURE__*/_jsx(Icon, {
        icon: key,
        "aria-hidden": true
      }), /*#__PURE__*/_jsx(Meta, {
        children: key
      })]
    }, key))
  })]
});
export const NoLabels = () => /*#__PURE__*/_jsx(List, {
  children: Object.keys(icons).map(key => /*#__PURE__*/_jsx(Item, {
    minimal: true,
    children: /*#__PURE__*/_jsx(Icon, {
      icon: key,
      "aria-label": key
    })
  }, key))
});
NoLabels.storyName = 'no labels';
export const Inline = args => /*#__PURE__*/_jsxs(Fragment, {
  children: ["this is an inline ", /*#__PURE__*/_jsx(Icon, { ...args
  }), " icon (default)"]
});
Inline.args = {
  icon: 'facehappy',
  'aria-label': 'Happy face'
};
export const Block = args => /*#__PURE__*/_jsxs(Fragment, {
  children: ["this is a block ", /*#__PURE__*/_jsx(Icon, { ...args
  }), " icon"]
});
Block.args = {
  icon: 'facehappy',
  'aria-label': 'Happy face',
  block: true
};