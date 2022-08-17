import { css, Global, ThemeProvider, Theme } from '@emotion/react';
import { StyledEngineProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@mui/styles';
import { DocsContainer as BaseContainer } from '@storybook/addon-docs';
import { themes } from '@storybook/theming';
import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { darkTheme, lightTheme } from '../../src/shared/theme';

export const DocsContainer = ({ children, context }) => {
  const dark = useDarkMode();
  const theme = dark ? darkTheme : lightTheme;

  return (
    <>
      <Global styles={getGlobalStyle(theme)} />
      <StylesProvider injectFirst>
        <StyledEngineProvider injectFirst>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <ThemeProvider theme={theme}>
              <BaseContainer
                context={{
                  ...context,
                  parameters: {
                    ...context.parameters,
                    docs: {
                      // This is where the magic happens.
                      theme: dark ? themes.dark : themes.light,
                    },
                  },
                }}
              >
                {children}
              </BaseContainer>
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
