import React from 'react';
import styles from './styles.scss';

const NotFound = () => (
  <main>
    <h1 className={styles.title}>
      Error 404 :(
    </h1>

    <p>
      {window.location.hash} not found!
    </p>
  </main>
);

export default NotFound;
