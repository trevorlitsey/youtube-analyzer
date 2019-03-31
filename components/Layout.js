// @flow

import * as React from 'react';
import Link from 'next/link';
import { Menu, MenuItem } from 'react-foundation';

type Props = {
  children?: React.Node,
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Menu className="top-bar">
        <MenuItem className="menu-text">
          <Link href="/">
            <a style={{ padding: 0 }}>YouTube Analyzer</a>
          </Link>
        </MenuItem>
      </Menu>
      <div className="wrapper">{children}</div>
      <style jsx>{`
        .wrapper {
          max-width: 1200px;
          margin: auto;
          padding: 50px 10px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
