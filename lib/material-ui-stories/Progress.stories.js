import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import LinearProgress from '@mui/material/LinearProgress';
import { createStyles, makeStyles } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import clsx from 'clsx';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const useStyles = makeStyles(theme => createStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  },
  linearRoot: {
    width: '100%',
    marginTop: theme.spacing(2),
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700]
    }
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
}));
export default {
  title: 'Material UI/Progress',
  component: CircularProgress
};

const CircularIndeterminateInternal = () => {
  const classes = useStyles();
  return /*#__PURE__*/_jsxs("div", {
    className: classes.root,
    children: [/*#__PURE__*/_jsx(CircularProgress, {}), /*#__PURE__*/_jsx(CircularProgress, {
      color: "secondary"
    })]
  });
};

export const CircularIndeterminate = () => /*#__PURE__*/_jsx(CircularIndeterminateInternal, {});

const CircularDeterminateInternal = () => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => prevProgress >= 100 ? 0 : prevProgress + 10);
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/_jsxs("div", {
    className: classes.root,
    children: [/*#__PURE__*/_jsx(CircularProgress, {
      variant: "determinate",
      value: 25
    }), /*#__PURE__*/_jsx(CircularProgress, {
      variant: "determinate",
      value: 50
    }), /*#__PURE__*/_jsx(CircularProgress, {
      variant: "determinate",
      value: 75
    }), /*#__PURE__*/_jsx(CircularProgress, {
      variant: "determinate",
      value: 100
    }), /*#__PURE__*/_jsx(CircularProgress, {
      variant: "determinate",
      value: progress
    })]
  });
};

export const CircularDeterminate = () => /*#__PURE__*/_jsx(CircularDeterminateInternal, {});

const CircularIntegrationInternal = () => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success
  });
  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return /*#__PURE__*/_jsxs("div", {
    className: classes.root,
    children: [/*#__PURE__*/_jsxs("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/_jsx(Fab, {
        "aria-label": "save",
        color: "primary",
        className: buttonClassname,
        onClick: handleButtonClick,
        children: success ? /*#__PURE__*/_jsx(CheckIcon, {}) : /*#__PURE__*/_jsx(SaveIcon, {})
      }), loading && /*#__PURE__*/_jsx(CircularProgress, {
        size: 68,
        className: classes.fabProgress
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: classes.wrapper,
      children: [/*#__PURE__*/_jsx(Button, {
        variant: "contained",
        color: "primary",
        className: buttonClassname,
        disabled: loading,
        onClick: handleButtonClick,
        children: "Accept terms"
      }), loading && /*#__PURE__*/_jsx(CircularProgress, {
        size: 24,
        className: classes.buttonProgress
      })]
    })]
  });
};

export const CircularIntegration = () => /*#__PURE__*/_jsx(CircularIntegrationInternal, {});

const CircularProgressWithLabel = props => {
  return /*#__PURE__*/_jsxs(Box, {
    position: "relative",
    display: "inline-flex",
    children: [/*#__PURE__*/_jsx(CircularProgress, {
      variant: "determinate",
      ...props
    }), /*#__PURE__*/_jsx(Box, {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      children: /*#__PURE__*/_jsx(Typography, {
        variant: "caption",
        component: "div",
        color: "textSecondary",
        children: `${Math.round(props.value)}%`
      })
    })]
  });
};

const CircularWithLabelInternal = () => {
  const [progress, setProgress] = React.useState(10);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => prevProgress >= 100 ? 0 : prevProgress + 10);
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/_jsx(CircularProgressWithLabel, {
    value: progress
  });
};

export const CircularWithLabel = () => /*#__PURE__*/_jsx(CircularWithLabelInternal, {});

const LinearIndeterminateInternal = () => {
  const classes = useStyles();
  return /*#__PURE__*/_jsxs("div", {
    className: classes.linearRoot,
    children: [/*#__PURE__*/_jsx(LinearProgress, {}), /*#__PURE__*/_jsx(LinearProgress, {
      color: "secondary"
    })]
  });
};

export const LinearIndeterminate = () => /*#__PURE__*/_jsx(LinearIndeterminateInternal, {});

const LinearDeterminateInternal = () => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          return 0;
        }

        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/_jsx("div", {
    className: classes.linearRoot,
    children: /*#__PURE__*/_jsx(LinearProgress, {
      variant: "determinate",
      value: progress
    })
  });
};

export const LinearDeterminate = () => /*#__PURE__*/_jsx(LinearDeterminateInternal, {});
LinearDeterminate.parameters = {
  chromatic: {
    disable: true
  }
};

const LinearBufferInternal = () => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  const progressRef = React.useRef(() => true);
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }

      return true;
    };
  });
  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/_jsx("div", {
    className: classes.linearRoot,
    children: /*#__PURE__*/_jsx(LinearProgress, {
      variant: "buffer",
      value: progress,
      valueBuffer: buffer
    })
  });
};

export const LinearBuffer = () => /*#__PURE__*/_jsx(LinearBufferInternal, {});
LinearBuffer.parameters = {
  chromatic: {
    disable: true
  }
};

function LinearProgressWithLabel(props) {
  return /*#__PURE__*/_jsxs(Box, {
    display: "flex",
    alignItems: "center",
    children: [/*#__PURE__*/_jsx(Box, {
      width: "100%",
      mr: 1,
      children: /*#__PURE__*/_jsx(LinearProgress, {
        variant: "determinate",
        ...props
      })
    }), /*#__PURE__*/_jsx(Box, {
      minWidth: 35,
      children: /*#__PURE__*/_jsx(Typography, {
        variant: "body2",
        color: "textSecondary",
        children: `${Math.round(props.value)}%`
      })
    })]
  });
}

const LinearWithValueLabelInternal = () => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => prevProgress >= 100 ? 10 : prevProgress + 10);
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/_jsx("div", {
    className: classes.linearRoot,
    children: /*#__PURE__*/_jsx(LinearProgressWithLabel, {
      value: progress
    })
  });
};

export const LinearWithValueLabel = () => /*#__PURE__*/_jsx(LinearWithValueLabelInternal, {});