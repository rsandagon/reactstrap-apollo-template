import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import UPDATE_APP_STATE from '../../graphql/UI/UPDATE_APP_STATE';
import GET_APP_STATE from '../../graphql/UI/GET_APP_STATE';

class Country extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      selectedCountry: "Singapore"
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  
  render() {
    const dropDownList = ["Singapore", "Vietnam", "Philippines", "Cambodia"]

    return (
      <Query query={GET_APP_STATE}>
        {({ data: { appState: { country } } }) => {
          return (
            <Mutation mutation={UPDATE_APP_STATE}>
              {(updateAppState, attrs = {}) => {

                const onMenuClick = (args) => {
                  updateAppState({
                    variables: {
                      index: 'country',
                      value: args
                    }
                  })
                }

                return (
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle className="nav-link dropdown-toggle" tag="span">
                      {country}
                    </DropdownToggle>
                    <DropdownMenu>
                      {
                        dropDownList.map((item, i) => {
                          return <DropdownItem key={i} onClick={onMenuClick.bind(this, item)}>
                            {item}
                          </DropdownItem>
                        })
                      }
                    </DropdownMenu>
                  </Dropdown>
                )
              }}
            </Mutation>
          )
        }}
      </Query>

    );
  }
}

export default Country;
