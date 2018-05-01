import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { Icon } from 'components';
import styles from './styles.scss';

const links = [
  { icon: 'alarm', label: 'Upcoming game', to: '/upcoming-game' },
  { icon: 'podium', label: 'Last game', to: '/last-game' },
  { icon: 'calendar', label: 'Games', to: '/games' },
  { icon: 'people', label: 'Players', to: '/players' },
  { icon: 'location', label: 'Pitches', to: '/pitches' },
  { icon: 'clipboard', label: 'Changelog', to: '/changelog' }
];

const Navigation = ({ className }) => (
  <nav className={classNames(styles.navigation, className)}>
    <div className={styles.menuLogo}>
      Codeball
    </div>

    <ul>
      {links.map(({ icon, label, to }, index) => (
        <li key={index}>
          <NavLink activeClassName={styles.focus} to={to}>
            <Icon className={styles.icon} name={icon} />
            <span className={styles.label}>
              {label}
            </span>
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

Navigation.propTypes = {
  className: PropTypes.string
};

export default Navigation;
