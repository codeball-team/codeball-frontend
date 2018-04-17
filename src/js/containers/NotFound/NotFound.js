import React, { Component } from 'react';
import styles from './styles.scss';

export default class NotFound extends Component {
  render() {
    return (
      <main>
        <h1 className={styles.title}>
          Error 404 :(
        </h1>

        <p>
          {window.location.hash} not found!
        </p>
      </main>
    );
  }
}
