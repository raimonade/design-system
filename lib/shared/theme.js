import { createTheme } from '@mui/material/styles';
import { BrandColors, MonochromeColors } from '@mui/material/styles/createPalette';
import { deepMerge } from '../utils/deep-merge';
const brand = {
  orange: '#DE582A',
  darkGrey: '#4A4A4A',
  lightGrey: '#D9D3D1',
  black: '#000',
  white: '#FFF',
  yellow: '#F99220',
  lightCyan: '#89CFD9',
  darkCyan: '#408C8C'
};
const monochrome = {
  lightest: '#FFFFFF',
  lighter: '#F8F8F8',
  light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#999999',
  dark: '#666666',
  darker: '#444444',
  darkest: '#333333'
};
export const lightThemeOptions = {
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 800,
      md: 1230,
      lg: 1560,
      xl: 2200
    }
  },
  shape: {
    borderRadius: 0
  },
  typography: {
    fontFamily: 'Nunito, sans-serif',
    h1: {
      fontSize: 38,
      fontWeight: 'bold'
    },
    h5: {
      fontWeight: 'bold'
    },
    size: {
      s1: '12',
      s2: '14',
      s3: '16',
      m1: '20',
      m2: '24',
      m3: '28',
      l1: '32',
      l2: '40',
      l3: '48',
      code: '90'
    }
  },
  palette: {
    primary: {
      main: brand.orange
    },
    secondary: {
      main: brand.darkCyan
    },
    error: {
      main: '#FF4400'
    },
    errorBackground: '#FEDED2',
    warning: {
      main: '#E69D00'
    },
    warningBackground: '#FFF5CF',
    info: {
      main: '#666666'
    },
    infoBackground: '#DDDDDD',
    success: {
      main: '#66BF3C'
    },
    successBackground: '#E1FFD4',
    brand,
    monochrome,
    mainBackgroundColor: brand.white,
    panelBackgroundColor: '#f4f2f1',
    subPanelBackgroundColor: brand.white
  }
};
export const darkThemeOptions = deepMerge({}, lightThemeOptions, {
  palette: {
    mode: 'dark',
    background: {
      paper: '#333333'
    },
    mainBackgroundColor: '#333333',
    panelBackgroundColor: '#292929',
    subPanelBackgroundColor: '#333333'
  }
});
export const darkTheme = createTheme(darkThemeOptions);
export const lightTheme = createTheme(lightThemeOptions);
export const lightOverrides = {
  MuiCssBaseline: {
    '@global': {
      html: {
        height: '100%'
      },
      body: {
        height: '100%',
        backgroundColor: lightThemeOptions.palette.mainBackgroundColor,
        fontFamily: 'Nunito, sans-serif'
      },
      'button, input, textarea, select': {
        outline: 'none'
      },
      '#root': {
        height: '100%'
      },
      '.MuiPickersBasePicker-container .MuiPickersDay-day:focus.MuiPickersDay-daySelected': {
        backgroundColor: lightTheme.palette.primary.main
      },
      '.MuiAppBar-colorPrimary .MuiTabs-indicator': {
        backgroundColor: 'white'
      }
    }
  },
  MuiCard: {
    root: {
      padding: lightTheme.spacing(2),
      boxShadow: 'none',
      border: 'solid 1px #d4d4d4'
    }
  },
  MuiCardActions: {
    root: {
      flexWrap: 'wrap',
      paddingRight: lightTheme.spacing(2),
      paddingLeft: lightTheme.spacing(2)
    },
    spacing: {
      '& > *': {
        marginBottom: lightTheme.spacing(1)
      },
      '& > :not(:first-child)': {
        marginLeft: 0
      },
      '& > :not(:last-child)': {
        marginRight: lightTheme.spacing(1)
      }
    }
  },
  MuiChip: {
    root: {
      height: 30,
      borderRadius: 0,
      fontSize: 12,
      textTransform: 'uppercase'
    }
  },
  MuiTab: {
    root: {
      fontWeight: 600,
      [lightTheme.breakpoints.up('sm')]: {
        padding: '6px 20px',
        fontSize: 18
      }
    }
  },
  MuiAccordion: {
    root: {
      border: '1px solid #d4d4d4',
      boxShadow: 'none',
      '&:not(:first-child)': {
        marginTop: lightTheme.spacing(3)
      },
      '&:before': {
        display: 'none'
      },
      '&$expanded': {
        margin: 'auto'
      }
    }
  },
  MuiAccordionSummary: {
    root: {
      borderBottom: '1px solid #d4d4d4',
      padding: '0 15px',
      marginBottom: -1,
      height: 40,
      minHeight: 40,
      '&$expanded': {
        height: 40,
        minHeight: 40
      }
    },
    content: {
      margin: '5px 0',
      '&$expanded': {
        margin: '5px 0'
      }
    }
  },
  MuiAccordionDetails: {
    root: {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  MuiLink: {
    root: {
      '&:hover': {
        color: 'inherit'
      }
    }
  }
};
export const darkOverrides = deepMerge({}, lightOverrides, {
  MuiCssBaseline: {
    '@global': {
      body: {
        color: darkTheme.palette.text.primary,
        backgroundColor: darkThemeOptions.palette.mainBackgroundColor
      }
    }
  }
});
lightTheme.components = Object.keys(lightOverrides).reduce((acc, key) => {
  acc[key] = {
    styleOverrides: { ...lightOverrides[key]
    }
  };
  return acc;
}, {});
darkTheme.components = Object.keys(darkOverrides).reduce((acc, key) => {
  acc[key] = {
    styleOverrides: { ...lightOverrides[key]
    }
  };
  return acc;
}, {});