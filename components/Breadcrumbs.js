// @flow

import React from 'react';
import Link from 'next/link';

// we only use this on the search page so it's just hard coded right now...

type Props = {
  pages: Array<string>,
};

const Breadcrumbs = (props: Props) => {
  const { pages } = props;

  return (
    <nav aria-label="You are here:" role="navigation">
      <ul className="breadcrumbs">
        {pages &&
          pages.map((page, index) =>
            index < pages.length - 1 ? (
              <li key={page}>
                <Link href="/">
                  <a>{page}</a>
                </Link>
              </li>
            ) : (
              <li key={page}>
                <span className="show-for-sr">Current: </span> {page}
              </li>
            )
          )}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
