import React from 'react';
import { Helmet } from 'react-helmet';

export const NotFound = () => {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>404</title>
                <meta name="description" content="page not found" />
            </Helmet>

      <h2>Not found</h2>
  </div>
)
};
