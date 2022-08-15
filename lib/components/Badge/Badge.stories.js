import styled from '@emotion/styled';
import { Icon } from '../Icon/Icon';
import { Badge } from './Badge';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default {
  title: 'Design System/Badge',
  component: Badge
};
export const AllBadges = () => /*#__PURE__*/_jsxs(AllBadgesWrapper, {
  children: [/*#__PURE__*/_jsx(Badge, {
    status: "success",
    children: "Success"
  }), /*#__PURE__*/_jsx(Badge, {
    status: "error",
    children: "Error"
  }), /*#__PURE__*/_jsx(Badge, {
    status: "warning",
    children: "Warning"
  }), /*#__PURE__*/_jsx(Badge, {
    status: "info",
    children: "Info"
  }), /*#__PURE__*/_jsxs(Badge, {
    status: "success",
    children: [/*#__PURE__*/_jsx(Icon, {
      icon: "facehappy"
    }), "with icon"]
  })]
});
export const Success = () => /*#__PURE__*/_jsx(Badge, {
  status: "success",
  children: "Success"
});
export const Warning = () => /*#__PURE__*/_jsx(Badge, {
  status: "warning",
  children: "Warning"
});
export const Info = () => /*#__PURE__*/_jsx(Badge, {
  status: "info",
  children: "Info"
});
export const Error = () => /*#__PURE__*/_jsx(Badge, {
  status: "error",
  children: "Error"
});
export const WithIcon = args => /*#__PURE__*/_jsxs(Badge, { ...args,
  children: [/*#__PURE__*/_jsx(Icon, { ...args
  }), "with icon"]
});
WithIcon.args = {
  status: 'warning',
  icon: 'check',
  inline: true
};
const AllBadgesWrapper = styled.div`
  & > * {
    margin-right: ${p => p.theme.spacing(1)};
  }
`;