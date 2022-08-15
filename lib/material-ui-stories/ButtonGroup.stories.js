import React from 'react';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];
export default {
  title: 'Material UI/ButtonGroup',
  component: ButtonGroup
};

const BasicButtonGroupInternal = () => /*#__PURE__*/_jsxs(ButtonsWrapper, {
  children: [/*#__PURE__*/_jsxs(ButtonGroup, {
    color: "primary",
    "aria-label": "outlined primary button group",
    children: [/*#__PURE__*/_jsx(Button, {
      children: "One"
    }), /*#__PURE__*/_jsx(Button, {
      children: "Two"
    }), /*#__PURE__*/_jsx(Button, {
      children: "Three"
    })]
  }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsxs(ButtonGroup, {
    variant: "contained",
    color: "primary",
    "aria-label": "contained primary button group",
    children: [/*#__PURE__*/_jsx(Button, {
      children: "One"
    }), /*#__PURE__*/_jsx(Button, {
      children: "Two"
    }), /*#__PURE__*/_jsx(Button, {
      children: "Three"
    })]
  }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsxs(ButtonGroup, {
    variant: "text",
    color: "primary",
    "aria-label": "text primary button group",
    children: [/*#__PURE__*/_jsx(Button, {
      children: "One"
    }), /*#__PURE__*/_jsx(Button, {
      children: "Two"
    }), /*#__PURE__*/_jsx(Button, {
      children: "Three"
    })]
  })]
});

export const BasicButtonGroup = () => /*#__PURE__*/_jsx(BasicButtonGroupInternal, {});

const SizesAndColorsInternal = () => /*#__PURE__*/_jsxs(ButtonsWrapper, {
  children: [/*#__PURE__*/_jsxs(ButtonGroup, {
    size: "small",
    "aria-label": "small outlined button group",
    children: [/*#__PURE__*/_jsx(Button, {
      children: "One"
    }), /*#__PURE__*/_jsx(Button, {
      children: "Two"
    }), /*#__PURE__*/_jsx(Button, {
      children: "Three"
    })]
  }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsxs(ButtonGroup, {
    color: "secondary",
    "aria-label": "outlined secondary button group",
    children: [/*#__PURE__*/_jsx(Button, {
      children: "One"
    }), /*#__PURE__*/_jsx(Button, {
      children: "Two"
    }), /*#__PURE__*/_jsx(Button, {
      children: "Three"
    })]
  }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsxs(ButtonGroup, {
    size: "large",
    color: "primary",
    "aria-label": "large outlined primary button group",
    children: [/*#__PURE__*/_jsx(Button, {
      children: "One"
    }), /*#__PURE__*/_jsx(Button, {
      children: "Two"
    }), /*#__PURE__*/_jsx(Button, {
      children: "Three"
    })]
  })]
});

export const SizesAndColors = () => /*#__PURE__*/_jsx(SizesAndColorsInternal, {});

const VerticalGroupInternal = () => /*#__PURE__*/_jsxs(ButtonsWrapper, {
  children: [/*#__PURE__*/_jsxs(ButtonGroup, {
    orientation: "vertical",
    color: "primary",
    "aria-label": "vertical outlined primary button group",
    children: [/*#__PURE__*/_jsx(Button, {
      children: "One"
    }), /*#__PURE__*/_jsx(Button, {
      children: "Two"
    }), /*#__PURE__*/_jsx(Button, {
      children: "Three"
    })]
  }), /*#__PURE__*/_jsxs(ButtonGroup, {
    orientation: "vertical",
    color: "primary",
    "aria-label": "vertical contained primary button group",
    variant: "contained",
    children: [/*#__PURE__*/_jsx(Button, {
      children: "One"
    }), /*#__PURE__*/_jsx(Button, {
      children: "Two"
    }), /*#__PURE__*/_jsx(Button, {
      children: "Three"
    })]
  }), /*#__PURE__*/_jsxs(ButtonGroup, {
    orientation: "vertical",
    color: "primary",
    "aria-label": "vertical contained primary button group",
    variant: "text",
    children: [/*#__PURE__*/_jsx(Button, {
      children: "One"
    }), /*#__PURE__*/_jsx(Button, {
      children: "Two"
    }), /*#__PURE__*/_jsx(Button, {
      children: "Three"
    })]
  })]
});

export const VerticalGroup = () => /*#__PURE__*/_jsx(VerticalGroupInternal, {});

const SplitButtonInternal = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return /*#__PURE__*/_jsx(Grid, {
    container: true,
    direction: "column",
    alignItems: "flex-start",
    children: /*#__PURE__*/_jsxs(Grid, {
      item: true,
      xs: 12,
      children: [/*#__PURE__*/_jsxs(ButtonGroup, {
        variant: "contained",
        color: "primary",
        ref: anchorRef,
        "aria-label": "split button",
        children: [/*#__PURE__*/_jsx(Button, {
          onClick: handleClick,
          children: options[selectedIndex]
        }), /*#__PURE__*/_jsx(Button, {
          color: "primary",
          size: "small",
          "aria-controls": open ? 'split-button-menu' : undefined,
          "aria-expanded": open ? 'true' : undefined,
          "aria-label": "select merge strategy",
          "aria-haspopup": "menu",
          onClick: handleToggle,
          children: /*#__PURE__*/_jsx(ArrowDropDownIcon, {})
        })]
      }), /*#__PURE__*/_jsx(Popper, {
        open: open,
        anchorEl: anchorRef.current,
        role: undefined,
        transition: true,
        disablePortal: true,
        children: ({
          TransitionProps,
          placement
        }) => /*#__PURE__*/_jsx(Grow, { ...TransitionProps,
          style: {
            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
          },
          children: /*#__PURE__*/_jsx(Paper, {
            children: /*#__PURE__*/_jsx(ClickAwayListener, {
              onClickAway: handleClose,
              children: /*#__PURE__*/_jsx(MenuList, {
                id: "split-button-menu",
                children: options.map((option, index) => /*#__PURE__*/_jsx(MenuItem, {
                  disabled: index === 2,
                  selected: index === selectedIndex,
                  onClick: event => handleMenuItemClick(event, index),
                  children: option
                }, option))
              })
            })
          })
        })
      })]
    })
  });
};

export const SplitButton = () => /*#__PURE__*/_jsx(SplitButtonInternal, {});
const ButtonsWrapper = styled.div`
  display: 'flex';
  flex-direction: 'column';
  align-items: 'center';
  & > * {
    margin: ${p => p.theme.spacing(1)};
  }
`;