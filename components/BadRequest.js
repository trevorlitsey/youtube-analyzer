import React from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';

const BadRequest = props => {
  const { query } = props;

  return (
    <div>
      <h4>
        Sorry, your search for <code>{query}</code> didn't match any results.
      </h4>
      <h4>
        Click{' '}
        <Link href="/">
          <a>here</a>
        </Link>{' '}
        to go back
      </h4>
      <style jsx>{`
        text-align: center;
      `}</style>
    </div>
  );
};

export default BadRequest;
