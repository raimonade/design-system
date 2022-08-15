import React from 'react';
import { withStyles, makeStyles, createStyles } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default {
  title: 'Material UI/Checkbox',
  component: Checkbox
};
const useStyles = makeStyles(theme => createStyles({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600]
    }
  },
  checked: {}
})(props => /*#__PURE__*/_jsx(Checkbox, {
  color: "default",
  ...props
}));

const BasicCheckboxesInternal = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx(Checkbox, {
      checked: checked,
      onChange: handleChange,
      inputProps: {
        'aria-label': 'primary checkbox'
      }
    }), /*#__PURE__*/_jsx(Checkbox, {
      defaultChecked: true,
      color: "primary",
      inputProps: {
        'aria-label': 'secondary checkbox'
      }
    }), /*#__PURE__*/_jsx(Checkbox, {
      inputProps: {
        'aria-label': 'uncontrolled-checkbox'
      }
    }), /*#__PURE__*/_jsx(Checkbox, {
      disabled: true,
      inputProps: {
        'aria-label': 'disabled checkbox'
      }
    }), /*#__PURE__*/_jsx(Checkbox, {
      disabled: true,
      checked: true,
      inputProps: {
        'aria-label': 'disabled checked checkbox'
      }
    }), /*#__PURE__*/_jsx(Checkbox, {
      defaultChecked: true,
      indeterminate: true,
      inputProps: {
        'aria-label': 'indeterminate checkbox'
      }
    }), /*#__PURE__*/_jsx(Checkbox, {
      defaultChecked: true,
      color: "default",
      inputProps: {
        'aria-label': 'checkbox with default color'
      }
    }), /*#__PURE__*/_jsx(Checkbox, {
      defaultChecked: true,
      size: "small",
      inputProps: {
        'aria-label': 'checkbox with small size'
      }
    })]
  });
};

export const BasicCheckboxes = () => /*#__PURE__*/_jsx(BasicCheckboxesInternal, {});

const CheckboxWithFormControlLabelInternal = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true
  });

  const handleChange = event => {
    setState({ ...state,
      [event.target.name]: event.target.checked
    });
  };

  return /*#__PURE__*/_jsx("div", {
    children: /*#__PURE__*/_jsxs(FormGroup, {
      row: true,
      children: [/*#__PURE__*/_jsx(FormControlLabel, {
        control: /*#__PURE__*/_jsx(Checkbox, {
          checked: state.checkedA,
          onChange: handleChange,
          name: "checkedA"
        }),
        label: "Secondary"
      }), /*#__PURE__*/_jsx(FormControlLabel, {
        control: /*#__PURE__*/_jsx(Checkbox, {
          checked: state.checkedB,
          onChange: handleChange,
          name: "checkedB",
          color: "primary"
        }),
        label: "Primary"
      }), /*#__PURE__*/_jsx(FormControlLabel, {
        control: /*#__PURE__*/_jsx(Checkbox, {
          name: "checkedC"
        }),
        label: "Uncontrolled"
      }), /*#__PURE__*/_jsx(FormControlLabel, {
        disabled: true,
        control: /*#__PURE__*/_jsx(Checkbox, {
          name: "checkedD"
        }),
        label: "Disabled"
      }), /*#__PURE__*/_jsx(FormControlLabel, {
        disabled: true,
        control: /*#__PURE__*/_jsx(Checkbox, {
          checked: true,
          name: "checkedE"
        }),
        label: "Disabled"
      }), /*#__PURE__*/_jsx(FormControlLabel, {
        control: /*#__PURE__*/_jsx(Checkbox, {
          checked: state.checkedF,
          onChange: handleChange,
          name: "checkedF",
          indeterminate: true
        }),
        label: "Indeterminate"
      }), /*#__PURE__*/_jsx(FormControlLabel, {
        control: /*#__PURE__*/_jsx(GreenCheckbox, {
          checked: state.checkedG,
          onChange: handleChange,
          name: "checkedG"
        }),
        label: "Custom color"
      }), /*#__PURE__*/_jsx(FormControlLabel, {
        control: /*#__PURE__*/_jsx(Checkbox, {
          icon: /*#__PURE__*/_jsx(FavoriteBorder, {}),
          checkedIcon: /*#__PURE__*/_jsx(Favorite, {}),
          name: "checkedH"
        }),
        label: "Custom icon"
      }), /*#__PURE__*/_jsx(FormControlLabel, {
        control: /*#__PURE__*/_jsx(Checkbox, {
          icon: /*#__PURE__*/_jsx(CheckBoxOutlineBlankIcon, {
            fontSize: "small"
          }),
          checkedIcon: /*#__PURE__*/_jsx(CheckBoxIcon, {
            fontSize: "small"
          }),
          name: "checkedI"
        }),
        label: "Custom size"
      })]
    })
  });
};

export const CheckboxWithFormControlLabel = () => /*#__PURE__*/_jsx(CheckboxWithFormControlLabelInternal, {});

const CheckboxesGrouplInternal = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false
  });

  const handleChange = event => {
    setState({ ...state,
      [event.target.name]: event.target.checked
    });
  };

  const {
    gilad,
    jason,
    antoine
  } = state;
  const error = [gilad, jason, antoine].filter(v => v).length !== 2;
  return /*#__PURE__*/_jsxs("div", {
    className: classes.root,
    children: [/*#__PURE__*/_jsxs(FormControl, {
      component: "fieldset",
      className: classes.formControl,
      children: [/*#__PURE__*/_jsx(FormLabel, {
        component: "legend",
        children: "Assign responsibility"
      }), /*#__PURE__*/_jsxs(FormGroup, {
        children: [/*#__PURE__*/_jsx(FormControlLabel, {
          control: /*#__PURE__*/_jsx(Checkbox, {
            checked: gilad,
            onChange: handleChange,
            name: "gilad"
          }),
          label: "Gilad Gray"
        }), /*#__PURE__*/_jsx(FormControlLabel, {
          control: /*#__PURE__*/_jsx(Checkbox, {
            checked: jason,
            onChange: handleChange,
            name: "jason"
          }),
          label: "Jason Killian"
        }), /*#__PURE__*/_jsx(FormControlLabel, {
          control: /*#__PURE__*/_jsx(Checkbox, {
            checked: antoine,
            onChange: handleChange,
            name: "antoine"
          }),
          label: "Antoine Llorca"
        })]
      }), /*#__PURE__*/_jsx(FormHelperText, {
        children: "Be careful"
      })]
    }), /*#__PURE__*/_jsxs(FormControl, {
      required: true,
      error: error,
      component: "fieldset",
      className: classes.formControl,
      children: [/*#__PURE__*/_jsx(FormLabel, {
        component: "legend",
        children: "Pick two"
      }), /*#__PURE__*/_jsxs(FormGroup, {
        children: [/*#__PURE__*/_jsx(FormControlLabel, {
          control: /*#__PURE__*/_jsx(Checkbox, {
            checked: gilad,
            onChange: handleChange,
            name: "gilad"
          }),
          label: "Gilad Gray"
        }), /*#__PURE__*/_jsx(FormControlLabel, {
          control: /*#__PURE__*/_jsx(Checkbox, {
            checked: jason,
            onChange: handleChange,
            name: "jason"
          }),
          label: "Jason Killian"
        }), /*#__PURE__*/_jsx(FormControlLabel, {
          control: /*#__PURE__*/_jsx(Checkbox, {
            checked: antoine,
            onChange: handleChange,
            name: "antoine"
          }),
          label: "Antoine Llorca"
        })]
      }), /*#__PURE__*/_jsx(FormHelperText, {
        children: "You can display an error"
      })]
    })]
  });
};

export const CheckboxesGroup = () => /*#__PURE__*/_jsx(CheckboxesGrouplInternal, {});

const FormControlLabelPositionInternal = () => {
  return /*#__PURE__*/_jsxs(FormControl, {
    component: "fieldset",
    children: [/*#__PURE__*/_jsx(FormLabel, {
      component: "legend",
      children: "Label Placement"
    }), /*#__PURE__*/_jsxs(FormGroup, {
      "aria-label": "position",
      row: true,
      children: [/*#__PURE__*/_jsx(FormControlLabel, {
        value: "top",
        control: /*#__PURE__*/_jsx(Checkbox, {
          color: "primary"
        }),
        label: "Top",
        labelPlacement: "top"
      }), /*#__PURE__*/_jsx(FormControlLabel, {
        value: "start",
        control: /*#__PURE__*/_jsx(Checkbox, {
          color: "primary"
        }),
        label: "Start",
        labelPlacement: "start"
      }), /*#__PURE__*/_jsx(FormControlLabel, {
        value: "bottom",
        control: /*#__PURE__*/_jsx(Checkbox, {
          color: "primary"
        }),
        label: "Bottom",
        labelPlacement: "bottom"
      }), /*#__PURE__*/_jsx(FormControlLabel, {
        value: "end",
        control: /*#__PURE__*/_jsx(Checkbox, {
          color: "primary"
        }),
        label: "End",
        labelPlacement: "end"
      })]
    })]
  });
};

export const FormControlLabelPosition = () => /*#__PURE__*/_jsx(FormControlLabelPositionInternal, {});