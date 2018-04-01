import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo'
import UPDATE_APP_STATE from '../../graphql/UI/UPDATE_APP_STATE';
import GET_APP_STATE from '../../graphql/UI/GET_APP_STATE';

class Hamburger extends Component {
  render() {
    return (
      <Query query={GET_APP_STATE}>
        {({ data: { appState: { sidenav } } }) => {

          let newToggleValue = ''

          if (sidenav === 'toggled') {
            newToggleValue = 'full'
          } else {
            newToggleValue = 'toggled'
          }

          return (
            <Mutation mutation={UPDATE_APP_STATE}>
              {(updateAppState, attrs = {}) => {

                return (
                  <a className="nav-link" onClick={
                    () => {
                      updateAppState({
                        variables: {
                          index: 'sidenav',
                          value: newToggleValue
                        }
                      })
                    }
                  }>
                  <i className="fa fa-bars"></i>
                  </a>
                )
              }}
            </Mutation>
          )
        }}
      </Query>
    );
  }
}

export default Hamburger;