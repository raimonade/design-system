// This is allows us to test whether the link works via the actions addon
import { action } from '@storybook/addon-actions';
import PropTypes from 'prop-types';
import { jsx as _jsx } from "react/jsx-runtime";
const fireClickAction = action('onLinkClick');
export function StoryLinkWrapper({
  children,
  className,
  href,
  onClick,
  to,
  ...rest
}) {
  const modifiedOnClick = event => {
    event.preventDefault();
    onClick(event);
    fireClickAction(href || to);
  };

  return /*#__PURE__*/_jsx("a", {
    className: className,
    href: href || to,
    onClick: modifiedOnClick,
    ...rest,
    children: children
  });
}
StoryLinkWrapper.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string
};
StoryLinkWrapper.defaultProps = {
  className: '',
  href: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
  to: null
};