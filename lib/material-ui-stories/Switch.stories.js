import React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default {
  title: 'Material UI/Switch',
  component: Switch
};

const BasicSwitchesInternal = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });

  const handleChange = event => {
    setState({ ...state,
      [event.target.name]: event.target.checked
    });
  };

  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx(Switch, {
      checked: state.checkedA,
      onChange: handleChange,
      name: "checkedA",
      inputProps: {
        'aria-label': 'secondary checkbox'
      }
    }), /*#__PURE__*/_jsx(Switch, {
      checked: state.checkedB,
      onChange: handleChange,
      color: "primary",
      name: "checkedB",
      inputProps: {
        'aria-label': 'primary checkbox'
      }
    }), /*#__PURE__*/_jsx(Switch, {
      inputProps: {
        'aria-label': 'primary checkbox'
      }
    }), /*#__PURE__*/_jsx(Switch, {
      disabled: true,
      inputProps: {
        'aria-label': 'disabled checkbox'
      }
    }), /*#__PURE__*/_jsx(Switch, {
      disabled: true,
      checked: true,
      inputProps: {
        'aria-label': 'primary checkbox'
      }
    }), /*#__PURE__*/_jsx(Switch, {
      defaultChecked: true,
      color: "default",
      inputProps: {
        'aria-label': 'checkbox with default color'
      }
    })]
  });
};

export const BasicSwitches = () => /*#__PURE__*/_jsx(BasicSwitchesInternal, {});

const WithLabelsInternal = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });

  const handleChange = event => {
    setState({ ...state,
      [event.target.name]: event.target.checked
    });
  };

  return /*#__PURE__*/_jsxs(FormGroup, {
    row: true,
    children: [/*#__PURE__*/_jsx(FormControlLabel, {
      control: /*#__PURE__*/_jsx(Switch, {
        checked: state.checkedA,
        onChange: handleChange,
        name: "checkedA"
      }),
      label: "Secondary"
    }), /*#__PURE__*/_jsx(FormControlLabel, {
      control: /*#__PURE__*/_jsx(Switch, {
        checked: state.checkedB,
        onChange: handleChange,
        name: "checkedB",
        color: "primary"
      }),
      label: "Primary"
    }), /*#__PURE__*/_jsx(FormControlLabel, {
      control: /*#__PURE__*/_jsx(Switch, {}),
      label: "Uncontrolled"
    }), /*#__PURE__*/_jsx(FormControlLabel, {
      disabled: true,
      control: /*#__PURE__*/_jsx(Switch, {}),
      label: "Disabled"
    }), /*#__PURE__*/_jsx(FormControlLabel, {
      disabled: true,
      control: /*#__PURE__*/_jsx(Switch, {
        checked: true
      }),
      label: "Disabled"
    })]
  });
};

export const WithLabels = () => /*#__PURE__*/_jsx(WithLabelsInternal, {});

const SizesInternal = () => {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked(prev => !prev);
  };

  return /*#__PURE__*/_jsxs(FormGroup, {
    children: [/*#__PURE__*/_jsx(FormControlLabel, {
      control: /*#__PURE__*/_jsx(Switch, {
        size: "small",
        checked: checked,
        onChange: toggleChecked
      }),
      label: "Small"
    }), /*#__PURE__*/_jsx(FormControlLabel, {
      control: /*#__PURE__*/_jsx(Switch, {
        checked: checked,
        onChange: toggleChecked
      }),
      label: "Normal"
    })]
  });
};

export const Sizes = () => /*#__PURE__*/_jsx(SizesInternal, {});