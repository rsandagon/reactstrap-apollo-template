import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

class Notification extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle className="nav-link" tag="a">
            <i className="fa fa-fw fa-bell"></i>
            <span className="d-lg-none">Alerts
              <span className="badge badge-pill badge-warning">6 New</span>
            </span>
            <span className="indicator text-warning d-none d-lg-block">
              <i className="fa fa-fw fa-circle"></i>
            </span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem >
            <h6 className="dropdown-header">Notifications:</h6>
            <div className="dropdown-divider"></div>
          </DropdownItem>
          <DropdownItem >
            <a className="dropdown-item" href="">
              <span className="text-success text-left">
                <strong>
                  <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
              </span>
              <span className="small float-right text-muted">11:21 AM</span>
              <div className="dropdown-message small">Campaign succesfully added.</div>
            </a>
          </DropdownItem>
          <DropdownItem >
            <a className="dropdown-item" href="">
              <span className="text-danger text-left">
                <strong>
                  <i className="fa fa-long-arrow-down fa-fw"></i>Status Update</strong>
              </span>
              <span className="small float-right text-muted">11:21 AM</span>
              <div className="dropdown-message small">Taxi 021 has been offline for 2 days.</div>
            </a>
          </DropdownItem>
          <DropdownItem>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item small" href="">View all alerts</a>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default Notification;