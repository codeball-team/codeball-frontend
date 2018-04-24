import React from 'react';

const Relase2 = () => (
  <div>
    <h2>Relase 2 (2016/10/04)</h2>
    <h3>Features</h3>
    <ul>
      <li>Microsoft Edge & Microsoft Internet Explorer support</li>
      <li>Changelog page</li>
      <li>Auto-refreshing data every 10 seconds</li>
    </ul>

    <h3>Bugfixes</h3>
    <ul>
      <li>
        Backend
        <ul>
          <li>Not drawing same team combinations twice in a row</li>
        </ul>
      </li>

      <li>
        Frontend
        <ul>
          <li>Removing Team Lineup sorting</li>
          <li>Fixing Polish characters sorting</li>
          <li>Fixing invisible Team Lineup component on iOS</li>
          <li>Minor UI improvements</li>
        </ul>
      </li>
    </ul>

    <h3>Technical improvements</h3>
    <ul>
      <li>
        Backend
        <ul>
          <li>Code refinements and refactoring of persistence layer</li>
          <li>Using Spring JPA's support for Java 8 Optionals</li>
        </ul>
      </li>

      <li>
        Frontend
        <ul>
          <li>Severe refactoring</li>
          <li>
            Improving performance
            <ul>
              <li>Avoiding redundant AJAX calls</li>
              <li>Computing API response hashes to detect and avoid redundant virtual DOM re-renders</li>
              <li>Introducing reselect library</li>
            </ul>
          </li>
          <li>Updating frontend libraries</li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Relase2;
