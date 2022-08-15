import { css } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { jsx as _jsx } from "react/jsx-runtime";
const BadgeWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  font-size: 11px;
  line-height: 12px;
  padding: 4px 12px;
  border-radius: 3em;
  font-weight: ${p => p.theme.typography.fontWeightBold};

  svg {
    height: 12px;
    width: 12px;
    margin-right: 4px;
    margin-top: -2px;
  }

  ${p => p.status === 'success' && css`
      color: ${p.theme.palette.success.main};
      background: ${p.theme.palette.successBackground};
    `};

  ${p => p.status === 'error' && css`
      color: ${p.theme.palette.error.main};
      background: ${p.theme.palette.errorBackground};
    `};

  ${p => p.status === 'warning' && css`
      color: ${p.theme.palette.warning.main};
      background: ${p.theme.palette.warningBackground};
    `};

  ${p => p.status === 'info' && css`
      color: ${p.theme.palette.info.main};
      background: ${p.theme.palette.infoBackground};
    `};
`;

/**
 * **Badges?!** We don't need no stinkin' badges!!
 */
export function Badge(props) {
  return /*#__PURE__*/_jsx(BadgeWrapper, { ...props
  });
}
Badge.propTypes = {
  status: PropTypes.oneOf(['success', 'error', 'warning', 'info'])
};
Badge.defaultProps = {
  status: 'neutral'
};