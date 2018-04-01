import React, { Component } from 'react';
import * as imgurl from '../../assets/images/img_avatar.png';

import {
  Dropdown, DropdownMenu, DropdownItem, DropdownToggle,
  Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { withRouter } from 'react-router';

class Profile extends Component {

  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.logOut = this.logOut.bind(this);

    this.state = {
      dropdownOpen: false,
      modal: false
    };
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  logOut() {
    this.toggleModal();
    this.goToLink("/signout");
  }

  goToLink = path => {
    this.props.history.push(path)
  }

  render() {
    return ([
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} key="profile-dropdown">
        <DropdownToggle className="nav-item" tag="span">
          <div className="row">
            <img alt="" className="nav-avatar rounded-circle" src={imgurl} />
            <span className="col nav-link dropdown-toggle"> someuser@rsandagon.com</span>
          </div>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.goToLink.bind(this, "/profile")} >
            <span className="fa fa-fw fa-cog" /> Profile Setting
          </DropdownItem>
          <DropdownItem onClick={this.toggleModal} >
            <span className="fa fa-fw fa-sign-out" /> Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>,
      <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className} key="logout-modal">
        <ModalHeader toggle={this.toggleModal}>Ready to leave?</ModalHeader>
        <ModalBody>
          Select "Logout" below if you are ready to end your current session.
      </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.logOut}>Logout</Button>
          <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>

    ]);
  }
}

export default withRouter(Profile);