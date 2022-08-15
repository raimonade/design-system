"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SmallChipsOutlined = exports.SmallChips = exports.ChipsOutlined = exports.Chips = void 0;

var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));

var _Chip = _interopRequireDefault(require("@mui/material/Chip"));

var _styles = require("@mui/material/styles");

var _Done = _interopRequireDefault(require("@mui/icons-material/Done"));

var _Face = _interopRequireDefault(require("@mui/icons-material/Face"));

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Material UI/Chip',
  component: _Chip.default
};
exports.default = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return (0, _styles.createStyles)({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5)
      }
    }
  });
});

var ChipsInternal = function ChipsInternal() {
  var classes = useStyles();

  var handleDelete = function handleDelete() {
    console.info('You clicked the delete icon.');
  };

  var handleClick = function handleClick() {
    console.info('You clicked the Chip.');
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      label: "Basic"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      label: "Disabled",
      disabled: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      avatar: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
        children: "M"
      }),
      label: "Clickable",
      onClick: handleClick
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      avatar: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
        alt: "Natacha",
        src: "/static/images/avatar/1.jpg"
      }),
      label: "Deletable",
      onDelete: handleDelete
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Face.default, {}),
      label: "Clickable deletable",
      onClick: handleClick,
      onDelete: handleDelete
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      label: "Custom delete icon",
      onClick: handleClick,
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Done.default, {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      label: "Clickable Link",
      component: "a",
      href: "#chip",
      clickable: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      avatar: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
        children: "M"
      }),
      label: "Primary clickable",
      clickable: true,
      color: "primary",
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Done.default, {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Face.default, {}),
      label: "Primary clickable",
      clickable: true,
      color: "primary",
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Done.default, {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      label: "Deletable primary",
      onDelete: handleDelete,
      color: "primary"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Face.default, {}),
      label: "Deletable secondary",
      onDelete: handleDelete,
      color: "secondary"
    })]
  });
};

var Chips = function Chips() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ChipsInternal, {});
};

exports.Chips = Chips;

var ChipsOutlinedInternal = function ChipsOutlinedInternal() {
  var classes = useStyles();

  var handleDelete = function handleDelete() {
    console.info('You clicked the delete icon.');
  };

  var handleClick = function handleClick() {
    console.info('You clicked the Chip.');
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      label: "Basic",
      variant: "outlined"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      label: "Disabled",
      disabled: true,
      variant: "outlined"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      avatar: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
        children: "M"
      }),
      label: "Clickable",
      onClick: handleClick,
      variant: "outlined"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      avatar: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
        alt: "Natacha",
        src: "/static/images/avatar/1.jpg"
      }),
      label: "Deletable",
      onDelete: handleDelete,
      variant: "outlined"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Face.default, {}),
      label: "Clickable deletable",
      onClick: handleClick,
      onDelete: handleDelete,
      variant: "outlined"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      label: "Custom delete icon",
      onClick: handleClick,
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Done.default, {}),
      variant: "outlined"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      label: "Clickable link",
      component: "a",
      href: "#chip",
      clickable: true,
      variant: "outlined"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      avatar: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
        children: "M"
      }),
      label: "Primary clickable",
      clickable: true,
      color: "primary",
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Done.default, {}),
      variant: "outlined"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Face.default, {}),
      label: "Primary clickable",
      clickable: true,
      color: "primary",
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Done.default, {}),
      variant: "outlined"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      label: "Deletable primary",
      onDelete: handleDelete,
      color: "primary",
      variant: "outlined"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Face.default, {}),
      label: "Deletable secondary",
      onDelete: handleDelete,
      color: "secondary",
      variant: "outlined"
    })]
  });
};

var ChipsOutlined = function ChipsOutlined() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ChipsOutlinedInternal, {});
};

exports.ChipsOutlined = ChipsOutlined;

var SmallChipsInternal = function SmallChipsInternal() {
  var classes = useStyles();

  var handleDelete = function handleDelete() {
    console.info('You clicked the delete icon.');
  };

  var handleClick = function handleClick() {
    console.info('You clicked the Chip.');
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      size: "small",
      label: "Basic"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      size: "small",
      avatar: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
        children: "M"
      }),
      label: "Clickable",
      onClick: handleClick
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      size: "small",
      avatar: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
        alt: "Natacha",
        src: "/static/images/avatar/1.jpg"
      }),
      label: "Deletable",
      onDelete: handleDelete
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      size: "small",
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Face.default, {}),
      label: "Clickable Deletable",
      onClick: handleClick,
      onDelete: handleDelete
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      size: "small",
      label: "Custom delete icon",
      onClick: handleClick,
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Done.default, {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      size: "small",
      label: "Clickable Link",
      component: "a",
      href: "#chip",
      clickable: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      size: "small",
      avatar: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
        children: "M"
      }),
      label: "Primary Clickable",
      clickable: true,
      color: "primary",
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Done.default, {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      size: "small",
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Face.default, {}),
      label: "Primary Clickable",
      clickable: true,
      color: "primary",
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Done.default, {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      size: "small",
      label: "Deletable Primary",
      onDelete: handleDelete,
      color: "primary"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      size: "small",
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Face.default, {}),
      label: "Deletable Secondary",
      onDelete: handleDelete,
      color: "secondary"
    })]
  });
};

var SmallChips = function SmallChips() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SmallChipsInternal, {});
};

exports.SmallChips = SmallChips;

var SmallChipsOutlinedInternal = function SmallChipsOutlinedInternal() {
  var classes = useStyles();

  var handleDelete = function handleDelete() {
    console.info('You clicked the delete icon.');
  };

  var handleClick = function handleClick() {
    console.info('You clicked the Chip.');
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      variant: "outlined",
      size: "small",
      label: "Basic"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      variant: "outlined",
      size: "small",
      avatar: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
        children: "M"
      }),
      label: "Clickable",
      onClick: handleClick
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      variant: "outlined",
      size: "small",
      avatar: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
        alt: "Natacha",
        src: "/static/images/avatar/1.jpg"
      }),
      label: "Deletable",
      onDelete: handleDelete
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      variant: "outlined",
      size: "small",
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Face.default, {}),
      label: "Clickable deletable",
      onClick: handleClick,
      onDelete: handleDelete
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      variant: "outlined",
      size: "small",
      label: "Custom delete icon",
      onClick: handleClick,
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Done.default, {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      variant: "outlined",
      size: "small",
      label: "Clickable link",
      component: "a",
      href: "#chip",
      clickable: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      variant: "outlined",
      size: "small",
      avatar: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
        children: "M"
      }),
      label: "Primary clickable",
      clickable: true,
      color: "primary",
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Done.default, {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      variant: "outlined",
      size: "small",
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Face.default, {}),
      label: "Primary clickable",
      clickable: true,
      color: "primary",
      onDelete: handleDelete,
      deleteIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Done.default, {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      variant: "outlined",
      size: "small",
      label: "Deletable primary",
      onDelete: handleDelete,
      color: "primary"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
      variant: "outlined",
      size: "small",
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Face.default, {}),
      label: "Deletable secondary",
      onDelete: handleDelete,
      color: "secondary"
    })]
  });
};

var SmallChipsOutlined = function SmallChipsOutlined() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SmallChipsOutlinedInternal, {});
};

exports.SmallChipsOutlined = SmallChipsOutlined;