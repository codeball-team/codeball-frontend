import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import { Icon, RouterLink } from 'components/ui';
import styles from './styles.scss';

const Navigation = ({ className }) => (
  <nav className={classNames(styles.navigation, className)}>
    <div className={styles.menuLogo}>
      Codeball
    </div>

    <ul>
      <li>
        <RouterLink activeClassName={styles.focus} to="/upcoming-game">
          <Icon name="alarm" />
          <span className={styles.label}>
            Upcoming game
          </span>
        </RouterLink>
      </li>

      <li>
        <RouterLink activeClassName={styles.focus} to="/last-game">
          <Icon name="podium" />
          <span className={styles.label}>
            Last game
          </span>
        </RouterLink>
      </li>

      <li>
        <RouterLink activeClassName={styles.focus} to="/games">
          <Icon name="calendar" />
          <span className={styles.label}>
            Games
          </span>
        </RouterLink>
      </li>

      <li>
        <RouterLink activeClassName={styles.focus} to="/players" >
          <Icon name="people" />
          <span className={styles.label}>
            Players
          </span>
        </RouterLink>
      </li>

      <li>
        <RouterLink activeClassName={styles.focus} to="/pitches" >
          <Icon name="location" />
          <span className={styles.label}>
            Pitches
          </span>
        </RouterLink>
      </li>

      <li>
        <RouterLink activeClassName={styles.focus} to="/changelog" >
          <Icon name="clipboard" />
          <span className={styles.label}>
            Changelog
          </span>
        </RouterLink>
      </li>
    </ul>
  </nav>
);

Navigation.propTypes = {
  className: PropTypes.string
};

export default Navigation;
