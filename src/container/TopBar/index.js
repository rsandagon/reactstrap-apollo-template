import React, { Component } from 'react';

import Hamburger from './Hamburger';
import Country from './Country';
import Notification from './Notification';
import Profile from './Profile';


class TopBar extends Component {
  render() {
    return ([
      <ul className="navbar-nav mr-auto" key="topbar-menu--left">
        <li className="nav-item d-none d-lg-block d-xl-block"> <Hamburger /> </li>
        <li className="nav-item d-none d-lg-block d-xl-block"> <Country /> </li>
        <li className="nav-item"> <Notification /> </li>
      </ul>,
      <ul className="navbar-nav d-none d-lg-block d-xl-block" key="topbar-menu--right">
        <li className="nav-item"> <Profile /> </li>
      </ul>
    ]);
  }
}

export default TopBar;