import React from 'react';
import { createStyles, makeStyles } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const currencies = [{
  value: 'USD',
  label: '$'
}, {
  value: 'EUR',
  label: '€'
}, {
  value: 'BTC',
  label: '฿'
}, {
  value: 'JPY',
  label: '¥'
}];
export default {
  title: 'Material UI/TextField',
  component: TextField
};
const useStyles = makeStyles(theme => createStyles({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch'
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  },
  wrapper: {
    display: 'flex',
    width: '100%'
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const BasicTextFieldsInternal = () => {
  const classes = useStyles();
  return /*#__PURE__*/_jsxs("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/_jsx(TextField, {
      id: "standard-basic",
      label: "Standard"
    }), /*#__PURE__*/_jsx(TextField, {
      id: "filled-basic",
      label: "Filled",
      variant: "filled"
    }), /*#__PURE__*/_jsx(TextField, {
      id: "outlined-basic",
      label: "Outlined",
      variant: "outlined"
    })]
  });
};

export const BasicTextFields = () => /*#__PURE__*/_jsx(BasicTextFieldsInternal, {});

const SizesInternal = () => {
  const classes = useStyles();
  return /*#__PURE__*/_jsxs("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/_jsxs("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/_jsx(TextField, {
        label: "Size",
        id: "standard-size-small",
        defaultValue: "Small",
        size: "small"
      }), /*#__PURE__*/_jsx(TextField, {
        label: "Size",
        id: "standard-size-normal",
        defaultValue: "Normal"
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/_jsx(TextField, {
        label: "Size",
        id: "filled-size-small",
        defaultValue: "Small",
        variant: "filled",
        size: "small"
      }), /*#__PURE__*/_jsx(TextField, {
        label: "Size",
        id: "filled-size-normal",
        defaultValue: "Normal",
        variant: "filled"
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/_jsx(TextField, {
        label: "Size",
        id: "outlined-size-small",
        defaultValue: "Small",
        variant: "outlined",
        size: "small"
      }), /*#__PURE__*/_jsx(TextField, {
        label: "Size",
        id: "outlined-size-normal",
        defaultValue: "Normal",
        variant: "outlined"
      })]
    })]
  });
};

export const Sizes = () => /*#__PURE__*/_jsx(SizesInternal, {});

const ColorInternal = () => {
  const classes = useStyles();
  return /*#__PURE__*/_jsxs("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/_jsxs("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/_jsx(TextField, {
        id: "standard-primary",
        label: "Standard primary",
        color: "primary"
      }), /*#__PURE__*/_jsx(TextField, {
        id: "filled-primary",
        label: "Filled primary",
        variant: "filled",
        color: "primary"
      }), /*#__PURE__*/_jsx(TextField, {
        id: "outlined-primary",
        label: "Outlined primary",
        variant: "outlined",
        color: "primary"
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/_jsx(TextField, {
        id: "standard-secondary",
        label: "Standard secondary",
        color: "secondary"
      }), /*#__PURE__*/_jsx(TextField, {
        id: "filled-secondary",
        label: "Filled secondary",
        variant: "filled",
        color: "secondary"
      }), /*#__PURE__*/_jsx(TextField, {
        id: "outlined-secondary",
        label: "Outlined secondary",
        variant: "outlined",
        color: "secondary"
      })]
    })]
  });
};

export const Color = () => /*#__PURE__*/_jsx(ColorInternal, {});

const WithIconInternal = () => {
  const classes = useStyles();
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsxs(FormControl, {
      className: classes.margin,
      children: [/*#__PURE__*/_jsx(InputLabel, {
        htmlFor: "input-with-icon-adornment",
        children: "With a start adornment"
      }), /*#__PURE__*/_jsx(Input, {
        id: "input-with-icon-adornment",
        startAdornment: /*#__PURE__*/_jsx(InputAdornment, {
          position: "start",
          children: /*#__PURE__*/_jsx(AccountCircle, {})
        })
      })]
    }), /*#__PURE__*/_jsx(TextField, {
      className: classes.margin,
      id: "input-with-icon-textfield",
      label: "TextField",
      InputProps: {
        startAdornment: /*#__PURE__*/_jsx(InputAdornment, {
          position: "start",
          children: /*#__PURE__*/_jsx(AccountCircle, {})
        })
      }
    }), /*#__PURE__*/_jsx("div", {
      className: classes.margin,
      children: /*#__PURE__*/_jsxs(Grid, {
        container: true,
        spacing: 1,
        alignItems: "flex-end",
        children: [/*#__PURE__*/_jsx(Grid, {
          item: true,
          children: /*#__PURE__*/_jsx(AccountCircle, {})
        }), /*#__PURE__*/_jsx(Grid, {
          item: true,
          children: /*#__PURE__*/_jsx(TextField, {
            id: "input-with-icon-grid",
            label: "With a grid"
          })
        })]
      })
    })]
  });
};

export const WithIcon = () => /*#__PURE__*/_jsx(WithIconInternal, {});

const SelectInternal = () => {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  return /*#__PURE__*/_jsxs("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/_jsxs("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/_jsx(TextField, {
        id: "standard-select-currency",
        select: true,
        label: "Select",
        value: currency,
        onChange: handleChange,
        helperText: "Please select your currency",
        children: currencies.map(option => /*#__PURE__*/_jsx(MenuItem, {
          value: option.value,
          children: option.label
        }, option.value))
      }), /*#__PURE__*/_jsx(TextField, {
        id: "standard-select-currency-native",
        select: true,
        label: "Native select",
        value: currency,
        onChange: handleChange,
        SelectProps: {
          native: true
        },
        helperText: "Please select your currency",
        children: currencies.map(option => /*#__PURE__*/_jsx("option", {
          value: option.value,
          children: option.label
        }, option.value))
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/_jsx(TextField, {
        id: "filled-select-currency",
        select: true,
        label: "Select",
        value: currency,
        onChange: handleChange,
        helperText: "Please select your currency",
        variant: "filled",
        children: currencies.map(option => /*#__PURE__*/_jsx(MenuItem, {
          value: option.value,
          children: option.label
        }, option.value))
      }), /*#__PURE__*/_jsx(TextField, {
        id: "filled-select-currency-native",
        select: true,
        label: "Native select",
        value: currency,
        onChange: handleChange,
        SelectProps: {
          native: true
        },
        helperText: "Please select your currency",
        variant: "filled",
        children: currencies.map(option => /*#__PURE__*/_jsx("option", {
          value: option.value,
          children: option.label
        }, option.value))
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/_jsx(TextField, {
        id: "outlined-select-currency",
        select: true,
        label: "Select",
        value: currency,
        onChange: handleChange,
        helperText: "Please select your currency",
        variant: "outlined",
        children: currencies.map(option => /*#__PURE__*/_jsx(MenuItem, {
          value: option.value,
          children: option.label
        }, option.value))
      }), /*#__PURE__*/_jsx(TextField, {
        id: "outlined-select-currency-native",
        select: true,
        label: "Native select",
        value: currency,
        onChange: handleChange,
        SelectProps: {
          native: true
        },
        helperText: "Please select your currency",
        variant: "outlined",
        children: currencies.map(option => /*#__PURE__*/_jsx("option", {
          value: option.value,
          children: option.label
        }, option.value))
      })]
    })]
  });
};

export const Select = () => /*#__PURE__*/_jsx(SelectInternal, {});

const MultilineInternal = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return /*#__PURE__*/_jsxs("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/_jsxs("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/_jsx(TextField, {
        id: "standard-multiline-flexible",
        label: "Multiline",
        multiline: true,
        maxRows: 4,
        value: value,
        onChange: handleChange
      }), /*#__PURE__*/_jsx(TextField, {
        id: "standard-textarea",
        label: "Multiline Placeholder",
        placeholder: "Placeholder",
        multiline: true
      }), /*#__PURE__*/_jsx(TextField, {
        id: "standard-multiline-static",
        label: "Multiline",
        multiline: true,
        rows: 4,
        defaultValue: "Default Value"
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/_jsx(TextField, {
        id: "filled-multiline-flexible",
        label: "Multiline",
        multiline: true,
        maxRows: 4,
        value: value,
        onChange: handleChange,
        variant: "filled"
      }), /*#__PURE__*/_jsx(TextField, {
        id: "filled-textarea",
        label: "Multiline Placeholder",
        placeholder: "Placeholder",
        multiline: true,
        variant: "filled"
      }), /*#__PURE__*/_jsx(TextField, {
        id: "filled-multiline-static",
        label: "Multiline",
        multiline: true,
        rows: 4,
        defaultValue: "Default Value",
        variant: "filled"
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/_jsx(TextField, {
        id: "outlined-multiline-flexible",
        label: "Multiline",
        multiline: true,
        maxRows: 4,
        value: value,
        onChange: handleChange,
        variant: "outlined"
      }), /*#__PURE__*/_jsx(TextField, {
        id: "outlined-textarea",
        label: "Multiline Placeholder",
        placeholder: "Placeholder",
        multiline: true,
        variant: "outlined"
      }), /*#__PURE__*/_jsx(TextField, {
        id: "outlined-multiline-static",
        label: "Multiline",
        multiline: true,
        rows: 4,
        defaultValue: "Default Value",
        variant: "outlined"
      })]
    })]
  });
};

export const Multiline = () => /*#__PURE__*/_jsx(MultilineInternal, {});