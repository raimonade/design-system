import React from 'react';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import { StylesProvider, MuiThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider, Global, css } from '@emotion/react';
import { useDarkMode } from 'storybook-dark-mode';
import { lightTheme, darkTheme } from '../../src/shared/theme';

export default (storyFn, context) => {
  const theme = useDarkMode() ? darkTheme : lightTheme
  const isInDocs = context.viewMode === 'docs';
  
  return isInDocs ? storyFn() : (
  <>
    <Global styles={getGlobalStyle(theme)} />
    <StylesProvider injectFirst>
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            {storyFn()}
          </ThemeProvider>
        </MuiThemeProvider>
      </StyledEngineProvider>
    </StylesProvider>
  </>
  );
};

const getGlobalStyle = theme => css`
  body {
    background-color: ${theme.palette.panelBackgroundColor};
  }
  p {
    margin: 0;
  }
`;