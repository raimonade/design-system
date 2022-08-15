import { Avatar } from './Avatar';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default {
  title: 'Design System/Avatar',
  component: Avatar
};
export const Standard = args => /*#__PURE__*/_jsx(Avatar, { ...args
});
Standard.args = {
  size: 'large',
  username: 'Tom Coleman',
  src: 'https://avatars2.githubusercontent.com/u/132554'
};
export const Sizes = args => /*#__PURE__*/_jsxs("div", {
  children: [/*#__PURE__*/_jsx(Avatar, { ...args,
    size: "large"
  }), /*#__PURE__*/_jsx(Avatar, { ...args,
    size: "medium"
  }), /*#__PURE__*/_jsx(Avatar, { ...args,
    size: "small"
  }), /*#__PURE__*/_jsx(Avatar, { ...args,
    size: "tiny"
  })]
});
Sizes.args = {
  username: 'Tom Coleman',
  src: 'https://avatars2.githubusercontent.com/u/132554'
};
export const Initials = args => /*#__PURE__*/_jsxs("div", {
  children: [/*#__PURE__*/_jsx(Avatar, { ...args,
    username: "Tom Coleman"
  }), /*#__PURE__*/_jsx(Avatar, { ...args,
    username: "Dominic Nguyen"
  }), /*#__PURE__*/_jsx(Avatar, { ...args,
    username: "Kyle Suss"
  }), /*#__PURE__*/_jsx(Avatar, { ...args,
    username: "Michael Shilman"
  })]
});
export const Loading = args => /*#__PURE__*/_jsxs("div", {
  children: [/*#__PURE__*/_jsx(Avatar, { ...args,
    size: "large"
  }), /*#__PURE__*/_jsx(Avatar, { ...args,
    size: "medium"
  }), /*#__PURE__*/_jsx(Avatar, { ...args,
    size: "small"
  }), /*#__PURE__*/_jsx(Avatar, { ...args,
    size: "tiny"
  })]
});
Loading.args = {
  loading: true
};
export const Large = args => /*#__PURE__*/_jsxs("div", {
  children: [/*#__PURE__*/_jsx(Avatar, { ...args,
    loading: true,
    size: "large"
  }), /*#__PURE__*/_jsx(Avatar, { ...args,
    size: "large",
    username: "Tom Coleman"
  }), /*#__PURE__*/_jsx(Avatar, { ...args,
    size: "large",
    username: "Tom Coleman",
    src: "https://avatars2.githubusercontent.com/u/132554"
  })]
});