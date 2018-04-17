import React, { Component } from 'react';
import styles from './styles.scss';

export default class Unauthorized extends Component {
  render() {
    return (
      <main>
        <h1 className={styles.title}>
          Unauthorized!
        </h1>

        <p>
          You do not have access to this page.
        </p>
      </main>
    );
  }
}
