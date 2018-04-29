import React from 'react';
import Release1 from './release-1';
import Release2 from './release-2';
import Release3 from './release-3';

const Changelog = () => (
  <main>
    <Release3 />
    <hr />
    <Release2 />
    <hr />
    <Release1 />
  </main>
);

export default Changelog;
