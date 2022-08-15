import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { createStyles, makeStyles } from '@mui/material/styles';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const useStyles = makeStyles(theme => createStyles({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: 'none'
  },
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  }
}));
export default {
  title: 'Material UI/Button',
  component: Button
};

const ContainedButtonsInternal = () => /*#__PURE__*/_jsxs(ButtonsWrapper, {
  children: [/*#__PURE__*/_jsx(Button, {
    variant: "contained",
    children: "Default"
  }), /*#__PURE__*/_jsx(Button, {
    variant: "contained",
    color: "primary",
    children: "Primary"
  }), /*#__PURE__*/_jsx(Button, {
    variant: "contained",
    color: "secondary",
    children: "Secondary"
  }), /*#__PURE__*/_jsx(Button, {
    variant: "contained",
    disabled: true,
    children: "Disabled"
  }), /*#__PURE__*/_jsx(Button, {
    variant: "contained",
    color: "primary",
    href: "#contained-buttons",
    children: "Link"
  }), /*#__PURE__*/_jsx("br", {})]
});

export const ContainedButtons = () => /*#__PURE__*/_jsx(ContainedButtonsInternal, {});

const OutlinedButtonsInternal = () => /*#__PURE__*/_jsxs(ButtonsWrapper, {
  children: [/*#__PURE__*/_jsx(Button, {
    variant: "outlined",
    children: "Default"
  }), /*#__PURE__*/_jsx(Button, {
    variant: "outlined",
    color: "primary",
    children: "Primary"
  }), /*#__PURE__*/_jsx(Button, {
    variant: "outlined",
    color: "secondary",
    children: "Secondary"
  }), /*#__PURE__*/_jsx(Button, {
    variant: "outlined",
    disabled: true,
    children: "Disabled"
  }), /*#__PURE__*/_jsx(Button, {
    variant: "outlined",
    color: "primary",
    href: "#outlined-buttons",
    children: "Link"
  }), /*#__PURE__*/_jsx("br", {})]
});

export const OutlinedButtons = () => /*#__PURE__*/_jsx(OutlinedButtonsInternal, {});

const TextButtonsInternal = () => /*#__PURE__*/_jsxs(ButtonsWrapper, {
  children: [/*#__PURE__*/_jsx(Button, {
    children: "Default"
  }), /*#__PURE__*/_jsx(Button, {
    color: "primary",
    children: "Primary"
  }), /*#__PURE__*/_jsx(Button, {
    color: "secondary",
    children: "Secondary"
  }), /*#__PURE__*/_jsx(Button, {
    disabled: true,
    children: "Disabled"
  }), /*#__PURE__*/_jsx(Button, {
    href: "#text-buttons",
    color: "primary",
    children: "Link"
  }), /*#__PURE__*/_jsx("br", {})]
});

export const TextButtons = () => /*#__PURE__*/_jsx(TextButtonsInternal, {});

const SizesInternal = () => {
  const classes = useStyles();
  return /*#__PURE__*/_jsxs(ButtonsWrapper, {
    children: [/*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx(Button, {
        size: "small",
        className: classes.margin,
        children: "Small"
      }), /*#__PURE__*/_jsx(Button, {
        size: "medium",
        className: classes.margin,
        children: "Medium"
      }), /*#__PURE__*/_jsx(Button, {
        size: "large",
        className: classes.margin,
        children: "Large"
      })]
    }), /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx(Button, {
        variant: "outlined",
        size: "small",
        color: "primary",
        className: classes.margin,
        children: "Small"
      }), /*#__PURE__*/_jsx(Button, {
        variant: "outlined",
        size: "medium",
        color: "primary",
        className: classes.margin,
        children: "Medium"
      }), /*#__PURE__*/_jsx(Button, {
        variant: "outlined",
        size: "large",
        color: "primary",
        className: classes.margin,
        children: "Large"
      })]
    }), /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx(Button, {
        variant: "contained",
        size: "small",
        color: "primary",
        className: classes.margin,
        children: "Small"
      }), /*#__PURE__*/_jsx(Button, {
        variant: "contained",
        size: "medium",
        color: "primary",
        className: classes.margin,
        children: "Medium"
      }), /*#__PURE__*/_jsx(Button, {
        variant: "contained",
        size: "large",
        color: "primary",
        className: classes.margin,
        children: "Large"
      })]
    }), /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx(IconButton, {
        "aria-label": "delete",
        className: classes.margin,
        size: "small",
        children: /*#__PURE__*/_jsx(ArrowDownwardIcon, {
          fontSize: "inherit"
        })
      }), /*#__PURE__*/_jsx(IconButton, {
        "aria-label": "delete",
        className: classes.margin,
        size: "large",
        children: /*#__PURE__*/_jsx(DeleteIcon, {
          fontSize: "small"
        })
      }), /*#__PURE__*/_jsx(IconButton, {
        "aria-label": "delete",
        className: classes.margin,
        size: "large",
        children: /*#__PURE__*/_jsx(DeleteIcon, {})
      }), /*#__PURE__*/_jsx(IconButton, {
        "aria-label": "delete",
        className: classes.margin,
        size: "large",
        children: /*#__PURE__*/_jsx(DeleteIcon, {
          fontSize: "large"
        })
      })]
    })]
  });
};

export const Sizes = () => /*#__PURE__*/_jsx(SizesInternal, {});

const UploadButtonInternal = () => {
  const classes = useStyles();
  return /*#__PURE__*/_jsxs(ButtonsWrapper, {
    children: [/*#__PURE__*/_jsx("input", {
      accept: "image/*",
      className: classes.input,
      id: "contained-button-file",
      multiple: true,
      type: "file"
    }), /*#__PURE__*/_jsx("label", {
      htmlFor: "contained-button-file",
      children: /*#__PURE__*/_jsx(Button, {
        variant: "contained",
        color: "primary",
        component: "span",
        children: "Upload"
      })
    }), /*#__PURE__*/_jsx("input", {
      accept: "image/*",
      className: classes.input,
      id: "icon-button-file",
      type: "file"
    }), /*#__PURE__*/_jsx("label", {
      htmlFor: "icon-button-file",
      children: /*#__PURE__*/_jsx(IconButton, {
        color: "primary",
        "aria-label": "upload picture",
        component: "span",
        size: "large",
        children: /*#__PURE__*/_jsx(PhotoCamera, {})
      })
    }), /*#__PURE__*/_jsx("br", {})]
  });
};

export const UploadButton = () => /*#__PURE__*/_jsx(UploadButtonInternal, {});

const ButtonsWithIconsAndLabelInternal = () => {
  const classes = useStyles();
  return /*#__PURE__*/_jsxs(ButtonsWrapper, {
    children: [/*#__PURE__*/_jsx(Button, {
      variant: "contained",
      color: "secondary",
      className: classes.button,
      startIcon: /*#__PURE__*/_jsx(DeleteIcon, {}),
      children: "Delete"
    }), /*#__PURE__*/_jsx(Button, {
      variant: "contained",
      color: "primary",
      className: classes.button,
      endIcon: /*#__PURE__*/_jsx(SendIcon, {}),
      children: "Send"
    }), /*#__PURE__*/_jsx(Button, {
      variant: "contained",
      className: classes.button,
      startIcon: /*#__PURE__*/_jsx(CloudUploadIcon, {}),
      children: "Upload"
    }), /*#__PURE__*/_jsx(Button, {
      variant: "contained",
      disabled: true,
      color: "secondary",
      className: classes.button,
      startIcon: /*#__PURE__*/_jsx(KeyboardVoiceIcon, {}),
      children: "Talk"
    }), /*#__PURE__*/_jsx(Button, {
      variant: "contained",
      color: "primary",
      size: "small",
      className: classes.button,
      startIcon: /*#__PURE__*/_jsx(SaveIcon, {}),
      children: "Save"
    }), /*#__PURE__*/_jsx(Button, {
      variant: "contained",
      color: "primary",
      size: "large",
      className: classes.button,
      startIcon: /*#__PURE__*/_jsx(SaveIcon, {}),
      children: "Save"
    })]
  });
};

export const ButtonsWithIconsAndLabel = () => /*#__PURE__*/_jsx(ButtonsWithIconsAndLabelInternal, {});
const ButtonsWrapper = styled.div`
  & > * {
    margin-right: ${p => p.theme.spacing(1)};
    margin-bottom: ${p => p.theme.spacing(1)};
  }
`;