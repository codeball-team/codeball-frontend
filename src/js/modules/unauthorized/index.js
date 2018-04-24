import React from 'react';
import styles from './styles.scss';

const Unauthorized = () => (
  <main>
    <h1 className={styles.title}>
      Unauthorized!
    </h1>

    <p>
      You do not have access to this page.
    </p>
  </main>
);

export default Unauthorized;
