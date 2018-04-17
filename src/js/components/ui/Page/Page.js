import React, { Component, PropTypes } from 'react';
import { BaseComponent } from 'components/base';
import { Navigation } from 'components/ui';
import styles from './styles.scss';

class Page extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  static contextTypes = {
    router: PropTypes.object
  };

  onBackClick = event => {
    const { router } = this.context;
    event.preventDefault();
    router.goBack();
  };

  render() {
    const { children } = this.props;

    return (
      <div className={styles.page}>
        <Navigation className={styles.pageMenu} />
        <div className={styles.pageContentContainer}>
          <div className={styles.pageContent}>
            {children}

            <a href="#" className={styles.backButton} onClick={this.onBackClick}>
              &laquo; back
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default BaseComponent(Page);
