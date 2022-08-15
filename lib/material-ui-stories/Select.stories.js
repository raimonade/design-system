import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme } from '@mui/material/styles';
import FormHelperText from '@mui/material/FormHelperText';
import ListSubheader from '@mui/material/ListSubheader';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const useStyles = makeStyles(theme => createStyles({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  },
  wrapper: {
    display: 'flex',
    width: '100%'
  }
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
const names = ['Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard', 'Omar Alexander', 'Carlos Abbott', 'Miriam Wagner', 'Bradley Wilkerson', 'Virginia Andrews', 'Kelly Snyder'];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
  };
}

export default {
  title: 'Material UI/Select',
  component: Select
};

const SimpleSelectInternal = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = event => {
    setAge(event.target.value);
  };

  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsxs("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/_jsxs(FormControl, {
        className: classes.formControl,
        children: [/*#__PURE__*/_jsx(InputLabel, {
          id: "demo-simple-select-label",
          children: "Age"
        }), /*#__PURE__*/_jsxs(Select, {
          labelId: "demo-simple-select-label",
          id: "demo-simple-select",
          value: age,
          onChange: handleChange,
          children: [/*#__PURE__*/_jsx(MenuItem, {
            value: 10,
            children: "Ten"
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 20,
            children: "Twenty"
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 30,
            children: "Thirty"
          })]
        })]
      }), /*#__PURE__*/_jsxs(FormControl, {
        className: classes.formControl,
        children: [/*#__PURE__*/_jsx(InputLabel, {
          id: "demo-simple-select-helper-label",
          children: "Age"
        }), /*#__PURE__*/_jsxs(Select, {
          labelId: "demo-simple-select-helper-label",
          id: "demo-simple-select-helper",
          value: age,
          onChange: handleChange,
          children: [/*#__PURE__*/_jsx(MenuItem, {
            value: "",
            children: /*#__PURE__*/_jsx("em", {
              children: "None"
            })
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 10,
            children: "Ten"
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 20,
            children: "Twenty"
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 30,
            children: "Thirty"
          })]
        }), /*#__PURE__*/_jsx(FormHelperText, {
          children: "Some important helper text"
        })]
      }), /*#__PURE__*/_jsxs(FormControl, {
        className: classes.formControl,
        children: [/*#__PURE__*/_jsxs(Select, {
          value: age,
          onChange: handleChange,
          displayEmpty: true,
          className: classes.selectEmpty,
          inputProps: {
            'aria-label': 'Without label'
          },
          children: [/*#__PURE__*/_jsx(MenuItem, {
            value: "",
            children: /*#__PURE__*/_jsx("em", {
              children: "None"
            })
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 10,
            children: "Ten"
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 20,
            children: "Twenty"
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 30,
            children: "Thirty"
          })]
        }), /*#__PURE__*/_jsx(FormHelperText, {
          children: "Without label"
        })]
      }), /*#__PURE__*/_jsxs(FormControl, {
        className: classes.formControl,
        children: [/*#__PURE__*/_jsx(InputLabel, {
          shrink: true,
          id: "demo-simple-select-placeholder-label-label",
          children: "Age"
        }), /*#__PURE__*/_jsxs(Select, {
          labelId: "demo-simple-select-placeholder-label-label",
          id: "demo-simple-select-placeholder-label",
          value: age,
          onChange: handleChange,
          displayEmpty: true,
          className: classes.selectEmpty,
          children: [/*#__PURE__*/_jsx(MenuItem, {
            value: "",
            children: /*#__PURE__*/_jsx("em", {
              children: "None"
            })
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 10,
            children: "Ten"
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 20,
            children: "Twenty"
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 30,
            children: "Thirty"
          })]
        }), /*#__PURE__*/_jsx(FormHelperText, {
          children: "Label + placeholder"
        })]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/_jsxs(FormControl, {
        className: classes.formControl,
        disabled: true,
        children: [/*#__PURE__*/_jsx(InputLabel, {
          id: "demo-simple-select-disabled-label",
          children: "Name"
        }), /*#__PURE__*/_jsxs(Select, {
          labelId: "demo-simple-select-disabled-label",
          id: "demo-simple-select-disabled",
          value: age,
          onChange: handleChange,
          children: [/*#__PURE__*/_jsx(MenuItem, {
            value: "",
            children: /*#__PURE__*/_jsx("em", {
              children: "None"
            })
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 10,
            children: "Ten"
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 20,
            children: "Twenty"
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 30,
            children: "Thirty"
          })]
        }), /*#__PURE__*/_jsx(FormHelperText, {
          children: "Disabled"
        })]
      }), /*#__PURE__*/_jsxs(FormControl, {
        className: classes.formControl,
        error: true,
        children: [/*#__PURE__*/_jsx(InputLabel, {
          id: "demo-simple-select-error-label",
          children: "Name"
        }), /*#__PURE__*/_jsxs(Select, {
          labelId: "demo-simple-select-error-label",
          id: "demo-simple-select-error",
          value: age,
          onChange: handleChange,
          renderValue: value => `⚠️  - ${value}`,
          children: [/*#__PURE__*/_jsx(MenuItem, {
            value: "",
            children: /*#__PURE__*/_jsx("em", {
              children: "None"
            })
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 10,
            children: "Ten"
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 20,
            children: "Twenty"
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 30,
            children: "Thirty"
          })]
        }), /*#__PURE__*/_jsx(FormHelperText, {
          children: "Error"
        })]
      }), /*#__PURE__*/_jsxs(FormControl, {
        className: classes.formControl,
        children: [/*#__PURE__*/_jsx(InputLabel, {
          id: "demo-simple-select-readonly-label",
          children: "Name"
        }), /*#__PURE__*/_jsxs(Select, {
          labelId: "demo-simple-select-readonly-label",
          id: "demo-simple-select-readonly",
          value: age,
          onChange: handleChange,
          inputProps: {
            readOnly: true
          },
          children: [/*#__PURE__*/_jsx(MenuItem, {
            value: "",
            children: /*#__PURE__*/_jsx("em", {
              children: "None"
            })
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 10,
            children: "Ten"
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 20,
            children: "Twenty"
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 30,
            children: "Thirty"
          })]
        }), /*#__PURE__*/_jsx(FormHelperText, {
          children: "Read only"
        })]
      }), /*#__PURE__*/_jsxs(FormControl, {
        className: classes.formControl,
        children: [/*#__PURE__*/_jsx(InputLabel, {
          id: "demo-simple-select-autowidth-label",
          children: "Age"
        }), /*#__PURE__*/_jsxs(Select, {
          labelId: "demo-simple-select-autowidth-label",
          id: "demo-simple-select-autowidth",
          value: age,
          onChange: handleChange,
          autoWidth: true,
          children: [/*#__PURE__*/_jsx(MenuItem, {
            value: "",
            children: /*#__PURE__*/_jsx("em", {
              children: "None"
            })
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 10,
            children: "Ten"
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 20,
            children: "Twenty"
          }), /*#__PURE__*/_jsx(MenuItem, {
            value: 30,
            children: "Thirty"
          })]
        }), /*#__PURE__*/_jsx(FormHelperText, {
          children: "Auto width"
        })]
      })]
    }), /*#__PURE__*/_jsxs(FormControl, {
      className: classes.formControl,
      children: [/*#__PURE__*/_jsxs(Select, {
        value: age,
        onChange: handleChange,
        displayEmpty: true,
        className: classes.selectEmpty,
        inputProps: {
          'aria-label': 'Without label'
        },
        children: [/*#__PURE__*/_jsx(MenuItem, {
          value: "",
          disabled: true,
          children: "Placeholder"
        }), /*#__PURE__*/_jsx(MenuItem, {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/_jsx(MenuItem, {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/_jsx(MenuItem, {
          value: 30,
          children: "Thirty"
        })]
      }), /*#__PURE__*/_jsx(FormHelperText, {
        children: "Placeholder"
      })]
    }), /*#__PURE__*/_jsxs(FormControl, {
      required: true,
      className: classes.formControl,
      children: [/*#__PURE__*/_jsx(InputLabel, {
        id: "demo-simple-select-required-label",
        children: "Age"
      }), /*#__PURE__*/_jsxs(Select, {
        labelId: "demo-simple-select-required-label",
        id: "demo-simple-select-required",
        value: age,
        onChange: handleChange,
        className: classes.selectEmpty,
        children: [/*#__PURE__*/_jsx(MenuItem, {
          value: "",
          children: /*#__PURE__*/_jsx("em", {
            children: "None"
          })
        }), /*#__PURE__*/_jsx(MenuItem, {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/_jsx(MenuItem, {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/_jsx(MenuItem, {
          value: 30,
          children: "Thirty"
        })]
      }), /*#__PURE__*/_jsx(FormHelperText, {
        children: "Required"
      })]
    }), /*#__PURE__*/_jsxs(FormControl, {
      variant: "outlined",
      className: classes.formControl,
      children: [/*#__PURE__*/_jsx(InputLabel, {
        id: "demo-simple-select-outlined-label",
        children: "Age"
      }), /*#__PURE__*/_jsxs(Select, {
        labelId: "demo-simple-select-outlined-label",
        id: "demo-simple-select-outlined",
        value: age,
        onChange: handleChange,
        label: "Age",
        children: [/*#__PURE__*/_jsx(MenuItem, {
          value: "",
          children: /*#__PURE__*/_jsx("em", {
            children: "None"
          })
        }), /*#__PURE__*/_jsx(MenuItem, {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/_jsx(MenuItem, {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/_jsx(MenuItem, {
          value: 30,
          children: "Thirty"
        })]
      })]
    }), /*#__PURE__*/_jsxs(FormControl, {
      variant: "filled",
      className: classes.formControl,
      children: [/*#__PURE__*/_jsx(InputLabel, {
        id: "demo-simple-select-filled-label",
        children: "Age"
      }), /*#__PURE__*/_jsxs(Select, {
        labelId: "demo-simple-select-filled-label",
        id: "demo-simple-select-filled",
        value: age,
        onChange: handleChange,
        children: [/*#__PURE__*/_jsx(MenuItem, {
          value: "",
          children: /*#__PURE__*/_jsx("em", {
            children: "None"
          })
        }), /*#__PURE__*/_jsx(MenuItem, {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/_jsx(MenuItem, {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/_jsx(MenuItem, {
          value: 30,
          children: "Thirty"
        })]
      })]
    })]
  });
};

export const SimpleSelect = () => /*#__PURE__*/_jsx(SimpleSelectInternal, {});

const MultipleSelectInternal = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = event => {
    setPersonName(event.target.value);
  };

  const handleChangeMultiple = event => {
    const {
      options
    } = event.target;
    const value = [];

    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    setPersonName(value);
  };

  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsxs("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/_jsxs(FormControl, {
        className: classes.formControl,
        children: [/*#__PURE__*/_jsx(InputLabel, {
          id: "demo-mutiple-name-label",
          children: "Name"
        }), /*#__PURE__*/_jsx(Select, {
          labelId: "demo-mutiple-name-label",
          id: "demo-mutiple-name",
          multiple: true,
          value: personName,
          onChange: handleChange,
          input: /*#__PURE__*/_jsx(Input, {}),
          MenuProps: MenuProps,
          children: names.map(name => /*#__PURE__*/_jsx(MenuItem, {
            value: name,
            style: getStyles(name, personName, theme),
            children: name
          }, name))
        })]
      }), /*#__PURE__*/_jsxs(FormControl, {
        className: classes.formControl,
        children: [/*#__PURE__*/_jsx(InputLabel, {
          id: "demo-mutiple-checkbox-label",
          children: "Tag"
        }), /*#__PURE__*/_jsx(Select, {
          labelId: "demo-mutiple-checkbox-label",
          id: "demo-mutiple-checkbox",
          multiple: true,
          value: personName,
          onChange: handleChange,
          input: /*#__PURE__*/_jsx(Input, {}),
          renderValue: selected => selected.join(', '),
          MenuProps: MenuProps,
          children: names.map(name => /*#__PURE__*/_jsxs(MenuItem, {
            value: name,
            children: [/*#__PURE__*/_jsx(Checkbox, {
              checked: personName.indexOf(name) > -1
            }), /*#__PURE__*/_jsx(ListItemText, {
              primary: name
            })]
          }, name))
        })]
      })]
    }), /*#__PURE__*/_jsxs(FormControl, {
      className: classes.formControl,
      children: [/*#__PURE__*/_jsx(InputLabel, {
        id: "demo-mutiple-chip-label",
        children: "Chip"
      }), /*#__PURE__*/_jsx(Select, {
        labelId: "demo-mutiple-chip-label",
        id: "demo-mutiple-chip",
        multiple: true,
        value: personName,
        onChange: handleChange,
        input: /*#__PURE__*/_jsx(Input, {
          id: "select-multiple-chip"
        }),
        renderValue: selected => /*#__PURE__*/_jsx("div", {
          className: classes.chips,
          children: selected.map(value => /*#__PURE__*/_jsx(Chip, {
            label: value,
            className: classes.chip
          }, value))
        }),
        MenuProps: MenuProps,
        children: names.map(name => /*#__PURE__*/_jsx(MenuItem, {
          value: name,
          style: getStyles(name, personName, theme),
          children: name
        }, name))
      })]
    }), /*#__PURE__*/_jsx(FormControl, {
      className: clsx(classes.formControl, classes.noLabel),
      children: /*#__PURE__*/_jsxs(Select, {
        multiple: true,
        displayEmpty: true,
        value: personName,
        onChange: handleChange,
        input: /*#__PURE__*/_jsx(Input, {}),
        renderValue: selected => {
          if (selected.length === 0) {
            return /*#__PURE__*/_jsx("em", {
              children: "Placeholder"
            });
          }

          return selected.join(', ');
        },
        MenuProps: MenuProps,
        inputProps: {
          'aria-label': 'Without label'
        },
        children: [/*#__PURE__*/_jsx(MenuItem, {
          disabled: true,
          value: "",
          children: /*#__PURE__*/_jsx("em", {
            children: "Placeholder"
          })
        }), names.map(name => /*#__PURE__*/_jsx(MenuItem, {
          value: name,
          style: getStyles(name, personName, theme),
          children: name
        }, name))]
      })
    }), /*#__PURE__*/_jsx("div", {
      className: classes.wrapper,
      children: /*#__PURE__*/_jsxs(FormControl, {
        className: classes.formControl,
        children: [/*#__PURE__*/_jsx(InputLabel, {
          shrink: true,
          htmlFor: "select-multiple-native",
          children: "Native"
        }), /*#__PURE__*/_jsx(Select, {
          multiple: true,
          native: true,
          value: personName,
          onChange: handleChangeMultiple,
          inputProps: {
            id: 'select-multiple-native'
          },
          children: names.map(name => /*#__PURE__*/_jsx("option", {
            value: name,
            children: name
          }, name))
        })]
      })
    })]
  });
};

export const MultipleSelect = () => /*#__PURE__*/_jsx(MultipleSelectInternal, {});

const GroupedSelectInternal = () => {
  const classes = useStyles();
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsxs(FormControl, {
      className: classes.formControl,
      children: [/*#__PURE__*/_jsx(InputLabel, {
        htmlFor: "grouped-native-select",
        children: "Grouping"
      }), /*#__PURE__*/_jsxs(Select, {
        native: true,
        defaultValue: "",
        id: "grouped-native-select",
        children: [/*#__PURE__*/_jsx("option", {
          "aria-label": "None",
          value: ""
        }), /*#__PURE__*/_jsxs("optgroup", {
          label: "Category 1",
          children: [/*#__PURE__*/_jsx("option", {
            value: 1,
            children: "Option 1"
          }), /*#__PURE__*/_jsx("option", {
            value: 2,
            children: "Option 2"
          })]
        }), /*#__PURE__*/_jsxs("optgroup", {
          label: "Category 2",
          children: [/*#__PURE__*/_jsx("option", {
            value: 3,
            children: "Option 3"
          }), /*#__PURE__*/_jsx("option", {
            value: 4,
            children: "Option 4"
          })]
        })]
      })]
    }), /*#__PURE__*/_jsxs(FormControl, {
      className: classes.formControl,
      children: [/*#__PURE__*/_jsx(InputLabel, {
        htmlFor: "grouped-select",
        children: "Grouping"
      }), /*#__PURE__*/_jsxs(Select, {
        defaultValue: "",
        id: "grouped-select",
        children: [/*#__PURE__*/_jsx(MenuItem, {
          value: "",
          children: /*#__PURE__*/_jsx("em", {
            children: "None"
          })
        }), /*#__PURE__*/_jsx(ListSubheader, {
          children: "Category 1"
        }), /*#__PURE__*/_jsx(MenuItem, {
          value: 1,
          children: "Option 1"
        }), /*#__PURE__*/_jsx(MenuItem, {
          value: 2,
          children: "Option 2"
        }), /*#__PURE__*/_jsx(ListSubheader, {
          children: "Category 2"
        }), /*#__PURE__*/_jsx(MenuItem, {
          value: 3,
          children: "Option 3"
        }), /*#__PURE__*/_jsx(MenuItem, {
          value: 4,
          children: "Option 4"
        })]
      })]
    })]
  });
};

export const GroupedSelect = () => /*#__PURE__*/_jsx(GroupedSelectInternal, {});