import React from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { withStyles } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default {
  title: 'Material UI/Radio',
  component: Radio
};
const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600]
    }
  },
  checked: {}
})(props => /*#__PURE__*/_jsx(Radio, {
  color: "default",
  ...props
}));

const RadioButtonsInternal = () => {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx(Radio, {
      checked: selectedValue === 'a',
      onChange: handleChange,
      value: "a",
      name: "radio-button-demo",
      inputProps: {
        'aria-label': 'A'
      }
    }), /*#__PURE__*/_jsx(Radio, {
      checked: selectedValue === 'b',
      onChange: handleChange,
      value: "b",
      name: "radio-button-demo",
      inputProps: {
        'aria-label': 'B'
      }
    }), /*#__PURE__*/_jsx(GreenRadio, {
      checked: selectedValue === 'c',
      onChange: handleChange,
      value: "c",
      name: "radio-button-demo",
      inputProps: {
        'aria-label': 'C'
      }
    }), /*#__PURE__*/_jsx(Radio, {
      checked: selectedValue === 'd',
      onChange: handleChange,
      value: "d",
      color: "default",
      name: "radio-button-demo",
      inputProps: {
        'aria-label': 'D'
      }
    }), /*#__PURE__*/_jsx(Radio, {
      checked: selectedValue === 'e',
      onChange: handleChange,
      value: "e",
      color: "default",
      name: "radio-button-demo",
      inputProps: {
        'aria-label': 'E'
      },
      size: "small"
    })]
  });
};

export const RadioButtons = () => /*#__PURE__*/_jsx(RadioButtonsInternal, {});

const RadioButtonsGroupInternal = () => {
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return /*#__PURE__*/_jsxs(FormControl, {
    component: "fieldset",
    children: [/*#__PURE__*/_jsx(FormLabel, {
      component: "legend",
      children: "Gender"
    }), /*#__PURE__*/_jsxs(RadioGroup, {
      "aria-label": "gender",
      name: "gender1",
      value: value,
      onChange: handleChange,
      children: [/*#__PURE__*/_jsx(FormControlLabel, {
        value: "female",
        control: /*#__PURE__*/_jsx(Radio, {}),
        label: "Female"
      }), /*#__PURE__*/_jsx(FormControlLabel, {
        value: "male",
        control: /*#__PURE__*/_jsx(Radio, {}),
        label: "Male"
      }), /*#__PURE__*/_jsx(FormControlLabel, {
        value: "other",
        control: /*#__PURE__*/_jsx(Radio, {}),
        label: "Other"
      }), /*#__PURE__*/_jsx(FormControlLabel, {
        value: "disabled",
        disabled: true,
        control: /*#__PURE__*/_jsx(Radio, {}),
        label: "(Disabled option)"
      })]
    })]
  });
};

export const RadioButtonsGroup = () => /*#__PURE__*/_jsx(RadioButtonsGroupInternal, {});