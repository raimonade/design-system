import { ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom';
import { lightTheme } from '../../shared/theme';
import { Link } from './Link'; // A straightforward link wrapper that renders an <a> with the passed props. What we are testing
// here is that the Link component passes the right props to the wrapper and itself.

import { jsx as _jsx } from "react/jsx-runtime";

const LinkWrapper = props => /*#__PURE__*/_jsx("a", { ...props
});

it('has a href attribute when rendering with linkWrapper', () => {
  const div = document.createElement('div');
  ReactDOM.render( /*#__PURE__*/_jsx(ThemeProvider, {
    theme: lightTheme,
    children: /*#__PURE__*/_jsx(Link, {
      href: "https://learnstorybook.com",
      LinkWrapper: LinkWrapper,
      children: "Link Text"
    })
  }), div);
  expect(div.querySelector('a[href="https://learnstorybook.com"]')).not.toBeNull();
  expect(div.textContent).toEqual('Link Text');
  ReactDOM.unmountComponentAtNode(div);
});