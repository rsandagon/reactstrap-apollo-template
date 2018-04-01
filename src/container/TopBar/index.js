import React, { Component } from 'react';

import Hamburger from './Hamburger';
import Country from './Country';
import Notification from './Notification';
import Profile from './Profile';


class TopBar extends Component {
  render() {
    return ([
      <ul className="navbar-nav mr-auto" key="topbar-menu--left">
        <li className="nav-item"> <Hamburger /> </li>
        <li className="nav-item"> <Country /> </li>
        <li className="nav-item"> <Notification /> </li>
      </ul>,
      <ul className="navbar-nav" key="topbar-menu--right">
        <li className="nav-item"> <Profile /> </li>
      </ul>
    ]);
  }
}

export default TopBar;