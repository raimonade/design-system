import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { ThemeProvider, Global, css } from '@emotion/react';
import { useDarkMode } from 'storybook-dark-mode';
import { lightTheme, darkTheme } from '../../src/shared/theme';

export default (Story, context) => {
  const theme = useDarkMode() ? darkTheme : lightTheme;
  const isInDocs = context.viewMode === 'docs';

  return isInDocs ? (
    <Story />
  ) : (
    <>
      <Global styles={getGlobalStyle(theme)} />
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <Story/>
          </ThemeProvider>
        </MuiThemeProvider>
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
