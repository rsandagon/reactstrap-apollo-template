import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  state = {
    menus: [
      {
        name: "Dashboard",
        link: "/dashboard",
        icon: "home"
      },
      {
        name: "Tables",
        link: "/table",
        icon: "folder"
      },
      {
        name: "Charts",
        link: "/chart",
        icon: "file"
      }
    ]
  }
  render() {
    return (

      <ul className='navbar-nav navbar-sidenav' id="sidebar-accordion">
        {
          this.state.menus.map((item, i) => (
            <li key={i} className="nav-item" data-toggle="tooltip" data-placement="right" >
              <Link to={item.link} className={`nav-link`}>
                <i className={`fa fa-fw fa-${item.icon}`}></i>
                <span className="nav-link-text ml-3">{item.name}</span>
                
              </Link>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default SideBar;