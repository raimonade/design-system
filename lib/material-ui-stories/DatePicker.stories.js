import React from 'react';
import { createStyles, makeStyles } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'Material UI/DatePicker',
  component: TextField
};
const useStyles = makeStyles(theme => createStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const DatePickerInternal = () => {
  const classes = useStyles();
  return /*#__PURE__*/_jsx("form", {
    className: classes.container,
    noValidate: true,
    children: /*#__PURE__*/_jsx(TextField, {
      id: "date",
      label: "Birthday",
      type: "date",
      defaultValue: "2017-05-24",
      className: classes.textField,
      InputLabelProps: {
        shrink: true
      }
    })
  });
};

export const DatePicker = () => /*#__PURE__*/_jsx(DatePickerInternal, {});

const DateTimePickerInternal = () => {
  const classes = useStyles();
  return /*#__PURE__*/_jsx("form", {
    className: classes.container,
    noValidate: true,
    children: /*#__PURE__*/_jsx(TextField, {
      id: "datetime-local",
      label: "Next appointment",
      type: "datetime-local",
      defaultValue: "2017-05-24T10:30",
      className: classes.textField,
      InputLabelProps: {
        shrink: true
      }
    })
  });
};

export const DateTimePicker = () => /*#__PURE__*/_jsx(DateTimePickerInternal, {});