import React from 'react';
import { createStyles, makeStyles } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default {
  title: 'Material UI/FloatingActionButton',
  component: Fab
};
const useStyles = makeStyles(theme => createStyles({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const FloatingActionButtonsInternal = () => {
  const classes = useStyles();
  return /*#__PURE__*/_jsxs("div", {
    className: classes.root,
    children: [/*#__PURE__*/_jsx(Fab, {
      color: "primary",
      "aria-label": "add",
      children: /*#__PURE__*/_jsx(AddIcon, {})
    }), /*#__PURE__*/_jsx(Fab, {
      color: "secondary",
      "aria-label": "edit",
      children: /*#__PURE__*/_jsx(EditIcon, {})
    }), /*#__PURE__*/_jsxs(Fab, {
      variant: "extended",
      children: [/*#__PURE__*/_jsx(NavigationIcon, {
        className: classes.extendedIcon
      }), "Navigate"]
    }), /*#__PURE__*/_jsx(Fab, {
      disabled: true,
      "aria-label": "like",
      children: /*#__PURE__*/_jsx(FavoriteIcon, {})
    })]
  });
};

export const FloatingActionButtons = () => /*#__PURE__*/_jsx(FloatingActionButtonsInternal, {});

const SizesInternal = () => {
  const classes = useStyles();
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx(Fab, {
        size: "small",
        color: "secondary",
        "aria-label": "add",
        className: classes.margin,
        children: /*#__PURE__*/_jsx(AddIcon, {})
      }), /*#__PURE__*/_jsx(Fab, {
        size: "medium",
        color: "secondary",
        "aria-label": "add",
        className: classes.margin,
        children: /*#__PURE__*/_jsx(AddIcon, {})
      }), /*#__PURE__*/_jsx(Fab, {
        color: "secondary",
        "aria-label": "add",
        className: classes.margin,
        children: /*#__PURE__*/_jsx(AddIcon, {})
      })]
    }), /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsxs(Fab, {
        variant: "extended",
        size: "small",
        color: "primary",
        "aria-label": "add",
        className: classes.margin,
        children: [/*#__PURE__*/_jsx(NavigationIcon, {
          className: classes.extendedIcon
        }), "Extended"]
      }), /*#__PURE__*/_jsxs(Fab, {
        variant: "extended",
        size: "medium",
        color: "primary",
        "aria-label": "add",
        className: classes.margin,
        children: [/*#__PURE__*/_jsx(NavigationIcon, {
          className: classes.extendedIcon
        }), "Extended"]
      }), /*#__PURE__*/_jsxs(Fab, {
        variant: "extended",
        color: "primary",
        "aria-label": "add",
        className: classes.margin,
        children: [/*#__PURE__*/_jsx(NavigationIcon, {
          className: classes.extendedIcon
        }), "Extended"]
      })]
    })]
  });
};

export const Sizes = () => /*#__PURE__*/_jsx(SizesInternal, {});