"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lightThemeOptions = exports.lightTheme = exports.lightOverrides = exports.darkThemeOptions = exports.darkTheme = exports.darkOverrides = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles = require("@mui/material/styles");

var _createPalette = require("@mui/material/styles/createPalette");

var _deepMerge = require("../utils/deep-merge");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var brand = {
  orange: '#DE582A',
  darkGrey: '#4A4A4A',
  lightGrey: '#D9D3D1',
  black: '#000',
  white: '#FFF',
  yellow: '#F99220',
  lightCyan: '#89CFD9',
  darkCyan: '#408C8C'
};
var monochrome = {
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
var lightThemeOptions = {
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
    brand: brand,
    monochrome: monochrome,
    mainBackgroundColor: brand.white,
    panelBackgroundColor: '#f4f2f1',
    subPanelBackgroundColor: brand.white
  }
};
exports.lightThemeOptions = lightThemeOptions;
var darkThemeOptions = (0, _deepMerge.deepMerge)({}, lightThemeOptions, {
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
exports.darkThemeOptions = darkThemeOptions;
var darkTheme = (0, _styles.createTheme)(darkThemeOptions);
exports.darkTheme = darkTheme;
var lightTheme = (0, _styles.createTheme)(lightThemeOptions);
exports.lightTheme = lightTheme;
var lightOverrides = {
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
    root: (0, _defineProperty2.default)({
      fontWeight: 600
    }, lightTheme.breakpoints.up('sm'), {
      padding: '6px 20px',
      fontSize: 18
    })
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
exports.lightOverrides = lightOverrides;
var darkOverrides = (0, _deepMerge.deepMerge)({}, lightOverrides, {
  MuiCssBaseline: {
    '@global': {
      body: {
        color: darkTheme.palette.text.primary,
        backgroundColor: darkThemeOptions.palette.mainBackgroundColor
      }
    }
  }
});
exports.darkOverrides = darkOverrides;
lightTheme.components = Object.keys(lightOverrides).reduce(function (acc, key) {
  acc[key] = {
    styleOverrides: _objectSpread({}, lightOverrides[key])
  };
  return acc;
}, {});
darkTheme.components = Object.keys(darkOverrides).reduce(function (acc, key) {
  acc[key] = {
    styleOverrides: _objectSpread({}, lightOverrides[key])
  };
  return acc;
}, {});