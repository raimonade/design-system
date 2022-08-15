import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { createStyles, makeStyles } from '@mui/material/styles';
import DoneIcon from '@mui/icons-material/Done';
import FaceIcon from '@mui/icons-material/Face';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default {
  title: 'Material UI/Chip',
  component: Chip
};
const useStyles = makeStyles(theme => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5)
    }
  }
}));

const ChipsInternal = () => {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return /*#__PURE__*/_jsxs("div", {
    className: classes.root,
    children: [/*#__PURE__*/_jsx(Chip, {
      label: "Basic"
    }), /*#__PURE__*/_jsx(Chip, {
      label: "Disabled",
      disabled: true
    }), /*#__PURE__*/_jsx(Chip, {
      avatar: /*#__PURE__*/_jsx(Avatar, {
        children: "M"
      }),
      label: "Clickable",
      onClick: handleClick
    }), /*#__PURE__*/_jsx(Chip, {
      avatar: /*#__PURE__*/_jsx(Avatar, {
        alt: "Natacha",
        src: "/static/images/avatar/1.jpg"
      }),
      label: "Deletable",
      onDelete: handleDelete
    }), /*#__PURE__*/_jsx(Chip, {
      icon: /*#__PURE__*/_jsx(FaceIcon, {}),
      label: "Clickable deletable",
      onClick: handleClick,
      onDelete: handleDelete
    }), /*#__PURE__*/_jsx(Chip, {
      label: "Custom delete icon",
      onClick: handleClick,
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/_jsx(DoneIcon, {})
    }), /*#__PURE__*/_jsx(Chip, {
      label: "Clickable Link",
      component: "a",
      href: "#chip",
      clickable: true
    }), /*#__PURE__*/_jsx(Chip, {
      avatar: /*#__PURE__*/_jsx(Avatar, {
        children: "M"
      }),
      label: "Primary clickable",
      clickable: true,
      color: "primary",
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/_jsx(DoneIcon, {})
    }), /*#__PURE__*/_jsx(Chip, {
      icon: /*#__PURE__*/_jsx(FaceIcon, {}),
      label: "Primary clickable",
      clickable: true,
      color: "primary",
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/_jsx(DoneIcon, {})
    }), /*#__PURE__*/_jsx(Chip, {
      label: "Deletable primary",
      onDelete: handleDelete,
      color: "primary"
    }), /*#__PURE__*/_jsx(Chip, {
      icon: /*#__PURE__*/_jsx(FaceIcon, {}),
      label: "Deletable secondary",
      onDelete: handleDelete,
      color: "secondary"
    })]
  });
};

export const Chips = () => /*#__PURE__*/_jsx(ChipsInternal, {});

const ChipsOutlinedInternal = () => {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return /*#__PURE__*/_jsxs("div", {
    className: classes.root,
    children: [/*#__PURE__*/_jsx(Chip, {
      label: "Basic",
      variant: "outlined"
    }), /*#__PURE__*/_jsx(Chip, {
      label: "Disabled",
      disabled: true,
      variant: "outlined"
    }), /*#__PURE__*/_jsx(Chip, {
      avatar: /*#__PURE__*/_jsx(Avatar, {
        children: "M"
      }),
      label: "Clickable",
      onClick: handleClick,
      variant: "outlined"
    }), /*#__PURE__*/_jsx(Chip, {
      avatar: /*#__PURE__*/_jsx(Avatar, {
        alt: "Natacha",
        src: "/static/images/avatar/1.jpg"
      }),
      label: "Deletable",
      onDelete: handleDelete,
      variant: "outlined"
    }), /*#__PURE__*/_jsx(Chip, {
      icon: /*#__PURE__*/_jsx(FaceIcon, {}),
      label: "Clickable deletable",
      onClick: handleClick,
      onDelete: handleDelete,
      variant: "outlined"
    }), /*#__PURE__*/_jsx(Chip, {
      label: "Custom delete icon",
      onClick: handleClick,
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/_jsx(DoneIcon, {}),
      variant: "outlined"
    }), /*#__PURE__*/_jsx(Chip, {
      label: "Clickable link",
      component: "a",
      href: "#chip",
      clickable: true,
      variant: "outlined"
    }), /*#__PURE__*/_jsx(Chip, {
      avatar: /*#__PURE__*/_jsx(Avatar, {
        children: "M"
      }),
      label: "Primary clickable",
      clickable: true,
      color: "primary",
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/_jsx(DoneIcon, {}),
      variant: "outlined"
    }), /*#__PURE__*/_jsx(Chip, {
      icon: /*#__PURE__*/_jsx(FaceIcon, {}),
      label: "Primary clickable",
      clickable: true,
      color: "primary",
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/_jsx(DoneIcon, {}),
      variant: "outlined"
    }), /*#__PURE__*/_jsx(Chip, {
      label: "Deletable primary",
      onDelete: handleDelete,
      color: "primary",
      variant: "outlined"
    }), /*#__PURE__*/_jsx(Chip, {
      icon: /*#__PURE__*/_jsx(FaceIcon, {}),
      label: "Deletable secondary",
      onDelete: handleDelete,
      color: "secondary",
      variant: "outlined"
    })]
  });
};

export const ChipsOutlined = () => /*#__PURE__*/_jsx(ChipsOutlinedInternal, {});

const SmallChipsInternal = () => {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return /*#__PURE__*/_jsxs("div", {
    className: classes.root,
    children: [/*#__PURE__*/_jsx(Chip, {
      size: "small",
      label: "Basic"
    }), /*#__PURE__*/_jsx(Chip, {
      size: "small",
      avatar: /*#__PURE__*/_jsx(Avatar, {
        children: "M"
      }),
      label: "Clickable",
      onClick: handleClick
    }), /*#__PURE__*/_jsx(Chip, {
      size: "small",
      avatar: /*#__PURE__*/_jsx(Avatar, {
        alt: "Natacha",
        src: "/static/images/avatar/1.jpg"
      }),
      label: "Deletable",
      onDelete: handleDelete
    }), /*#__PURE__*/_jsx(Chip, {
      size: "small",
      icon: /*#__PURE__*/_jsx(FaceIcon, {}),
      label: "Clickable Deletable",
      onClick: handleClick,
      onDelete: handleDelete
    }), /*#__PURE__*/_jsx(Chip, {
      size: "small",
      label: "Custom delete icon",
      onClick: handleClick,
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/_jsx(DoneIcon, {})
    }), /*#__PURE__*/_jsx(Chip, {
      size: "small",
      label: "Clickable Link",
      component: "a",
      href: "#chip",
      clickable: true
    }), /*#__PURE__*/_jsx(Chip, {
      size: "small",
      avatar: /*#__PURE__*/_jsx(Avatar, {
        children: "M"
      }),
      label: "Primary Clickable",
      clickable: true,
      color: "primary",
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/_jsx(DoneIcon, {})
    }), /*#__PURE__*/_jsx(Chip, {
      size: "small",
      icon: /*#__PURE__*/_jsx(FaceIcon, {}),
      label: "Primary Clickable",
      clickable: true,
      color: "primary",
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/_jsx(DoneIcon, {})
    }), /*#__PURE__*/_jsx(Chip, {
      size: "small",
      label: "Deletable Primary",
      onDelete: handleDelete,
      color: "primary"
    }), /*#__PURE__*/_jsx(Chip, {
      size: "small",
      icon: /*#__PURE__*/_jsx(FaceIcon, {}),
      label: "Deletable Secondary",
      onDelete: handleDelete,
      color: "secondary"
    })]
  });
};

export const SmallChips = () => /*#__PURE__*/_jsx(SmallChipsInternal, {});

const SmallChipsOutlinedInternal = () => {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return /*#__PURE__*/_jsxs("div", {
    className: classes.root,
    children: [/*#__PURE__*/_jsx(Chip, {
      variant: "outlined",
      size: "small",
      label: "Basic"
    }), /*#__PURE__*/_jsx(Chip, {
      variant: "outlined",
      size: "small",
      avatar: /*#__PURE__*/_jsx(Avatar, {
        children: "M"
      }),
      label: "Clickable",
      onClick: handleClick
    }), /*#__PURE__*/_jsx(Chip, {
      variant: "outlined",
      size: "small",
      avatar: /*#__PURE__*/_jsx(Avatar, {
        alt: "Natacha",
        src: "/static/images/avatar/1.jpg"
      }),
      label: "Deletable",
      onDelete: handleDelete
    }), /*#__PURE__*/_jsx(Chip, {
      variant: "outlined",
      size: "small",
      icon: /*#__PURE__*/_jsx(FaceIcon, {}),
      label: "Clickable deletable",
      onClick: handleClick,
      onDelete: handleDelete
    }), /*#__PURE__*/_jsx(Chip, {
      variant: "outlined",
      size: "small",
      label: "Custom delete icon",
      onClick: handleClick,
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/_jsx(DoneIcon, {})
    }), /*#__PURE__*/_jsx(Chip, {
      variant: "outlined",
      size: "small",
      label: "Clickable link",
      component: "a",
      href: "#chip",
      clickable: true
    }), /*#__PURE__*/_jsx(Chip, {
      variant: "outlined",
      size: "small",
      avatar: /*#__PURE__*/_jsx(Avatar, {
        children: "M"
      }),
      label: "Primary clickable",
      clickable: true,
      color: "primary",
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/_jsx(DoneIcon, {})
    }), /*#__PURE__*/_jsx(Chip, {
      variant: "outlined",
      size: "small",
      icon: /*#__PURE__*/_jsx(FaceIcon, {}),
      label: "Primary clickable",
      clickable: true,
      color: "primary",
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/_jsx(DoneIcon, {})
    }), /*#__PURE__*/_jsx(Chip, {
      variant: "outlined",
      size: "small",
      label: "Deletable primary",
      onDelete: handleDelete,
      color: "primary"
    }), /*#__PURE__*/_jsx(Chip, {
      variant: "outlined",
      size: "small",
      icon: /*#__PURE__*/_jsx(FaceIcon, {}),
      label: "Deletable secondary",
      onDelete: handleDelete,
      color: "secondary"
    })]
  });
};

export const SmallChipsOutlined = () => /*#__PURE__*/_jsx(SmallChipsOutlinedInternal, {});