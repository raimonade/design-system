import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PhoneIcon from '@mui/icons-material/Phone';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default {
  title: 'Material UI/Tabs',
  component: Tabs
};

function TabPanel(props) {
  const {
    children,
    value,
    index,
    ...other
  } = props;
  return /*#__PURE__*/_jsx("div", {
    role: "tabpanel",
    hidden: value !== index,
    id: `simple-tabpanel-${index}`,
    "aria-labelledby": `simple-tab-${index}`,
    ...other,
    children: value === index && /*#__PURE__*/_jsx(Box, {
      p: 3,
      children: /*#__PURE__*/_jsx(Typography, {
        children: children
      })
    })
  });
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => {
  return {
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper
    },
    iconRoot: {
      flexGrow: 1,
      maxWidth: 500
    },
    verticalRoot: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  };
});

const SimpleTabsInternal = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return /*#__PURE__*/_jsxs("div", {
    className: classes.root,
    children: [/*#__PURE__*/_jsx(AppBar, {
      position: "static",
      children: /*#__PURE__*/_jsxs(Tabs, {
        value: value,
        onChange: handleChange,
        "aria-label": "simple tabs example",
        children: [/*#__PURE__*/_jsx(Tab, {
          label: "Item One",
          ...a11yProps(0)
        }), /*#__PURE__*/_jsx(Tab, {
          label: "Item Two",
          ...a11yProps(1)
        }), /*#__PURE__*/_jsx(Tab, {
          label: "Item Three",
          ...a11yProps(2)
        })]
      })
    }), /*#__PURE__*/_jsx(TabPanel, {
      value: value,
      index: 0,
      children: "Item One"
    }), /*#__PURE__*/_jsx(TabPanel, {
      value: value,
      index: 1,
      children: "Item Two"
    }), /*#__PURE__*/_jsx(TabPanel, {
      value: value,
      index: 2,
      children: "Item Three"
    })]
  });
};

export const SimpleTabs = () => /*#__PURE__*/_jsx(SimpleTabsInternal, {});

const DisabledTabsInternal = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return /*#__PURE__*/_jsx(Paper, {
    square: true,
    children: /*#__PURE__*/_jsxs(Tabs, {
      value: value,
      indicatorColor: "primary",
      textColor: "primary",
      onChange: handleChange,
      "aria-label": "disabled tabs example",
      children: [/*#__PURE__*/_jsx(Tab, {
        label: "Active"
      }), /*#__PURE__*/_jsx(Tab, {
        label: "Disabled",
        disabled: true
      }), /*#__PURE__*/_jsx(Tab, {
        label: "Active"
      })]
    })
  });
};

export const DisabledTabs = () => /*#__PURE__*/_jsx(DisabledTabsInternal, {});

const ScrollableTabsInternal = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return /*#__PURE__*/_jsxs("div", {
    className: classes.root,
    children: [/*#__PURE__*/_jsx(AppBar, {
      position: "static",
      children: /*#__PURE__*/_jsxs(Tabs, {
        value: value,
        onChange: handleChange,
        variant: "scrollable",
        scrollButtons: "auto",
        "aria-label": "scrollable auto tabs example",
        children: [/*#__PURE__*/_jsx(Tab, {
          label: "Item One",
          ...a11yProps(0)
        }), /*#__PURE__*/_jsx(Tab, {
          label: "Item Two",
          ...a11yProps(1)
        }), /*#__PURE__*/_jsx(Tab, {
          label: "Item Three",
          ...a11yProps(2)
        }), /*#__PURE__*/_jsx(Tab, {
          label: "Item Four",
          ...a11yProps(3)
        }), /*#__PURE__*/_jsx(Tab, {
          label: "Item Five",
          ...a11yProps(4)
        }), /*#__PURE__*/_jsx(Tab, {
          label: "Item Six",
          ...a11yProps(5)
        }), /*#__PURE__*/_jsx(Tab, {
          label: "Item Seven",
          ...a11yProps(6)
        })]
      })
    }), /*#__PURE__*/_jsx(TabPanel, {
      value: value,
      index: 0,
      children: "Item One"
    }), /*#__PURE__*/_jsx(TabPanel, {
      value: value,
      index: 1,
      children: "Item Two"
    }), /*#__PURE__*/_jsx(TabPanel, {
      value: value,
      index: 2,
      children: "Item Three"
    }), /*#__PURE__*/_jsx(TabPanel, {
      value: value,
      index: 3,
      children: "Item Four"
    }), /*#__PURE__*/_jsx(TabPanel, {
      value: value,
      index: 4,
      children: "Item Five"
    }), /*#__PURE__*/_jsx(TabPanel, {
      value: value,
      index: 5,
      children: "Item Six"
    }), /*#__PURE__*/_jsx(TabPanel, {
      value: value,
      index: 6,
      children: "Item Seven"
    })]
  });
};

export const ScrollableTabs = () => /*#__PURE__*/_jsx(ScrollableTabsInternal, {});

const IconTabsInternal = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return /*#__PURE__*/_jsx(Paper, {
    square: true,
    className: classes.iconRoot,
    children: /*#__PURE__*/_jsxs(Tabs, {
      value: value,
      onChange: handleChange,
      variant: "fullWidth",
      indicatorColor: "primary",
      textColor: "primary",
      "aria-label": "icon tabs example",
      children: [/*#__PURE__*/_jsx(Tab, {
        icon: /*#__PURE__*/_jsx(PhoneIcon, {}),
        "aria-label": "phone"
      }), /*#__PURE__*/_jsx(Tab, {
        icon: /*#__PURE__*/_jsx(FavoriteIcon, {}),
        "aria-label": "favorite"
      }), /*#__PURE__*/_jsx(Tab, {
        icon: /*#__PURE__*/_jsx(PersonPinIcon, {}),
        "aria-label": "person"
      })]
    })
  });
};

export const IconTabs = () => /*#__PURE__*/_jsx(IconTabsInternal, {});

const IconLabelTabsInternal = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return /*#__PURE__*/_jsx(Paper, {
    square: true,
    className: classes.iconRoot,
    children: /*#__PURE__*/_jsxs(Tabs, {
      value: value,
      onChange: handleChange,
      variant: "fullWidth",
      indicatorColor: "secondary",
      textColor: "secondary",
      "aria-label": "icon label tabs example",
      children: [/*#__PURE__*/_jsx(Tab, {
        icon: /*#__PURE__*/_jsx(PhoneIcon, {}),
        label: "RECENTS"
      }), /*#__PURE__*/_jsx(Tab, {
        icon: /*#__PURE__*/_jsx(FavoriteIcon, {}),
        label: "FAVORITES"
      }), /*#__PURE__*/_jsx(Tab, {
        icon: /*#__PURE__*/_jsx(PersonPinIcon, {}),
        label: "NEARBY"
      })]
    })
  });
};

export const IconLabelTabs = () => /*#__PURE__*/_jsx(IconLabelTabsInternal, {});

const VerticalTabsInternal = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return /*#__PURE__*/_jsxs("div", {
    className: classes.verticalRoot,
    children: [/*#__PURE__*/_jsxs(Tabs, {
      orientation: "vertical",
      variant: "scrollable",
      value: value,
      onChange: handleChange,
      "aria-label": "Vertical tabs example",
      className: classes.tabs,
      children: [/*#__PURE__*/_jsx(Tab, {
        label: "Item One",
        ...a11yProps(0)
      }), /*#__PURE__*/_jsx(Tab, {
        label: "Item Two",
        ...a11yProps(1)
      }), /*#__PURE__*/_jsx(Tab, {
        label: "Item Three",
        ...a11yProps(2)
      }), /*#__PURE__*/_jsx(Tab, {
        label: "Item Four",
        ...a11yProps(3)
      }), /*#__PURE__*/_jsx(Tab, {
        label: "Item Five",
        ...a11yProps(4)
      }), /*#__PURE__*/_jsx(Tab, {
        label: "Item Six",
        ...a11yProps(5)
      }), /*#__PURE__*/_jsx(Tab, {
        label: "Item Seven",
        ...a11yProps(6)
      })]
    }), /*#__PURE__*/_jsx(TabPanel, {
      value: value,
      index: 0,
      children: "Item One"
    }), /*#__PURE__*/_jsx(TabPanel, {
      value: value,
      index: 1,
      children: "Item Two"
    }), /*#__PURE__*/_jsx(TabPanel, {
      value: value,
      index: 2,
      children: "Item Three"
    }), /*#__PURE__*/_jsx(TabPanel, {
      value: value,
      index: 3,
      children: "Item Four"
    }), /*#__PURE__*/_jsx(TabPanel, {
      value: value,
      index: 4,
      children: "Item Five"
    }), /*#__PURE__*/_jsx(TabPanel, {
      value: value,
      index: 5,
      children: "Item Six"
    }), /*#__PURE__*/_jsx(TabPanel, {
      value: value,
      index: 6,
      children: "Item Seven"
    })]
  });
};

export const VerticalTabs = () => /*#__PURE__*/_jsx(VerticalTabsInternal, {});